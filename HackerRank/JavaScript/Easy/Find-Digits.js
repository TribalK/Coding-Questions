/*
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

 /*
  Solution by TribalK
 */
function findDigits(n) {
    return n.toString().split('').map(x => parseInt(x)).reduce((countDivisors, number) => {
        if(n % number === 0) {
            countDivisors++;
        }
        return countDivisors;
    },0);
}
