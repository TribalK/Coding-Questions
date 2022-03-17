/*
   Solution by TribalK
*/
function vaporcode(string) {
  return string.toUpperCase().split('').filter(letter => letter != ' ').join('  ');
}
