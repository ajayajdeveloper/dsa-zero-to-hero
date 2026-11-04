# All Subarrays

**Problem:** You are given an array `A` of `N` integers. Return a 2D array containing all the subarrays of `A`.

A subarray is a **contiguous** part of the array: you pick a start index and an end index, and take every element between them (both ends included). It must have at least one element.

The order of the subarrays in the result does not matter.

## Example 1

```
Input:  A = [1, 2, 3]
Output: [[1], [1, 2], [1, 2, 3], [2], [2, 3], [3]]
```

`[1, 3]` is **not** a subarray, because it skips `2`.

## Example 2

```
Input:  A = [5, 2, 1, 4]
Output: [[5], [5, 2], [5, 2, 1], [5, 2, 1, 4],
         [2], [2, 1], [2, 1, 4],
         [1], [1, 4],
         [4]]
```

## Example 3

```
Input:  A = [1, 1]
Output: [[1], [1, 1], [1]]
```

Subarrays at different positions count separately, even if they hold the same values.

## Constraints

- `1 <= N <= 100`
- `1 <= A[i] <= 10^5`

## Run

```bash
node allSubarrays.js
python3 all_subarrays.py
```
