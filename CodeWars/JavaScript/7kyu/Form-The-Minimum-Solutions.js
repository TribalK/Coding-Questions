/*
  Solution by TribalK
*/
function minValue(values){
  const duplicates = new Set(values.sort());
  return parseInt(Array.from(duplicates).join(''));
}
