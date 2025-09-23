#!/usr/bin/env node
/*
Validates that `.github/copilot-instructions.md` contains required SSOT tags/sections.
Checks:
- Presence of XML-like tags: <CRITICAL_REQUIREMENT>, <WORKFLOW_ENFORCEMENT>, <NAMING_REQUIREMENTS>, <COMMIT_REQUIREMENTS>, <PROCESS_REQUIREMENTS>, <CODING_REQUIREMENTS>
- Presence of anchor #quality-policy
- Presence of key headings: Project Methodologies, Coding Standards
Exit non-zero with a readable message if any check fails.
*/

const fs = require('fs');
const path = require('path');

function fail(msg) {
  console.error(msg);
  process.exit(1);
}

function main() {
  const repoRoot = process.cwd();
  const filePath = path.join(repoRoot, '.github', 'copilot-instructions.md');
  if (!fs.existsSync(filePath)) fail(`File not found: ${filePath}`);
  const content = fs.readFileSync(filePath, 'utf8');

  const requiredTags = [
    '<CRITICAL_REQUIREMENT',
    '<WORKFLOW_ENFORCEMENT',
    '<NAMING_REQUIREMENTS',
    '<COMMIT_REQUIREMENTS',
    '<PROCESS_REQUIREMENTS',
    '<CODING_REQUIREMENTS'
  ];
  const missingTags = requiredTags.filter(t => !content.includes(t));
  if (missingTags.length) {
    fail('Missing required tags: ' + missingTags.join(', '));
  }

  if (!content.includes('# Quality & Coverage Policy') && !content.includes('# Quality & Coverage Policy'.toLowerCase())) {
    // Also allow anchor reference if heading case changes
    if (!content.toLowerCase().includes('## quality & coverage policy') && !content.includes('#quality-policy')) {
      fail('Missing Quality & Coverage Policy section or anchor (#quality-policy).');
    }
  }

  const requiredHeadings = [
    '## Project Methodologies',
    '## Coding Standards'
  ];
  const missingHeadings = requiredHeadings.filter(h => !content.includes(h));
  if (missingHeadings.length) {
    fail('Missing required headings: ' + missingHeadings.join(', '));
  }

  console.log('Policy validation passed.');
}

if (require.main === module) {
  main();
}
