# Rotate Array: rotate A to the right B times.


def rotate_array(A: list[int], B: int) -> list[int]:
    # TODO: write your solution here
    return A


if __name__ == "__main__":
    tests = [
        ([1, 2, 3, 4], 2, [3, 4, 1, 2]),
        ([2, 5, 6], 1, [6, 2, 5]),
        ([1, 2, 3], 4, [3, 1, 2]),  # B > N
        ([1, 2, 3], 3, [1, 2, 3]),  # B == N -> unchanged
        ([7], 1000000000, [7]),
    ]

    for A, B, expected in tests:
        got = rotate_array(list(A), B)
        print(f"{'PASS' if got == expected else 'FAIL'} A={A} B={B} got={got} expected={expected}")
