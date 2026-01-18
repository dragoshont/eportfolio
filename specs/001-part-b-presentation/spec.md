# Feature Specification: Part B Presentation Spec

**Feature Branch**: `001-part-b-presentation`  
**Created**: 18 January 2026  
**Status**: Draft  
**Input**: User description: "Part B: Individual Reflection Presentation on a Tutor-Specified Question. Title: Evaluating the Future of Computing – Ethical and Security Challenges. Deliver a max 15-minute presentation with transcript and up to 10 slides, covering technical aspects, applications, ethical concerns, security risks, regulatory/governance frameworks, and real-world case studies. Use at least eight peer-reviewed sources, cite in slides and transcript, concise and self-contained."

## Clarifications

### Session 2026-01-18

- Q: Which AI scope should the presentation evaluate? → A: Generative AI in enterprise decision-making.
- Q: Which governance/regulatory frameworks should be included? → A: NIST AI Risk Management Framework (AI RMF) + GDPR.
- Q: Which primary case-study domain should anchor the demonstration? → A: AI in circular economy (cybersecurity + sustainability).
- Q: How many total case studies should be included? → A: Two case studies.
- Q: How many peer-reviewed sources should be used? → A: Eight peer-reviewed sources only.

## User Scenarios & Testing *(mandatory)*

<!--
  IMPORTANT: User stories should be PRIORITIZED as user journeys ordered by importance.
  Each user story/journey must be INDEPENDENTLY TESTABLE - meaning if you implement just ONE of them,
  you should still have a viable MVP (Minimum Viable Product) that delivers value.
  
  Assign priorities (P1, P2, P3, etc.) to each story, where P1 is the most critical.
  Think of each story as a standalone slice of functionality that can be:
  - Developed independently
  - Tested independently
  - Deployed independently
  - Demonstrated to users independently
-->

### User Story 1 - Presentation Structure and Coverage (Priority: P1)

As a student, I want a clear, structured presentation that answers the tutor-specified question for a defined AI scope so I can deliver a coherent 15-minute talk that meets all required topics.

**Why this priority**: This is the core deliverable and determines whether the assignment meets the brief.

**Independent Test**: Can be fully tested by reviewing the slide deck and outline against the required topics and constraints (time limit, slide limit, required sections).

**Acceptance Scenarios**:

1. **Given** the chosen technology, **When** the deck is reviewed, **Then** it covers technical aspects, real-world applications, ethical concerns, and security risks within enterprise decision-making.
2. **Given** the final deck, **When** slide count and talk length are checked, **Then** the deck has at most 10 slides and the talk plan is 15 minutes or less.
3. **Given** the final deck, **When** visual and accessibility checks are applied, **Then** each slide meets the visual and readability requirements.

---

### User Story 2 - Evidence-Based Content and Citations (Priority: P2)

As a student, I want the presentation and transcript to include credible, peer-reviewed evidence and proper citations so the work is academically defensible.

**Why this priority**: The brief explicitly requires evidence-based content and academic references.

**Independent Test**: Can be tested by counting peer-reviewed sources and verifying citations in both slides and transcript.

**Acceptance Scenarios**:

1. **Given** the final deck and transcript, **When** citations are checked, **Then** all major claims are cited in-text on slides and in the transcript.
2. **Given** the references list, **When** sources are reviewed, **Then** exactly eight are peer-reviewed.

---

### User Story 3 - Governance and Case Studies (Priority: P3)

As a student, I want to ground the presentation in real-world case studies and relevant governance frameworks so the analysis connects theory to practice.

**Why this priority**: These elements demonstrate critical evaluation and real-world applicability.

**Independent Test**: Can be tested by confirming case studies and governance frameworks are explicitly addressed.

**Acceptance Scenarios**:

1. **Given** the final presentation, **When** content is reviewed, **Then** it includes exactly two real-world case studies and a governance/regulatory analysis relevant to the chosen technology.

---

[Add more user stories as needed, each with an assigned priority]

### Edge Cases

- The chosen technology has limited peer-reviewed sources available for specific security or ethics topics.
- The planned talk exceeds 15 minutes or the deck exceeds 10 slides after adding required content.
- Case studies are outdated or not clearly linked to the chosen technology’s ethical or security risks.
- Evidence for the second case study is insufficient to meet the peer-reviewed requirement.

## Requirements *(mandatory)*

<!--
  ACTION REQUIRED: The content in this section represents placeholders.
  Fill them out with the right functional requirements.
-->

### Functional Requirements

