// Even Index Range Sum: for each [L, R] in B, sum A[i] for every even i in L..R.

function evenIndexRangeSum(A, B) {
  const nums = A;
  const queries = B;

  // prefixSum[i] = sum of nums[j] for every even j in 0..i
  const prefixSum = new Array(nums.length);
  prefixSum[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // even index: add it; odd index: carry the running total forward unchanged
    prefixSum[i] = i % 2 === 0 ? prefixSum[i - 1] + nums[i] : prefixSum[i - 1];
  }

  const rangeSums = [];
  for (const [left, right] of queries) {
    const sumBeforeLeft = left === 0 ? 0 : prefixSum[left - 1];
    rangeSums.push(prefixSum[right] - sumBeforeLeft);
  }
  return rangeSums;
}

// Quick checks
const tests = [
  [[1, 2, 3, 4, 5], [[0, 4], [1, 3], [2, 2], [1, 1]], [9, 3, 3, 0]],
  [[2, 1, 8, 3, 9, 6], [[0, 3], [3, 5], [1, 3]], [10, 9, 8]],
  [[-1, -2, -3, -4], [[0, 3], [1, 2]], [-4, -3]], // negatives
  [[5], [[0, 0]], [5]], // single element
  [[4, 7], [[1, 1]], [0]], // only an odd index in range
];

for (const [A, B, expected] of tests) {
  const got = evenIndexRangeSum(A, B);
  const ok = JSON.stringify(got) === JSON.stringify(expected);
  console.log(`${ok ? "PASS" : "FAIL"} A=[${A}] B=${JSON.stringify(B)} got=[${got}] expected=[${expected}]`);
}
