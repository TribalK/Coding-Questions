/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

 /*
  Solution by TribalK
 */
var removeNthFromEnd = function(head, n) {
    let countOfNodes = 1;
    let curr = head;

    while(curr != null) {
        curr = curr.next;
        countOfNodes++;
    }

    let findNth = head;
    let prev = null;
    let newPos = 1;

    while(findNth != null) {
        if(newPos === countOfNodes-n && prev === null) {
            head = findNth.next;
            findNth.next = null;
            findNth = null;
        } else if(newPos === countOfNodes-n) {
            prev.next = findNth.next;
            findNth.next = null;
            findNth = null;
        } else {
            prev = findNth;
            findNth = findNth.next;
            newPos++;
        }
    }

    return head;
};
