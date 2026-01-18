// cleanNames.js

function processNames(names) {
    const normalized = names
        .map((name) => name.trim().toLowerCase())
        .filter(Boolean);

    const unique = [...new Set(normalized)].map(
        (name) => name[0].toUpperCase() + name.slice(1)
    );

    unique.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
    return unique;
}

// Test list with duplicates and inconsistent capitalisation
const testNames = ["Alice", "bob", "alice", "Charlie", "BOB", "dave", "Eve", "charlie"];

console.log("Original list:", testNames);
console.log("Processed list:", processNames(testNames));
