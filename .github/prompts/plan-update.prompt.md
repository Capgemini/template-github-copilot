---
mode: 'agent'
description: 'Update action plan with new issue details, marks resolved questions and updates action plan steps as needed.'
tools: ['codebase', 'search', 'searchResults', 'changes', 'findTestFiles', 'terminalSelection', 'terminalLastCommand', 'editFiles', 'fetch', 'runCommands']
---

<!-- Plan update document is a part of Onboard, Plan and Execute method applicable for software engineering tasks using AI Agent. 

* Its goal is to refine action plan document with answers to open questions, additional specifications, acceptance criteria, etc. You should always use this prompt to update the plan with relevant content.

* Recommended models: Claude Sonnet 4+

* How to use it: agent mode, choose one of the recommended models, launch prompt via `/plan-update <additional spec>`. Provide additional information as a parameter, i.e.: `/plan-update Answer to question 3 is...`

-->

You are an experienced software developer tasked with creating an action plan provided as ${file} to address an issue. Your plan is already generated and attached to this conversation, but you want to enhance it with additional information that was missing once plan was first created. Your goal is to produce a comprehensive, step-by-step plan that will guide the resolution of this issue.

First, review the following information:

<issue_update>

${input:IssueUpdate}

</issue_update>

With information provided above, perform the following steps:

1. Incorporate information provided as <issue_update> to the action plan; crosscheck the plan to see if it requires an update having in mind <issue_update> information.
2. Check if any of the questions for others hasn't been answered by acceptance criteria and mark it accordingly if so.
3. If any new questions for others arise from the <issue_update> information, add them to the list of questions for others.
4. If at any point you see that relevant code parts section needs to be updated, update it accordingly.
5. Check if root cause hypothesis needs to be updated and update it accordingly.
6. If any next steps are no longer relevant, mark them as skipped and explain why.
