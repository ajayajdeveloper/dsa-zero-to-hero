// Rotate Array: rotate A to the right B times.

function rotateArray(A, B) {
  const n = A.length;
  const k = B % n;
  reverseArray(A, 0, n - 1);
  reverseArray(A, 0, k - 1);
  reverseArray(A, k, n - 1);
  return A;
}

function reverseArray(arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

// Quick checks
const tests = [
  [[1, 2, 3, 4], 2, [3, 4, 1, 2]],
  [[2, 5, 6], 1, [6, 2, 5]],
  [[1, 2, 3], 4, [3, 1, 2]], // B > N
  [[1, 2, 3], 3, [1, 2, 3]], // B == N -> unchanged
  [[7], 1000000000, [7]],
];

for (const [A, B, expected] of tests) {
  const got = rotateArray([...A], B);
  const ok = JSON.stringify(got) === JSON.stringify(expected);
  console.log(`${ok ? "PASS" : "FAIL"} A=[${A}] B=${B} got=[${got}] expected=[${expected}]`);
}
