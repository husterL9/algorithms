/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = []
  let queue = []
  if (root === null) {
    return res
  }
  let node = root
  node.level = 0
  queue.push(node)
  while (queue.length > 0) {
    node = queue.shift()
    res[node.level]
      ? res[node.level].push(node.val)
      : (res[node.level] = [].concat(node.val))
    if (node.left) {
      node.left.level = node.level + 1
      queue.push(node.left)
    }
    if (node.right) {
      node.right.level = node.level + 1
      queue.push(node.right)
    }
  }
  return res
}
