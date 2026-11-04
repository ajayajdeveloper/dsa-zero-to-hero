# Noble Integers: count elements where (number of elements strictly smaller) == the element itself.
import time


def noble_integers(A: list[int]) -> int:
    # TODO: write your solution here
    return 0


if __name__ == "__main__":
    tests = [
        ([1, -5, 3, 5, -10, 4], 3),
        ([-10, 1, 1, 3, 100], 3),  # duplicates: both 1s count
        ([-3, 0, 2, 5], 1),
        ([0], 1),  # nothing is smaller than 0
        ([0, 0, 0], 3),  # every copy counts
        ([1, 1, 1], 0),  # no element is smaller than 1
        ([-1, -2, -3], 0),  # negatives can never be noble
    ]

    for A, expected in tests:
        got = noble_integers(A)
        print(f"{'PASS' if got == expected else 'FAIL'} A={A} got={got} expected={expected}")

    # Large case: [99999, 99998, ..., 0] -> every element is noble.
    # Counting smaller elements for each element one by one will take a long time here.
    big = list(range(99999, -1, -1))
    start = time.time()
    big_count = noble_integers(big)
    ms = int((time.time() - start) * 1000)
    print(f"{'PASS' if big_count == 100000 else 'FAIL'} N=100000 noble={big_count} expected=100000 ({ms} ms)")
