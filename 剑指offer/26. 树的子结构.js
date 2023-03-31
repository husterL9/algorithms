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
  let flag = false
  function contrary(nodeA, nodeB) {}
  function preA(node) {
    if (node === null) {
      return
    }
    let val = node.val
    //比对B数

    preA(node.left)
    preA(node.right)
  }
}
