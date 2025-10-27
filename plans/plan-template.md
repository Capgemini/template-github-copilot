# Plan Template

This document is a precise, unambiguous template for writing project or feature plans. It is written so an AI (or a human) can fill every section consistently. For each field the expected data type, format, and example are provided. Use the exact headings below and do not remove them. If a field does not apply, write "N/A".

> Conventions:
>
> - Dates: use ISO 8601 (YYYY-MM-DD). Example: `2025-09-11`.
> - People: use full name and email in angle brackets. Example: `Stuart Williams <stuart@example.com>`.
> - Estimates: use a relative complexity scale only (no time). Allowed values: `XS`, `S`, `M`, `L`, `XL`.
> - Links: use full absolute URLs.
> - Limits: where a max length is specified, do not exceed it.

---

## 1. Title (string, max 120 chars)

- Short, descriptive title of the plan.
- Example: `Migrate authentication service to OAuth2`.

## 2. Short description (string, 1-3 sentences, max 500 chars)

- A brief summary of what this plan will deliver and why it matters.
- Example: `Replace legacy auth with an OAuth2-based service to improve security and enable SSO.`

## 3. Current status (object)

- owner (string): Person accountable. Example: `Stuart Williams <stuart@example.com>`.
- state (enum): one of `proposed`, `in-progress`, `blocked`, `complete`, `on-hold`.
- last_updated (date): ISO 8601 date when this section was last updated.
- blockers (array of strings): short descriptions of current blockers, or `[]` if none.

Example:

```yaml
owner: Stuart Williams <stuart@example.com>
state: in-progress
last_updated: 2025-09-11
blockers: ["Security review pending", "Key vault access"]
```

## 4. Objectives (ordered list, 1-10 items)

- Each objective is a short sentence describing an outcome (not an activity).
- Must be measurable where possible.
- Example:
  1. `Migrate 100% of active user logins to OAuth2 by 2026-01-31`.

## 5. Success criteria (list; each item must be measurable and include acceptance criteria)

- For each criterion include:
  - name (string)
  - metric (string): what will be measured
  - target (string/number): numeric or boolean threshold
  - verification (string): how to test or validate
- Example:
  - name: `Login reliability`
    metric: `login error rate`
    target: `< 0.1%`
    verification: `Run load test and check Sentry/monitoring for 7 days`

## 6. Scope (object with two arrays: in, out)

- in: list the items explicitly included.
- out: list the items explicitly excluded.
- Each item should be 1 sentence, no ambiguous language like "may include".

Example:

```yaml
in:
- Replace API endpoints `/auth/*`
- Migrate user database tokens to new format
out:
- Change password reset UX
- Migrate analytics pipeline
```

## 7. Stakeholders & Roles (table or list)

- For each stakeholder provide:
  - name (string)
  - role (string): e.g., `Product Owner`, `Engineering Lead`, `Security Reviewer`
  - responsibility (one sentence)
  - contact (email)
- Example:
  - `Stuart Williams — Engineering Lead — responsible for delivery — stuart@example.com`

## 8. High-level timeline & milestones (ordered list)

- For each milestone provide:
  - id (short string)
  - title (string)
  - date or date range (ISO 8601 or range `YYYY-MM-DD to YYYY-MM-DD`)
  - owner (person)
- Keep milestones limited to essential checkpoints (max 15).

Example:

1. `M1 — Design complete — 2025-10-01 — Stuart Williams`
2. `M2 — Staging rollout — 2025-11-15 to 2025-11-22 — Deployment Team`

## 9. Task list (hierarchical, actionable tasks with complexity estimates)

- Provide a bullet list of tasks. Each task should include:
  - id (e.g., `T-001`)
  - title (one sentence)
  - owner (person)
  - complexity (one of `XS`, `S`, `M`, `L`, `XL`)
  - dependencies (array of task ids)
  - done (boolean)
- Example:

- T-001 | Create OAuth2 service | Stuart Williams | complexity: L | deps: [] | done: false
- T-002 | Update login UI | Frontend Dev <fe@example.com> | complexity: M | deps: [T-001] | done: false

## 10. Risks and mitigations (table or list)

- For each risk provide:
  - id
  - description
  - probability (low/medium/high)
  - impact (low/medium/high)
  - mitigation plan (1-2 sentences)
  - owner
- Example:
  - R-001: `Token incompatibility` | probability: medium | impact: high | mitigation: `Create adapter layer and run compatibility tests` | owner: `Stuart Williams`

## 11. Assumptions (list)

- Explicitly state any assumptions the plan relies on (environment, team availability, budgets).
- Use bullet points; be specific and measurable where possible.

## 12. Implementation approach / Technical narrative (detailed, up to 1000-2000 words)

- Explain architecture decisions, data migration approach, roll-back strategy, testing strategy, monitoring, and telemetry.
- Include diagrams as links or mermaid blocks.
- Provide code snippets where relevant, labelled with language.

## 13. Testing & validation plan

- Unit tests: scope and expected coverage.
- Integration tests: which systems and how to validate.
- End-to-end tests: scenarios and acceptance.
- Performance and load testing plans (targets and tools).

## 14. Deployment plan & roll-back strategy

- Environments: list environments and deployment order.
- Deployment steps: numbered list, including automated checks.
- Roll-back criteria and rollback steps.

## 15. Monitoring & observability

- Metrics to collect (name, unit, target).
- Alerts and thresholds.
- Dashboards and owners.

## 16. Compliance, security & privacy considerations

- Data classification and handling rules.
- Relevant compliance controls to check (e.g., GDPR, SOC2).
- Security review status and checklist (list of items to sign off).

## 17. Communication plan

- Who to notify and when.
- Channels (email, Slack, pagerduty) and message templates for major events (start, staging, production rollout, rollback).

## 18. Related documents & links

- Link to ADRs, design docs, PRDs, runbooks, tickets. Use absolute URLs.

## 19. Appendix (examples, data samples, migration mappings)

- Provide any large tables, mappings, or example payloads. Keep these concise and clearly labelled.

---

Filling guidance for AIs:

1. Always validate each date and email formats. Reject and request correction if invalid.
2. When a numeric estimate is given, normalize durations to days in a separate field `estimate_days` (float).
3. For any free-text narrative longer than 50 words, include a 2-3 sentence TL;DR summary at the top.
4. Enforce max lengths where specified and truncate with an explicit note if exceeded.
5. If any required field is `N/A`, add an explanatory note why it doesn't apply.

Minimal required fields before publish: `Title`, `Short description`, `Owner`, `State`, `Objectives (>=1)`, `Success criteria (>=1)`, `Task list (>=1 task with owner and complexity)`, `Milestones (>=1)`.

Checklist before marking plan as ready for review:

- [ ] All minimal required fields are filled.
- [ ] Dates validated (ISO 8601).
- [ ] Complexity assigned to each task (XS/S/M/L/XL).
- [ ] At least one test/validation approach is defined.
- [ ] Security & compliance items are noted.

If you want, I can also generate a filled example plan from this template for a sample project. Specify the project details and I'll produce it.

<!-- © Capgemini 2025 -->
