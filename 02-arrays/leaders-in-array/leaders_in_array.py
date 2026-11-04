# Leaders in an Array: return every element strictly greater than all elements to its right.
import time


def leaders_in_array(A: list[int]) -> list[int]:
    # TODO: write your solution here
    return []


if __name__ == "__main__":
    # Order doesn't matter, so both sides are sorted before comparing
    tests = [
        ([16, 17, 4, 3, 5, 2], [17, 5, 2]),
        ([5, 4], [5, 4]),
        ([1, 2, 3, 4], [4]),  # increasing -> only the last one
        ([9, 7, 5, 3], [9, 7, 5, 3]),  # decreasing -> every element
        ([7], [7]),  # single element
    ]

    for A, expected in tests:
        got = leaders_in_array(A)
        ok = sorted(got) == sorted(expected)
        print(f"{'PASS' if ok else 'FAIL'} A={A} got={got} expected={expected}")

    # Large case: 100,000 decreasing numbers -> every element is a leader.
    # Checking each element against everything to its right will take a long time here.
    big = list(range(100000, 0, -1))
    start = time.time()
    big_count = len(leaders_in_array(big))
    ms = int((time.time() - start) * 1000)
    print(f"{'PASS' if big_count == 100000 else 'FAIL'} N=100000 leaders={big_count} expected=100000 ({ms} ms)")
