// cleanNames.js

function processNames(names) {
    // Change: normalize input to lower-case and remove empty entries for stable comparisons
    const normalized = names
        .map((name) => name.trim().toLowerCase())
        .filter(Boolean); // drop blanks after trimming

    // Use Set to deduplicate, then format with first-letter capitalization
    const unique = [...new Set(normalized)].map(
        (name) => name[0].toUpperCase() + name.slice(1)
    );

    // Case-insensitive sort so names appear in predictable order
    unique.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
    return unique;
}

// Test list with duplicates and inconsistent capitalisation
const testNames = ["Alice", "bob", "alice", "Charlie", "BOB", "dave", "Eve", "charlie"];

console.log("Original list:", testNames);
console.log("Processed list:", processNames(testNames));
