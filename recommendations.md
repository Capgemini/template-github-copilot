
# Repository Configuration & Content Quality Assessment

Scope: Qualitative review of configuration layers (core config, chat modes, instruction files, prompts, planning assets, engineering docs, templates) with redundancy, conflict, risk, and improvement guidance.

Status Legend:

- Keep: High quality; only minor hygiene.
- Refine: Improve clarity / structure / gaps.
- Consolidate: Merge or unify with another file to remove duplication.
- Deprecate: Remove or archive; low unique value.

---

## 1. Core Configuration Layer

| File                                                               | Assessment                                                                                                | Issues / Risks                                                                                                                                                                                   | Recommendation                                                                                                                                                 |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [.github/copilot-instructions.md](.github/copilot-instructions.md) | Comprehensive anchor (branching, commits, standards, repo overview). Strong reinforcement (XML, Mermaid). | Duplicates coverage & workflow rules already present in chat modes. Repository overview partially overlaps with [README.md](README.md) and [.github/README.github.md](.github/README.github.md). | Refine: Trim “Repository Overview” (point to README). Establish it as single source of truth (SSOT) for: branching, commit, PR workflow, global quality gates. |
| [README.md](README.md)                                             | Broad narrative, feature catalog, diagrams, best practices.                                               | Overlaps with `.github/copilot-instructions.md` (methodology summaries) and `.github/chatmodes/README.md` (instruction philosophy).                                                              | Refine: Move “Best Practices” enforcement rules to a new “CONTRIBUTING.md” or keep here but reference as non-authoritative.                                    |
| [.github/README.github.md](.github/README.github.md)               | GitHub config explainer; bridges discoverability.                                                         | Partial duplication of README sections (chat modes, instructions explanation).                                                                                                                   | Consolidate: Fold unique GitHub-specific notes into README; leave a short index stub or remove.                                                                |

---

## 2. Chat Modes

| File                                                       | Assessment                                                                                                              | Issues / Risks                                                                                                                                                        | Recommendation                                                                                                                                                  |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [.github/chatmodes/README.md](.github/chatmodes/README.md) | Good meta‑documentation; explains structure, reinforcement, examples.                                                   | Some conceptual overlap with instructions/README and prompting philosophy in README.                                                                                  | Keep: Declare it as SSOT for “how to author chat modes.” Add a brief “Do not restate these meta guidelines inside each mode”.                                   |
| Developer.chatmode.md                                      | Rich persona + process + constraints; heavy duplication of branching, test coverage (100% mandate), design-before-code. | Coverage rule conflicts with Tester mode (≥80%) and lacks alignment with central policy.                                                                              | Refine: Replace hard 100% with reference to central quality policy (in copilot-instructions). Remove duplicated branching/PR size rules (link instead).         |
| Documentation.chatmode.md                                  | Mirrors structure and many sections from [docs.instructions.md](.github/instructions/docs.instructions.md).             | Near one-to-one duplication (Inputs, Template, Review Flow, Saving). Divergence risk.                                                                                 | Consolidate: Shrink to: “Persona, When to ask for inputs, Which instruction file governs standards.” Point to docs.instructions.md for workflow/template.       |
| Planner.chatmode.md                                        | Strong iterative discovery model; unique mermaid loops.                                                                 | Task estimation rule (“Never estimate using time”) conflicts with [plans/plan-template.md](plans/plan-template.md) which expects concrete estimates (time/durations). | Refine: Resolve estimation policy (choose complexity vs duration). Align with plan template or adjust template to allow complexity scale.                       |
| Tester.chatmode.md                                         | Clear quality gates, flakiness guidance, balanced coverage stance (baseline ≥80%).                                      | Coverage stance conflicts with Developer.chatmode and copilot-instructions (implied 100% in places).                                                                  | Refine: Reference unified coverage tiers (after they are defined).                                                                                              |
| CodeReviewer.chatmode.md                                   | Good empathy + severity taxonomy; actionable.                                                                           | Minor duplication with [docs/engineering/code-review-guidelines.md](docs/engineering/code-review-guidelines.md). Two sources for severity/expectations.               | Consolidate: Keep severity taxonomy here; move any overlapping narrative (principles) into the engineering doc or vice versa; designate one SSOT for checklist. |

Cross-Cutting Chat Mode Issues:

- Redundant reproduction of templates (Doc mode vs docs.instructions).
- Conflicting numerical targets (coverage).
- Repeated branch/commit/PR size rules (should live centrally).

---

## 3. Instruction Files

