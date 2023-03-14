/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  let temp = []
  let tempPtr = head
  if (tempPtr === null) return []
  while (tempPtr !== null) {
    temp.unshift(tempPtr.val)
    tempPtr = tempPtr.next
  }
  return temp
}
