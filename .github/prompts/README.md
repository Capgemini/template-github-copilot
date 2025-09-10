# Custom Copilot Prompts

TODO

## Hints

Within a prompt file, you can reference variables by using the `${variableName}` syntax. You can reference the following variables:

 - Workspace variables - `${workspaceFolder}`, `${workspaceFolderBasename}`
 - Selection variables - `${selection}`, `${selectedText}`
 - File context variables - `${file}`, `${fileBasename}`, `${fileDirname}`, `${fileBasenameNoExtension}`
 - Input variables - `${input:variableName}`, `${input:variableName:placeholder}` (pass values to the prompt from the chat input field)


## Official Docs

 - [Visual Studio Code custom prompt files](https://code.visualstudio.com/docs/copilot/customization/prompt-files)