| File                                                             | Assessment                                                         | Issues / Risks                                                                                     | Recommendation                                                                                   |
| ---------------------------------------------------------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [.github/instructions/README.md](.github/instructions/README.md) | Explains frontmatter, purpose, style; concise.                     | Overlaps with chatmodes README meta authoring guidance.                                            | Keep: Add “Instruction Authoring vs Chat Mode Authoring” distinction.                            |
| backend.instructions.md                                          | Sparse (context minimal).                                          | Lacks language/framework specifics (e.g., error handling, logging, dependency injection patterns). | Refine: Add minimal canonical sections (Structure, Error policy, Observability, Security).       |
| frontend.instructions.md                                         | Better detail (performance, accessibility, process).               | Coverage of testing defers implicitly to Tester mode but not explicit.                             | Refine: Add explicit “Testing: refer to Tester chat mode & bdd-tests instructions for layering.” |
| docs.instructions.md                                             | Authoritative doc standards; duplicated in Documentation.chatmode. | Redundancy risk + future drift.                                                                    | Keep as SSOT. In doc chat mode: replace duplicated lists with link.                              |
| bdd-tests.instructions.md                                        | Skeleton present but light on concrete examples & anti‑patterns.   | Not enough scenario examples (background/state management tagging) → risk of vague feature files.  | Refine: Add 2 good vs bad scenario pairs; add naming conventions.                                |

---

## 4. Prompt Templates

| File                          | Assessment                                           | Issues / Risks                                                                    | Recommendation                                                                                                  |
| ----------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| write-adr.prompt.md           | Structured; enforces sections.                       | Should reference central ADR template path explicitly if not already auto-linked. | Keep: Add “Validation: confirm file saved under docs/ADRs/ with timestamp/sequence.”                            |
| write-prd.prompt.md           | Comprehensive; risk of becoming monolithic.          | Ensure alignment with any emerging product doc standard (none central yet).       | Refine: Extract success metrics pattern into reusable snippet.                                                  |
| write-docs.prompt.md          | Duplicates doc structure & inputs again.             | Duplication with docs.instructions + Documentation.chatmode.                      | Consolidate: Replace embedded template with “Import from docs.instructions.md unless user overrides.”           |
| write-ears-spec.prompt.md     | (Not fully reviewed here—assumed similar structure). | Check for alignment with general docs instructions; add acceptance checks.        | Refine (light).                                                                                                 |
| copilot-setup-check.prompt.md | Strong evaluation phases & reporting structure.      | Some overlap with recommendations now in this file.                               | Keep: Add link to Recommendations.MD; remove per-file best-practice duplication once central policy doc exists. |

---

## 5. Planning Assets

| File                                             | Assessment                                 | Issues / Risks                                                               | Recommendation                                                                                       |
| ------------------------------------------------ | ------------------------------------------ | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [plans/plan-template.md](plans/plan-template.md) | Highly granular & machine-fillable (good). | Inconsistent with Planner.chatmode estimation guidance (time vs complexity). | Refine: Decide single estimation model (duration or complexity scale).                               |
| [plans/README.md](plans/README.md)               | Lightweight orientation.                   | Could link explicitly to template & Planner chat mode.                       | Keep: Add explicit “Authoring workflow” link cluster.                                                |
| [plans/ROADMAP.md](plans/ROADMAP.md)             | Placeholder; minimal scaffolding.          | Risk of abandonment / outdated signal.                                       | Refine: Add status badges (Planned / In Progress / Done).                                            |
| [plans/TODO.md](plans/TODO.md)                   | Empty; mandated as single task source.     | Zero structure invites misuse.                                               | Refine: Add example format + ownership columns.                                                      |
| Archived Plan (enhance-copilot-instructions...)  | Strong exemplar of full template usage.    | Very large; could intimidate simple plan authors.                            | Keep: Tag as “Full Example (Comprehensive)” and add a “Lightweight example” file for small features. |

---

## 6. Engineering & Documentation Files

| File                                                                                     | Assessment                                | Issues / Risks                                                   | Recommendation                                                                         |
| ---------------------------------------------------------------------------------------- | ----------------------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [docs/engineering/code-review-guidelines.md](docs/engineering/code-review-guidelines.md) | Clear principles & checklist.             | Overlaps with CodeReviewer.chatmode severity & empathy.          | Consolidate: Make engineering doc SSOT for checklist; chat mode references it.         |
| ADR / PRD / Design directories & templates                                               | Provide structure (observed references).  | Ensure each template states versioning / status fields.          | Refine: Add “Status: proposed / accepted / superseded” line to ADR template if absent. |
| settings.json                                                                            | Correctly wires PR + review instructions. | Could also include docs instructions for description generation? | Refine: Evaluate adding docs or plan template for broader context during PR drafting.  |

