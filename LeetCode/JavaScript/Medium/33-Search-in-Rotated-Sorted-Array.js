/*
  There is an integer array nums sorted in ascending order (with distinct values).

  Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

  Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

  You must write an algorithm with O(log n) runtime complexity.

  Solution by TribalK in O(log n) runtime complexity
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // Binary Search: achieves O(log n) time complexity
    let start = 0;
    let end = nums.length-1;

    // Run until the target was found or one barrier touches the other
    while(start < end) {
        // Get middle index
        const mid = Math.floor(start + (end-start)/2);

        // Check if we have hit the target
        if(nums[mid] === target) {
            return mid;
        // Determine if the rotation will affect our movement
        } else if(nums[mid] > nums[end]) {
            if(target <= nums[end] || target > nums[mid]) {
                start = mid+1;
            } else {
                end = end-1;
            }
        } else {
            if(target > nums[end] || target < nums[mid]) {
                end = end-1;
            } else {
                start = start+1;
            }
        }
    }

    // Either the current position holds our target, or return -1, failed search.
    return (nums[end] === target) ? end : -1;
};
