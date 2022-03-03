/*
   Solution by TribalK
*/
function isDigit(s) {

  const convToNum = parseFloat(s);

  if(convToNum === null || convToNum === undefined || convToNum === NaN || convToNum != s) {
    return false;
  } else {
    return true;
  }
}
