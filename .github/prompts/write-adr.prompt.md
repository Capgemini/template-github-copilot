---
mode: 'agent'
description: 'Create an Architectural Decision Record (ADR) document for AI-optimized decision documentation.'
tools: ['changes', 'codebase', 'editFiles', 'extensions', 'fetch', 'githubRepo', 'openSimpleBrowser', 'problems', 'runTasks', 'search', 'searchResults', 'terminalLastCommand', 'terminalSelection', 'testFailure', 'usages', 'vscodeAPI']
---

# Create Architectural Decision Record

Create an ADR document for `${input:DecisionTitle}` using structured formatting optimised for AI consumption and human readability. If you do not have enough information to create the ADR, ask the user for more context.

If you are not using a branch, create a new branch named `adr/[brief-title-slug]` where `[brief-title-slug]` is a short, hyphenated version of the decision title.

## ADR approval process

## Inputs

- **Context**: `${input:Context}`
- **Decision**: `${input:Decision}`
- **Alternatives**: `${input:Alternatives}`
- **Stakeholders**: `${input:Stakeholders}`

## Input Validation

If any of the required inputs are not provided or cannot be determined from the conversation history, ask the user to provide information for each missing item before proceeding with ADR generation.

## Requirements

- Use precise, unambiguous language
- Follow standardized ADR format with front matter
- Include both positive and negative consequences
- Document alternatives with rejection rationale
- Structure for machine parsing and human reference
- Use coded bullet points (3-4 letter codes + 3-digit numbers) for multi-item sections

The ADR must be saved in the `/docs/ADRs/` directory using the naming convention: `adr-NNNN-[brief-title-slug].md`, where NNNN is a monotonically increasing 4-digit number (e.g., `adr-0001-database-selection.md`).

## Required Documentation Structure

The documentation file must follow the template specified in `docs/ADRs/adr-template.md`, ensuring that all sections are filled out appropriately. The front matter for the Markdown must be structured correctly as per the template.
