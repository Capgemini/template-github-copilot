# Small Feature Plan (Example)

Purpose: Demonstrate a lightweight planning artifact using complexity-only estimates (XS/S/M/L/XL) aligned with `plans/plan-template.md`.

## Summary

- Title: Add error toast on failed save
- Goal: Notify users immediately when saving fails with a clear, non-blocking UI message.
- Outcome: Users see a toast with error code and guidance; telemetry records failures.

## Scope

- In: Frontend toast component integration; error mapping; basic telemetry event.
- Out: Backend retry logic; localization; design system overhaul.

## Assumptions

- Existing toast component available in UI library.
- API returns error codes; no auth changes required.

## Risks

- Error mapping drift; noisy toasts if debouncing is missed.

## Plan

- Tasks (Complexity):
  - Wire toast trigger in save error path (S)
  - Map API error codes to user-friendly messages (S)
  - Add basic telemetry event on toast shown (XS)
  - Add unit tests for error path and message mapping (S)

## Acceptance Criteria

- On save error, a toast appears within 300ms, includes a short message and optional code.
- Hot/error path tests: 100% coverage for mapping and trigger per Quality Policy.
- No toasts on successful save; no duplicate toasts within 2 seconds.

## Dependencies

- UI library toast component
- Telemetry client

## Rollout

- Feature flag guard
- Enable for 10% of users, then 100% after 48h if no elevated error rate

## Estimation

- Overall complexity: S

## Links

- Quality & Coverage Policy: `.github/copilot-instructions.md#quality-policy`
- Template: `plans/plan-template.md`

<!-- © Capgemini 2025 -->
