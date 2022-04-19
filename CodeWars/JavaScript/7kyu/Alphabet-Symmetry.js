/*
  Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word.

  Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

  Solution by TribalK
*/
function solve(arr){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let symmetryArr = [];

  for(let i=0; i<arr.length; i++) {
    let symmetryCnt = 0;
    for(let j=0; j<arr[i].length; j++) {
      if(alphabet.indexOf(arr[i][j].toLowerCase())+1 === j+1) {
        symmetryCnt++;
      }
    }
    symmetryArr.push(symmetryCnt);
  }

  return symmetryArr;
};
