# GitHub Configuration

This directory contains repository-level configuration and assets that tailor GitHub and GitHub Copilot to this project. It centralizes:
- Copilot repository instructions and guidance
- Custom Agents used in Copilot Chat (new format)
- Reusable Skills for domain-specific guidance
- Reusable Prompt files (slash commands)
- Instruction files for languages/domains
- GitHub Actions workflows (CI/CD) scaffolding

Audience: maintainers and contributors configuring Copilot or repository automation.

Scope: This README documents the `.github/` directory only. For project-wide overview and concepts, see the root [README.md](../README.md) (especially “Copying Copilot Customisations”).

### Copying Copilot Customisations

The custom agents, instructions, and prompts are designed to be portable across repositories with the same directory layout. For general guidance and caveats, see the root [README: “Copying Copilot Customisations”](../README.md#7-copying-copilot-customisations).

Most files contain **HTML comments** inlined with additional context (functionality, intent, and prompting techniques). View the raw source to see these notes.

## GitHub Copilot Customisation

The [copilot-instructions.md](copilot-instructions.md) file contains the main instructions for GitHub Copilot.

It defines mandatory development workflows (branching, commit and PR conventions), coding standards, and review/quality gates using clear, machine-parseable XML-style tags (for example, <CRITICAL_REQUIREMENT/>). Copilot and other AI assistants use these rules to stay consistent with your team’s process.

Key SSOT anchors:
- Quality & Coverage Policy: [copilot-instructions.md#quality-policy](./copilot-instructions.md#quality-policy)
- Branching & Workflow, Naming, Commit Conventions: see relevant sections in the same file

See also:
- Project overview in [README.md](../README.md)

### Custom Agents

- [Custom Agents](./agents/README.md)

Agents provide specialized behaviors in Copilot Chat (e.g., Developer, Code Review, Testing). Each agent documents its persona, process, constraints, and available tools. Files live under `./agents/` and use the `.agent.md` extension.

Available agents:
- **Developer** - Test-driven development with quality gates and design-first methodology
- **Code Reviewer** - Systematic code review with best practices enforcement
- **Documentation** - Documentation authoring and maintenance aligned to docs SSOT
- **Tester** - BDD-focused testing approach with comprehensive test coverage

> **Note:** VS Code now ships with a built-in Planner/Plan agent. This repository provides a custom Documentation agent because built-in Documentation is no longer available.

<a name="copilot-migration-status"></a>
### Copilot Migration Status

This repository is agent-first for current GitHub Copilot and VS Code releases.

- `agents/Developer.agent.md` is the current development workflow artifact
- `agents/CodeReviewer.agent.md` is the current review workflow artifact
- `agents/Tester.agent.md` is the current testing workflow artifact
- `agents/Documentation.agent.md` is the current documentation workflow artifact
- Planner behavior relies on the built-in VS Code Planner/Plan agent

The repository no longer keeps retired legacy chat-format files. If you are migrating an older setup, move those files to `.github/agents/`, rename them to `.agent.md`, and update any repo documentation or prompt references to use the current agent format.

### Custom Instructions

- [Custom Instructions](./instructions/README.md)

Instruction files are small, focused rule sets with optional frontmatter (e.g., `applyTo`) that scope guidance to specific files or languages. They help Copilot generate code and docs that match project standards. Notable files include (SSOTs):
- `backend.instructions.md` (Java/Python/C# backends)
- `frontend.instructions.md` (TypeScript/React conventions)
- `docs.instructions.md` (applies to all `**/*.md`)
- `bdd-tests.instructions.md` (applies to `**.feature`)

### Custom Skills

- [Custom Skills](./skills/README.md)

Skills are reusable, domain-focused guidance documents that help assistants choose the right workflow and produce consistent outputs for specific tasks.

Current example:
- `docs-ssot-helper` - demonstrates how to update documentation while preserving SSOT alignment, canonical locations, and cross-links.

### Custom Prompts

- [Custom Prompts](./prompts/README.md)

Reusable prompts act like slash commands in Copilot Chat (e.g., `/write-adr`, `/write-prd`, `/write-docs`, `/copilot-setup-check`). They standardize inputs and output structure for common tasks and can create or edit files when approved.

## GitHub Actions Customisation

The `./workflows/` folder holds GitHub Actions such as `policy-lint.yml` and `docs-lint.yml`. Add workflow files as needed following standard GitHub Actions practices. Prefer referencing SSOT anchors (e.g., Quality Policy) in validation jobs.

References:
- GitHub Actions docs: https://docs.github.com/actions
- Copilot repository instructions: [copilot-instructions.md](./copilot-instructions.md)


<!-- © Capgemini 2025 -->
