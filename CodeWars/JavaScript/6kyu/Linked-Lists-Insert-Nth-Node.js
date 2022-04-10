/*
  Implement an InsertNth() function (insert_nth() in PHP) which can insert a new node at any index within a list.

  InsertNth() is a more general version of the Push() function that we implemented in the first kata listed below. Given a list, an index 'n' in the range 0..length, and a data element, add a new node to the list so that it has the given index. InsertNth() should return the head of the list.

  You must throw/raise an exception if the index is too large.

  Solution by TribalK
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function insertNth(head, index, data) {

  let prevNode = null;
  let curNode = head;
  let pushedData = false;

  while(curNode) {

    if(index === 0) {
      let newNode = new Node(data);

      if(prevNode === null) {
        head = newNode;
      } else {
        prevNode.next = newNode;
      }

      newNode.next = curNode;
      pushedData = true;
    }

    index--;
    prevNode = curNode;
    curNode = curNode.next;
  }

  if(!pushedData && index === 0) {
    let newNode = new Node(data);

    if(prevNode === null) {
      head = newNode;
    } else {
      prevNode.next = newNode;
    }

  } else if (!pushedData && index !== 0) {
    throw new Error("Invalid index");
  }

  return head;
}
