# Leaders in an Array

**Problem:** You are given an integer array `A` of `N` **distinct** integers. Find all the leaders in `A`.

An element is a **leader** if it is **strictly greater** than every element to its right. The rightmost element is always a leader, because nothing is to its right.

Return the leaders in any order.

## Example 1

```
Input:  A = [16, 17, 4, 3, 5, 2]
Output: [17, 5, 2]
```

- `17` → everything to its right (4, 3, 5, 2) is smaller → **leader**
- `5` → only `2` is to its right → **leader**
- `2` → rightmost element → **leader**
- `16` is not a leader, because `17` is to its right. `4` and `3` are not, because `5` is to their right.

`[2, 5, 17]` or any other ordering is also accepted.

## Example 2

```
Input:  A = [5, 4]
Output: [5, 4]
```

## Constraints

- `1 <= N <= 10^5`
- `1 <= A[i] <= 10^8`
- All elements are distinct.

## Run

```bash
node leadersInArray.js
python3 leaders_in_array.py
```
