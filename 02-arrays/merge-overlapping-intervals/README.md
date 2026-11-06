# Merge Overlapping Intervals

**Problem:** You are given an array of intervals `A`, where `A[i] = [start_i, end_i]`. Merge **all overlapping intervals** and return the resulting non-overlapping intervals, **sorted by start**.

Two intervals overlap if they share at least one point. Intervals that only **touch** (like `[1, 4]` and `[4, 5]`) also overlap, so they merge into `[1, 5]`.

The input is **not** guaranteed to be sorted.

## Example 1

```
Input:  A = [[1, 3], [2, 6], [8, 10], [15, 18]]
Output: [[1, 6], [8, 10], [15, 18]]
```

- `[1, 3]` and `[2, 6]` overlap → `[1, 6]`

## Example 2

```
Input:  A = [[1, 4], [4, 5]]
Output: [[1, 5]]
```

- They touch at 4, so they merge.

## Example 3

```
Input:  A = [[8, 10], [1, 3], [2, 6]]
Output: [[1, 6], [8, 10]]
```

- The input is unsorted, but the output is sorted by start.

## Constraints

- `1 <= N <= 10^5`
- `0 <= start_i <= end_i <= 10^9`

## Approaches to write

1. **Brute** (`mergeIntervalsBrute` / `merge_intervals_brute`): repeatedly find any two overlapping intervals and merge them, until no pair overlaps. Sort the result at the end.
2. **Optimised** (`mergeIntervals` / `merge_intervals`): think about what sorting the input buys you. The large N=100000 tests only run against this one.

Write the time and space complexity of each approach in its comment.

## Run

```bash
node mergeIntervals.js
python3 merge_intervals.py
```
