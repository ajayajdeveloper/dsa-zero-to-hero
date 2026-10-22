// Range Sum Query: for each [left, right] in queries, return nums[left] + ... + nums[right].

function rangeSumQuery(nums, queries) {
  // prefixSum[i] = nums[0] + nums[1] + ... + nums[i]
  const prefixSum = new Array(nums.length);
  prefixSum[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i];
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
