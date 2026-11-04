# Special Index

**Problem:** Given an array `A` of size `N`, count the indices `i` such that, after removing `A[i]`, the sum of the elements at even indices equals the sum of the elements at odd indices.

Indices are 0-based and are counted again after the removal, so every element after `i` moves one position to the left.

## Example 1

```
Input:  A = [2, 1, 6, 4]
Output: 1
```

- Remove index 0 → `[1, 6, 4]` → even: 1 + 4 = 5, odd: 6 → not equal
- Remove index 1 → `[2, 6, 4]` → even: 2 + 4 = 6, odd: 6 → **equal**
- Remove index 2 → `[2, 1, 4]` → even: 2 + 4 = 6, odd: 1 → not equal
- Remove index 3 → `[2, 1, 6]` → even: 2 + 6 = 8, odd: 1 → not equal

## Example 2

```
Input:  A = [1, 1, 1]
Output: 3
```

Removing any element leaves `[1, 1]`, where even sum = odd sum = 1.

## Example 3

```
Input:  A = [-1, 2, -1]
Output: 1
```

Removing index 1 leaves `[-1, -1]`, where even sum = odd sum = -1. Values can be negative.

## Constraints

- `1 <= N <= 10^5`
- `-10^5 <= A[i] <= 10^5`
- Sum of all elements of `A` `<= 10^9`

## Run

```bash
node specialIndex.js
python3 special_index.py
```
