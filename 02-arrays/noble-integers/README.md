# Noble Integers

**Problem:** You are given an integer array `A` of size `N`. Return the **count** of noble integers in `A`.

An element `A[i]` is **noble** if the number of elements in `A` that are **strictly smaller** than `A[i]` is exactly equal to `A[i]`.

Duplicates are allowed, and **every** qualifying copy counts.

## Example 1

```
Input:  A = [1, -5, 3, 5, -10, 4]
Output: 3
```

- `3` → smaller elements are -10, -5, 1 (count 3) → **noble**
- `4` → smaller elements are -10, -5, 1, 3 (count 4) → **noble**
- `5` → smaller elements are -10, -5, 1, 3, 4 (count 5) → **noble**
- `1` is not noble, because 2 elements are smaller than it.

## Example 2

```
Input:  A = [-10, 1, 1, 3, 100]
Output: 3
```

- Both copies of `1` have exactly 1 smaller element (-10) → **2 noble**
- `3` → smaller elements are -10, 1, 1 (count 3) → **noble**

## Example 3

```
Input:  A = [-3, 0, 2, 5]
Output: 1
```

- Only `2` is noble (-3 and 0 are smaller).

## Constraints

- `1 <= N <= 10^5`
- `-10^9 <= A[i] <= 10^9`

## Run

```bash
node nobleIntegers.js
python3 noble_integers.py
```
