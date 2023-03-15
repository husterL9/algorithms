/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let tempPtr = null
  while (head !== null) {
    let next = head.next
    head.next = tempPtr
    tempPtr = head
    head = next
  }
  return tempPtr
}
