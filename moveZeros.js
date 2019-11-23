var moveZeroes = function(nums) {
    let zeroCount = 0;
    nums.forEach((num) => {
        if (num === 0) {
            zeroCount += 1;
        }
    })
    for(let i = 0; i < nums.length; i++) {
      if(num === 0) {
        nums.splice(i, 1);
      }
    }
    let zeros = new Array(zeroCount).fill(0)
    nums.push.apply(nums, zeros)
};
