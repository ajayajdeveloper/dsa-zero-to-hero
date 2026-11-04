# Count AG Pairs: count pairs (i, j) with A[i] = 'A', A[j] = 'G' and i < j.
import time


def count_ag_pairs(A: str) -> int:
    # TODO: write your solution here
    return 0


if __name__ == "__main__":
    tests = [
        ("ABCGAG", 3),
        ("GAB", 0),
        ("AAGG", 4),  # every A pairs with every G
        ("GGAA", 0),  # all G's come before the A's
        ("A", 0),
        ("BCD", 0),  # no A or G at all
    ]

    for A, expected in tests:
        got = count_ag_pairs(A)
        print(f"{'PASS' if got == expected else 'FAIL'} A=\"{A}\" got={got} expected={expected}")

    # Large case: 50,000 A's then 50,000 G's -> 50,000 * 50,000 pairs.
    # A nested-loop solution will take a long time here; a single pass finishes instantly.
    big = "A" * 50000 + "G" * 50000
    start = time.time()
    big_got = count_ag_pairs(big)
    ms = int((time.time() - start) * 1000)
    print(f"{'PASS' if big_got == 2500000000 else 'FAIL'} N=100000 got={big_got} expected=2500000000 ({ms} ms)")
