// Special Index: count indices whose removal makes the even-index sum equal the odd-index sum.

function specialIndex(arr) {
  // TODO: write your solution here
  return 0;
}

// Quick checks
const tests = [
  [[2, 1, 6, 4], 1],
  [[1, 1, 1], 3],
  [[1, 2, 3], 0],
  [[4, 1, 4], 1],
  [[1], 1], // removing the only element leaves [], and 0 === 0
];

for (const [arr, expected] of tests) {
  const got = specialIndex(arr);
  console.log(`${got === expected ? "PASS" : "FAIL"} arr=[${arr}] got=${got} expected=${expected}`);
}
