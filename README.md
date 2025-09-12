<!-- The main README is aimed at human readers, but may also be read by AI -->
# Capgemini Github Copilot Template

<!-- Replace this paragraph with a brief description of the repository -->
Welcome! This repository is a GitHub Template created by Capgemini. It provides practical, portable, and useful examples of GitHub Copilot configuration for real-world projects.

<!-- Replace this paragraph with a brief intended audience for this repository -->
**Who is this for?**
- Developers and project teams looking to accelerate AI-powered development
- Project managers and technical leads seeking best practices
- AI agents (including Copilot) needing orientation and context

<!-- Replace this paragraph with a brief description of the purposes -->
**Key purposes**

This repository is designed to help teams adopt Copilot best practices, understand configuration options, and accelerate AI-powered development.

1. **Template Repository:** Use this as a starting point for your own projects by clicking "Use this template" on GitHub.
2. **Copilot Configuration Examples:** Explore real, working examples of various GitHub Copilot AI configurations.
3. **Educational Resource:** Learn from comprehensive documentation and explanatory README.md files throughout the project.

<!-- Replace this paragraph with hints on finding information elsehwere in the repository -->

## Best Practices

Reuse and reference instructions files in your prompt files and chat modes to keep them clean and focused, and to avoid duplicating instructions.

- Keep instructions modular and single-purpose: one file = one responsibility (e.g., safety rules, tone, examples).
- Use clear file names and a one-line summary at the top so contributors can find intent quickly.
- Lead with an explicit, human-readable “What to do” section: 1–3 concrete steps or a checklist people can follow immediately.
- Provide one short example and one minimal counterexample for each rule so users and agents see expected output.
- Prefer imperative, action-oriented phrasing (“Do X”, “Avoid Y”) and concrete defaults (e.g., “Prefer 80-char lines”, “Use present tense”).
- Include required constraints up front (security, privacy, licensing, disallowed content) and where to raise exceptions.
- Surface usage patterns: when to reuse this file vs. override it; link to canonical files rather than duplicating content.
- Add machine-friendly snippets or templates (prompts, code blocks, placeholders) that can be copy-pasted into prompts or chat modes.
- Keep guidance short (1–3 sentences per rule) and add a “Why this matters” one-liner for context when necessary.
- Version and change-log key updates so consumers know when behavior changed.
- Include a brief test plan or example queries that validate the instruction works as intended.
- Avoid embedding secrets or environment-specific data; reference where secure configs live (e.g., repo secrets, vault).
- When in doubt, be explicit: busy users prefer exact commands/phrases to adapt rather than broad theory.

## Where to find more information

- See `AGENTS.md` for general AI agent instructions and project context
- See `.github/copilot-instructions.md` for Copilot-specific rules and configuration

<!-- Replace this paragraph with hints on finding other relevant information about the repository -->
### Copilot Customisation

You can find more about how to [customise and extend Github Copilot](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions?tool=vscode), or how to customise Copilot behaviour in [Visual Studio Code](https://code.visualstudio.com/docs/copilot/customization/overview), and other IDEs such as [Jetbrains](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions?tool=jetbrains), [Eclipse](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions?tool=eclipse), and [XCode](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions?tool=xcode).

You can find more examples of Copilot configuration in the [Awesome Copilot repository on Github.com](https://github.com/github/awesome-copilot/tree/main).

