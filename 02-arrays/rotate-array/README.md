# Rotate Array

**Problem:** Given an integer array `A` of size `N` and an integer `B`, return the same array after rotating it `B` times towards the right.

One right rotation moves the last element to the front and shifts every other element one position to the right.

## Example 1

```
Input:  A = [1, 2, 3, 4], B = 2
Output: [3, 4, 1, 2]
```

- Rotation 1 → `[4, 1, 2, 3]`
- Rotation 2 → `[3, 4, 1, 2]`

## Example 2

```
Input:  A = [2, 5, 6], B = 1
Output: [6, 2, 5]
```

## Example 3

```
Input:  A = [1, 2, 3], B = 4
Output: [3, 1, 2]
```

Rotating 3 times brings the array back to `[1, 2, 3]`, so 4 rotations is the same as 1.

## Constraints

- `1 <= N <= 10^5`
- `1 <= A[i] <= 10^9`
- `1 <= B <= 10^9`

## Run

```bash
node rotateArray.js
python3 rotate_array.py
```
