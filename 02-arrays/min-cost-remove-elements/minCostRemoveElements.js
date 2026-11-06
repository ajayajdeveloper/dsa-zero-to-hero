// Min Cost to Remove All Elements: removing an element costs the sum of all elements still present.
// Return the minimum total cost to empty the array.

// Approach 1: Brute force — try every removal order.
// Time: ?, Space: ?
function minCostBrute(A) {
  // TODO: write your solution here
  return 0;
}

// Approach 2: Optimised.
// Time: ?, Space: ?
function minCost(A) {
  let descSorted = [...A.sort((a,b) => b-a)]
  let minRemoval =  0;

  for(let i = 0; i < descSorted.length ; i++){
    minRemoval += descSorted[i] * (i + 1);
  }
  return  minRemoval
}

// Quick checks (small enough for brute force)
const tests = [
  [[2, 1], 4],
  [[5], 5],
  [[1, 2, 3], 10],
  [[4, 4, 4], 24], // duplicates
  [[3, 1, 5, 2], 21],
  [[1, 10, 100, 1000], 1234],
  [[7, 7, 1, 2, 9, 3], 72],
];

for (const [A, expected] of tests) {
  const brute = minCostBrute([...A]);
  const fast = minCost([...A]);
  const ok = brute === expected && fast === expected;
  console.log(`${ok ? "PASS" : "FAIL"} A=[${A}] brute=${brute} fast=${fast} expected=${expected}`);
}

// Large case (optimised only): A = [1, 2, ..., 1000]
const big = Array.from({ length: 1000 }, (_, i) => i + 1);
const bigCost = minCost(big);
console.log(`${bigCost === 167167000 ? "PASS" : "FAIL"} N=1000 cost=${bigCost} expected=167167000`);
