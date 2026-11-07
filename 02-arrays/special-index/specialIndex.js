// Special Index: count indices whose removal makes the even-index sum equal the odd-index sum.

function specialIndex(arr) {
  const n = arr.length;
  const evenPrefix = new Array(n + 1).fill(0);
  const oddPrefix = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    evenPrefix[i + 1] = evenPrefix[i] + (i % 2 === 0 ? arr[i] : 0);
    oddPrefix[i + 1] = oddPrefix[i] + (i % 2 === 1 ? arr[i] : 0);
  }


  let count = 0;
  for (let i = 0; i < n; i++) {
    const newEvenSum = evenPrefix[i] + (oddPrefix[n] - oddPrefix[i + 1]);
    const newOddSum = oddPrefix[i] + (evenPrefix[n] - evenPrefix[i + 1]);
    if (newEvenSum === newOddSum) count++;
  }
  return count;
  
}

// Quick checks
const tests = [
  [[2, 1, 6, 4], 1],
  [[1, 1, 1], 3],
  [[1, 2, 3], 0],
  [[4, 1, 4], 1],
  [[1], 1], // removing the only element leaves [], and 0 === 0
  [[-1, 2, -1], 1], // negative values
  [[5, -5, 0, 5], 1],
  [[-3, -3, -3, -3, -3], 5],
];

for (const [A, expected] of tests) {
  const got = specialIndex(A);
  console.log(`${got === expected ? "PASS" : "FAIL"} A=[${A}] got=${got} expected=${expected}`);
}

// Large case: 99,999 ones -> removing any index leaves 49,999 ones on each side.
// Rebuilding the array and re-summing for every index will take a long time here.
const big = new Array(99999).fill(1);
const start = Date.now();
const bigCount = specialIndex(big);
const ms = Date.now() - start;
console.log(`${bigCount === 99999 ? "PASS" : "FAIL"} N=99999 got=${bigCount} expected=99999 (${ms} ms)`);
