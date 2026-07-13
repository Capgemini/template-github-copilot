---
name: docs-ssot-helper
description: "Example skill for documentation updates. Use this when editing README files, ADR/PRD/design docs, or contribution guidance to keep documentation aligned with the repository Single Source of Truth (SSOT): the one canonical place where policies, links, and structure live."
---

# Documentation Single Source of Truth Helper (Example Skill)

Use this skill to produce consistent, policy-aligned documentation updates that stay tied to the repository's Single Source of Truth (SSOT).

## What SSOT means

SSOT stands for Single Source of Truth. It means one canonical file, section, or reference should define a policy or rule so the same guidance is not copied, drifted, or contradicted in multiple places.

This skill helps you find that canonical source, reuse it instead of restating it, and update linked documentation so the repository stays consistent.

## When to use

- User asks to add or update repository documentation
- User asks to introduce new documentation artifacts and link them
- User asks for doc consistency checks against repository standards
- User asks to find or reduce duplicated policy text
- User asks to align docs with the canonical source instead of repeating guidance
- User asks to fix SSOT drift, conflicting guidance, or outdated links

## When not to use

- Pure code implementation tasks without documentation impact
- Runtime debugging tasks with no documentation changes
- One-line typo fixes that do not need process guidance

## Inputs to collect

- Scope of documentation change
- Target audience
- Source of truth references to follow
- Acceptance criteria for completion

If any input is missing, ask targeted questions before drafting.

## Workflow

1. Discover relevant SSOT docs
- DOC-001: Identify repository-wide policy files and section anchors
- DOC-002: Identify folder-local README or template files

2. Plan minimal edits
- DOC-003: Prefer link-based references over duplicated policy text
- DOC-004: Keep changes scoped to files affected by the request

3. Draft updates
- DOC-005: Use clear section headings and concise language
- DOC-006: Add examples only when they improve implementation clarity

4. Validate quality gates
- DOC-007: Ensure links resolve and headings are consistent
- DOC-008: Ensure new docs are in canonical folders
- DOC-009: Ensure index or README references are updated

5. Summarize outcomes
- DOC-010: Report changed files and key decisions
- DOC-011: Call out assumptions and suggested follow-up actions

## Output format

- Summary of what was updated
- File-by-file change list
- Validation notes
- Optional next steps

## Repository references for this skill

- .github/copilot-instructions.md
- .github/instructions/docs.instructions.md
- docs/README.md

<!-- © Capgemini 2025 -->