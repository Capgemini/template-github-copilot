---
mode: 'agent'
description: 'Create an Architectural Decision Record (ADR) document for AI-optimized decision documentation.'
tools: ['codebase', 'usages', 'problems', 'changes', 'terminalSelection', 'terminalLastCommand', 'fetch', 'searchResults', 'editFiles', 'search', 'runCommands']
---

<!-- Top-level section: Defines the primary task (create an ADR) and sets expectations for structured, AI-optimised output. Techniques: imperative directives, variable interpolation (${input:...}) to parameterise the decision title, and a rule to request more context when inputs are insufficient. -->
# Create Architectural Decision Record

Create an ADR document for `${input:DecisionTitle}` using structured formatting optimised for AI consumption and human readability. If you do not have enough information to create the ADR, ask the user for more context.

If you are not using a branch, create a new branch named `adr/[brief-title-slug]` where `[brief-title-slug]` is a short, hyphenated version of the decision title.

<!-- Governance placeholder: Introduces a section to capture the review/approval workflow for ADRs. Techniques: heading as a stage-gate cue; encourages documenting process ownership and criteria, even if content is populated later. -->
## ADR approval process

<!-- Inputs section: Enumerates required data for ADR generation with explicit parameter placeholders. Techniques: bold labels for emphasis and ${input:...} tokens to drive prompt-time collection and mapping. -->
## Inputs

- **Context**: `${input:Context}`
- **Decision**: `${input:Decision}`
- **Alternatives**: `${input:Alternatives}`
- **Stakeholders**: `${input:Stakeholders}`

<!-- Validation gate: Specifies preconditions before proceeding, ensuring completeness and reducing ambiguity. Techniques: conditional prompting (ask for missing items) and explicit instruction to halt until inputs are provided. -->
## Input Validation

If any of the required inputs are not provided or cannot be determined from the conversation history, ask the user to provide information for each missing item before proceeding with ADR generation.

<!-- Quality rules: Defines content and formatting standards the ADR must satisfy. Techniques: imperative bullet list, explicit inclusion of pros/cons, rejection rationale, machine-parsable structuring, and coded bullet point convention (e.g., ABC-001). -->
## Requirements

- Use precise, unambiguous language
- Follow standardized ADR format with front matter
- Include both positive and negative consequences
- Document alternatives with rejection rationale
- Structure for machine parsing and human reference
- Use coded bullet points (3-4 letter codes + 3-digit numbers) for multi-item sections

The ADR must be saved in the `/docs/ADRs/` directory using the naming convention: `adr-NNNN-[brief-title-slug].md`, where NNNN is a monotonically increasing 4-digit number (e.g., `adr-0001-database-selection.md`).

<!-- Template compliance: Directs the assistant to conform to a canonical ADR template and correct front matter, ensuring consistency and toolability. Techniques: explicit file path reference and mandate to fill all sections. -->
## Required Documentation Structure

The documentation file must follow the template specified in `docs/ADRs/adr-template.md`, ensuring that all sections are filled out appropriately. The front matter for the Markdown must be structured correctly as per the template.
