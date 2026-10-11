# Count Factors

**Problem:** Given a positive integer `n`, count how many integers divide `n` with no remainder.

Example: `n = 12` → factors are 1, 2, 3, 4, 6, 12 → answer **6**.

## Approach 1: Brute force — O(n)

Check every `i` from 1 to `n` and count the ones where `n % i == 0`.

## Approach 2: Pair trick — O(√n)

Factors come in pairs: if `i` divides `n`, then so does `n / i`.

```
n = 36
1 × 36
2 × 18
3 × 12
4 × 9
6 × 6   ← both halves are the same, count once
```

One number in each pair is always ≤ √n. So loop only while `i * i <= n`:
- if `i` divides `n` and `i != n / i` → add 2
- if `i == n / i` (perfect square) → add 1

Use `i * i <= n` rather than `i <= Math.sqrt(n)`. It avoids floating-point issues and doesn't recompute the square root on every pass.

## Run

```bash
node countFactors.js
python3 count_factors.py
```

## JS → Python notes

| JavaScript | Python |
|---|---|
| `for (let i = 1; i <= n; i++)` | `for i in range(1, n + 1)` |
| `===` | `==` |
| `n / i` (float division) | `n // i` (integer division) |
| `cond ? a : b` | `a if cond else b` |
| `console.log(\`...${x}\`)` | `print(f"...{x}")` |
