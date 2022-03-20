/**
 * @param {number[]} nums
 * @return {number}
 */
 /*
  Solution by TribalK
 */
var majorityElement = function(nums) {
    dupMap = new Map();
    const halfSize = nums.length/2;
    let majorityNum = 0;

    for(let i=0; i<nums.length; i++){
        if(dupMap.has(nums[i])) {
            let value = dupMap.get(nums[i]);
            dupMap.set(nums[i],++value);
        } else {
            dupMap.set(nums[i],1);
        }
    }

    dupMap.forEach((value, key) => {
        if(value > halfSize) {
            majorityNum = key;
        }
    });

    return majorityNum;
};