---

## 7. Conflict & Duplication Matrix (Key Hotspots)

| Topic                  | Sources                                                            | Problem                       | Action                                                                                       |
| ---------------------- | ------------------------------------------------------------------ | ----------------------------- | -------------------------------------------------------------------------------------------- |
| Test Coverage          | Developer.chatmode (100%), Tester.chatmode (≥80%), Implied central | Conflicting mandate           | Create central quality policy (in copilot-instructions); modes reference it.                 |
| Documentation Workflow | docs.instructions, Documentation.chatmode, write-docs.prompt       | Triple duplication            | Make docs.instructions canonical; others link + omit repeated lists.                         |
| Branch / PR Rules      | copilot-instructions, Developer.chatmode, CodeReviewer.chatmode    | Repetition & divergence risk  | Centralize in copilot-instructions; remove verbose copies; keep brief reinforcement bullets. |
| Estimation Method      | Planner.chatmode (complexity), plan-template (time/durations)      | Policy inconsistency          | Decide: adopt “duration” or “complexity scale + optional duration.” Update both.             |
| Review Checklist       | code-review-guidelines + CodeReviewer.chatmode                     | Duplicate responsibility list | Keep detailed checklist in guidelines; chatmode references & only adds interpersonal rules.  |
| Doc Templates          | docs.instructions + write-docs.prompt + Documentation.chatmode     | Template drift risk           | Single template in docs.instructions; prompt & mode dynamically reference.                   |

---

## 8. Proposed Authoritative Source Map (SSOT Designation)

| Domain                            | SSOT File                                        | Referencers (must link, not duplicate)     |
| --------------------------------- | ------------------------------------------------ | ------------------------------------------ |
| Workflow (branch, commits, PR)    | .github/copilot-instructions.md                  | Developer / CodeReviewer chat modes        |
| Documentation Structure & Process | .github/instructions/docs.instructions.md        | Documentation.chatmode + write-docs.prompt |
| Testing Quality & Coverage Policy | (New Section) in .github/copilot-instructions.md | Developer.chatmode / Tester.chatmode       |
| Code Review Checklist             | docs/engineering/code-review-guidelines.md       | CodeReviewer.chatmode                      |
| Plan Authoring Steps              | plans/plan-template.md                           | Planner.chatmode                           |
| Chat Mode Authoring Meta          | .github/chatmodes/README.md                      | (Referenced by contributors only)          |
| Instruction Authoring Meta        | .github/instructions/README.md                   | Any new instruction file                   |

---

## 9. Priority Refactor Actions (Ordered)

1. Create unified “Quality & Coverage Policy” block in [.github/copilot-instructions.md](.github/copilot-instructions.md).
2. Remove duplicated doc template sections from Documentation.chatmode & write-docs.prompt (link to docs.instructions).
3. Align estimation model between Planner.chatmode and plan-template.
4. Extract branching / commit / PR numeric limits from Developer.chatmode (retain short reference lines only).
5. Consolidate code review checklist into engineering guideline; trim duplication in CodeReviewer.chatmode.
6. Add structure & sample rows to [plans/TODO.md](plans/TODO.md).
7. Expand backend.instructions with concrete error handling & observability patterns.
8. Strengthen bdd-tests.instructions with scenario examples and anti-patterns.
9. Introduce lightweight “Small Feature Plan Example” in plans/ for contrast with full archived plan.
10. Add “Source Map” appendix to README linking SSOT designations.

---

## 10. Risk Register (Focused)

| Risk                                   | Impact                             | Likelihood | Mitigation                                       |
| -------------------------------------- | ---------------------------------- | ---------- | ------------------------------------------------ |
| Policy Drift (coverage, docs workflow) | Confusion, inconsistent automation | Medium     | SSOT map + lint CI to detect duplicated sections |
| Overly Prescriptive 100% Coverage      | Slows delivery, superficial tests  | High       | Replace with tiered policy                       |
| Estimation Inconsistency               | Planning misalignment              | Medium     | Single estimation policy decision                |
| Template Divergence                    | Inconsistent ADR/PRD outputs       | Low        | Centralize template + checksum CI                |
| Contributor Onboarding Overhead        | Slower adoption                    | Medium     | Add “Start Here” section referencing SSOT map    |

