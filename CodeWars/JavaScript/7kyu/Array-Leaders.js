/*
  An element is leader if it is greater than The Sum all the elements to its right side.

  Array/list size is at least 3.

  Array/list's numbers Will be mixture of positives, negatives and zeros

  Repetition of numbers in the array/list could occur.

  Returned Array/list should store the leading numbers in the same order in the original array/list.

  Solution by TribalK
*/
function arrayLeaders(numbers){
  let sumOfElements = numbers.reduce((accum, num) => accum + num,0);
  let arrSumToRight = [];
  for(let i=0; i<numbers.length; i++) {
    sumOfElements -= numbers[i];
    arrSumToRight.push(sumOfElements);
  }
  return numbers.filter((num, idx) => num > arrSumToRight[idx]);
}
