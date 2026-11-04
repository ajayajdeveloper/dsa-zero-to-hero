# Special Index: count indices whose removal makes the even-index sum equal the odd-index sum.
import time


def special_index(A: list[int]) -> int:
    # TODO: write your solution here
    return 0


if __name__ == "__main__":
    tests = [
        ([2, 1, 6, 4], 1),
        ([1, 1, 1], 3),
        ([1, 2, 3], 0),
        ([4, 1, 4], 1),
        ([1], 1),  # removing the only element leaves [], and 0 == 0
        ([-1, 2, -1], 1),  # negative values
        ([5, -5, 0, 5], 1),
        ([-3, -3, -3, -3, -3], 5),
    ]

    for A, expected in tests:
        got = special_index(A)
        print(f"{'PASS' if got == expected else 'FAIL'} A={A} got={got} expected={expected}")

    # Large case: 99,999 ones -> removing any index leaves 49,999 ones on each side.
    # Rebuilding the array and re-summing for every index will take a long time here.
    big = [1] * 99999
    start = time.time()
    big_count = special_index(big)
    ms = int((time.time() - start) * 1000)
    print(f"{'PASS' if big_count == 99999 else 'FAIL'} N=99999 got={big_count} expected=99999 ({ms} ms)")
