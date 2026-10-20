# Range Sum Query: for each [L, R] in B, return A[L] + ... + A[R].


def range_sum_query(A: list[int], B: list[list[int]]) -> list[int]:
    # TODO: write your solution here
    return []


if __name__ == "__main__":
    tests = [
        ([1, 2, 3, 4, 5], [[0, 3], [1, 2]], [10, 5]),
        ([2, 2, 2], [[0, 0], [1, 2]], [2, 4]),
        ([5], [[0, 0]], [5]),  # single element
        ([1, 2, 3, 4, 5], [[0, 4], [4, 4], [2, 3]], [15, 5, 7]),  # whole array, last element
        ([10**9, 10**9, 10**9], [[0, 2]], [3 * 10**9]),  # big values
    ]

    for A, B, expected in tests:
        got = range_sum_query(A, B)
        print(f"{'PASS' if got == expected else 'FAIL'} A={A} B={B} got={got} expected={expected}")
