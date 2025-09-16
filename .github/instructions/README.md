# Custom Copilot Instructions

This directory contains repository-level instruction documents that guide AI assistants (including GitHub Copilot) on how to behave when working in this repository.

These files are written primarily for AI consumption but should also be clear to human maintainers. They are small, focused, machine-friendly documents that provide rules, conventions and contextual information the assistant needs to make good decisions.

## Custom instructions in this repository

- [Backend](backend.instructions.md)
- [BDD Tests](bdd-tests.instructions.md)
- [Docs](docs.instructions.md)
- [Frontend](frontend.instructions.md)

## Purpose

- Give AI assistants repository-specific policies, coding standards, workflow rules, and behavioral constraints.
- Expose machine-parseable metadata (frontmatter) so tools and editors can scope instruction applicability (for example: `applyTo: "**/*.py"`).
- Improve repeatability and portability of AI behaviour across developers and CI environments.

## File format and frontmatter

Each instruction file should be Markdown with an optional YAML frontmatter block at the top. The frontmatter is used to indicate which files the instructions apply to and any other metadata your toolchain needs. Example frontmatter:

---
applyTo: "**/*.js"
priority: "high"
---

After the frontmatter, use clear Markdown sections. Keep content concise and use lists or numbered steps for rules.

Recommended top-level sections inside the file:
- **Scope / applyTo** (in frontmatter): glob or file-type the rules apply to.
- **Purpose**: one-paragraph summary of intent.
- **Rules / Guidelines**: short, actionable bullet points (use MUST / MUST NOT / SHOULD where appropriate).
- **Examples**: small concrete examples and counter-examples.
- **References**: links to related documents and official guidance.

## Content guidelines

- Use imperative, unambiguous wording for enforcement points (MUST / MUST NOT) and explain rationale briefly.
- Prefer short rules (1–2 lines) and follow with concrete examples when helpful.
- Avoid embedding secrets, credentials, or environment-specific absolute paths.
- Where multiple modes of behaviour are possible, document how to choose (e.g., default vs. override rules).
- Use XML semantic tags (if your repository uses them) only when there is an automation that depends on them; otherwise prefer plain-language bullets.

## Structure and style

- Header: Begin with a short title and single-sentence purpose.
- Use frontmatter for scoping and machine-consumption.
- Use fenced code blocks for examples and shell commands.
- Keep the tone directive but short; AI consumers favour concise instructions.

## Examples

Minimal instruction file targeting docs:

---
applyTo: "docs/**"
---

# Docs Instructions

- Purpose: Provide expectations for documentation files under `docs/`.
- Rules:
	- MUST start with an H1 and then H2 level headings below indicating structure.
	- SHOULD include an index link in each `README.md`.

Example of a rule with counter-example:

```
Good: # Architecture Overview
Bad:  # Architecture
```

## Validation and automation

- Consider adding a small JSON Schema or lint rule to validate required frontmatter keys and field types.
- Add a lightweight CI job that runs `yamllint`/markdown-lint and checks `applyTo` glob validity on PRs.

## Best practices

- Keep instruction files focused (single responsibility). Prefer multiple small files over one large file.
- Cross-reference `AGENTS.md` and `.github/copilot-instructions.md` for repository-wide policies.
- Use examples liberally — AI systems map rules to examples well.

## Official docs

- Visual Studio Code custom instructions: https://code.visualstudio.com/docs/copilot/customization/custom-instructions

## Where to add new instructions

- Place new, targeted instruction files in this directory. Name files to reflect scope, e.g., `backend.instructions.md`, `docs.instructions.md`, `python.instructions.md`.

---

If you want, I can add a small JSON Schema and a CI workflow that validates instruction frontmatter on PRs.

 