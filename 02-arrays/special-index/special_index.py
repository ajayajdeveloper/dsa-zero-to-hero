# Special Index: count indices whose removal makes the even-index sum equal the odd-index sum.


def special_index(arr: list[int]) -> int:
    # TODO: write your solution here
    return 0


if __name__ == "__main__":
    tests = [
        ([2, 1, 6, 4], 1),
        ([1, 1, 1], 3),
        ([1, 2, 3], 0),
        ([4, 1, 4], 1),
        ([1], 1),  # removing the only element leaves [], and 0 == 0
    ]

    for arr, expected in tests:
        got = special_index(arr)
        print(f"{'PASS' if got == expected else 'FAIL'} arr={arr} got={got} expected={expected}")
