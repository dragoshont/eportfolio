# Part A1: Code Exploration (~700 words)

## Test Inputs
- Input set name: Default mixed-case list
- Values: ["Alice", "bob", "alice", "Charlie", "BOB", "dave", "Eve", "charlie"]
-- Rationale: This list includes duplicates with different casing so I can observe how each script handles deduplication and ordering when names differ only by capitalization.

## Script Modifications

### Python (clean_names.py)
- Modification summary: Changed the sort to be case-insensitive using `key=str.lower` to make ordering consistent regardless of capitalization.
- Inline comment location(s): Sort line in content/project/unit12/clean_names.py
-- Explanation: The original script used `set()` to remove duplicates and then sorted alphabetically with default string ordering. The change keeps the same overall task (deduplicate and sort) but reduces casing bias in the sort order, which makes the output easier to compare with the JavaScript version.

### JavaScript (cleanNames.js)
- Modification summary: Added a case-insensitive comparator with `localeCompare(..., { sensitivity: "base" })` to sort names without casing bias.
- Inline comment location(s): Sort line in content/project/unit12/cleanNames.js
-- Explanation: The original script spread a `Set` into an array and called `sort()` with default lexicographic rules. The comparator makes the intended ordering explicit while preserving the original task and the input values.

## Observed Outputs

### Python Run
- Command: `C:/src/eportfolio/.venv/Scripts/python.exe clean_names.py`
- Output: Original list: ['Alice', 'bob', 'alice', 'Charlie', 'BOB', 'dave', 'Eve', 'charlie']
	Processed list: ['alice', 'Alice', 'BOB', 'bob', 'Charlie', 'charlie', 'dave', 'Eve']
-- Notes: The output groups similar names together but still keeps original casing in the final list. Because `set()` does not preserve order, the pre-sort ordering is arbitrary, yet the case-insensitive sort makes the final sequence stable for comparison.

### JavaScript Run
- Command: `node cleanNames.js`
- Output: Original list: ['Alice', 'bob', 'alice', 'Charlie', 'BOB', 'dave', 'Eve', 'charlie']
	Processed list: ['Alice', 'alice', 'bob', 'BOB', 'Charlie', 'charlie', 'dave', 'Eve']
-- Notes: The JavaScript output also groups case variants together, but the final ordering differs slightly because the `Set` preserves insertion order before sorting, and the comparator’s stability can keep earlier entries first when values compare as equal.

## Comparison Notes
- Syntax and structure: The Python version is compact and uses `set()` and `sort()` directly, while the JavaScript version spreads a `Set` into an array and then sorts. Both are procedural, but JavaScript requires an explicit comparator to control case-insensitive sorting.
- Ease of understanding/editing: Python reads slightly more declaratively because the `key` argument expresses intent in one place. JavaScript’s `localeCompare` is more verbose but makes the sorting rules explicit.
- Output or error differences: With case-insensitive sorting, both scripts now group names without casing bias. The exact order differs because Python’s set conversion does not preserve order prior to sorting, while JavaScript keeps the insertion order before sorting.
- Edge cases observed (empty input, unexpected types): An empty list/array returns an empty result. Mixed types would likely raise errors in Python or produce odd comparisons in JavaScript; these should be avoided or normalized if added later.
-- Additional observations: The Python script uses `set()` which removes duplicates but also drops ordering information. In the JavaScript version, the `Set` preserves insertion order, so when the comparator treats two names as equal (case-insensitive), the first seen value tends to stay ahead. This subtle difference helps explain why the two outputs are similar but not identical. If I introduced an empty input in either script, both would still return an empty list/array without errors, which confirms basic robustness. However, if I inserted `None` or a number in Python, the `sort()` call could raise a `TypeError`. In JavaScript, non-string values would be coerced to strings during comparison, potentially creating surprising orderings; that could be mitigated with validation or explicit normalization if the assignment allowed a broader change.
-- Reflection on change scope: The comparator update fits the “light modification” boundary because it changes ordering logic without adding new branches or altering the core deduplication behavior.
