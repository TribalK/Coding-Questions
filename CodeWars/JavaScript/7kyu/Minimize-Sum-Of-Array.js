/*
  Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

  Array/list will contain positives only.
  Array/list will always has even size.

  Solution by TribalK
*/
function minSum(arr) {
  return arr.sort((a,b) => a-b).reduce((accum,num,idx,arr) => {
      if(idx < arr.length/2) {
        accum += (num * arr[arr.length-1-idx]);
      }
      return accum;
  },0);
}
