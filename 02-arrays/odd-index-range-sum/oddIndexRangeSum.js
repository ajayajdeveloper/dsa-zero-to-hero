// Odd Index Range Sum: for each [L, R] in B, sum A[i] for every odd i in L..R.

function oddIndexRangeSum(A, B) {
  const nums = A;
  const queries = B;

  // prefixSum[i] = sum of nums[j] for every odd j in 0..i
  const prefixSum = new Array(nums.length);
  prefixSum[0] = 0; // index 0 is even, so nothing is added yet
  for (let i = 1; i < nums.length; i++) {
    // odd index: add it; even index: carry the running total forward unchanged
    prefixSum[i] = i % 2 === 1 ? prefixSum[i - 1] + nums[i] : prefixSum[i - 1];
  }

  const rangeSums = [];
  for (const [left, right] of queries) {
    // sum(left..right) = sum(0..right) - sum(0..left-1); when left is 0 there is nothing to subtract
    const sumBeforeLeft = left === 0 ? 0 : prefixSum[left - 1];
    rangeSums.push(prefixSum[right] - sumBeforeLeft);
  }
  return rangeSums;
}

// Quick checks
const tests = [
  [[1, 2, 3, 4, 5], [[0, 4], [1, 3], [2, 2], [1, 1]], [6, 6, 0, 2]],
  [[2, 1, 8, 3, 9, 6], [[0, 3], [3, 5], [1, 3]], [4, 9, 4]],
  [[-1, -2, -3, -4], [[0, 3], [1, 2]], [-6, -2]], // negatives
  [[5], [[0, 0]], [0]], // single element at index 0 (even)
  [[4, 7], [[0, 0]], [0]], // only an even index in range
];

for (const [A, B, expected] of tests) {
  const got = oddIndexRangeSum(A, B);
  const ok = JSON.stringify(got) === JSON.stringify(expected);
  console.log(`${ok ? "PASS" : "FAIL"} A=[${A}] B=${JSON.stringify(B)} got=[${got}] expected=[${expected}]`);
}
