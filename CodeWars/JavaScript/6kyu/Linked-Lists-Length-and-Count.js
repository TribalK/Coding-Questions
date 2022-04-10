/*
  Implement Length() to count the number of nodes in a linked list.

  Implement Count() to count the occurrences of an integer in a linked list.

  Solution by TribalK
*/
function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let curNode = head;
  let nodeCount = 0;

  while(curNode) {
    nodeCount++;
    curNode = curNode.next;
  }

  return nodeCount;
}

function count(head, data) {
  let curNode = head;
  let nodeCount = 0;

  while(curNode) {
    if(curNode.data === data) {
      nodeCount++;
    }

    curNode = curNode.next;
  }

  return nodeCount;
}
