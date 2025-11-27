# Contributing to GitHub Copilot Template

Thank you for your interest in contributing to this repository! This document provides clear guidelines on what contributions we accept and how to submit them.

## Purpose of This Repository

This repository is an **educational GitHub Template** created by Capgemini's AI & Software Engineering team. It provides practical, portable, and thoroughly documented examples of GitHub Copilot configuration for real-world projects.

**Key Principle**: All prompt content must be thoroughly commented to explain the prompting techniques, design rationale, and expected behaviors.

## What We Accept

We welcome the following types of contributions:

### ✅ New Custom Prompts (Educational Examples Only)

- **Accepted**: New custom prompts, chat modes, or instructions that demonstrate prompting techniques and repository setup patterns
- **Required**: Comprehensive inline comments explaining:
  - The prompting technique being demonstrated
  - Design rationale and reinforcement strategies
  - Expected behavior and outcomes
  - Example usage scenarios
- **Not Accepted**: Generic prompt libraries without educational value or thorough documentation

**Example**: A new chat mode that demonstrates a specific prompting pattern (e.g., chain-of-thought reasoning) with detailed comments explaining how and why it works.

### ✅ Corrections to Existing Configuration/Prompts

- Typo fixes in documentation or prompts
- Corrections for changes in GitHub Copilot functionality
- Bug fixes in example code or configurations
- Clarity improvements in comments or explanations

### ✅ Enhancements to Existing Configuration/Prompts

- Improved prompting techniques with clear documentation
- Better reinforcement strategies with explanations
- Additional examples demonstrating edge cases
- Performance or clarity improvements
- Enhanced comments and educational content

### ✅ Documentation Enhancements

- Improvements to README files
- Better explanations of existing features
- Additional usage examples
- Clearer architectural documentation
- Updates to align with current GitHub Copilot features

### ✅ Repository Configuration Enhancements

- Improvements to GitHub Actions workflows
- Better CI/CD processes
- Enhanced development tooling
- Improved repository templates and structures

## What We Don't Accept

### ❌ Undocumented Prompts

Prompts without thorough inline comments explaining the techniques used will not be accepted.

### ❌ Generic Prompt Libraries

This is not a collection of general-purpose prompts. We only accept prompts that serve as educational examples demonstrating specific techniques.

### ❌ Breaking Changes Without Discussion

Major changes to existing configurations should be discussed in an issue before submission.

## How to Contribute

### 1. Before You Start

- **Check existing issues**: Look for related issues or discussions
- **Review documentation**: Familiarize yourself with the repository structure and existing patterns
- **Read SSOT files**: Understand the authoritative guidelines in:
  - `.github/copilot-instructions.md` - Core policies and workflow
  - `.github/instructions/docs.instructions.md` - Documentation standards
  - `.github/chatmodes/README.md` - Chat mode authoring guide
  - `README.md` - Repository overview and SSOT source map

### 2. Create an Issue (Recommended)

For significant contributions:

1. Create an issue describing your proposed contribution
2. Wait for feedback from maintainers
3. Proceed once you have general agreement

For minor fixes (typos, small corrections):

- You can proceed directly to creating a pull request

### 3. Development Workflow

#### Fork the Repository

1. **Fork**: Click the "Fork" button on GitHub to create your own copy of the repository
2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/template-github-copilot.git
   cd template-github-copilot
   ```
3. **Add upstream remote** (to keep your fork synchronized with the original repository):
   ```bash
   git remote add upstream https://github.com/Capgemini/template-github-copilot.git
   ```

#### Create a Feature Branch

Create a feature branch following our naming conventions:

```bash
git checkout -b <type>/<brief-description>
```

**Branch Types**:

- `feature/` - New features or enhancements
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test additions or modifications
- `chore/` - Maintenance tasks

**Examples**:

- `feature/add-security-chatmode`
- `fix/typo-in-developer-mode`
- `docs/improve-contributing-guide`

#### Making Changes

1. **Keep changes focused**: One logical change per pull request
2. **Small commits**: Make frequent, small commits with clear messages
3. **Follow conventions**: Use conventional commit format:

   ```text
   <type>: <subject>
   
   [optional body]
   
   [optional footer]
   ```

**Commit Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

**Examples**:

- `feat: Add security-focused chat mode with threat modeling`
- `fix: Correct typo in Developer.chatmode.md`
- `docs: Improve explanation of prompting techniques`

#### Adding Comments to Prompts

When creating or modifying prompts, **always include**:

```markdown
<!--
PURPOSE: [What this section accomplishes]
PROMPTING TECHNIQUE: [The technique being demonstrated]
REINFORCEMENT STRATEGY: [How the instruction is reinforced]
DESIGN RATIONALE: [Why this approach was chosen]
-->
```

**Example**:

```markdown
<!--
PURPOSE: Ensure consistent error handling across the codebase
PROMPTING TECHNIQUE: XML semantic tags for critical requirements
REINFORCEMENT STRATEGY: 
1. Bold formatting for emphasis
2. Concrete examples with ✅/❌ markers
3. Cross-references to SSOT documentation
DESIGN RATIONALE: Machine-parseable blocks enable AI to recognize
non-negotiable requirements while maintaining human readability
-->
```

### 4. Keep Your Fork Updated

Before submitting your pull request, sync your fork with the latest changes:

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

Then rebase your feature branch:

```bash
git checkout <type>/<brief-description>
git rebase main
```

### 5. Submit a Pull Request

1. **Push your branch to your fork**: `git push origin <type>/<brief-description>`
2. **Create PR**: Go to the original repository on GitHub and click "New Pull Request"
3. **Select branches**: Choose your fork's branch as the source and the original repository's `main` as the target
4. **Complete PR template**: Fill out all sections of the pull request template
5. **Link issues**: Reference any related issues using `Fixes #123` or `Closes #456`

