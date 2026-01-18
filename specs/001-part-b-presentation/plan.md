# Implementation Plan: Part B Presentation

**Branch**: `001-part-b-presentation` | **Date**: 18 January 2026 | **Spec**: [specs/001-part-b-presentation/spec.md](specs/001-part-b-presentation/spec.md)
**Input**: Feature specification from `/specs/001-part-b-presentation/spec.md`

**Note**: This plan follows the speckit plan workflow and stops after Phase 2 planning.

## Summary

Deliver a concise, evidence-based 15-minute presentation (≤10 slides) on Generative AI in enterprise decision-making, covering technical aspects, applications, ethical and security risks, governance (NIST AI RMF + GDPR), and two case studies including AI in circular economy, with a transcript and exactly eight peer-reviewed sources cited in both slides and transcript.

## Technical Context

**Language/Version**: Markdown for planning artifacts; slide deck in PowerPoint or equivalent; transcript in Markdown/text.  
**Primary Dependencies**: N/A (documentation-only).  
**Storage**: Files under `specs/001-part-b-presentation/`.  
**Testing**: Manual review against requirements checklist; word-count/time checks.  
**Target Platform**: Presentation software (PowerPoint/Google Slides) and audio recording tool.  
**Project Type**: Documentation-only deliverables.  
**Performance Goals**: N/A.  
**Constraints**: ≤15 minutes, ≤10 slides, ≤40 words per slide, at least one visual per slide, font size ≥24pt, contrast ≥4.5:1, pacing 130–160 wpm, overlap ≤20%, exactly 8 peer-reviewed sources, Harvard (Cite Them Right) citations, audio quality ≤-20 dB noise floor/no clipping, no appendices.  
**Scale/Scope**: Single presentation and transcript.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Spec-Plan-Tasks Alignment: PASS (spec defined; plan being produced; tasks to follow).
- Minimal, Safe Script Changes: N/A (no code changes required).
- Evidence-Backed Writing: PASS (requires peer-reviewed sources and citations in slides/transcript).
- Planning artifacts under `specs/`: PASS.

## Project Structure

### Documentation (this feature)

```text
specs/001-part-b-presentation/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
└── tasks.md             # Phase 2 output (future)
```

### Source Code (repository root)

```text
N/A (documentation-only feature)
```

**Structure Decision**: Planning artifacts live under `specs/001-part-b-presentation/`. Publishable presentation deliverables (slides, transcript, references) live under `content/project/unit12/part-b/` per constitution; no runtime code changes.

## Phase 0: Outline & Research

Research objectives based on the spec:

- Best practices for governance and compliance in Generative AI (NIST AI RMF + GDPR).
- Evidence and risk framing for ethical and security concerns in enterprise GenAI.
- Case study evidence for AI in circular economy (cybersecurity + sustainability) and one additional case study.

Deliverable: `research.md` with decisions, rationales, and alternatives considered.

## Phase 1: Design & Contracts

Deliverables:

- `data-model.md`: Entities for slides, transcript, citations, case studies, and governance frameworks.
- `contracts/`: Define expected inputs/outputs for the slide deck and transcript artifacts.
- `quickstart.md`: Steps to assemble slides, transcript, citations, and validation checks.

## Phase 1: Agent Context Update

Run `.specify/scripts/powershell/update-agent-context.ps1 -AgentType copilot` to sync the agent context.

## Constitution Check (Post-Design)

Re-verify alignment and evidence requirements after Phase 1 artifacts are generated.

- Spec-Plan-Tasks Alignment: PASS (spec, plan, and Phase 0/1 artifacts aligned).
- Minimal, Safe Script Changes: N/A (no script changes).
- Evidence-Backed Writing: PASS (research and contracts require peer-reviewed citations).
- Planning artifacts under `specs/`: PASS.

## Phase 2 Planning Stop

This plan stops after Phase 2 planning per speckit workflow.
