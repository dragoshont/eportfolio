# Research

## Decision: Keep planning artifacts in specs/ and scripts in content/
- **Rationale**: Hugo/HugoBlox expects publishable content in content/. Keeping planning documents in specs/ avoids accidental site exposure and preserves build stability.
- **Alternatives considered**: Moving planning notes into content/ pages. Rejected to avoid mixing drafts with published pages.

## Decision: Use a single, minimal script change with targeted inline comments
- **Rationale**: Educational scripts should demonstrate understanding with minimal risk. Inline comments should explain intent (the “why”) and any behavior changes, avoiding over-commenting.
- **Alternatives considered**: Multiple changes or extensive refactors. Rejected because the assignment requires exactly one light modification per script.

## Decision: Explicitly document ordering and sorting behavior
- **Rationale**: Both Python `set` and JavaScript `sort()` have behaviors that can surprise learners (loss of order, lexicographic sorting). A small comment or comparator clarifies output expectations.
- **Alternatives considered**: Rely on default behavior without explanation. Rejected due to potential confusion in analysis and reflection.
