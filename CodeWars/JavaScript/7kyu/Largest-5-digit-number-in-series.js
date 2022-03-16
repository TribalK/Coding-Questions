/*
  Solution by TribalK
*/
function solution(digits){
  let largestNum = 0;
  for(let i=0; i<digits.length; i++) {
    let currNumber = Number(digits.slice(i,i+5));

    if(currNumber > largestNum) {
      largestNum = currNumber;
    }
  }

  return largestNum;
}
