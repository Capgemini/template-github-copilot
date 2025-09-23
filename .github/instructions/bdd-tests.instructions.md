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

<a name="bdd-naming"></a>
### Naming & File Structure
- Filenames: `feature-name.feature` (kebab-case), matching the Feature title slug.
- Feature titles: imperative, business behavior oriented (e.g., "Sign in to account").
- Scenario titles: describe outcome (e.g., "Login fails with invalid password").
- Step definitions: use domain language; keep glue thin and reusable.

<a name="bdd-background-state-tags"></a>
### Background, State, and Tags
- Background: only shared, immutable setup. Avoid modifying global state here.
- State isolation: each scenario sets its own preconditions; no order dependence.
- Tags: use `@smoke`, `@regression`, `@wip`, `@negative`, `@slow` to group and control execution.
- Data: prefer Scenario Outline for variations; keep example tables compact and meaningful.

<!--
SECTION PURPOSE: Define the minimal contract for a good Scenario.
PROMPTING: Checklist for scenario completeness and clarity.
-->
## Scenario Quality Checklist

- Scenario has a meaningful title stating the behavior and outcome.
- Steps follow Given-When-Then order; And is used only to add detail.
- Preconditions are explicit; no hidden state from previous scenarios.
- Data examples: use Scenario Outline when testing variations.
- Avoid hidden UI details and timing assumptions; assert observable outcomes.
- Keep nouns/verbs consistent across features.

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

<a name="bdd-good-vs-bad"></a>
## Good vs Bad Scenarios

Example 1: Clear, behavior-focused vs UI-coupled

Good:
```
Scenario: Add item to cart updates total
  Given a priced item exists
  And my cart is empty
  When I add the item to my cart
  Then my cart total should equal the item price
```

Bad:
```
Scenario: Click add button updates total
  Given I click the button with id "#add-btn"
  And I wait 3 seconds
  Then the element ".total" text should be "$9.99"
```

Example 2: Single outcome vs multiple assertions

Good:
```
Scenario: Payment declined shows error
  Given my card is blocked
  When I attempt to pay
  Then I should see a decline message
```

Bad:
```
Scenario: Payment declined does many things
  Given my card is blocked
  When I attempt to pay
  Then I should see a decline message
  And my order is cancelled
  And my basket is emptied
  And an email is sent
```
Rationale: Split into separate scenarios to keep each focused and reliable.

<!--
SECTION PURPOSE: Encourage living docs and CI-ready behavior.
-->
## Process

1. Start with the happy path scenario; run and see it fail.
2. Implement the step definitions minimally to pass.
3. Add edge case scenarios and Scenario Outlines; keep steps reusable.
4. Wire into CI to run on PRs and gate merges on failures.
5. Tag scenarios appropriately and configure CI to run fast suites on PRs (e.g., `@smoke`) and full suites nightly.
6. Keep step definitions DRY; refactor when duplication creeps in.
