# Special Index

**Problem:** Given an array `arr` of size `N`, count the indices `i` such that, after removing `arr[i]`, the sum of the elements at even indices equals the sum of the elements at odd indices.

Indices are 0-based and are counted again after the removal, so every element after `i` moves one position to the left.

## Example 1

```
Input:  arr = [2, 1, 6, 4]
Output: 1
```

- Remove index 0 → `[1, 6, 4]` → even: 1 + 4 = 5, odd: 6 → not equal
- Remove index 1 → `[2, 6, 4]` → even: 2 + 4 = 6, odd: 6 → **equal**
- Remove index 2 → `[2, 1, 4]` → even: 2 + 4 = 6, odd: 1 → not equal
- Remove index 3 → `[2, 1, 6]` → even: 2 + 6 = 8, odd: 1 → not equal

## Example 2

```
Input:  arr = [1, 1, 1]
Output: 3
```

Removing any element leaves `[1, 1]`, where even sum = odd sum = 1.

## Example 3

```
Input:  arr = [1, 2, 3]
Output: 0
```

## Constraints

- `1 <= N <= 10^5`
- `1 <= arr[i] <= 10^4`

## Run

```bash
node specialIndex.js
python3 special_index.py
```