- **FR-001**: The presentation MUST focus on Generative AI in enterprise decision-making.
- **FR-002**: The presentation MUST be deliverable within 15 minutes (maximum).
- **FR-003**: The slide deck MUST contain no more than 10 slides.
- **FR-004**: The presentation MUST address technical aspects and real-world applications of the chosen technology scope.
- **FR-005**: The presentation MUST critically evaluate ethical concerns and security risks of the chosen technology scope.
- **FR-006**: The presentation MUST include a governance/regulatory analysis of NIST AI Risk Management Framework (AI RMF) and GDPR.
- **FR-007**: The presentation MUST include exactly two real-world case studies illustrating key challenges and proposed solutions: (1) AI in circular economy (cybersecurity + sustainability) and (2) Generative AI in finance (fraud detection and decision-support). 
- **FR-008**: The presentation MUST include a case-study demonstration segment that walks through the AI-in-circular-economy scenario step by step within a 2–3 minute segment.
- **FR-009**: The transcript MUST be provided and align with the spoken content.
- **FR-010**: The slides MUST avoid verbatim repetition of the transcript and use concise bullet points or visuals.
- **FR-011**: The presentation MUST include exactly eight peer-reviewed sources (journal articles or peer-reviewed conference papers).
- **FR-012**: Citations MUST appear in the slides and be referenced in the transcript.
- **FR-013**: The submission MUST be self-contained without appendices used to extend content.
- **FR-014**: The transcript MUST be organized per slide, with a labeled section for each slide and matching citations.
- **FR-015**: Each slide MUST include at least one visual element (diagram, chart, or table) and no more than 40 words of text.
- **FR-016**: Slide accessibility MUST meet minimum standards: font size ≥ 24pt and contrast ratio ≥ 4.5:1.
- **FR-017**: The transcript MUST target 130–160 words per minute pacing (approx. 2,000–2,400 words for 15 minutes).
- **FR-018**: Slide citations and transcript citations MUST follow Harvard (Cite Them Right) style.
- **FR-019**: The slide-to-transcript overlap MUST be ≤20% verbatim text per slide.
- **FR-020**: If the talk exceeds 15 minutes, the presenter MUST remove optional detail from the second case study before removing required governance or ethics content.
- **FR-021**: If peer-reviewed evidence is insufficient for the second case study, the presenter MUST replace it with another peer-reviewed, enterprise GenAI case study.
- **FR-022**: Audio quality MUST meet a clear speech standard (≤-20 dB noise floor, no clipping, and recorded in a common format such as MP3 or WAV).
- **FR-023**: The AI-in-circular-economy case study MUST specify sector (manufacturing or recycling), geography (EU or UK), and data context (supply-chain or waste-sorting data).

### Requirement-to-Acceptance Mapping

- **FR-001 to FR-007** are covered by User Story 1 and User Story 3 acceptance scenarios.
- **FR-008 to FR-012** are covered by User Story 2 acceptance scenarios and validation of deck/transcript artifacts.
- **FR-013 to FR-021** are validated by deck/transcript artifact checks and edge-case handling requirements.
- **FR-022 to FR-023** are validated by validation checklist checks and case-study content constraints.

### Key Entities *(include if feature involves data)*

- **Chosen Technology**: Generative AI in enterprise decision-making.
- **Slide Deck**: The visual presentation limited to 10 slides.
- **Transcript**: The full spoken content aligned to the slides.
- **Peer-Reviewed Source**: Academic references used to support claims.
- **Case Study**: Two case studies — AI in circular economy (cybersecurity + sustainability) and Generative AI in finance (fraud detection and decision-support).
- **Governance Framework**: NIST AI Risk Management Framework (AI RMF) and GDPR.

### Assumptions and Dependencies

- Access to at least eight peer-reviewed sources is available through library databases or academic search tools.
- The presentation will be recorded using standard presentation software and a headset microphone as recommended.
- The transcript will be produced by the presenter and aligned with the final slide deck.
- If access to peer-reviewed sources is limited, alternative peer-reviewed case studies are available within enterprise GenAI contexts.
- References will be maintained in content/project/unit12/part-b/references.md for the final deliverables.

## Success Criteria *(mandatory)*

<!--
  ACTION REQUIRED: Define measurable success criteria.
  These must be technology-agnostic and measurable.
-->

### Measurable Outcomes

- **SC-001**: The presentation duration is 15 minutes or less.
- **SC-002**: The deck contains 10 slides or fewer.
- **SC-003**: Exactly eight peer-reviewed sources are cited in both slides and transcript.
- **SC-004**: The presentation includes exactly two real-world case studies tied to ethical or security risks.
- **SC-005**: The presentation includes at least one governance/regulatory framework analysis relevant to the chosen technology.
- **SC-006**: No slide exceeds 40 words of on-screen text and each slide includes at least one visual element.
- **SC-007**: Transcript pacing is within 130–160 words per minute.
- **SC-008**: Slide-to-transcript verbatim overlap is ≤20% per slide.
