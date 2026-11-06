// Merge Overlapping Intervals: merge every overlapping (or touching) pair, return sorted by start.

// Approach 1: Brute — keep merging any overlapping pair until none are left.
// Time: ?, Space: ?
function mergeIntervalsBrute(A) {
  // TODO: write your solution here
  return [];
}

// Approach 2: Optimised.
// Time: ?, Space: ?
function mergeIntervals(intervals) {
  if (intervals.length === 0) return [];

  const sortedIntervals = [...intervals].sort((a, b) => a[0] - b[0]);
  const mergedIntervals = [[...sortedIntervals[0]]];

  for (let i = 1; i < sortedIntervals.length; i++) {
    const [currentStart, currentEnd] = sortedIntervals[i];
    const lastMerged = mergedIntervals[mergedIntervals.length - 1];

    if (lastMerged[1] < currentStart) {
      mergedIntervals.push([currentStart, currentEnd]);
    } else {
      lastMerged[1] = Math.max(lastMerged[1], currentEnd);
    }
  }

  return mergedIntervals;
}

const show = (M) => JSON.stringify(M);
const copy = (M) => M.map((row) => [...row]);

// Quick checks
const tests = [
  [[[1, 3], [2, 6], [8, 10], [15, 18]], [[1, 6], [8, 10], [15, 18]]],
  [[[1, 4], [4, 5]], [[1, 5]]], // touching intervals merge
  [[[1, 4], [2, 3]], [[1, 4]]], // one inside another
  [[[5, 7]], [[5, 7]]], // single interval
  [[[8, 10], [1, 3], [2, 6]], [[1, 6], [8, 10]]], // unsorted input
  [[[1, 2], [3, 4], [5, 6]], [[1, 2], [3, 4], [5, 6]]], // nothing overlaps
  [[[1, 10], [2, 3], [4, 5], [6, 7]], [[1, 10]]], // one big interval swallows the rest
  [[[1, 4], [0, 0]], [[0, 0], [1, 4]]], // zero-length interval
  [[[2, 3], [2, 2], [3, 3], [1, 3], [5, 7], [2, 2], [4, 6]], [[1, 3], [4, 7]]], // duplicates
  [[[0, 0], [0, 0]], [[0, 0]]],
];

for (const [A, expected] of tests) {
  const brute = mergeIntervalsBrute(copy(A));
  const fast = mergeIntervals(copy(A));
  const ok = show(brute) === show(expected) && show(fast) === show(expected);
  console.log(`${ok ? "PASS" : "FAIL"} A=${show(A)} brute=${show(brute)} fast=${show(fast)} expected=${show(expected)}`);
}

// Large cases (optimised only)
// 1) [[0,1], [2,3], [4,5], ...] -> 100000 intervals, none overlap
const apart = Array.from({ length: 100000 }, (_, i) => [2 * i, 2 * i + 1]);
let start = Date.now();
const apartLen = mergeIntervals(apart).length;
console.log(`${apartLen === 100000 ? "PASS" : "FAIL"} N=100000 no overlaps -> ${apartLen} intervals, expected 100000 (${Date.now() - start} ms)`);

// 2) [[0,2], [1,3], [2,4], ...] in reverse order -> everything chains into [0, 100001]
const chain = Array.from({ length: 100000 }, (_, i) => [99999 - i, 99999 - i + 2]);
start = Date.now();
const chained = mergeIntervals(chain);
console.log(`${show(chained) === "[[0,100001]]" ? "PASS" : "FAIL"} N=100000 chained -> ${show(chained)}, expected [[0,100001]] (${Date.now() - start} ms)`);
