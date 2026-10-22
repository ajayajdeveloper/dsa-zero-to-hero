# Subarray in Given Range: return A[B..C], both ends included.


def subarray_in_range(A: list[int], B: int, C: int) -> list[int]:
    # TODO: write your solution here
    return []


if __name__ == "__main__":
    tests = [
        ([4, 3, 2, 6], 1, 3, [3, 2, 6]),
        ([4, 2, 2], 0, 1, [4, 2]),
        ([7, 8, 9], 1, 1, [8]),  # B == C -> one element
        ([1, 2, 3, 4], 0, 3, [1, 2, 3, 4]),  # whole array
        ([5], 0, 0, [5]),  # single element array
    ]

    for A, B, C, expected in tests:
        got = subarray_in_range(A, B, C)
        print(f"{'PASS' if got == expected else 'FAIL'} A={A} B={B} C={C} got={got} expected={expected}")
