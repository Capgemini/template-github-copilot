---
description: 'Create an Architectural Decision Record (ADR) document for AI-optimized decision documentation.'
tools: ['search/codebase', 'search/usages', 'read/problems', 'read/terminalSelection', 'read/terminalLastCommand', 'web/fetch', 'edit/editFiles', 'search', 'execute/getTerminalOutput','execute/runInTerminal','read/terminalLastCommand','read/terminalSelection']
---

<!-- Top-level section: Entry point for ADR creation. Delegates all workflow logic to the write-adr skill, which is the single source of truth for inputs, validation, file naming, branching, and commit conventions. -->
# Create Architectural Decision Record

Create an ADR document for `${input:DecisionTitle}`.

Use the **write-adr** skill (`.github/skills/write-adr/SKILL.md`) to execute this task. Follow its workflow exactly, including input collection, branch preparation, file naming, content generation, and commit message conventions.

<!-- © Capgemini 2025 -->
