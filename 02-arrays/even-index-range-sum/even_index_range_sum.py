# Even Index Range Sum: for each [L, R] in B, sum A[i] for every even i in L..R.


def even_index_range_sum(A: list[int], B: list[list[int]]) -> list[int]:
    # TODO: write your solution here
    return []


if __name__ == "__main__":
    tests = [
        ([1, 2, 3, 4, 5], [[0, 4], [1, 3], [2, 2], [1, 1]], [9, 3, 3, 0]),
        ([2, 1, 8, 3, 9, 6], [[0, 3], [3, 5], [1, 3]], [10, 9, 8]),
        ([-1, -2, -3, -4], [[0, 3], [1, 2]], [-4, -3]),  # negatives
        ([5], [[0, 0]], [5]),  # single element
        ([4, 7], [[1, 1]], [0]),  # only an odd index in range
    ]

    for A, B, expected in tests:
        got = even_index_range_sum(A, B)
        print(f"{'PASS' if got == expected else 'FAIL'} A={A} B={B} got={got} expected={expected}")
