// Subarray in Given Range: return A[B..C], both ends included.

function subarrayInRange(A, B, C) {

  const subArray = []
   for(let i = B; i <= C; i++){
    subArray.push(A[i])
   }
  return subArray
}

// Quick checks
const tests = [
  [[4, 3, 2, 6], 1, 3, [3, 2, 6]],
  [[4, 2, 2], 0, 1, [4, 2]],
  [[7, 8, 9], 1, 1, [8]], // B == C -> one element
  [[1, 2, 3, 4], 0, 3, [1, 2, 3, 4]], // whole array
  [[5], 0, 0, [5]], // single element array
];

for (const [A, B, C, expected] of tests) {
  const got = subarrayInRange(A, B, C);
  const ok = JSON.stringify(got) === JSON.stringify(expected);
  console.log(`${ok ? "PASS" : "FAIL"} A=[${A}] B=${B} C=${C} got=[${got}] expected=[${expected}]`);
}
