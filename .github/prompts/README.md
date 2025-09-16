# Custom Copilot Prompts

This directory contains reusable prompt files that extend Copilot Chat with repeatable tasks (e.g., "Write ADR", "Write PRD"). Prompts standardize how assistants operate, capture inputs, and produce consistent outputs.

## Custom prompts in this repository

- [/copilot-setup-check](copilot-setup-check.prompt.md)
- [/write-adr](write-adr.prompt.md)
- [/write-docs](write-docs.prompt.md)
- [/write-ears-spec](write-ears-spec.prompt.md)
- [/write-prd](write-prd.prompt.md)

## How to use
- In Copilot Chat, type the prompt name or pick it from the quick actions list.
- Many prompts can be invoked like a slash command (e.g., `/write-adr`). If your IDE surfaces prompt files differently, open the prompt and follow its inputs section.
- Provide required inputs when asked (see the Inputs section inside each prompt). Defaults are applied when permitted.

## Creating a new prompt
- Copy an existing `.prompt.md` file as a starting point.
- Set a clear `description` and the minimal `tools` needed.
- Add an Inputs section with `${input:...}` placeholders and validation rules.
- Define output structure and quality gates so results are consistent and reviewable.

## Hints

Within a prompt file, you can reference variables by using the `${variableName}` syntax. You can reference the following variables:

 - Workspace variables - `${workspaceFolder}`, `${workspaceFolderBasename}`
 - Selection variables - `${selection}`, `${selectedText}`
 - File context variables - `${file}`, `${fileBasename}`, `${fileDirname}`, `${fileBasenameNoExtension}`
 - Input variables - `${input:variableName}`, `${input:variableName:placeholder}` (pass values to the prompt from the chat input field)


## Official Docs

 - [Visual Studio Code custom prompt files](https://code.visualstudio.com/docs/copilot/customization/prompt-files)