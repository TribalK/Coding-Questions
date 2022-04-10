/*
  Write push() and buildOneTwoThree() functions to easily update and initialize linked lists. Try to use the push() function within your buildOneTwoThree() function.

  The push function accepts head and data parameters, where head is either a node object or null/None/nil. Your push implementation should be able to create a new linked list/node when head is null/None/nil.

  The buildOneTwoThree function should create and return a linked list with three nodes: 1 -> 2 -> 3 -> null

  Solution by TribalK
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  let newNode = new Node(data);
  newNode.next = head;
  return newNode;
}

function buildOneTwoThree() {
  let chained = null;
  chained = push(chained, 3);
  chained = push(chained, 2);
  chained = push(chained, 1);
  return chained;
}
