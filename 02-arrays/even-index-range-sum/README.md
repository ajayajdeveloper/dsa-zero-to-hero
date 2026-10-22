# Even Index Range Sum

**Problem:** You are given an integer array `A` of size `N`, and a 2D array `B` of size `Q`, where each row `B[i] = [L, R]` is a query.

For each query, find the sum of the elements of `A` at **even indices** within the range `[L, R]` (0-indexed, both ends included). Return an array with one answer per query, in the same order as the queries.

"Even" refers to the index in the original array `A`, not the position inside the range.

## Example 1

```
Input:  A = [1, 2, 3, 4, 5], B = [[0, 4], [1, 3], [2, 2], [1, 1]]
Output: [9, 3, 3, 0]
```

- Query `[0, 4]` → even indices 0, 2, 4 → 1 + 3 + 5 = **9**
- Query `[1, 3]` → even index 2 only → **3**
- Query `[2, 2]` → index 2 is even → **3**
- Query `[1, 1]` → index 1 is odd, so nothing is added → **0**

## Example 2

```
Input:  A = [2, 1, 8, 3, 9, 6], B = [[0, 3], [3, 5], [1, 3]]
Output: [10, 9, 8]
```

- Query `[0, 3]` → indices 0, 2 → 2 + 8 = **10**
- Query `[3, 5]` → index 4 → **9**
- Query `[1, 3]` → index 2 → **8**

## Constraints

- `1 <= N <= 10^5`
- `-10^5 <= A[i] <= 10^5`
- `1 <= Q <= 10^5`
- `0 <= L <= R < N`

## Run

```bash
node evenIndexRangeSum.js
python3 even_index_range_sum.py
```
