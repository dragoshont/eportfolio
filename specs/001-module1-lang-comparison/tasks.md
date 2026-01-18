---

description: "Task list for Module 1 Language Comparison Exercise"
---

# Tasks: Module 1 Language Comparison Exercise

**Input**: Design documents from `/specs/001-module1-lang-comparison/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Not requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Static site**: content/ for scripts and publishable content
- **Feature docs**: specs/001-module1-lang-comparison/parts/ for assignment deliverables

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Create specs/001-module1-lang-comparison/parts/overview.md with assignment structure, word-count targets, and environment section

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core setup that should be done before user story work begins

- [X] T002 Document confirmed tool versions and run commands in specs/001-module1-lang-comparison/parts/overview.md

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Complete Code Exploration (Priority: P1) 🎯 MVP

**Goal**: Run both scripts with chosen inputs, make one light modification to each, and document outputs and comparisons.

**Independent Test**: Run both scripts, inspect code for one change each with inline comments, and verify Part A1 notes include outputs and comparisons.

### Implementation for User Story 1

- [X] T003 [US1] Create specs/001-module1-lang-comparison/parts/part-a1-code-exploration.md with sections for test inputs, outputs, modifications, and comparison notes
- [X] T004 [P] [US1] Apply one light modification with inline comments in content/project/unit12/clean_names.py
- [X] T005 [P] [US1] Apply one light modification with inline comments in content/project/unit12/cleanNames.js
- [X] T006 [US1] Record Python run command and output in specs/001-module1-lang-comparison/parts/part-a1-code-exploration.md
- [X] T007 [US1] Record JavaScript run command and output in specs/001-module1-lang-comparison/parts/part-a1-code-exploration.md
- [X] T008 [US1] Complete Part A1 comparison narrative in specs/001-module1-lang-comparison/parts/part-a1-code-exploration.md (syntax, structure, ease of editing, output differences, edge cases)

**Checkpoint**: User Story 1 fully functional and testable independently

---

## Phase 4: User Story 2 - Produce Language Comparison Report (Priority: P2)

**Goal**: Write a structured report with citations covering required comparison topics.

**Independent Test**: Review the report for required sections, topic coverage, and cited sources.

### Implementation for User Story 2

- [X] T009 [US2] Create specs/001-module1-lang-comparison/parts/part-a2-language-comparison.md with required headings and word-count target
- [X] T010 [P] [US2] Create specs/001-module1-lang-comparison/parts/references.md with at least two credible sources and citations
- [X] T011 [US2] Draft required sections in specs/001-module1-lang-comparison/parts/part-a2-language-comparison.md using references.md (programming model, readability/accessibility, error handling/debugging, suitability for modern tasks)

**Checkpoint**: User Story 2 independently complete with citations

---

## Phase 5: User Story 3 - Provide Professional Reflection (Priority: P3)

**Goal**: Produce a reflection covering readability, ethics, bias/privacy/misuse, and business/legal impact.

**Independent Test**: Review the reflection for required themes and at least one example.

### Implementation for User Story 3

- [X] T012 [US3] Create specs/001-module1-lang-comparison/parts/part-a3-professional-reflection.md with required headings and word-count target
- [X] T013 [P] [US3] Create specs/001-module1-lang-comparison/parts/reflection-examples.md with at least one real-world or provided-code example
- [X] T014 [US3] Draft reflection content in specs/001-module1-lang-comparison/parts/part-a3-professional-reflection.md using reflection-examples.md

**Checkpoint**: User Story 3 independently complete with required themes

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final adjustments and compliance checks

- [X] T015 [P] Verify Part A1 word count within ±10% and adjust in specs/001-module1-lang-comparison/parts/part-a1-code-exploration.md
- [X] T016 [P] Verify Part A2 word count within ±10% and adjust in specs/001-module1-lang-comparison/parts/part-a2-language-comparison.md
- [X] T017 [P] Verify Part A3 word count within ±10% and adjust in specs/001-module1-lang-comparison/parts/part-a3-professional-reflection.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion
- **User Stories (Phase 3+)**: Depend on Foundational phase completion
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - no dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - independent of US1
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - independent of US1/US2

### Within Each User Story

- Create deliverable file first
- Apply code changes before documenting outputs
- Complete narrative sections after evidence is captured

---

## Parallel Example: User Story 1

- Task: "Apply one light modification with inline comments in content/project/unit12/clean_names.py"
- Task: "Apply one light modification with inline comments in content/project/unit12/cleanNames.js"

---

## Parallel Example: User Story 2

- Task: "Create specs/001-module1-lang-comparison/parts/references.md with at least two credible sources and citations"
- Task: "Create specs/001-module1-lang-comparison/parts/part-a2-language-comparison.md with required headings and word-count target"

---

## Parallel Example: User Story 3

- Task: "Create specs/001-module1-lang-comparison/parts/reflection-examples.md with at least one real-world or provided-code example"
- Task: "Create specs/001-module1-lang-comparison/parts/part-a3-professional-reflection.md with required headings and word-count target"

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **Stop and validate**: Run both scripts and confirm Part A1 evidence and comparison notes

### Incremental Delivery

1. Setup + Foundational → Foundation ready
2. Add User Story 1 → Validate independently
3. Add User Story 2 → Validate independently
4. Add User Story 3 → Validate independently
5. Polish phase for word-count compliance

---

## Notes

- [P] tasks = different files, no dependencies
- Each user story should be independently completable and testable
- Avoid over-commenting; focus on explaining intent and the single change per script
