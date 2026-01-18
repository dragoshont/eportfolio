# Data Model

## Script
- **Fields**: `language`, `file_path`, `purpose`, `original_logic`, `modification`
- **Relationships**: 1..* `InlineComment`, 1..* `TestInput`, 1..* `ObservedOutput`
- **Validation**: Exactly one `Modification` per script.

## TestInput
- **Fields**: `name`, `values`, `notes`
- **Relationships**: 1 `Script` → 1..* `TestInput`
- **Validation**: At least one test input per script.

## ObservedOutput
- **Fields**: `output_text`, `timestamp`, `notes`
- **Relationships**: 1 `Script` → 1..* `ObservedOutput`

## Modification
- **Fields**: `description`, `change_type`, `impact`
- **Relationships**: 1 `Script` → 1 `Modification`
- **Validation**: Must preserve original task; must be “light” (single small change).

## InlineComment
- **Fields**: `location`, `comment_text`, `covers_original_logic`, `covers_change`
- **Relationships**: 1 `Script` → 1..* `InlineComment`
- **Validation**: Comments must explain original logic plus the modification.

## ReportSection
- **Fields**: `part`, `word_count_target`, `content`, `references`
- **Relationships**: 1..* `Reference`
- **Validation**: Each part must cover required topics and meet word-count target ±10%.

## Reference
- **Fields**: `title`, `source`, `url_or_citation`, `credibility_notes`
- **Relationships**: 1..* `ReportSection`

## ReflectionExample
- **Fields**: `source`, `summary`, `impact_area`
- **Relationships**: Used in `ReportSection` (Part A3)
