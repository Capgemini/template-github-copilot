# Success Metrics (Snippet)

Use this structure to define SMART metrics that tie directly to Goals and Acceptance Criteria. Provide at least 3 metrics.

For each metric, fill these fields:

- Metric: [Name/short description]
- Baseline: [Current value, with date/source]
- Target: [Numeric goal and direction]
- Timeframe: [By when; date or period]
- Datasource: [Where/how it’s measured]
- Owner: [Role/team accountable]
- Guardrails: [Boundaries to prevent regressions]

Example metrics:

1) Metric: Week 1 Activation Rate
   - Baseline: 42% (as of 2025-08-31; Snowflake dashboard ABC)
   - Target: 55%
   - Timeframe: By end of Q4 2025
   - Datasource: Product analytics (Amplitude), event: user_activated
   - Owner: Growth PM
   - Guardrails: NPS does not drop below 45; Support volume +< 10%

2) Metric: Onboarding Time (p50)
   - Baseline: 11m 30s (2025-08; internal telemetry)
   - Target: 7m 00s
   - Timeframe: By 2026-01-31
   - Datasource: Backend logs (Grafana Loki), derived dashboard PRD-ONB-01
   - Owner: Onboarding team
   - Guardrails: Error rate stays ≤ 0.5%; Accessibility score ≥ 95

3) Metric: Uptime (SLA)
   - Baseline: 99.80% (rolling 30d)
   - Target: ≥ 99.90%
   - Timeframe: Continuous; measured monthly
   - Datasource: Uptime monitoring (Pingdom)
   - Owner: SRE
   - Guardrails: Mean Time to Recovery ≤ 15m; No P0 incidents from this change
