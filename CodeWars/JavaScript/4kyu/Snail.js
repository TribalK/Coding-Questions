/*
  Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

  NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

  NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

  Solution by TribalK
*/
snail = function(array) {
  const arrSize = array.length;
  const arrRowSize = array[0].length;

  // Return if no elements in our array
  if(arrRowSize == 0) {
    return [];
  }

  // Arrays for movement patterns
  const movePathX = [0, 1, 0, -1];
  const movePathY = [1, 0, -1, 0];

  let arrSnailSorted = [];
  let visited = [];
  let curPosX = 0;
  let curPosY = 0;
  let directionsChanged = 0;
  let elemRemaining = arrSize ** 2;

  // Fill array of visited elements -> to indicate if a direction change is necessary
  for(let i=0; i<arrSize; i++) {
    let visitedRow = [];
    for(let j=0; j<arrSize; j++) {
      visitedRow.push(false);
    }
    visited.push(visitedRow);
  }

  // Process start position
   visited[curPosX][curPosY] = true;
   arrSnailSorted.push(array[curPosX][curPosY]);
   elemRemaining--;

  while (elemRemaining > 0) {
    // Determine the next position to move
    let nextMoveX = movePathX[directionsChanged % 4];
    let nextMoveY = movePathY[directionsChanged % 4];

    // Condition to see if we can either move to our next position or change directions
    if (validMove(curPosX+nextMoveX,curPosY+nextMoveY,arrSize) && !visited[curPosX+nextMoveX][curPosY+nextMoveY]) {
      // Move positions, add to return array
      curPosX += nextMoveX;
      curPosY += nextMoveY;

      visited[curPosX][curPosY] = true;
      arrSnailSorted.push(array[curPosX][curPosY]);
      elemRemaining--;
    } else {
      // change directions
      directionsChanged++;
    }

  }

  return arrSnailSorted;

}

// Function for validating we have not moved outside of the grid
function validMove(x, y, arrSize) {
  if(x < 0 || x >= arrSize || y < 0 || y >= arrSize) {
    return false;
  } else {
    return true;
  }
}
