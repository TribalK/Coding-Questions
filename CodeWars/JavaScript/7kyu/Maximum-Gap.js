/*
  Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

  Array/list size is at least 3 .

  Array/list's numbers Will be mixture of positives and negatives also zeros_

  Repetition of numbers in the array/list could occur.

  The Maximum Gap is computed Regardless the sign.

  Solution by TribalK
*/
function maxGap (numbers){
  return numbers.sort((a,b) => a-b).reduce((accum, num, idx, arr) => {
    if(idx == 0) return 0;
    else return Math.abs(arr[idx-1]-num) > accum ? Math.abs(arr[idx-1]-num) : accum;
  },0);
}
