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
  queue.push(root)
  let level = 0
  while (queue.length > 0) {
    let count = queue.length
    let tempArr = []
    while (count > 0) {
      count--
      let node = queue.shift()
      tempArr.push(node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    if (level % 2 === 0) {
      res.push(tempArr)
    } else {
      res.push(tempArr.reverse())
    }
    level++
  }
  return res
}
