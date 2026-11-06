# Min Cost to Remove All Elements

**Problem:** You are given an integer array `A` of size `N`. You remove the elements **one at a time**, in any order you choose, until the array is empty.

The **cost** of removing an element is the **sum of all elements currently in the array**, including the one being removed.

Return the **minimum total cost** to remove all elements.

## Example 1

```
Input:  A = [2, 1]
Output: 4
```

- Remove `2` first: cost = 2 + 1 = 3. Then remove `1`: cost = 1. Total = **4**
- Removing `1` first would cost (2 + 1) + 2 = 5, which is worse.

## Example 2

```
Input:  A = [5]
Output: 5
```

## Example 3

```
Input:  A = [1, 2, 3]
Output: 10
```

- Remove 3 (cost 6), then 2 (cost 3), then 1 (cost 1). Total = 10.

## Constraints

- `1 <= N <= 10^5`
- `1 <= A[i] <= 10^3`

## Approaches to write

1. **Brute force** (`minCostBrute` / `min_cost_brute`): try every removal order and keep the cheapest. Only the small tests (N ≤ 8) run against it.
2. **Optimised** (`minCost` / `min_cost`): look at how many times each element gets added to the total cost.

Write the time complexity of each approach in its comment.

## Run

```bash
node minCostRemoveElements.js
python3 min_cost_remove_elements.py
```
