# Range Sum Query

**Problem:** You are given an integer array `A` of length `N`, and a 2D integer array `B` of size `M x 2`, where each row is a query `[L, R]`.

For each query, find the sum of the elements of `A` from index `L` to index `R` (0-indexed, both ends included):

```
A[L] + A[L + 1] + ... + A[R - 1] + A[R]
```

Return an array with one answer per query, in the same order as the queries.

## Example 1

```
Input:  A = [1, 2, 3, 4, 5], B = [[0, 3], [1, 2]]
Output: [10, 5]
```

- Query `[0, 3]` → 1 + 2 + 3 + 4 = **10**
- Query `[1, 2]` → 2 + 3 = **5**

## Example 2

```
Input:  A = [2, 2, 2], B = [[0, 0], [1, 2]]
Output: [2, 4]
```

- Query `[0, 0]` → just `A[0]` = **2**
- Query `[1, 2]` → 2 + 2 = **4**

## Constraints

- `1 <= N, M <= 10^5`
- `1 <= A[i] <= 10^9`
- `0 <= L <= R < N`

## Run

```bash
node rangeSumQuery.js
python3 range_sum_query.py
```
