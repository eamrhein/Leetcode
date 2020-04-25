const moveZeroes = function (nums) {
  let zeroCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount += 1;
      nums.splice(i, 1);
      i -= 1;
    }
  }
  const zeros = new Array(zeroCount).fill(0);
  nums.push.apply(nums, zeros);
};
