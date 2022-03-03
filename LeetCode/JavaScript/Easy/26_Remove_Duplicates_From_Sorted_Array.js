/**
 * @param {number[]} nums
 * @return {number}
 */

 /*
    Solution by TribalK
 */
var removeDuplicates = function(nums) {

    //Using three pointers:
        //one for the current position (i),
        //one for the previous position (j),
        //one as the value to be updated each pass (with locking mechanism)

    //k will be locked if i and j are duplicates

    let k=1;
    for(let i=1, j=0; i<nums.length; i++, j++) {

        //Move
        if(nums[i] === nums[j]) {
            //Replace
            nums[k] = nums[i];
        } else {
            //Replace and increment k
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};
