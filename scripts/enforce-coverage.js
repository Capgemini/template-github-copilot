#!/usr/bin/env node
/*
Simple coverage enforcement script.
- Reads a JSON summary from stdin or a file (istanbul/nyc, jest --coverage, etc.)
- Enforces global >= 90%
- Enforces core modules >= 95% (by path includes /src/core or /core/)
- Enforces integrations/adapters >= 85% (by path includes /adapters or /integrations/)
- Enforces 100% for files matched as hot paths or error/security (by filename hints)
Exit non-zero on failure with a readable summary.
*/

const fs = require('fs');

function parseArgs() {
  const args = process.argv.slice(2);
  const params = { file: null };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--file' && args[i + 1]) {
      params.file = args[i + 1];
      i++;
    }
  }
  return params;
}

function loadSummary(file) {
  const input = file ? fs.readFileSync(file, 'utf8') : fs.readFileSync(0, 'utf8');
  return JSON.parse(input);
}

function pct(n) { return Math.round(n * 10000) / 100; }

function classifyFile(path) {
  const p = path.toLowerCase();
  if (p.includes('/core/') || p.includes('/src/core/')) return 'core';
  if (p.includes('/adapters/') || p.includes('/integrations/')) return 'integration';
  return 'other';
}

function isCritical(path) {
  const p = path.toLowerCase();
  return (
    p.includes('hot') ||
    p.includes('critical') ||
    p.includes('auth') ||
    p.includes('security') ||
    p.includes('error') ||
    p.includes('exception')
  );
}

function check(summary) {
  const metrics = summary.total || summary;
  const globalLines = metrics.lines.pct || metrics.lines.covered / metrics.lines.total * 100;
  const globalPass = globalLines >= 90;

  const failures = [];
  if (!globalPass) failures.push(`Global lines coverage ${pct(globalLines)}% < 90%`);

  // Per-file checks if available
  if (summary && typeof summary === 'object') {
    for (const [file, m] of Object.entries(summary)) {
      if (file === 'total' || !m || !m.lines) continue;
      const filePct = m.lines.pct || (m.lines.covered / m.lines.total * 100);
      const cls = classifyFile(file);
      if (isCritical(file) && filePct < 100) {
        failures.push(`Critical path not fully covered: ${file} ${pct(filePct)}% < 100%`);
        continue;
      }
      if (cls === 'core' && filePct < 95) {
        failures.push(`Core module below 95%: ${file} ${pct(filePct)}%`);
      } else if (cls === 'integration' && filePct < 85) {
        failures.push(`Integration below 85%: ${file} ${pct(filePct)}%`);
      }
    }
  }

  return failures;
}

function main() {
  try {
    const { file } = parseArgs();
    const summary = loadSummary(file);
    const failures = check(summary);
    if (failures.length) {
      console.error('Coverage enforcement failed:\n- ' + failures.join('\n- '));
      process.exit(1);
    }
    console.log('Coverage enforcement passed.');
  } catch (e) {
    console.error('Error running coverage enforcement:', e.message);
    process.exit(2);
  }
}

if (require.main === module) {
  main();
}
