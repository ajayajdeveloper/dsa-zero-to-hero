// Count Even Numbers in Range: for each [L, R] in B, count the even values in A[L..R].

function countEvenInRange(A, B) {
  // TODO: write your solution here
  return [];
}

// Quick checks
const tests = [
  [[1, 2, 3, 4, 5], [[0, 2], [2, 4], [1, 4]], [1, 1, 2]],
  [[2, 1, 8, 3, 9, 6], [[0, 3], [3, 5], [1, 3], [2, 4]], [2, 1, 1, 1]],
  [[1, 3, 5, 7], [[0, 3], [1, 2]], [0, 0]], // no even numbers
  [[2, 4, 6], [[0, 2], [1, 1]], [3, 1]], // all even
  [[7], [[0, 0]], [0]], // single odd element
  [[8], [[0, 0]], [1]], // single even element
];

for (const [A, B, expected] of tests) {
  const got = countEvenInRange(A, B);
  const ok = JSON.stringify(got) === JSON.stringify(expected);
  console.log(`${ok ? "PASS" : "FAIL"} A=[${A}] B=${JSON.stringify(B)} got=[${got}] expected=[${expected}]`);
}
