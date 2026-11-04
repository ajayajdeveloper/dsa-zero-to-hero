# Count Even Numbers in Range

**Problem:** You are given an array `A` of length `N`, and `Q` queries in a 2D array `B` of size `Q x 2`, where each row `B[i] = [L, R]` is a query.

For each query, count how many **even numbers** are in `A` from index `L` to index `R` (0-indexed, both ends included). Return an array with one answer per query, in the same order as the queries.

"Even" refers to the **value** `A[i]`, not the index `i`.

## Example 1

```
Input:  A = [1, 2, 3, 4, 5], B = [[0, 2], [2, 4], [1, 4]]
Output: [1, 1, 2]
```

- Query `[0, 2]` → `[1, 2, 3]` → only `2` is even → **1**
- Query `[2, 4]` → `[3, 4, 5]` → only `4` is even → **1**
- Query `[1, 4]` → `[2, 3, 4, 5]` → `2` and `4` → **2**

## Example 2

```
Input:  A = [2, 1, 8, 3, 9, 6], B = [[0, 3], [3, 5], [1, 3], [2, 4]]
Output: [2, 1, 1, 1]
```

- Query `[0, 3]` → `[2, 1, 8, 3]` → `2` and `8` → **2**
- Query `[3, 5]` → `[3, 9, 6]` → `6` → **1**
- Query `[1, 3]` → `[1, 8, 3]` → `8` → **1**
- Query `[2, 4]` → `[8, 3, 9]` → `8` → **1**

## Constraints

- `1 <= N <= 10^5`
- `1 <= Q <= 10^5`
- `1 <= A[i] <= 10^9`
- `0 <= L <= R < N`

## Run

```bash
node countEvenInRange.js
python3 count_even_in_range.py
```
