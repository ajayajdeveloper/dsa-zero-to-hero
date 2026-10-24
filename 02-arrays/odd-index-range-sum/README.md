# Odd Index Range Sum

**Problem:** You are given an integer array `A` of size `N`, and a 2D array `B` of size `Q`, where each row `B[i] = [L, R]` is a query.

For each query, find the sum of the elements of `A` at **odd indices** within the range `[L, R]` (0-indexed, both ends included). Return an array with one answer per query, in the same order as the queries.

"Odd" refers to the index in the original array `A`, not the position inside the range.

## Example 1

```
Input:  A = [1, 2, 3, 4, 5], B = [[0, 4], [1, 3], [2, 2], [1, 1]]
Output: [6, 6, 0, 2]
```

- Query `[0, 4]` → odd indices 1, 3 → 2 + 4 = **6**
- Query `[1, 3]` → odd indices 1, 3 → 2 + 4 = **6**
- Query `[2, 2]` → index 2 is even, so nothing is added → **0**
- Query `[1, 1]` → index 1 is odd → **2**

## Example 2

```
Input:  A = [2, 1, 8, 3, 9, 6], B = [[0, 3], [3, 5], [1, 3]]
Output: [4, 9, 4]
```

- Query `[0, 3]` → indices 1, 3 → 1 + 3 = **4**
- Query `[3, 5]` → indices 3, 5 → 3 + 6 = **9**
- Query `[1, 3]` → indices 1, 3 → 1 + 3 = **4**

## Constraints

- `1 <= N <= 10^5`
- `-10^5 <= A[i] <= 10^5`
- `1 <= Q <= 10^5`
- `0 <= L <= R < N`

## Run

```bash
node oddIndexRangeSum.js
python3 odd_index_range_sum.py
```
