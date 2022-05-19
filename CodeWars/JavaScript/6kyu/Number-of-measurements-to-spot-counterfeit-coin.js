/*
  Determine what is the minimum amount of weighings it will take to measure n coins in every possible occurrence (including worst case scenario, ie: without relying on luck at all).

  n is guaranteed to be a positive integer.

  Solution by TribalK
*/
function howManyMeasurements(n){
  const coinsToMeasure = Math.ceil(n);

  if(coinsToMeasure <= 1) {
    return 0;
  }

  return 1 + howManyMeasurements(coinsToMeasure/3);
}
