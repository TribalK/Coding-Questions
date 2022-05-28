/*
  You have been hired by a major MP3 player manufacturer to implement a new music compression standard. In this kata you will implement the ENCODER, and its companion kata deals with the DECODER. It can be considered a harder version of Range Extraction.

  Specification
  The input signal is represented as an array of integers. Several cases of regularities can be shortened.

  A sequence of 2 or more identical numbers is shortened as number*count
  A sequence of 3 or more consecutive numbers is shortened as first-last. This is true for both ascending and descending order
  A sequence of 3 or more numbers with the same interval is shortened as first-last/interval. Note that the interval does NOT need a sign
  Compression happens left to right
  Examples
  [1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20] is compressed to "1,3-5,7-11,14,15,17-20"
  [0, 2, 4, 5, 7, 8, 9] is compressed to "0-4/2,5,7-9"
  [0, 2, 4, 5, 7, 6, 5] is compressed to "0-4/2,5,7-5"
  [0, 2, 4, 5, 7, 6, 5, 5, 5, 5, 5] is compressed to "0-4/2,5,7-5,5*4"
  Input
  A non-empty array of integers

  Output
  A string of comma-separated integers and sequence descriptors

  Solution by TribalK
*/
function compress(music) {
  let compressStr = "";
  let i=0; // Pointer to move along

  while(i < music.length) {
    const ctrIdentical = processIdentical(music, i);
    const ctrConsecutive = processConsecutive(music, i);
    const intervalAndPattern = processInterval(music, i);

    if(ctrIdentical >= 2) {
      compressStr += (compressStr.length > 0 ? ',' : '') + `${music[i]}*${ctrIdentical}`;
      i += ctrIdentical;
    } else if(ctrConsecutive >= 3) {
      compressStr += (compressStr.length > 0 ? ',' : '') + `${music[i]}-${music[i+ctrConsecutive-1]}`;
      i += ctrConsecutive;
    } else if(intervalAndPattern[0] >= 3) {
      compressStr += (compressStr.length > 0 ? ',' : '') + `${music[i]}-${music[i+intervalAndPattern[0]-1]}/${Math.abs(intervalAndPattern[1])}`;
      i += intervalAndPattern[0];
    } else {
      compressStr += (compressStr.length > 0 ? ',' : '') + music[i];
      i++;
    }
  }

  return compressStr;
}

const processIdentical = (music, idxStart) => {
  let count = 1;
  let curPtr = idxStart+1;

  while(curPtr < music.length && music[curPtr] === music[idxStart]) {
    count++;
    curPtr++;
  }

  return count;
}

function processConsecutive(music, idxStart) {
  let count = 1;
  let pattern = 0;
  let curPtr = idxStart+1;

  if(curPtr >= music.length) {
    return count;
  } else if(music[curPtr]-music[idxStart] === 1) {
    pattern = 1;
  } else if(music[curPtr]-music[idxStart] === -1) {
    pattern = -1;
  } else {
    return count;
  }

  while(curPtr < music.length && music[curPtr]-music[idxStart] === pattern) {
    pattern += (pattern > 0 ? 1 : -1);
    count++;
    curPtr++;
  }

  return count;
}

function processInterval(music, idxStart) {
  let count = 1;
  let pattern = 0;
  let patternLock = 0;
  let curPtr = idxStart+1;

  if(curPtr >= music.length) {
    return [count,0];
  } else {
    pattern = music[curPtr]-music[idxStart];
    patternLock = pattern;
  }

   while(curPtr < music.length && music[curPtr]-music[idxStart] === pattern) {
    pattern += patternLock;
    count++;
    curPtr++;
  }

  return [count,patternLock];
}
