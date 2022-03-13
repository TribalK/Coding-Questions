/*
  Solution by TribalK
*/
String.prototype.toJadenCase = function () {

  let splitArr = this.split(' ');
  let JadenString = [];

  for(str of splitArr) {
    JadenString.push(str[0].toUpperCase() + str.slice(1,str.length));
  }

  return JadenString.join(' ');
};
