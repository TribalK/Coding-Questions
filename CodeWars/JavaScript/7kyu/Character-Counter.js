/*
  Solution by TribalK
*/
function validateWord(s)
{
  const objCount = s.toLowerCase().split('').reduce((groupTypes,elem) => {
    if(elem in groupTypes) {
      groupTypes[elem]++;
    } else {
      groupTypes[elem] = 1;
    }

    return groupTypes;
  },{});

  const sizeOfDiffChars = new Set(Object.values(objCount));

  return sizeOfDiffChars.size > 1 ? false : true;
}
