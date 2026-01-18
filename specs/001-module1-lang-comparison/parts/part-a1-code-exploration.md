# Part A1: Code Exploration (~700 words)

## Test Inputs
- Input set name: Default mixed-case list
- Values: ["Alice", "bob", "alice", "Charlie", "BOB", "dave", "Eve", "charlie"]
-- Rationale: This list includes duplicates with different casing so I can observe how each script handles deduplication and ordering when names differ only by capitalization.

## Script Modifications

### Python (clean_names.py)
- Modification summary: Normalized names to lowercase, removed duplicates case-insensitively, then capitalized the first letter of each unique name before sorting.
- Inline comment location(s): Sort line in content/project/unit12/clean_names.py
-- Explanation: The original script used `set()` to remove duplicates and then sorted alphabetically. The updated version normalizes case first so duplicates like "bob" and "BOB" collapse into one item, and it standardizes output by capitalizing the first letter of each name.

### JavaScript (cleanNames.js)
- Modification summary: Normalized names to lowercase, removed duplicates case-insensitively, then capitalized the first letter of each unique name before sorting.
- Inline comment location(s): Sort line in content/project/unit12/cleanNames.js
-- Explanation: The original script used a `Set` and default sorting. The updated version normalizes case first so duplicates collapse, standardizes output by capitalizing the first letter of each name, and keeps a case-insensitive sort for predictable ordering.

## Observed Outputs

### Python Run
- Command: `C:/src/eportfolio/.venv/Scripts/python.exe clean_names.py`
- Output: Original list: ['Alice', 'bob', 'alice', 'Charlie', 'BOB', 'dave', 'Eve', 'charlie']
	Processed list: ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve']
-- Notes: The output is normalized to first-letter capitalization and duplicates are removed case-insensitively. The `set()` step does not preserve order, but the final sort makes the list stable.

### JavaScript Run
- Command: `node cleanNames.js`
- Output: Original list: ['Alice', 'bob', 'alice', 'Charlie', 'BOB', 'dave', 'Eve', 'charlie']
	Processed list: ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve']
-- Notes: The JavaScript output matches the Python output after normalization, with duplicates removed case-insensitively and names standardized to first-letter capitalization.

## Comparison Notes
- Syntax and structure: The Python version uses a list comprehension and `set()` for normalization and deduplication, while the JavaScript version uses `map`, `filter`, and `Set`. Both normalize to lowercase first, then capitalize for output.
- Ease of understanding/editing: Python is compact because the list comprehension expresses intent in one line. JavaScript is slightly more verbose but keeps the same sequence of steps explicitly.
- Output or error differences: Both scripts now return identical results for the test input because deduplication is case-insensitive and final sorting is case-insensitive.
- Edge cases observed (empty input, unexpected types): An empty list/array returns an empty result. Mixed types would likely raise errors in Python or produce odd comparisons in JavaScript; these should be avoided or normalized if added later.
-- Additional observations: The Python script uses `set()` which removes duplicates but also drops ordering information. The JavaScript version uses `Set` as well; both scripts then sort case-insensitively, so the final order is stable and aligned. If I introduced an empty input in either script, both would still return an empty list/array without errors. If I inserted `None` or a number in Python, the normalization step would raise an error. In JavaScript, non-string values would be coerced to strings during normalization, which could be avoided with validation if the assignment allowed a broader change.
-- Reflection on change scope: The normalization and deduplication changes still fit the “light modification” boundary because they keep the original task (deduplicate and sort) while standardizing output.
