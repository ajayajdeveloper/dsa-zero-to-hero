// Count AG Pairs: count pairs (i, j) with A[i] = 'A', A[j] = 'G' and i < j.

function countAgPairs(A) {
  let count_a = 0
  let pairs = 0
   for(let i = 0; i < A.length; i++){
    let curr = A[i];
    if(curr === 'A'){
      count_a++;
    }else if(curr === 'G'){
      pairs+= count_a

    }
   }
  return pairs;
}

// Quick checks
const tests = [
  ["ABCGAG", 3],
  ["GAB", 0],
  ["AAGG", 4], // every A pairs with every G
  ["GGAA", 0], // all G's come before the A's
  ["A", 0],
  ["BCD", 0], // no A or G at all
];

for (const [A, expected] of tests) {
  const got = countAgPairs(A);
  console.log(`${got === expected ? "PASS" : "FAIL"} A="${A}" got=${got} expected=${expected}`);
}

// Large case: 50,000 A's then 50,000 G's -> 50,000 * 50,000 pairs.
// A nested-loop solution will take a long time here; a single pass finishes instantly.
const big = "A".repeat(50000) + "G".repeat(50000);
const start = Date.now();
const bigGot = countAgPairs(big);
const ms = Date.now() - start;
console.log(`${bigGot === 2500000000 ? "PASS" : "FAIL"} N=100000 got=${bigGot} expected=2500000000 (${ms} ms)`);
