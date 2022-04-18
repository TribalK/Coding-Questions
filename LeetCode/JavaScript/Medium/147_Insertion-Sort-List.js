/**
 * Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.
 *
 * The steps of the insertion sort algorithm:
 *
 * Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
 * At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
 * It repeats until no input elements remain.
 *
 * The number of nodes in the list is in the range [1, 5000].
 * -5000 <= Node.val <= 5000
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    //
    if(head.next === null) {
        return head;
    }

    let curNode = head.next;
    let prevNode = head;

    //Advance each node past the head
    while(curNode !== null) {
        let chkNode = head;
        let prevChkNode = null;

        //Only iterate up until the current node or if we found where our node is to be placed
        while(chkNode !== null && chkNode !== curNode) {

            //Compare chkNode value to curNode value
            //Replace only if curNode value is less than chkNode value
            if(curNode.val < chkNode.val) {
                prevNode.next = curNode.next;
                curNode.next = chkNode;

                //if it is to be replaced,
                //prev is null => must be the head => set head to curNode
                if(!prevChkNode) {
                    head = curNode;
                } else {
                    prevChkNode.next = curNode;
                }

                //No need to check any more iterations
                chkNode = null;
                curNode = prevNode;
            } else {
                 //Advance nodes normally
                prevChkNode = chkNode;
                chkNode = chkNode.next;
            }
        }

        prevNode = curNode;
        curNode = curNode.next;
    }

    return head;
};
