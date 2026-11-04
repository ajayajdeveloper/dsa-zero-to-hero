// Leaders in an Array: return every element strictly greater than all elements to its right.

function leadersInArray(arr) {
  const n = arr.length;
  const res = [];
  let maxRight = -Infinity;

  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] > maxRight) {
      res.push(arr[i]);
      maxRight = arr[i];
    }
  }

  return res.reverse();
}

// Quick checks (order doesn't matter, so both sides are sorted before comparing)
const tests = [
  [[16, 17, 4, 3, 5, 2], [17, 5, 2]],
  [[5, 4], [5, 4]],
  [[1, 2, 3, 4], [4]], // increasing -> only the last one
  [[9, 7, 5, 3], [9, 7, 5, 3]], // decreasing -> every element
  [[7], [7]], // single element
];

const sorted = (arr) => [...arr].sort((a, b) => a - b);

for (const [A, expected] of tests) {
  const got = leadersInArray(A);
  const ok = JSON.stringify(sorted(got)) === JSON.stringify(sorted(expected));
  console.log(`${ok ? "PASS" : "FAIL"} A=[${A}] got=[${got}] expected=[${expected}]`);
}

// Large case: 100,000 decreasing numbers -> every element is a leader.
// Checking each element against everything to its right will take a long time here.
const big = Array.from({ length: 100000 }, (_, i) => 100000 - i);
const start = Date.now();
const bigCount = leadersInArray(big).length;
const ms = Date.now() - start;
console.log(`${bigCount === 100000 ? "PASS" : "FAIL"} N=100000 leaders=${bigCount} expected=100000 (${ms} ms)`);
