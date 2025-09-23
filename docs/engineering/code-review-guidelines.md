# Code Review Guidelines

N.B. This file is written for humans and AI. Github Copilot consumes it via [VS Code settings](../../settings.json).

## Principles
- **Be Kind and Constructive**: The goal of code review is to improve the code, not to criticize the author.
- **Ask Questions**: If you don't understand something, ask for clarification.
- **Offer Alternatives**: Instead of just pointing out a problem, suggest alternative solutions.
- **Automate**: Use linters and static analysis tools to automate the detection of common issues.

<a name="code-review-checklist"></a>
## Code Review Checklist

How to use:
- Use this checklist during review to structure feedback and ensure consistent quality.
- Label each finding with severity: Blocking | Recommended | Nit (see taxonomy below).

1) PR hygiene and scope
- Title/description are clear, reference related issues, include rationale and screenshots/logs if relevant.
- Scope is focused; unrelated changes are split out. PR size is reasonable (see SSOT for targets) and commits are logical.
- Follow naming and commit conventions; changelog/docs updated where appropriate.

2) Correctness and behavior
- Implements the intended requirements; edge cases and error paths handled.
- Input validation present; undefined/NaN/null/empty cases covered.
- Backward compatibility considered; migrations and rollouts planned if needed.

3) Tests and coverage
- Tests cover happy paths, error/exception paths, and edge cases.
- Coverage meets the repository Quality & Coverage Policy; hot/error/security paths have 100% coverage.
- Tests are stable, deterministic, and assert behavior (not implementation details).

4) Security
- Avoids injection and XSS; escapes/encodes outputs where needed.
- Handles authn/authz correctly; least privilege enforced.
- Secrets not logged or hardcoded; sensitive data masked; input validation and output encoding applied.
- Dependency risk reviewed; upgrades pinned as needed.

5) Performance and reliability
- Avoids N+1 queries, needless synchronous waits, or O(n^2+) hotspots on typical inputs.
- Memory and resource usage reasonable; large allocations and leaks avoided; cleanup/finalization present.
- Concurrency and async code are correct and safe (locking, races, idempotency, timeouts, retries, backoff).

6) Maintainability and readability
- Clear naming; small, single-responsibility functions/classes; duplication eliminated where practical.
- Clear error handling strategy; no silent failures; actionable messages.
- Consistent style and formatting per project linters; comments explain why, not what.

7) Architecture and boundaries
- Aligns with project architecture and layering; reasonable abstractions and cohesion.
- Public APIs documented; breaking changes called out; interfaces stable.
- Observability is adequate: logs (levels/structure), metrics, and traces where it matters.

8) Documentation and ops
- User and developer docs updated; READMEs/ADRs adjusted if design changed.
- Config and secrets managed correctly (no secrets in code); environment defaults sensible.
- Deployment/rollback considerations noted; feature flags or guards if risky.

9) UX/UI and accessibility (if applicable)
- Semantics, keyboard navigation, contrast, and ARIA where appropriate.
- Responsive behavior and internationalization considerations.

## Severity taxonomy
- Blocking: Must be addressed before merge (correctness, security, policy violations, critical gaps).
- Recommended: Improves quality/maintainability but not required for merge.
- Nit: Minor suggestions or style that linters could handle.

## References
- Branch/PR workflow, naming, commit conventions, PR size and review SLA: see `.github/copilot-instructions.md`.
- Coverage targets and hot/error/security path requirements: see `.github/copilot-instructions.md#quality-policy`.
- Pull request author checklist: see `docs/engineering/pull-request-guidelines.md`.