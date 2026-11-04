# All Subarrays: return every contiguous subarray of A.


def all_subarrays(A: list[int]) -> list[list[int]]:
    # TODO: write your solution here
    return []


if __name__ == "__main__":
    # Order doesn't matter, so both sides are sorted before comparing
    tests = [
        ([1, 2, 3], [[1], [1, 2], [1, 2, 3], [2], [2, 3], [3]]),
        ([5, 2, 1, 4], [[5], [5, 2], [5, 2, 1], [5, 2, 1, 4], [2], [2, 1], [2, 1, 4], [1], [1, 4], [4]]),
        ([1, 1], [[1], [1, 1], [1]]),  # duplicates count separately
        ([7], [[7]]),  # single element
    ]

    for A, expected in tests:
        got = all_subarrays(list(A))
        ok = sorted(got) == sorted(expected)
        print(f"{'PASS' if ok else 'FAIL'} A={A} got={got} expected={expected}")

    # Size check: an array of N elements has N * (N + 1) / 2 subarrays
    big = list(range(1, 101))
    big_count = len(all_subarrays(big))
    print(f"{'PASS' if big_count == 5050 else 'FAIL'} N=100 count={big_count} expected=5050")
