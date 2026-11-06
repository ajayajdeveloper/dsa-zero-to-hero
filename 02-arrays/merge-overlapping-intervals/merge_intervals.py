# Merge Overlapping Intervals: merge every overlapping (or touching) pair, return sorted by start.
import copy
import time


# Approach 1: Brute — keep merging any overlapping pair until none are left.
# Time: ?, Space: ?
def merge_intervals_brute(A: list[list[int]]) -> list[list[int]]:
    # TODO: write your solution here
    return []


# Approach 2: Optimised.
# Time: ?, Space: ?
def merge_intervals(A: list[list[int]]) -> list[list[int]]:
    # TODO: write your solution here
    return []


if __name__ == "__main__":
    tests = [
        ([[1, 3], [2, 6], [8, 10], [15, 18]], [[1, 6], [8, 10], [15, 18]]),
        ([[1, 4], [4, 5]], [[1, 5]]),  # touching intervals merge
        ([[1, 4], [2, 3]], [[1, 4]]),  # one inside another
        ([[5, 7]], [[5, 7]]),  # single interval
        ([[8, 10], [1, 3], [2, 6]], [[1, 6], [8, 10]]),  # unsorted input
        ([[1, 2], [3, 4], [5, 6]], [[1, 2], [3, 4], [5, 6]]),  # nothing overlaps
        ([[1, 10], [2, 3], [4, 5], [6, 7]], [[1, 10]]),  # one big interval swallows the rest
        ([[1, 4], [0, 0]], [[0, 0], [1, 4]]),  # zero-length interval
        ([[2, 3], [2, 2], [3, 3], [1, 3], [5, 7], [2, 2], [4, 6]], [[1, 3], [4, 7]]),  # duplicates
        ([[0, 0], [0, 0]], [[0, 0]]),
    ]

    for A, expected in tests:
        brute = merge_intervals_brute(copy.deepcopy(A))
        fast = merge_intervals(copy.deepcopy(A))
        ok = brute == expected and fast == expected
        print(f"{'PASS' if ok else 'FAIL'} A={A} brute={brute} fast={fast} expected={expected}")

    # Large cases (optimised only)
    # 1) [[0,1], [2,3], [4,5], ...] -> 100000 intervals, none overlap
    apart = [[2 * i, 2 * i + 1] for i in range(100000)]
    start = time.time()
    apart_len = len(merge_intervals(apart))
    ms = int((time.time() - start) * 1000)
    print(f"{'PASS' if apart_len == 100000 else 'FAIL'} N=100000 no overlaps -> {apart_len} intervals, expected 100000 ({ms} ms)")

    # 2) [[0,2], [1,3], [2,4], ...] in reverse order -> everything chains into [0, 100001]
    chain = [[99999 - i, 99999 - i + 2] for i in range(100000)]
    start = time.time()
    chained = merge_intervals(chain)
    ms = int((time.time() - start) * 1000)
    print(f"{'PASS' if chained == [[0, 100001]] else 'FAIL'} N=100000 chained -> {chained}, expected [[0, 100001]] ({ms} ms)")
