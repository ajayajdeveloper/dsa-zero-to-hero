// Count Factors: given a positive integer n, return how many numbers divide n exactly.

// Approach 1: Brute force — try every number from 1 to n.
// Time: O(n), Space: O(1)
function countFactorsBrute(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count++;
  }
  return count;
}

// Approach 2: Optimized — factors come in pairs (i, n / i).
// Only check up to √n; each hit gives two factors, except when i === n / i.
// Time: O(√n), Space: O(1)
function countFactors(n) {
  let count = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      count += i === n / i ? 1 : 2;
    }
  }
  return count;
}

// Quick checks
const tests = [
  [1, 1],
  [7, 2],
  [12, 6], // 1, 2, 3, 4, 6, 12
  [16, 5], // 1, 2, 4, 8, 16 (4 counted once)
  [24, 8],
];

for (const [n, expected] of tests) {
  const brute = countFactorsBrute(n);
  const fast = countFactors(n);
  const ok = brute === expected && fast === expected;
  console.log(`${ok ? "PASS" : "FAIL"} n=${n} brute=${brute} fast=${fast} expected=${expected}`);
}
