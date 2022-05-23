/*
  The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.
  
  Solution by TribalK
*/
function partsSums(ls) {
    let lsSumParts = [];
    let currentSum = ls.reduce((accum, num) => accum + num, 0);
    lsSumParts.push(currentSum);
    ls.reduce((remaining, num) => {
        lsSumParts.push(remaining-num);
        return remaining - num;
      }, currentSum);

    return lsSumParts;
}
