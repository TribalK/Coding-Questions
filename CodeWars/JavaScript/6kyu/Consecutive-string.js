/*
  You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

  n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

  Solution by TribalK
*/

function longestConsec(strarr, k) {
  const arrLen = strarr.length;
  //Returning base cases
  if(arrLen == 0 || k > arrLen || k <= 0) {
    return "";
  }

  let concatStr = "";
  let subStrStartPos = strarr[0].length;  // preparing for first removal of word

  //Implementing a sliding window type concatentation process
  for(let i=0; i<k; i++) {
    concatStr = concatStr.concat(strarr[i]);
  }

  //Set initial longest word
  let longestStrWord = concatStr;

  //Loop through remaining strings
  for(let i=k; i<arrLen; i++) {
    //Cutoff point is the start position variable, everything starting from that point is our new substring to concatenate to.
    concatStr = concatStr.slice(subStrStartPos).concat(strarr[i]);
    subStrStartPos = strarr[i-k+1].length; //calculate position based on next word to remove

    //Comparison of longest word with our current string
    if(concatStr.length > longestStrWord.length) {
      longestStrWord = concatStr;
    }
  }

  return longestStrWord;
}
