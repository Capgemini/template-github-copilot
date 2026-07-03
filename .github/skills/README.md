# Custom Skills

This directory contains reusable skill documents that provide focused, domain-specific guidance for AI assistants.

A skill should help the assistant:
- Recognize when a specific workflow applies
- Follow a repeatable process
- Produce consistent, reviewable outputs

## Skills in this repository

| Skill | Purpose |
| --- | --- |
| [Documentation SSOT Helper](docs-ssot-helper/SKILL.md) | Example skill for documentation updates that keeps docs aligned with repository Single Source of Truth policies, links, and structure. |
| [Write ADR](write-adr/SKILL.md) | Create Architectural Decision Records with the repository's naming, branching, and commit conventions. |

## How to use

- Copilot automatically recognizes and invokes skills based on context and user requests that match their `description` and "when to use" guidance.
- You can also explicitly reference a skill by name or path (e.g., "Use the write-adr skill to...") in your prompt.
- Skills are read and applied during task execution; they guide workflow selection, input collection, and output validation.

## Creating a new skill

- Create a new folder under `skills/` with the skill name (e.g., `my-skill/`).
- Add a `SKILL.md` file with frontmatter containing:
  - `name`: Unique identifier for the skill
  - `description`: Clear guidance on when Copilot should invoke this skill (include "WHEN:" trigger phrases)
- Structure the skill with:
  - **When to use** / **When not to use** — explicit invocation criteria
  - **Inputs to collect** — required data and validation rules
  - **Workflow** — ordered, actionable steps (use coded bullets like `SKL-001` for traceability)
  - **Output format** — expected deliverables and quality gates
  - **Repository references** — links to SSOT docs, templates, and related skills
- Keep the skill portable: avoid repository-specific paths where possible; link to SSOT instead of duplicating content.

## What a skill should include

- Frontmatter with:
  - `name`
  - `description`
- Clear "when to use" and "when not to use" guidance
- A short, ordered workflow
- Practical output expectations
- Examples where useful

## Authoring checklist

- Keep scope narrow and explicit
- Prefer actionable steps over abstract advice
- Link to repository SSOT files instead of duplicating policy text
- Keep the skill portable across projects when possible

## Suggested folder layout

- One folder per skill
- Use the canonical filename `SKILL.md`

Example:

```text
skills/
  docs-ssot-helper/
    SKILL.md
  write-adr/
    SKILL.md
```

## Hints

Within a skill file, you can:

- Use numbered or bulleted lists with coded identifiers (e.g., `SKL-001`, `WRK-002`) for traceability and machine parsing.
- Reference repository SSOT files and canonical templates to keep skills DRY and maintainable.
- Link to related skills to guide multi-step workflows or cross-domain orchestration.
- Use clear imperative language ("MUST", "SHOULD", "Prefer") to enforce or guide behavior.
- Structure the workflow section hierarchically: major phases → numbered or coded steps → criteria for success.

## Official Docs

- [Use Agent Skills in VS Code](https://code.visualstudio.com/docs/agent-customization/agent-skills) — foundational concepts for skill design

<!-- © Capgemini 2025 -->