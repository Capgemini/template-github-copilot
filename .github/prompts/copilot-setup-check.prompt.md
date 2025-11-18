---
agent: 'agent'
argument-hint: 'none'
name: 'copilot-setup-check'
description: 'Evaluate repository Copilot configuration and provide optimization recommendations.'
tools: ['search/codebase', 'search', 'usages', 'problems', 'changes']
---

<!-- Top-level section: Defines the primary task (evaluate Copilot setup) and sets expectations for comprehensive analysis and actionable recommendations. -->
# Copilot Setup Evaluation

Perform a comprehensive evaluation of the repository's GitHub Copilot and AI agent configuration. Analyze the setup quality and provide specific recommendations for optimization.

<!-- Analysis scope: Defines what components will be evaluated and the depth of analysis required. -->
## Evaluation Scope

This evaluation will assess:
- **.github/copilot-instructions.md** - Copilot-specific configuration and guidelines
- **.github/chatmodes/** - Custom conversational behaviors and specialized modes
- **.github/prompts/** - Reusable prompt templates and slash commands
- **.github/instructions/** - Language and domain-specific coding guidelines
- **Repository structure** - Overall organization and documentation completeness

<!-- Evaluation criteria: Establishes the standards and best practices against which the setup will be measured. -->
## Evaluation Criteria

### Core Configuration Quality
- **Completeness**: All essential files present and properly structured
- **Clarity**: Instructions are unambiguous and well-documented
- **Consistency**: Naming conventions and formatting standards followed
- **Specificity**: Guidelines are actionable and project-specific
- **Maintainability**: Configuration is organized for long-term maintenance

### Advanced Setup Features
- **Custom Chatmodes**: Specialized conversational behaviors for different contexts
- **Prompt Templates**: Reusable templates for common development tasks
- **Domain Instructions**: Language and framework-specific coding guidelines
- **Workflow Integration**: Alignment with development processes and branching strategy

<!-- Analysis methodology: Defines the systematic approach for conducting the evaluation. -->
## Analysis Process

### Phase 1: Core Files Assessment

1. **For each file type, check existence and quality**
   - Presence & structure
   - Clarity & context (includes AI agent guidance)
   - Conflict detection & warning mechanisms
   - Enforcement markers (XML semantic tags)
   - Improvement actions (clarity, maintainability, missing best practices)
   - Prune redundancies & resolve conflicts
   - Reinforcement opportunities (semantic tags, diagrams)

2. **Evaluate .github/copilot-instructions.md**
   - Verify comprehensive project methodology coverage
   - Assess branching strategy and workflow definitions
   - Check commit message and naming conventions
   - Evaluate generic coding standards and quality requirements

### Phase 2: Advanced Configuration Review

3. **Analyze custom chatmodes**
   - Count and categorize existing chatmodes
   - Assess relevance to project needs
   - Check for mode-specific optimization
   - Evaluate documentation quality
   - Evaluate conflicts with core instructions, custom instructions (per file type), or custom prompts

4. **Review prompt templates**
   - Inventory available slash commands
   - Assess prompt structure and parameterization
   - Check tool integration and capability coverage
   - Evaluate reusability and maintenance
   - Evaluate conflicts with core instructions, custom instructions (per file type), or custom chatmodes

5. **Examine instruction files**
   - Catalog language/domain-specific instructions
   - Assess coverage of technology stack and frameworks
   - Evaluate clarity and actionability of language/framework specific instructions
   - Check alignment with project requirements
   - Evaluate specificity and actionability
   - Evaluate specific coding standards and quality requirements
   - Evaluate conflicts with core instructions, custom chatmodes, or custom prompts

### Phase 3: Integration and Optimization
6. **Repository structure alignment**
   - Verify .github directory organization
   - Check cross-reference consistency
   - Assess documentation completeness
   - Evaluate discoverability of configuration

<!-- Reporting requirements: Defines the format and content of the evaluation output. -->
## Reporting Requirements

### Evaluation Report Structure

#### 1. Executive Summary
- Overall setup maturity score (1-10)
- Top 3 strengths identified
- Top 3 improvement opportunities
- Priority level assessment (Critical/High/Medium/Low)

#### 2. Detailed Findings

**Core Configuration Analysis:**
- File presence checklist with status indicators
- Content quality assessment for each core file
- Specific gaps or issues identified
- Compliance with best practices

**Advanced Features Assessment:**
- Feature utilization analysis
- Optimization opportunities
- Missing capabilities assessment
- Integration quality evaluation

#### 3. Actionable Recommendations

**Immediate Actions (Critical Priority):**
- Missing core files to create
- Critical configuration issues to fix
- Essential documentation to add

**Short-term Improvements (High Priority):**
- Advanced features to implement
- Configuration optimizations to apply
- Documentation enhancements to make

**Long-term Enhancements (Medium Priority):**
- Advanced customizations to consider
- Workflow integrations to explore
- Maintenance procedures to establish

#### 4. Implementation Guidance
- Step-by-step action plan
- Resource requirements and effort estimates
- Dependencies and prerequisites
- Success metrics and validation criteria

<!-- Quality assurance: Ensures the evaluation meets professional standards and provides genuine value. -->
## Quality Standards

### Analysis Depth Requirements
- Examine actual file contents, not just presence
- Assess practical usability, not just theoretical completeness
- Consider project-specific context and requirements
- Provide specific, actionable recommendations with examples

### Professional Reporting
- Use clear, non-technical language for executive summary
- Provide technical details for implementation guidance
- Include concrete examples and code snippets where helpful
- Structure for both immediate action and strategic planning

### Validation and Accuracy
- Cross-reference findings across multiple files
- Verify recommendations against established best practices
- Ensure suggestions are feasible and properly prioritized
- Include rationale for all major recommendations

Execute this evaluation systematically and provide a comprehensive report that enables the repository maintainers to optimize their Copilot and AI agent configuration effectively.

<!-- © Capgemini 2025 -->
