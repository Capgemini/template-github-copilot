<!-- The following section is frontmatter used by consuming tools. Keep this YAML block at the top. -->
---
applyTo: "**/*.md"
---

# Docs Instructions

**IMPORTANT** The first Markdown header '#' in each Markdown file must be prefixed with 'Capgemini's'.

This document provides guidelines for creating and maintaining project documentation, including Architectural Decision Records (ADRs), Product Requirements Documents (PRDs), and Design Documents.

## General Guidelines

1. **Structure**: Organize documentation into clear sections with headings and subheadings.
2. **Clarity**: Use simple, concise language. Avoid unexplained jargon.
3. **Consistency**: Maintain a consistent style and format throughout the documentation.
4. **Examples**: Include examples and use cases to illustrate concepts.

## Document Review & Approval Process

1. **Initial Draft**: Create the first version following the general guidelines.
2. **Peer Review**: Request reviews from relevant stakeholders and address feedback.
3. **Approval**: Obtain final approval from the document owner before publishing.
4. **Publishing**: Place approved docs in the appropriate folder (e.g., `docs/`, `docs/ADRs/`, `plans/`).
5. **Archiving**: Establish a process for archiving outdated documents while ensuring they remain accessible for reference.

## Document Types and Guidance

### Architectural Decision Records (ADRs)
1. **Purpose**: State the decision and the problem it addresses.
2. **Context**: Provide background and constraints.
3. **Options Considered**: List alternatives and why they were rejected or accepted.
4. **Decision**: Clearly state the chosen approach and rationale.
5. **Consequences**: Note implications, migration steps, and follow-ups.

### Product Requirements Documents (PRDs)
1. **Overview**: Summarize the product, purpose, and target audience.
2. **Goals & Objectives**: Define measurable goals.
3. **Stakeholders**: List stakeholders and roles.
4. **Success Criteria**: Define how success will be measured.

### Design Documents
1. **Architecture**: Provide diagrams and component descriptions.
2. **Data Models**: Describe schemas and relationships.
3. **APIs**: Document endpoints, contracts, and authentication.
4. **User Interface**: Include wireframes, mockups, and accessibility notes.
5. **Security**: Outline security considerations and mitigations.

---
_Notes:_

- Removed a stray instruction that previously suggested inserting an HTML comment into every Markdown file — that appeared accidental and would be harmful if enforced.
---