---

description: "Task list for Part B presentation deliverables"
---

# Tasks: Part B Presentation

**Input**: Design documents from `/specs/001-part-b-presentation/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Not requested for this feature.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize content locations for the presentation artifacts

- [x] T001 Create content/project/unit12/part-b/ directory and placeholders (overview.md, slide-outline.md, slide-deck.md, transcript.md, references.md, validation.md)
- [x] T002 [P] Add Harvard (Cite Them Right) citation guidance header in content/project/unit12/part-b/references.md

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish required structure, references, and validation rules before story work

- [x] T003 Draft slide outline (≤10 slides) in content/project/unit12/part-b/slide-outline.md covering all required topics and demo placement
- [x] T004 Populate content/project/unit12/part-b/references.md with exactly eight peer-reviewed sources in Harvard style
- [x] T005 Document timing plan and pacing targets in content/project/unit12/part-b/overview.md (15 minutes, 130–160 wpm, 2–3 minute demo)
- [x] T006 Create validation checklist aligned to FR-001–FR-023 in content/project/unit12/part-b/validation.md

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Presentation Structure and Coverage (Priority: P1) 🎯 MVP

**Goal**: Deliver a coherent 10-slide structure that covers all required topics

**Independent Test**: Review slide-deck.md against required topics and constraints (slide count, word limits, demo placement)

### Implementation for User Story 1

- [x] T007 [US1] Build slide content skeleton in content/project/unit12/part-b/slide-deck.md with ≤40 words per slide and visual placeholders
- [x] T008 [P] [US1] Add accessibility annotations per slide (font size ≥24pt, contrast ≥4.5:1) in content/project/unit12/part-b/slide-deck.md
- [x] T009 [US1] Define the demo segment steps and timing in content/project/unit12/part-b/slide-deck.md
- [x] T010 [US1] Map each slide to required topics in content/project/unit12/part-b/overview.md

**Checkpoint**: User Story 1 is independently reviewable

---

## Phase 4: User Story 2 - Evidence-Based Content and Citations (Priority: P2)

**Goal**: Ensure evidence-based claims with exactly eight peer-reviewed sources and Harvard citations

**Independent Test**: Cross-check references.md against slide-deck.md and transcript.md for exact citation count and alignment

### Implementation for User Story 2

- [x] T011 [US2] Insert Harvard in-text citations in content/project/unit12/part-b/slide-deck.md for all major claims
- [x] T012 [US2] Draft per-slide transcript sections with matching citations in content/project/unit12/part-b/transcript.md
- [x] T013 [US2] Verify exactly eight peer-reviewed sources are cited in both slide-deck.md and transcript.md; reconcile references.md

**Checkpoint**: User Story 2 is independently reviewable

---

## Phase 5: User Story 3 - Governance and Case Studies (Priority: P3)

**Goal**: Deliver governance analysis and two case studies, including the AI circular economy demo

**Independent Test**: Confirm both case studies and governance framework coverage are explicit in slide-deck.md and transcript.md

### Implementation for User Story 3

- [x] T014 [US3] Draft AI circular economy case study content (sector, geography, data context) in content/project/unit12/part-b/slide-deck.md
- [x] T015 [US3] Draft Generative AI in finance case study content in content/project/unit12/part-b/slide-deck.md
- [x] T016 [US3] Add governance framework analysis slide content (NIST AI RMF + GDPR) in content/project/unit12/part-b/slide-deck.md

**Checkpoint**: User Story 3 is independently reviewable

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Validate constraints and finalize alignment

- [x] T017 [P] Run validation checklist and record results in content/project/unit12/part-b/validation.md, including FR-023 sector/geo/data context checks
- [x] T018 [P] Validate transcript pacing (130–160 wpm) and slide/transcript overlap ≤20% in content/project/unit12/part-b/transcript.md
- [ ] T019 [P] Verify audio quality requirements (≤-20 dB noise floor, no clipping, MP3/WAV) with a recorded measurement note in content/project/unit12/part-b/validation.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can proceed in parallel after Phase 2
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Depends on references list for citation alignment
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - No dependencies on other stories

### Parallel Opportunities

- T007 and T008 can run in parallel with T014–T016 after Phase 2
- T011 and T012 can run in parallel after T004 (references) is complete
- T017 and T018 can run in parallel once all story tasks complete

---

## Parallel Example: User Story 1

```bash
Task: "Build slide content skeleton in content/project/unit12/part-b/slide-deck.md"
Task: "Add accessibility annotations per slide in content/project/unit12/part-b/slide-deck.md"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Ensure slide structure meets constraints

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Validate structure
3. Add User Story 2 → Validate citations/transcript
4. Add User Story 3 → Validate governance/case studies
5. Finish Polish phase checks

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Validate constraints after each phase
