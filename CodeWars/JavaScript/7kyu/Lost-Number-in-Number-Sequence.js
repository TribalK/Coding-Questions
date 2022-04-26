/*
  An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

  If no number was deleted from the starting array, your function should return the int 0.

  Note: N may be 1 or less (in the latter case, the first array will be []).

  Solution by TribalK
*/
function findDeletedNumber(arr, mixArr) {
  return Math.floor((arr.length)*(arr.length+1)/2) - mixArr.reduce((accum, num) => accum + num,0);
}
