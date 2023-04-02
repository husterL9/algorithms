/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (B === null) {
    return false
  }
  let flag = false
  function contrary(nodeA, nodeB) {
    if (nodeB === null) {
      return true
    }
    if (nodeA === null || nodeA.val !== nodeB.val) {
      return false
    } else {
      let res1 = contrary(nodeA.left, nodeB.left)
      let res2 = contrary(nodeA.right, nodeB.right)
      return res1 && res2
    }
  }
  function preA(node) {
    if (node === null) {
      return false
    }
    //比对B数
    flag = contrary(node, B)
    if (flag) {
      return true
    }
    let res1 = preA(node.left)
    let res2 = preA(node.right)
    return res1 || res2
  }
  return preA(A)
}
