# Data Model: Part B Presentation

## Entities

### SlideDeck
- **Fields**: title, subtitle, presenter, date, slide_count, target_duration_minutes, scope, governance_frameworks, case_study_count
- **Validation**: slide_count ≤ 10; target_duration_minutes ≤ 15; case_study_count = 2
- **Relationships**: has many Slides; has one Transcript; references many Citations

### Slide
- **Fields**: slide_number, title, key_points[], visual_elements[], word_count, citations[]
- **Validation**: word_count ≤ 40; citations must be peer-reviewed and appear in transcript
- **Relationships**: belongs to SlideDeck; links to Citations

### Transcript
- **Fields**: sections[{slide_number, narration_text, citations[]}], total_duration_minutes
- **Validation**: total_duration_minutes ≤ 15; citations mirror Slide citations
- **Relationships**: belongs to SlideDeck; references Citations

### Citation
- **Fields**: source_id, authors, year, title, venue, peer_reviewed (true), in_slide (true), in_transcript (true)
- **Validation**: exactly 8 peer_reviewed citations; all cited in slides and transcript
- **Relationships**: referenced by Slides and Transcript

### CaseStudy
- **Fields**: name, domain, summary, ethical_risks, security_risks, mitigations, evidence_sources[]
- **Validation**: two total case studies; one must be AI in circular economy
- **Relationships**: referenced by Slides and Transcript; links to Citations

### GovernanceFramework
- **Fields**: name, scope, key_controls, applicability_notes
- **Validation**: includes NIST AI RMF and GDPR
- **Relationships**: referenced by Slides and Transcript; links to Citations

## State/Status (if applicable)

- **SlideDeck status**: draft → reviewed → final
- **Transcript status**: draft → aligned → final

## Cross-Entity Rules

- Every Slide citation must appear in the Transcript section for the same slide.
- The demonstration segment must map to the AI in circular economy CaseStudy.
