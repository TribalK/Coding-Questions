/**
 * @param {number[]} nums
 * @return {number}
 */

 /*
 Solution by TribalK
 */
var missingNumber = function(nums) {
    const numsLen = nums.length;
    const totalFromMax = (numsLen*(numsLen+1))/2;

    const valueRemaining = nums.reduce((previous, curr) => previous - curr,totalFromMax);

    return valueRemaining;
};
