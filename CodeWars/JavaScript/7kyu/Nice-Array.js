/*
  Solution by TribalK
*/
function isNice(arr){
  let llNiceArr = true;

  if(arr.length == 0) {
    llNiceArr = false;
  }

  arr.forEach((x,i,a) => {
    if(a.indexOf(x+1) < 0 && a.indexOf(x-1) < 0) {
      llNiceArr = false;
    }
  });

  return llNiceArr;
}
