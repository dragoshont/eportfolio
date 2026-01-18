# clean_names.py

def process_names(names):
    normalized = [name.strip().lower() for name in names if name.strip()]
    unique_names = [name.capitalize() for name in set(normalized)]
    unique_names.sort(key=str.lower)
    return unique_names

# Test list with duplicates and inconsistent capitalisation
test_names = ["Alice", "bob", "alice", "Charlie", "BOB", "dave", "Eve", "charlie"]

print("Original list:", test_names)
print("Processed list:", process_names(test_names))
