# Count AG Pairs

**Problem:** You are given a string `A` of uppercase English letters. Find the number of pairs `(i, j)` such that `A[i] = 'A'`, `A[j] = 'G'` and `i < j`.

In other words, count how many times `"AG"` appears as a subsequence: an `'A'` followed **anywhere later** by a `'G'`, not necessarily next to it.

Return the answer as a long integer.

## Example 1

```
Input:  A = "ABCGAG"
Output: 3
```

The pairs are `(0, 3)`, `(0, 5)` and `(4, 5)`:

```
index:  0 1 2 3 4 5
        A B C G A G
```

- `A` at 0 → `G` at 3 and `G` at 5 → 2 pairs
- `A` at 4 → `G` at 5 → 1 pair

## Example 2

```
Input:  A = "GAB"
Output: 0
```

The only `'G'` comes **before** the `'A'`, so there are no pairs.

## Constraints

- `1 <= length(A) <= 10^5`

## Run

```bash
node countAgPairs.js
python3 count_ag_pairs.py
```
