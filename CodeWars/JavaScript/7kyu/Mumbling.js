/*
  Solution by TribalK
*/
function accum(s) {
	// your code
  const letterAccum = s.split('');
  let strAccumJoined = "";

  letterAccum.forEach((x,i,a)=> strAccumJoined += x.substring(0,1).toUpperCase() + x.repeat(i).toLowerCase() + (i !== a.length-1 ? '-' : ''));

  return strAccumJoined;
}
