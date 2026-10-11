# Count Factors: given a positive integer n, return how many numbers divide n exactly.


# Approach 1: Brute force — try every number from 1 to n.
# Time: O(n), Space: O(1)
def count_factors_brute(n: int) -> int:
    count = 0
    for i in range(1, n + 1):  # range end is exclusive, so n + 1 includes n
        if n % i == 0:
            count += 1
    return count


# Approach 2: Optimized — factors come in pairs (i, n // i).
# Only check up to √n; each hit gives two factors, except when i == n // i.
# Time: O(√n), Space: O(1)
def count_factors(n: int) -> int:
    count = 0
    i = 1
    while i * i <= n:
        if n % i == 0:
            count += 1 if i == n // i else 2
        i += 1
    return count


if __name__ == "__main__":
    tests = [
        (1, 1),
        (7, 2),
        (12, 6),  # 1, 2, 3, 4, 6, 12
        (16, 5),  # 1, 2, 4, 8, 16 (4 counted once)
        (24, 8),
    ]

    for n, expected in tests:
        brute = count_factors_brute(n)
        fast = count_factors(n)
        ok = brute == expected and fast == expected
        print(f"{'PASS' if ok else 'FAIL'} n={n} brute={brute} fast={fast} expected={expected}")
