/**
 * @param {number[]} nums
 * @return {boolean}
 */
 /*
  Solution by TribalK
 */
var containsDuplicate = function(nums) {
    dupSet = new Set();

    for(let number of nums) {
        if(dupSet.has(number)) {
            return true;
        } else {
            dupSet.add(number);
        }
    }
    return false;
};
