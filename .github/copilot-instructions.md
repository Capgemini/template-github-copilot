# GitHub Copilot Instructions

**Audience:** GitHub Copilot only. This file provides Copilot-specific instructions and configuration for this repository.

**Repository Context:**
This repository is a GitHub Template created by Capgemini's AI & Software Engineering Experts. It contains practical, portable, and useful examples of Copilot configuration for real-world projects.

**Copilot Guidance:**
- Follow the configuration and best practices outlined here when assisting in this repository.
- Reference `README.md` for general orientation and project goals.
- Reference `AGENTS.md` for broader AI agent instructions and context.


## Project Methodologies

TODO branching strategy (prefer lightweight, trunk-based-development, small but numerous commits), commit message conventions, PR review process, CI/CD practices, etc.
TODO only work in short-lived branches, create PRs for all changes, get at least one approval before merging, etc.

TODO reinforcement of branch and PR naming conventions, e.g., feature/brief-description, fix/brief-description, docs/brief-description, etc.

TODO reinforcement of commit message conventions, e.g., use imperative mood, reference issues, etc.

TODO reinforcement of branch and commit process, e.g., rebase before merging, squash commits, etc.

TODO reinforcement of branch and commit process, using embedded XML text structures to reinforce instructions to the AI assistant.

TODO reinforcement of branch and commit process, using Mermaid process diagram to reinforce instructions to the AI assistant.


## Coding Standards

TODO general coding standards, linting rules, formatting guidelines, etc.
TODO make a reference to project-specific coding standards, linting rules, formatting guidelines, etc. They will be found in docs/engineering/standards.md or similar.

---

## Repository Overview (This section may be removed if this is used as a template)

**.github Directory Structure & Purpose:**

The `.github` directory contains several subdirectories and files that organize configuration, prompts, and instructions for Copilot and other AI agents:

- `chatmodes/`: Contains chat mode configuration files (e.g., `custom-mode.chatmode.md`) that define custom conversational behaviors for Copilot and other agents.

- `instructions/`: Holds instruction files for backend, frontend, and documentation. These guide Copilot and other agents on best practices and project-specific rules. You must apply these instructions to relevant files in the repository.
  - `backend.instructions.md`
  - `docs.instructions.md`
  - `frontend.instructions.md`
  - `bdd-tests.instructions.md`

- `prompts/`: Includes prompt templates (e.g., `write-adr.prompt.md`, `write-docs.prompt.md`, `write-prd.prompt.md`) used to generate architectural decision records, documentation, and product requirements. These help standardize and accelerate content creation.

- `workflows/`: Intended for GitHub Actions workflow files, which automate CI/CD and other repository tasks. (Currently empty, but will be expanded.)

Refer to the main README.md for a full overview of repository goals and usage.