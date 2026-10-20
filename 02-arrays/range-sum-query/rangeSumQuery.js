// Range Sum Query: for each [L, R] in B, return A[L] + ... + A[R].

function rangeSumQuery(A, B) {
  // TODO: write your solution here
  return [];
}

// Quick checks
const tests = [
  [[1, 2, 3, 4, 5], [[0, 3], [1, 2]], [10, 5]],
  [[2, 2, 2], [[0, 0], [1, 2]], [2, 4]],
  [[5], [[0, 0]], [5]], // single element
  [[1, 2, 3, 4, 5], [[0, 4], [4, 4], [2, 3]], [15, 5, 7]], // whole array, last element
  [[1000000000, 1000000000, 1000000000], [[0, 2]], [3000000000]], // big values
];

for (const [A, B, expected] of tests) {
  const got = rangeSumQuery(A, B);
  const ok = JSON.stringify(got) === JSON.stringify(expected);
  console.log(`${ok ? "PASS" : "FAIL"} A=[${A}] B=${JSON.stringify(B)} got=[${got}] expected=[${expected}]`);
}