---

## 11. Suggested Structural Changes (Minimal Diffs Strategy)

| Action                                                              | Change Type            |
| ------------------------------------------------------------------- | ---------------------- |
| Add /quality-policy anchor in copilot-instructions                  | Add section            |
| Replace long duplicated lists in Documentation.chatmode             | Content reduction      |
| Add “Coverage & Testing” reference note in Developer / Tester modes | Clarification          |
| Add examples to bdd-tests.instructions                              | Enrichment             |
| Add “Estimation Policy” subsection to plan-template + Planner mode  | Harmonization          |
| Introduce CONTRIBUTING.md (optional)                                | Optional consolidation |
| Expand backend.instructions minimal patterns                        | Enrichment             |
| Enrich TODO.md with sample format                                   | Activation             |

---

## 12. Example Unified Coverage Policy (Draft Text)

Principles:

- Tiered Targets: Core domain ≥90%, Integrations ≥80%, Generated scaffolds opportunistic, Spikes exempt (must be tagged).
- Quality > Percentage: Meaningful assertions, critical paths, error handling, security-relevant logic emphasized.
- Enforcement: CI fails if global threshold (<85%) or any core module below target.
- Exceptions: Require PR annotation “Coverage Exception:” with justification.

(Implement in [.github/copilot-instructions.md](.github/copilot-instructions.md); reference everywhere else.)

---

## 13. File-Level Status Summary

| File                                            | Status      |
| ----------------------------------------------- | ----------- |
| .github/copilot-instructions.md                 | Refine      |
| README.md                                       | Refine      |
| .github/README.github.md                        | Consolidate |
| Developer.chatmode.md                           | Refine      |
| Documentation.chatmode.md                       | Consolidate |
| Planner.chatmode.md                             | Refine      |
| Tester.chatmode.md                              | Refine      |
| CodeReviewer.chatmode.md                        | Consolidate |
| chatmodes/README.md                             | Keep        |
| instructions/README.md                          | Keep        |
| backend.instructions.md                         | Refine      |
| frontend.instructions.md                        | Refine      |
| docs.instructions.md                            | Keep        |
| bdd-tests.instructions.md                       | Refine      |
| write-docs.prompt.md                            | Consolidate |
| write-adr.prompt.md                             | Keep        |
| write-prd.prompt.md                             | Refine      |
| write-ears-spec.prompt.md                       | Refine      |
| copilot-setup-check.prompt.md                   | Keep        |
| plans/plan-template.md                          | Refine      |
| plans/README.md                                 | Keep        |
| plans/ROADMAP.md                                | Refine      |
| plans/TODO.md                                   | Refine      |
| Archived plan (enhance-copilot-instructions...) | Keep        |
| docs/engineering/code-review-guidelines.md      | Consolidate |

---

## 14. CI / Automation Opportunities

| Tooling                                                      | Purpose                                      |
| ------------------------------------------------------------ | -------------------------------------------- |
| Markdown lint + Link checker                                 | Prevent broken cross-references              |
| Policy linter (XML tag presence)                             | Ensure required SSOT sections exist          |
| Duplicate section detector (simple hash on canonical blocks) | Flag copied templates in chat modes          |
| Coverage tier enforcement script                             | Enforce unified quality policy               |
| ADR/PRD template schema validator                            | Ensure required headings exist               |
| Plan estimation checker                                      | Validate chosen estimation model consistency |

---

## 15. Immediate 5-Step Action Plan

1. Add unified quality & coverage policy to copilot-instructions.
2. Prune duplicated documentation template content (Documentation chat mode + write-docs prompt).
3. Resolve estimation model conflict and update Planner + plan-template accordingly.
4. Standardize review checklist location (engineering doc) and slim CodeReviewer mode.
5. Expand backend + bdd-tests instruction specificity.

---

## 16. Maintenance Model

- Quarterly SSOT audit (script compares referenced section hashes).
- Changelog (add CHANGELOG.md) capturing material instruction/policy shifts.
- New artifact rule: No new chat mode may restate templates—must link to SSOT.
- Add “Policy Version: x.y.z” frontmatter field to copilot-instructions & chat modes for traceability.

---

## 17. Summary (Executive)

Primary issues: Duplication (documentation workflow, coverage rules, branch process), conflicting numeric policies (coverage, estimation), and sparse backend / BDD guidance. Remedy through an authoritative source map, lean refactors that replace repetition with references, and a central quality policy. After changes, maintenance cost and drift risk decrease; onboarding clarity increases.

...existing code...
