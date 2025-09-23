# GitHub Configuration

This directory contains repository-level configuration and assets that tailor GitHub and GitHub Copilot to this project. It centralizes:
- Copilot repository instructions and guidance
- Custom Chat Modes used in Copilot Chat
- Reusable Prompt files (slash commands)
- Instruction files for languages/domains
- GitHub Actions workflows (CI/CD) scaffolding

Audience: maintainers and contributors configuring Copilot or repository automation.

Scope: This README documents the `.github/` directory only. For project-wide overview and concepts, see the root [README.md](../README.md) (especially “Copying Copilot Customisations”).

### Copying Copilot Customisations

The custom chat modes, instructions, and prompts are designed to be portable across repositories with the same directory layout. For general guidance and caveats, see the root [README: “Copying Copilot Customisations”](../README.md#7-copying-copilot-customisations).

Most files contain **HTML comments** inlined with additional context (functionality, intent, and prompting techniques). View the raw source to see these notes.

## GitHub Copilot Customisation

The [copilot-instructions.md](copilot-instructions.md) file contains the main instructions for GitHub Copilot.

It defines mandatory development workflows (branching, commit and PR conventions), coding standards, and review/quality gates using clear, machine-parseable XML-style tags (for example, <CRITICAL_REQUIREMENT/>). Copilot and other AI assistants use these rules to stay consistent with your team’s process.

Key SSOT anchors:
- Quality & Coverage Policy: [copilot-instructions.md#quality-policy](./copilot-instructions.md#quality-policy)
- Branching & Workflow, Naming, Commit Conventions: see relevant sections in the same file

See also:
- Project overview in [README.md](../README.md)
- Agent context in [AGENTS.md](../AGENTS.md)

### Custom Chat Modes

- [Custom Chat Modes](./chatmodes/README.md)

Chat Modes provide specialized behaviors in Copilot Chat (e.g., Developer, Code Review, Documentation, Testing, Planner). Each mode documents its persona, process, constraints, and available tools. Files live under `./chatmodes/` and use the `.chatmode.md` extension.

### Custom Instructions

- [Custom Instructions](./instructions/README.md)

Instruction files are small, focused rule sets with optional frontmatter (e.g., `applyTo`) that scope guidance to specific files or languages. They help Copilot generate code and docs that match project standards. Notable files include (SSOTs):
- `backend.instructions.md` (Java/Python/C# backends)
- `frontend.instructions.md` (TypeScript/React conventions)
- `docs.instructions.md` (applies to all `**/*.md`)
- `bdd-tests.instructions.md` (applies to `**.feature`)

### Custom Prompts

- [Custom Prompts](./prompts/README.md)

Reusable prompts act like slash commands in Copilot Chat (e.g., `/write-adr`, `/write-prd`, `/write-docs`, `/copilot-setup-check`). They standardize inputs and output structure for common tasks and can create or edit files when approved.

## GitHub Actions Customisation

The `./workflows/` folder holds GitHub Actions. It’s currently empty and ready for CI/CD jobs (for example: lint Markdown, validate instruction frontmatter, run tests). Add workflow files as needed following standard GitHub Actions practices. Prefer referencing SSOT anchors (e.g., Quality Policy) in validation jobs.

References:
- GitHub Actions docs: https://docs.github.com/actions
- Copilot repository instructions: [copilot-instructions.md](./copilot-instructions.md)

