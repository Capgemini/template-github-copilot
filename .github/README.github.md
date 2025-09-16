# GitHub Configuration

This directory contains repository-level configuration and assets that tailor GitHub and GitHub Copilot to this project. It centralizes:
- Copilot repository instructions and guidance
- Custom Chat Modes used in Copilot Chat
- Reusable Prompt files (slash commands)
- Instruction files for languages/domains
- GitHub Actions workflows (CI/CD) scaffolding

Audience: maintainers and contributors configuring Copilot or repository automation.

### Copying Copilot Customisations

The custom chatmodes, instructions and prompts can be copied into the same directory structure of another repository. Each file has comments that explain the approach, structure and content of each file.

## GitHub Copilot Customisation

The [copilot-instructions.md](copilot-instructions.md) file contains the main instructions for Github Copilot.

It defines mandatory development workflows (branching, commit and PR conventions), coding standards, and review/quality gates using clear, machine-parseable XML-style tags (for example, <CRITICAL_REQUIREMENT/>). Copilot and other AI assistants use these rules to stay consistent with your team’s process. See also:
- Project overview in [README.md](../README.md)
- Agent context in [AGENTS.md](../AGENTS.md)

### Custom Chat Modes

- [Custom Chat Modes](./chatmodes/README.md)

Chat Modes provide specialized behaviors in Copilot Chat (e.g., Developer, Code Review, Documentation, Testing, Planner). Each mode documents its persona, process, constraints, and available tools. Pick a mode in Copilot Chat to bias the assistant for the task at hand. Files live under `./chatmodes/` and use the `.chatmode.md` extension.

### Custom Instructions

- [Custom Instructions](./instructions/README.md)

Instruction files are small, focused rule sets with optional frontmatter (e.g., `applyTo`) that scope guidance to specific files or languages. They help Copilot generate code and docs that match project standards. Notable files include:
- `backend.instructions.md` (Java/Python/C# backends)
- `frontend.instructions.md` (TypeScript/React conventions)
- `docs.instructions.md` (applies to all `**/*.md`)
- `bdd-tests.instructions.md` (applies to `**.feature`)

### Custom Prompts

- [Custom Prompts](./prompts/README.md)

Reusable prompts act like slash commands in Copilot Chat (e.g., `/write-adr`, `/write-prd`, `/write-docs`, `/copilot-setup-check`). They standardize inputs and output structure for common tasks and can create or edit files when approved.

## GitHub Actions Customisation

The `./workflows/` folder holds GitHub Actions. It’s currently empty and ready for CI/CD jobs (for example: lint Markdown, validate instruction frontmatter, run tests). Add workflow files as needed following standard GitHub Actions practices.

References:
- GitHub Actions docs: https://docs.github.com/actions
- Copilot repository instructions: [copilot-instructions.md](./copilot-instructions.md)

