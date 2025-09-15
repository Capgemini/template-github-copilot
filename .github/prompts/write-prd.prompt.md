---
mode: 'agent'
description: 'Create a Product Requirements Document (PRD) using the repository PRD template and structured guidance for both humans and automation.'
tools: ['codebase', 'usages', 'changes', 'editFiles', 'fetch', 'search', 'searchResults', 'runCommands', 'todos']
---

<!-- Top-level purpose: Define the PRD creation task and guardrails. Techniques: clear title, imperative voice, and branch/filename conventions to guide edits. -->
# Create a Product Requirements Document (PRD)

Create a PRD for `${input:FeatureTitle}` using the company PRD template and the guidance below. If you do not have enough information to author a useful PRD, ask the user for the missing inputs (see "Inputs" section).

If you are working in a git workflow, create a branch named `prd/[brief-title-slug]` when making file changes.

<!-- Inputs section: Declare required parameters to collect and map into the PRD template. Techniques: bold labels and ${input:...} placeholders for parameterization. -->
## Inputs

- **FeatureTitle**: `${input:FeatureTitle}`
- **Summary / Problem Statement**: `${input:Problem}`
- **Goals & Objectives**: `${input:Goals}`
- **Stakeholders**: `${input:Stakeholders}`
- **Specifications & Use Cases**: `${input:Specifications}`
- **Functional Requirements (with priority Must/Should/Could)**: `${input:FunctionalRequirements}`
- **Non-Functional Requirements**: `${input:NonFunctionalRequirements}`
- **Acceptance Criteria / Success Metrics**: `${input:AcceptanceCriteria}`
- **Timeline & Milestones**: `${input:Timeline}`
- **Constraints & Assumptions**: `${input:Constraints}`
- **Out of Scope**: `${input:OutOfScope}`
- **Risks & Mitigations**: `${input:Risks}`
- **Open Questions**: `${input:OpenQuestions}`
- **References / Related Docs**: `${input:References}`

<!-- Validation: Ensure critical inputs are present and measurable. Techniques: checklist and targeted questioning rules. -->
## Input validation

If any required input (FeatureTitle, Problem, Goals, Stakeholders, Specifications, Functional Requirements, Acceptance Criteria) is missing or ambiguous, prompt the user with a concise, specific question to obtain it before generating the PRD. Validate that:

- Goals are measurable (or ask for measurable targets)
- Functional requirements are prioritised (Must/Should/Could)
- Acceptance criteria map back to measurable success metrics

<!-- Output requirements: Style, structure, and content expectations to produce review-ready docs. -->
## Requirements for the generated PRD

- Use clear, unambiguous language suitable for product, design, and engineering readers
- Follow the `docs/PRDs/prd-template.md` structure and include the same sections
- Provide measurable objectives and success metrics where possible
- Mark requirements with priority tags (Must/Should/Could)
- Include a short rollout/implementation notes section and suggested acceptance tests
- Call out dependencies, constraints, and open questions explicitly
- Keep the document scannable: short paragraphs, bullet lists, and tables where helpful

<!-- Persistence: Where to save and how to name files for consistency and discoverability. -->
## File naming & location

Save the PRD to `/docs/PRDs/` using a filename that is a short slug of the feature title, e.g.: `prd-[brief-title-slug].md`. If there is an existing convention in the repo, follow it; otherwise use the filename pattern above.

<!-- Canonical structure: Must mirror the repo PRD template. -->
## Output structure

The generated PRD must follow the PRD template in `docs/PRDs/prd-template.md` and include these sections (at minimum):

- Revision History
- Overview (Problem Statement, Value Proposition)
- Goals & Objectives
- Stakeholders
- Specifications & Use Cases
- Functional Requirements (with priorities)
- Out of Scope
- Non-Functional Requirements
- Success Metrics
- Constraints & Assumptions
- Timeline & Milestones
- Risks & Mitigations
- Open Questions
- References & Related Documents

Where helpful, add short implementation notes and suggested acceptance tests that engineering and QA can run.

<!-- Behavioral constraints: Interaction and scoping expectations for the assistant. -->
## Behavioural expectations for the agent

- If asked to create a PRD without sufficient inputs, ask only targeted clarifying questions (no more than 3 at a time).
- Produce a first-draft PRD that is ready for product review and iteration; do not assume final approval.
- When appropriate, suggest a minimal MVP scope and optional future enhancements.

<!-- Example flow: A concise runbook for how to operate this prompt effectively. -->
## Example minimal prompt flow

1. Validate inputs; ask for any missing critical details
2. Produce a headline summary and a one-paragraph problem statement
3. Fill out the PRD sections following the template
4. Add a short checklist of next steps (research, design, engineering spikes, stakeholders to consult)

<!-- Notes: Implementation and git workflow guidance. -->
## Notes

- Use the `docs/PRDs/prd-template.md` as the canonical template. Ensure front matter or filename conventions used in this repo are followed.
- If you save a file, prefer creating a branch and committing the file; if you cannot push, notify the user and provide exact git commands they can run locally.

<PROCESS_REQUIREMENTS type="MANDATORY">
- If essential inputs are missing or ambiguous, ask targeted questions (≤3 at a time) before drafting.
- Follow the PRD template strictly; do not omit required sections.
- Keep success metrics measurable; map acceptance criteria to goals.
</PROCESS_REQUIREMENTS>

<CRITICAL_REQUIREMENT type="MANDATORY">
- Save under `docs/PRDs/` using `prd-[brief-title-slug].md` unless an existing convention overrides it.
- Do not publish without confirming with the requester or PRD owner.
</CRITICAL_REQUIREMENT>
