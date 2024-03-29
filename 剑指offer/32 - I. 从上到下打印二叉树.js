/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  let queue = []
  let res = []
  if (root === null) {
    return res
  }
  queue.push(root)
  let node
  while (queue.length > 0) {
    node = queue.shift()
    res.push(node.val)
    if (node.left !== null) {
      queue.push(node.left)
    }
    if (node.right !== null) {
      queue.push(node.right)
    }
  }
  return res
}
