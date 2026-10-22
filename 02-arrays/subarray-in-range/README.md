# Subarray in Given Range

**Problem:** Given an array `A` of length `N` and two integers `B` and `C`, return the subarray of `A` from index `B` to index `C` (0-indexed, both ends included).

## Example 1

```
Input:  A = [4, 3, 2, 6], B = 1, C = 3
Output: [3, 2, 6]
```

The subarray of `A` from index 1 to 3 is `[3, 2, 6]`.

## Example 2

```
Input:  A = [4, 2, 2], B = 0, C = 1
Output: [4, 2]
```

The subarray of `A` from index 0 to 1 is `[4, 2]`.

## Constraints

- `1 <= N <= 10^5`
- `1 <= A[i] <= 10^9`
- `0 <= B <= C < N`

## Run

```bash
node subarrayInRange.js
python3 subarray_in_range.py
```
