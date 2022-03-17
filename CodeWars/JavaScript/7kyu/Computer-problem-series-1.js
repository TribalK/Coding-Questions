/*
  Solution by TribalK
*/
function save(sizes, hd) {
  let accumSize = 0;
  let fileCount = 0;
  for(let i=0; i<sizes.length; i++) {
    if(accumSize + sizes[i] <= hd) {
      fileCount++;
      accumSize += sizes[i];
    } else {
      break;
    }
  }

  return fileCount;
}
