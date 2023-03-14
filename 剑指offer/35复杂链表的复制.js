/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let headArr = []
  headArr.push(head)
  let newHeadArr = []
  let storeHead = head
  let newHead = null
  if (head === null) {
    return newHead
  }
  newHead = new Node()
  newHeadArr.push(newHead)
  let storeNewHead = newHead
  while (head !== null) {
    newHead.val = head.val
    if (head.next !== null) {
      newHead.next = new Node()
      head = head.next
      newHead = newHead.next
      headArr.push(head)
      newHeadArr.push(newHead)
    } else {
      head = head.next
      newHead.next = null
    }
  }
  headArr.push(null)
  newHeadArr.push(null)
  let temp = storeNewHead
  while (storeHead !== null) {
    temp.random =
      newHeadArr[
        headArr.findIndex((element) => {
          return element === storeHead.random
        })
      ]
    temp = temp.next
    storeHead = storeHead.next
  }
  return storeNewHead
}