#### Pull Request Requirements

Your PR must include:

- **Clear description**: Explain what changed and why
- **Educational value**: For new prompts, explain what technique is demonstrated
- **Documentation**: Update relevant README files or documentation
- **No duplication**: Link to SSOT files instead of duplicating content
- **Thorough comments**: All prompt content must be well-commented
- **Small scope**: Keep PRs focused (target ≤ 400 lines when possible)

### 6. Review Process

1. **Automated checks**: Ensure all CI checks pass (markdown lint, link checker, etc.)
2. **Maintainer review**: At least one maintainer approval required
3. **Address feedback**: Respond to review comments and make requested changes
4. **Approval**: Once approved, your PR will be merged

## Code Review Standards

Reviewers will evaluate:

- **Educational quality**: Are prompting techniques well-explained?
- **Documentation**: Are comments thorough and helpful?
- **Consistency**: Does the contribution align with existing patterns?
- **SSOT adherence**: Are references used instead of duplication?
- **Functionality**: For configurations, do they work as intended?

For detailed review criteria, see `docs/engineering/code-review-guidelines.md`.

## Contribution Types Reference

### Priority Levels

When contributing, consider these priority levels:

- **High**: Corrections to broken functionality, critical documentation fixes
- **Medium**: Enhancements to existing features, new educational examples
- **Low**: Nice-to-have improvements, additional documentation

## Getting Help

- **Questions**: Open an issue with the `question` label
- **Discussions**: Use GitHub Discussions for broader topics
- **Bugs**: Open an issue with the `bug` label
- **Feature requests**: Open an issue with the `enhancement` label

## Repository Structure

Familiarize yourself with the repository organization:

```text
.github/
├── chatmodes/          # Custom chat mode definitions
├── instructions/       # Domain-specific instruction files
├── prompts/            # Reusable prompt templates
└── workflows/          # GitHub Actions workflows

docs/
├── ADRs/              # Architectural Decision Records
├── PRDs/              # Product Requirements Documents
├── design/            # Design documentation
└── engineering/       # Engineering guidelines

plans/                 # Project planning documents
```

## Style Guidelines

### Documentation

- Use clear, concise language
- Include concrete examples
- Follow the structure in `.github/instructions/docs.instructions.md`
- Use proper Markdown formatting
- Avoid emojis in formal documentation (except in this guide for visual clarity)

### Prompts and Chat Modes

- Include comprehensive HTML comments
- Explain prompting techniques explicitly
- Provide both positive and negative examples
- Use consistent formatting and structure
- Reference SSOT files instead of duplicating content

### Code Examples

- Follow the language-specific guidelines in `.github/instructions/`
- Include comments explaining non-obvious logic
- Provide context for why the example demonstrates the concept

## Attribution

We appreciate all contributors! Your contributions will be recognized in:

- Git commit history
- Release notes (for significant contributions)
- GitHub's contributor tracking

## License

By contributing, you agree that your contributions will be licensed under the same license as this repository.

## Questions?

If you have questions about contributing, please:

1. Check this guide and the referenced SSOT documents
2. Review existing contributions for examples
3. Open an issue with your question

Thank you for helping make this repository a valuable educational resource!

<!-- © Capgemini 2025 -->
