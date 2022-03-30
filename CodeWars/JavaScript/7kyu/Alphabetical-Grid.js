/*
  You need to write a function grid that returns an alphabetical grid of size NxN, where a = 0, b = 1, c = 2....
  
  Solution by TribalK
*/
function grid(N) {
  if(N < 0) {
    return null;
  }

  let alphaString = '';
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for(let i=0; i<N; i++) {
    for(let j=0; j<N; j++) {
      let appStr = "";
      if(i+j >= alphabet.length) {
        appStr = alphabet[(i+j) % alphabet.length] + " ";
      } else {
        appStr = alphabet[i+j] + " ";
      }

      alphaString += appStr;
    }

    alphaString = alphaString.trim() + '\n';
  }

  return alphaString.slice(0,-1);
}
