/*
  Solution by TribalK
*/
function persistence(num) {
  let initialNumber = 1;
  let numberOfPersistence = 0;

  //Performing the reduce funtion on each character to multiply it's digits together
  //The resulting number is written back into num to determine if it is a single digit or not.
  while(num > 9) {
      num = num.toString().split('').reduce((previousNum, currentNum) => previousNum * currentNum,
                                              initialNumber);

    numberOfPersistence++;
  }

  return numberOfPersistence;
}
