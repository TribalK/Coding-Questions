public class Solution {
    public int MaxSubArray(int[] nums) {
        int arrLength = nums.Length;
        int maximumSum = Int32.MinValue;
        int continuousSum = 0;

        //Make decision at each step to either continue with the current
        //max sum of the built array, or start fresh with the current array element,
        //based on whichever holds the maximum.
        for(int i=0; i<arrLength; i++) {
            continuousSum = Math.Max(continuousSum+nums[i],nums[i]);
            maximumSum = Math.Max(continuousSum,maximumSum);
        }

        return maximumSum;
    }
}
