/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 /*
   Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

   We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

   You must solve this problem without using the library's sort function.

   Solution by TribalK
 */
var sortColors = function(nums) {
    const colorSpec = ['0','1','2'];
    let changeMade = 0;

    let countValues = nums.reduce((colorSpec, num) => {
        if(num in colorSpec) {
            colorSpec[num]++;
        } else {
            colorSpec[num] = 1;
        }

        return colorSpec;
    }, {});

    for(let key in countValues) {
        for(let i=changeMade; i<changeMade+countValues[key]; i++) {
            nums[i] = Number(key);
        }
        changeMade += countValues[key];
    }
};
