# Min Cost to Remove All Elements: removing an element costs the sum of all elements still present.
# Return the minimum total cost to empty the array.


# Approach 1: Brute force — try every removal order.
# Time: ?, Space: ?
def min_cost_brute(A: list[int]) -> int:
    # TODO: write your solution here
    return 0


# Approach 2: Optimised.
# Time: ?, Space: ?
def min_cost(A: list[int]) -> int:
    # TODO: write your solution here
    return 0


if __name__ == "__main__":
    # Quick checks (small enough for brute force)
    tests = [
        ([2, 1], 4),
        ([5], 5),
        ([1, 2, 3], 10),
        ([4, 4, 4], 24),  # duplicates
        ([3, 1, 5, 2], 21),
        ([1, 10, 100, 1000], 1234),
        ([7, 7, 1, 2, 9, 3], 72),
    ]

    for A, expected in tests:
        brute = min_cost_brute(list(A))
        fast = min_cost(list(A))
        ok = brute == expected and fast == expected
        print(f"{'PASS' if ok else 'FAIL'} A={A} brute={brute} fast={fast} expected={expected}")

    # Large case (optimised only): A = [1, 2, ..., 1000]
    big = list(range(1, 1001))
    big_cost = min_cost(big)
    print(f"{'PASS' if big_cost == 167167000 else 'FAIL'} N=1000 cost={big_cost} expected=167167000")
