
// this function can handle most cases of elements except in the case multidimentional object.
const majorityElement = function(nums) {
    // An element is majority when more than half the
    // elements in the array are equal to it.
    let majority = parseInt(nums.length / 2);
    //create  a hashmap to count elements;
    let hashmap = {}
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        // if the hashmap at num isnt initialized add it starting at 0;
        if(!hashmap[num]){
            hashmap[num] = 0;
        }
            hashmap[num] += 1;
        // when the threshold is reached return num;
        if (hashmap[num] > majority) {
            return (num);
        }
    }
    // if the criteria are not met return null;
    return null;
};
