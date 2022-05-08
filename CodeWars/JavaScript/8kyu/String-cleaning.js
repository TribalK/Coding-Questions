/*
  Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

  Solution by TribalK
*/
function stringClean(s){
  return s.split('').filter(x => isNaN(parseInt(x))).join('');
}
