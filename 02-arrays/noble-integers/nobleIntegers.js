// Noble Integers: count elements where (number of elements strictly smaller) === the element itself.

function nobleIntegers(arr) {
  let sorted = [...arr].sort((a,b) => a-b )
  let noblecount = 0;
  let smallercount = 0;

  for(let i = 0; i < sorted.length; i++){
    let isNewValue  = i === 0 || sorted[i] !== sorted[i-1]
    if (isNewValue) smallercount = i
    if(smallercount === sorted[i]) noblecount++;

  }
  return noblecount
}

// Quick checks
const tests = [
  [[1, -5, 3, 5, -10, 4], 3],
  [[-10, 1, 1, 3, 100], 3], // duplicates: both 1s count
  [[-3, 0, 2, 5], 1],
  [[0], 1], // nothing is smaller than 0
  [[0, 0, 0], 3], // every copy counts
  [[1, 1, 1], 0], // no element is smaller than 1
  [[-1, -2, -3], 0], // negatives can never be noble
];

for (const [A, expected] of tests) {
  const got = nobleIntegers(A);
  console.log(`${got === expected ? "PASS" : "FAIL"} A=[${A}] got=${got} expected=${expected}`);
}

// Large case: [99999, 99998, ..., 0] -> every element is noble.
// Counting smaller elements for each element one by one will take a long time here.
const big = Array.from({ length: 100000 }, (_, i) => 99999 - i);
const start = Date.now();
const bigCount = nobleIntegers(big);
const ms = Date.now() - start;
console.log(`${bigCount === 100000 ? "PASS" : "FAIL"} N=100000 noble=${bigCount} expected=100000 (${ms} ms)`);
