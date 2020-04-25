// Given an integer array nums, find the contiguous subarray (containing at least one
// number) which has the largest sum and return its sum.
// Example : 6
// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

const example = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // 6

function maxSubArray(numbers) {
  let index = 0;
  // set max & currMax to first num in array
  let max = numbers[index];
  let currMax = numbers[index];
  while (index < numbers.length) {
    // set the current max to either array[index] or the running current max;
    currMax = Math.max(numbers[index], currMax + numbers[index]);
    // if the current max is greater than the running max set it to max
    max = Math.max(max, currMax);
    index += 1;
  }
  return max;
}
maxSubArray(example);
