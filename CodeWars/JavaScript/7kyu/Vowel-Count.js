/*
  Solution by TribalK
*/
function getCount(str) {
  return str.split('').filter(char =>(char === 'a')||(char === 'e')||(char === 'i')||(char === 'o')||(char === 'u')).length;
}
