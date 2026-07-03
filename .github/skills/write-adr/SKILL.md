---
name: write-adr
description: "Create an Architectural Decision Record (ADR) document. Use this when the user asks to document an architectural decision, capture a design choice, or record a technical trade-off. WHEN: 'write an ADR', 'create an ADR', 'document this decision', 'record an architectural decision', 'add an ADR for'."
---

# Write ADR Skill

Use this skill to produce a well-structured, machine-parseable Architectural Decision Record (ADR) and save it in the correct location.

## When to use

- User asks to write, create, or generate an ADR
- User asks to document an architectural or design decision
- User wants to capture alternatives considered and the rationale for a choice
- User asks to record a technical trade-off or constraint

## When not to use

- The user is asking for a PRD or general design doc (use `write-prd` or `write-docs` prompts instead)
- The decision is trivial and does not affect the system architecture
- The user only wants a code change with no documentation artefact

## Inputs to collect

- **DecisionTitle**: Short name for the decision being recorded
- **Context**: Background and forces that led to this decision
- **Decision**: The choice that was made and why
- **Alternatives**: Other options considered and why they were rejected
- **Stakeholders**: Teams or individuals affected by or involved in the decision

If any input is missing or cannot be inferred from the conversation, ask the user for each missing item before proceeding.

## Workflow

1. Collect and validate inputs
   - ADR-001: Confirm all five inputs are present before generating content
   - ADR-002: If inputs are incomplete, ask targeted questions — do not guess

2. Prepare the branch
   - ADR-003: If not already on a feature branch, create `adr/[brief-title-slug]` before saving
   - ADR-004: Use a short, lowercase, hyphenated slug derived from the decision title

3. Determine the file name
   - ADR-005: List existing files in `docs/ADRs/` matching `adr-*.md`
   - ADR-006: If sequential files exist (e.g., `adr-0027-*.md`), use the next 4-digit number (`adr-0028-[slug].md`)
   - ADR-007: If no sequential files exist or numbering cannot be computed, fall back to `adr-YYYYMMDD-[slug].md`
   - ADR-008: Reject any path outside `docs/ADRs/`

4. Generate the ADR content
   - ADR-009: Follow the template in `docs/ADRs/adr-template.md` — fill every section
   - ADR-010: Use precise, unambiguous language throughout
   - ADR-011: Include both positive and negative consequences
   - ADR-012: Document each alternative with an explicit rejection rationale
   - ADR-013: Use coded bullet points (3-4 letter prefix + 3-digit number, e.g., `SEC-001`) for multi-item sections
   - ADR-014: Set front matter `date` to today's date (`YYYY-MM-DD`) and ensure `status` is present

5. Save the file
   - ADR-015: Write the file to `docs/ADRs/` with the computed name
   - ADR-016: Confirm the file exists after saving and report its final path

6. Commit the change
   - ADR-017: Use a Conventional Commits message, e.g. `docs: add ADR NNNN <Decision Title>`

## Output format

- Confirmation of the saved file path
- Summary of the decision captured
- Any assumptions made during generation
- Suggested follow-up actions (e.g., stakeholder review, status update)

## Repository references for this skill

- `docs/ADRs/adr-template.md`
- `docs/ADRs/README.md`
- `.github/copilot-instructions.md`
- `.github/instructions/docs.instructions.md`

<!-- © Capgemini 2025 -->
