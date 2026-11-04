// All Subarrays: return every contiguous subarray of A.

function allSubarrays(A) {
  const n = A.length;
  const subarrays = [];

  for (let start = 0; start < n; start++) {
    for (let end = start; end < n; end++) {
      // build a fresh array for this (start, end) pair
      const subarray = [];
      for (let k = start; k <= end; k++) {
        subarray.push(A[k]);
      }
      subarrays.push(subarray);
    }
  }

  return subarrays;
}

// Quick checks (order doesn't matter, so both sides are sorted before comparing)
const tests = [
  [[1, 2, 3], [[1], [1, 2], [1, 2, 3], [2], [2, 3], [3]]],
  [[5, 2, 1, 4], [[5], [5, 2], [5, 2, 1], [5, 2, 1, 4], [2], [2, 1], [2, 1, 4], [1], [1, 4], [4]]],
  [[1, 1], [[1], [1, 1], [1]]], // duplicates count separately
  [[7], [[7]]], // single element
];

const normalize = (subarrays) => subarrays.map((s) => JSON.stringify(s)).sort();

for (const [A, expected] of tests) {
  const got = allSubarrays([...A]);
  const ok = JSON.stringify(normalize(got)) === JSON.stringify(normalize(expected));
  console.log(`${ok ? "PASS" : "FAIL"} A=[${A}] got=${JSON.stringify(got)} expected=${JSON.stringify(expected)}`);
}

// Size check: an array of N elements has N * (N + 1) / 2 subarrays
const big = Array.from({ length: 100 }, (_, i) => i + 1);
const bigCount = allSubarrays(big).length;
console.log(`${bigCount === 5050 ? "PASS" : "FAIL"} N=100 count=${bigCount} expected=5050`);
