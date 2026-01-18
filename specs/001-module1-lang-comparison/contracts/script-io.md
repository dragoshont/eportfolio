# Script I/O Contract

This feature has no network API. The contract is the input/output behavior of the two scripts.

## Python Script (clean_names.py)
- **Input**: A list/array of strings representing names.
- **Output**: A list of unique names sorted in a predictable order (documented in-code).
- **Error handling**: If input is empty, output is an empty list. Mixed types should be either rejected or normalized as documented in code comments.

## JavaScript Script (cleanNames.js)
- **Input**: An array of strings representing names.
- **Output**: An array of unique names sorted in a predictable order (documented in-code).
- **Error handling**: If input is empty, output is an empty array. Mixed types should be either rejected or normalized as documented in code comments.
