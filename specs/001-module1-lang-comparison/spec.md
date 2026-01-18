# Feature Specification: Module 1 Language Comparison Exercise

**Feature Branch**: `001-module1-lang-comparison`  
**Created**: January 18, 2026  
**Status**: Draft  
**Input**: User description: "i am to create an end of module 1 of my MsC AI: \" Individual Programming Exercise – Comparing Programming Languages\" you will explore two modern programming languages through structured code review and basic code experimentation. You will work with two short, tutor-provided scripts that perform a basic function (e.g., removing duplicates and sorting a list). You will test, lightly modify, and compare the scripts, then write a report evaluating their observations and reflecting on professional issues in programming. Tutor Provided Scripts Two scripts (one in Python, one in JavaScript) are provided that: Solve the same simple task. Contain small inefficiencies or ethical oversights. Are designed to be easily testable and modifiable. Part A1: Code Exploration (700 words equivalent). Run both code samples using test inputs of your choice. Make one light modification to each script (e.g., add a new condition, improve readability, handle an error case). Add inline comments explaining the change and how the code works (existing and new). Briefly compare: Syntax and structure. Ease of understanding and editing. Any differences in output or errors. Part A2: Language Comparison Report (1,100 words equivalent). Discuss differences between the two languages in: Programming model (procedural, object-oriented, etc). Readability and developer accessibility. Error handling and debugging. Suitability for modern computing tasks (e.g., web apps, data science). Include references to relevant academic or industry sources. Part A3: Professional Reflection (1,200 words). Reflect on: The importance of readable, ethical code. Issues of bias, privacy, or misuse in programming. How small coding choices can have real-world business or legal impact. Use examples from the provided code or real-world incidents."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Complete Code Exploration (Priority: P1)

As a student, I want to run both provided scripts with my own test inputs, make one light modification to each, and add inline comments that explain the original logic and my change, so that I can demonstrate practical understanding of both languages.

**Why this priority**: This is the core deliverable that validates hands-on experimentation and code understanding.

**Independent Test**: Can be fully tested by running both scripts, inspecting the modified code for one change each, and verifying inline comments that explain behavior and the change.

**Acceptance Scenarios**:

1. **Given** the two provided scripts and a selected test input set, **When** I run both scripts, **Then** I record the observed outputs for comparison.
2. **Given** each script, **When** I apply a single light modification (as bounded in FR-002) and add inline comments, **Then** the code remains runnable and the comments explain existing logic plus the change.

---

### User Story 2 - Produce Language Comparison Report (Priority: P2)

As a student, I want to write a language comparison report that addresses required topics and cites credible sources, so that I can justify observations with academic or industry references.

**Why this priority**: The report demonstrates analytical understanding beyond code execution.

**Independent Test**: Can be tested by reviewing the report for required sections, topic coverage, and referenced sources.

**Acceptance Scenarios**:

1. **Given** the report draft, **When** I check the content, **Then** it covers programming model, readability, error handling, and suitability for modern tasks with referenced sources that meet FR-006 credibility criteria.

---

### User Story 3 - Provide Professional Reflection (Priority: P3)

As a student, I want to reflect on professional issues such as code readability, ethics, bias, privacy, and misuse, so that I can connect small coding choices to real-world impacts.

**Why this priority**: This reflection demonstrates professional awareness and responsibility.

**Independent Test**: Can be tested by reviewing the reflection for required themes and real-world or provided-code examples.

**Acceptance Scenarios**:

1. **Given** the reflection section, **When** I assess it, **Then** it discusses readable and ethical code, bias/privacy/misuse risks, and real-world or provided-code examples of business or legal impact.

---

### Edge Cases

- What happens when a test input is empty or contains unexpected types?
- How are differences in output ordering or formatting between scripts documented?
- What happens if the light modification introduces a runtime error that must be explained?
- How are missing or low-quality sources detected and corrected?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The student MUST run both provided scripts using at least one chosen test input set and record the outputs.
- **FR-002**: The student MUST apply exactly one light modification to each script that preserves the original task but improves clarity or handling of an edge case. A light modification is limited to one of: a single guard/validation, a single normalization step, a single comparator change for sorting, or a small readability refactor affecting no more than ~5 lines.
- **FR-003**: The student MUST add inline comments that explain the original logic and the modification in both scripts.
- **FR-004**: The student MUST provide a brief comparison of syntax, structure, ease of understanding/editing, and any output or error differences observed.
- **FR-005**: The language comparison report MUST discuss programming model, readability/accessibility, error handling/debugging, and suitability for modern computing tasks.
- **FR-006**: The language comparison report MUST include references to relevant academic or industry sources. Credible sources include peer-reviewed papers, standards bodies, vendor documentation, or reputable industry reports.
- **FR-007**: The professional reflection MUST address readable and ethical code, bias/privacy/misuse issues, and real-world business or legal impact.
- **FR-008**: The deliverables MUST align with the required word-count equivalents: Part A1 ~700 words, Part A2 ~1,100 words, Part A3 ~1,200 words.

### Key Entities *(include if feature involves data)*

- **Script**: A tutor-provided script for each language used in the task.
- **Test Input**: The selected input data used to execute each script.
- **Observed Output**: The recorded results from running each script.
- **Modification**: A single, light change to each script that improves clarity or behavior.
- **Inline Comment**: Explanatory notes within the scripts describing logic and the change.
- **Report Section**: A deliverable section for Part A1, Part A2, or Part A3.
- **Reference**: A cited academic or industry source supporting claims in the report.
- **Reflection Example**: A real-world incident or provided-code example used to illustrate professional impact.

## Assumptions & Dependencies

- Tutor-provided scripts are accessible and runnable in the student’s environment.
- The student has access to credible academic or industry sources for citations.
- The assignment expects written deliverables for Parts A1, A2, and A3 with the stated word-count equivalents.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Both scripts are executed with at least one test input set and their outputs are documented.
- **SC-002**: Each script includes one light modification and inline comments covering both original logic and the change.
- **SC-003**: 100% of required comparison topics in Part A1 are explicitly addressed.
- **SC-004**: Part A2 includes at least two credible references and covers all required language-comparison topics.
- **SC-005**: Part A3 explicitly discusses readability, ethics, bias/privacy/misuse, and business/legal impact with at least one example.
- **SC-006**: Each part meets its word-count target within ±10%.
