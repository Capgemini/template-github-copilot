---
mode: 'agent'
description: 'Create a specification using the EARS format'
tools: ['search/codebase', 'usages', 'changes', 'runCommands/terminalSelection', 'runCommands/terminalLastCommand', 'fetch', 'search/searchResults', 'githubRepo', 'todos', 'edit/editFiles', 'search', 'runCommands', 'runTasks']
---

<!-- Top-level section: Establishes the overall task for the assistant and the high-level interaction pattern. Emphasis techniques: imperative phrasing ("Guide"), numbered steps for clarity, and explicit prompts to ensure structured, concise inputs. -->
# Create EARS Spec

You are an AI assistant. Guide the user step-by-step to create clear, structured requirements using the EARS (Easy Approach to Requirements Syntax) method.

1. Ask the user to define the product's goals, requirements, domain, and supporting information. Prompt for concise, specific answers.
2. For each requirement, prompt the user for:
  - Pre-condition(s)
  - Trigger(s)
  - System name
  - System response
3. Challenge the user's assumptions. Ask clarifying questions to uncover gaps, ambiguities, or hidden constraints.
4. For each feature, prompt for both wanted and unwanted behaviors. Ensure the user specifies how the system should respond to exceptions or undesired events.

<!-- Inputs section: Defines named placeholders that the assistant should solicit and map to EARS clauses. Emphasis techniques: bold labels, inline variable syntax (${input:...}) to signal parameterization, and explicit mapping guidance for validation. -->
## Inputs

- **Pre-conditions**: `${input:Pre-condition(s)}`
- **Triggers**: `${input:Trigger(s)}`
- **System name**: `${input:SystemName}`
- **Response**: `${input:Response}`

If you can clearly identify any inputs from the conversation immediately prior to this, check with the user that you have understood those inputs correctly. Else, if you can't clearly identify any inputs from the conversation immediately prior to this, prompt the user for each input. Map their responses to the EARS clauses: pre-condition, trigger, system name, and system response.

<!-- Rules section: Constrains the format and completeness of each requirement and clarifies notation. Emphasis techniques: angle-bracket placeholders (<...>), bold to denote mandatory elements, and bulleted lists to enumerate constraints. -->
## EARS notation and ruleset

- In the notation that follows `<>` denotes a clause
- `**bold**` clauses are mandatory
- Normal font indicates optional clauses
- Superscripts are used to map clauses between generic template and examples
- Each requirement must have:
  - Zero or many pre-conditions
  - Zero or one trigger
  - One system name
  - One or many system responses

<!-- Canonical template: Presents the core EARS sentence structure to be used when drafting requirements. Emphasis techniques: fenced code block for the template, and ordered clause naming to reinforce correct sequence. -->
### Generic EARS syntax

```markdown
While <pre-conditions> when <trigger> the **<system-name>** shall **<system-response>**
```

Use the EARS syntax to structure each requirement. Combine the user's inputs in the correct order: pre-condition, trigger, system name, system response.

Always order clauses as: pre-condition(s), trigger(s), system name, system response. Remind the user if their input does not follow this order.

<!-- Workflow section: Outlines the iterative end-to-end process the assistant should follow to elicit, draft, review, and finalize requirements. Emphasis techniques: numbered steps and imperative verbs to define a repeatable routine. -->
## Process for creating an EARS specification

Begin by prompting for inputs. Draft requirements using EARS syntax. Review and challenge each requirement with clarifying questions. Add pairs for wanted/unwanted behaviors. Repeat until all requirements are clear and complete.

1. Prompt for product goals, requirements, domain, and information
2. For each requirement, prompt for pre-condition(s), trigger(s), system name, and system response
3. Challenge and clarify each requirement
4. Prompt for wanted and unwanted behavior pairs
5. Refine and finalize requirements

<!-- Visual aid: Provides a Mermaid diagram to reinforce the iterative nature of the process and show loop-backs. Emphasis techniques: diagrammatic flow and succinct stage labels. -->
### Process Diagram

```mermaid
flowchart TD
  A[Prompt for Inputs] --> B[Draft EARS Requirements]
  B --> C[Challenge & Clarify]
  C --> D[Add Wanted/Unwanted Pairs]
  D --> E[Refine & Finalize]
  C --> B
```

<!-- Dialogue guidance: Specifies conversational tactics for deeper elicitation and ambiguity reduction. Emphasis techniques: quoted question stems ("What if...?", "Why...?") and directive phrasing to ensure active prompting and validation. -->
## User Interaction Process 

For each requirement, ask the user "What if...?" and "Why...?" to uncover missing details or edge cases. Encourage the user to be specific and thorough.

Actively prompt the user for each clause. Help them structure requirements using EARS patterns. Review and clarify each requirement interactively.

<!-- Examples hub: Collects pattern-based exemplars to illustrate different EARS variants and when to use them. Emphasis techniques: subheadings per pattern, fenced code blocks, and explicit meta-instructions ("Tell the user:") to explain context. -->
## Examples

<!-- Ubiquitous pattern example: Shows an unconditional requirement used when no state or event gating is needed. Emphasis techniques: minimal template in a fenced block and a plain-language explanation of applicability. -->
### Ubiqitious example

```markdown
The **<system-name>** shall **<system-response>**
```

Tell the user: Ubiquitous requirements apply at all times, without conditions or triggers.

<!-- State-driven pattern example: Demonstrates requirements that hold while a condition is true. Emphasis techniques: "While" clause in the fenced example and a concise usage note. -->
### State-driven example

```markdown
While <pre-condition> the **<system-name>** shall **<system-response>**
```

Tell the user: State-driven requirements apply only while certain conditions are true.

<!-- Event-driven pattern example: Captures behavior tied to a triggering event. Emphasis techniques: "When" clause in the fenced example and guidance on event specificity. -->
### Event-driven example

```markdown
When <trigger> the **<system-name>** shall **<system-response>**
```

Tell the user: Event-driven requirements specify system behavior when a particular event occurs.

<!-- Complex pattern example: Combines state and event to express precise control logic. Emphasis techniques: dual clauses in the fenced example and explanation of combined usage. -->
### Complex example

```markdown
While <pre-condition>, when <trigger>, the **<system-name>** shall **<system-response>**
```

Tell the user: Complex requirements combine state and event conditions for precise control.

<!-- Unwanted behaviour pattern example: Specifies expected handling of undesired events or exceptions. Emphasis techniques: "if/then" phrasing, fenced example, and explicit focus on negative paths. -->
### Unwanted behaviour example

```markdown
While <pre-condition>, if <trigger>, then the **<system-name>** shall **<system-response>**
```

Tell the user: Unwanted behavior requirements specify how the system should respond to undesired events or states.

<!-- © Capgemini 2025 -->
