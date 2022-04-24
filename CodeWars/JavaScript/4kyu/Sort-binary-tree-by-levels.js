/*
  You are given a binary tree:
  -----------------------------------------------------
  class Node {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left  = left;
      this.right = right;
    }
  }
  ----------------------------------------------------=
  Your task is to return the list with elements from tree sorted by levels, which means the root element goes first, then root children (from left to right) are second and third, and so on.

  Return empty array if root is null.

  Solution by TribalK
*/
function treeByLevels (rootNode) {
  if(!rootNode) {
    return [];
  }

  let sortByLevels = [];
  let nodeValues = [];

  sortByLevels.push(rootNode);

  while(sortByLevels.length > 0) {
    let curNode = sortByLevels[0];

    if(curNode.left) {
      sortByLevels.push(curNode.left);
    }

    if(curNode.right) {
      sortByLevels.push(curNode.right);
    }

    nodeValues.push(curNode.value);
    sortByLevels.shift();
  }

  return nodeValues;
}
