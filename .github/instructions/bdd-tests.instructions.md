---
applyTo: '**.feature'
---

<!--
SECTION PURPOSE: Repository-wide rules for Gherkin BDD feature files.
PROMPTING: Provide clear patterns, examples, and enforcement for consistent tests.
-->
# BDD Test Instructions

<!--
SECTION PURPOSE: Set global conventions for feature files.
-->
## Conventions

1. One Feature per file; filename kebab-case matching the feature title slug.
2. Use Background sparingly for common Given setup; keep scenarios independent.
3. Prefer concrete, observable behavior over implementation details.
4. Keep steps business-readable; avoid UI selectors or technical jargon.

<!--
SECTION PURPOSE: Define the minimal contract for a good Scenario.
PROMPTING: Checklist for scenario completeness and clarity.
-->
## Scenario Quality Checklist

- Scenario has a meaningful title stating the behavior and outcome.
- Steps follow Given-When-Then order; And is used only to add detail.
- Preconditions are explicit; no hidden state from previous scenarios.
- Data examples: use Scenario Outline when testing variations.

<!--
SECTION PURPOSE: Enforce machine-checkable constraints to keep specs healthy.
-->
<CRITICAL_REQUIREMENT type='MANDATORY'>
- Do not couple steps to UI structure (DOM/XPath). Use domain language.
- Do not assert multiple outcomes per scenario; keep assertions focused.
- Keep scenarios ≤ 10 steps to maintain readability and execution speed.
</CRITICAL_REQUIREMENT>

<!--
SECTION PURPOSE: Provide canonical examples for copy/paste and adaptation.
-->
## Examples

Feature: User login
  As a registered user
  I want to sign in
  So that I can access my account

  Background:
    Given a registered user exists

  Scenario: Successful login
    Given I am on the sign-in page
    When I sign in with valid credentials
    Then I should see my dashboard
    And I should be greeted by name

  Scenario Outline: Login fails with invalid credentials
    Given I am on the sign-in page
    When I sign in with <username> and <password>
    Then I should see an authentication error

    Examples:
      | username | password |
      | alice    | wrong    |
      | bob      | bad      |

<!--
SECTION PURPOSE: Encourage living docs and CI-ready behavior.
-->
## Process

1. Start with the happy path scenario; run and see it fail.
2. Implement the step definitions minimally to pass.
3. Add edge case scenarios and Scenario Outlines; keep steps reusable.
4. Wire into CI to run on PRs and gate merges on failures.
