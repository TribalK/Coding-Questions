function sumOfMinimums(arr) {
  // your code here
  let totalOfMinimums = 0;
  for(let row=0; row<arr.length; row++) {
    let minimumOfRow = Number.MAX_VALUE;
    for(let each of arr[row]) {
        if(each < minimumOfRow) {
          minimumOfRow = each;
        }
    }
    totalOfMinimums += minimumOfRow;
  }

  return totalOfMinimums;
}
