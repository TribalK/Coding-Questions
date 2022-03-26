/*
  Solution by TribalK
*/
function broken(x){
  return x.split('').map(x => x === '1' ? '0' : '1').join('');
}
