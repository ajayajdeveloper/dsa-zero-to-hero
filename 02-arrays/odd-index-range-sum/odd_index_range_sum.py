# Odd Index Range Sum: for each [L, R] in B, sum A[i] for every odd i in L..R.


def odd_index_range_sum(A: list[int], B: list[list[int]]) -> list[int]:
    # TODO: write your solution here
    return []


if __name__ == "__main__":
    tests = [
        ([1, 2, 3, 4, 5], [[0, 4], [1, 3], [2, 2], [1, 1]], [6, 6, 0, 2]),
        ([2, 1, 8, 3, 9, 6], [[0, 3], [3, 5], [1, 3]], [4, 9, 4]),
        ([-1, -2, -3, -4], [[0, 3], [1, 2]], [-6, -2]),  # negatives
        ([5], [[0, 0]], [0]),  # single element at index 0 (even)
        ([4, 7], [[0, 0]], [0]),  # only an even index in range
    ]

    for A, B, expected in tests:
        got = odd_index_range_sum(A, B)
        print(f"{'PASS' if got == expected else 'FAIL'} A={A} B={B} got={got} expected={expected}")
