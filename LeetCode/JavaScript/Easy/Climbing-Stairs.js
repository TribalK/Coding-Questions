/**
 * @param {number} n
 * @return {number}
 */

 /*
  Solution by TribalK
 */
var climbStairs = function(n) {
    const numberOfStairsIterations = [];

    numberOfStairsIterations.push(1);
    numberOfStairsIterations.push(1);

    for(let i=2; i<=n; i++) {
        numberOfStairsIterations.push(numberOfStairsIterations[i-1] + numberOfStairsIterations[i-2]);
    }

    return numberOfStairsIterations[n];
};
