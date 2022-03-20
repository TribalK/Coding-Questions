/*
  Solution by TribalK
*/
const flip=(d, a)=>{
  if(d === 'R') return a.sort((x,y) => x-y);
  else return a.sort((x,y) => y-x);
}
