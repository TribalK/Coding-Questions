/*
  Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

  [4,5,6,7,0,1,2] if it was rotated 4 times.
  [0,1,2,4,5,6,7] if it was rotated 7 times.
  Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

  Given the sorted rotated array nums of unique elements, return the minimum element of this array.

  You must write an algorithm that runs in O(log n) time.

  Solution by TribalK
*/

class Solution {
public:
    int findMin(vector<int>& nums) {
        //will never move, used to prevent erroring when comparing nearby elements
        int leftBarrier = 0;
        int rightBarrier = nums.size()-1;

        //moves based on binary search
        int pointL = 0;
        int pointR = nums.size()-1;

        //Using a binary search methodology:

        while(pointL < pointR) {
            //Find the middle element of the array
            int mid = pointL+(pointR - pointL)/2;

            //Change course direction based on rotation
            if(nums[mid] > nums[pointR]) {
                pointL = mid+1;
            } else {
                pointR = mid;
            }

        }

        return nums[pointL]; // either pointL or pointR works here
    }
};
