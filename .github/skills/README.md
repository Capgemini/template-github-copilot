# Custom Skills

This directory contains reusable skill documents that provide focused, domain-specific guidance for AI assistants.

A skill should help the assistant:
- Recognize when a specific workflow applies
- Follow a repeatable process
- Produce consistent, reviewable outputs

## Skills in this repository

- [Documentation SSOT Helper (Example)](docs-ssot-helper/SKILL.md)

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
```

<!-- © Capgemini 2025 -->