/*
  Solution by TribalK
*/
class Solution {
    public int maxCoins(int[] piles) {
        Arrays.sort(piles);
        int numberOfTurns = piles.length / 3;

        int alicePtr = piles.length-1;
        int myTotal = 0;

        for(int i=0; i<numberOfTurns; i++) {
            int myPtr = alicePtr-1;

            myTotal += piles[myPtr];

            alicePtr -= 2;
        }

        return myTotal;
    }
}
