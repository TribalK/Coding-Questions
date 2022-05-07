/*
  Write an Append() function which appends one linked list to another. The head of the resulting list should be returned.

  If both listA and listB are null/NULL/None/nil, return null/NULL/None/nil. If one list is null/NULL/None/nil and the other is not, simply return the non-null/NULL/None/nil list.
  
  Solution by TribalK
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA, listB) {
  if(!listA && !listB) return null;
  else if(!listA) return listB;
  else if(!listB) return listA;

  const head = listA;
  let curNode = head;

  while(curNode.next != null) {
    curNode = curNode.next;
  }

  curNode.next = listB;
  return head;
}
