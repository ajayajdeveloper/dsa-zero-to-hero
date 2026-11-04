# Count Even Numbers in Range: for each [L, R] in B, count the even values in A[L..R].


def count_even_in_range(A: list[int], B: list[list[int]]) -> list[int]:
    # TODO: write your solution here
    return []


if __name__ == "__main__":
    tests = [
        ([1, 2, 3, 4, 5], [[0, 2], [2, 4], [1, 4]], [1, 1, 2]),
        ([2, 1, 8, 3, 9, 6], [[0, 3], [3, 5], [1, 3], [2, 4]], [2, 1, 1, 1]),
        ([1, 3, 5, 7], [[0, 3], [1, 2]], [0, 0]),  # no even numbers
        ([2, 4, 6], [[0, 2], [1, 1]], [3, 1]),  # all even
        ([7], [[0, 0]], [0]),  # single odd element
        ([8], [[0, 0]], [1]),  # single even element
    ]

    for A, B, expected in tests:
        got = count_even_in_range(A, B)
        print(f"{'PASS' if got == expected else 'FAIL'} A={A} B={B} got={got} expected={expected}")
