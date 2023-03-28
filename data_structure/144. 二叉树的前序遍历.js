/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var preorderTraversal = function (root) {
  //递归
  // let res = []
  // function test(root) {
  //   if (!root) {
  //     return res
  //   }
  //   res.push(root.val)
  //   test(root.left)
  //   test(root.right)
  //   return res
  // }
  // return test(root)
  //迭代
  let res = []
  let stack = []
  let node
  if (!root) {
    return res
  }
  stack.push(root)
  while (stack.length > 0) {
    node = stack.pop()
    res.push(node.val)
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }
  return res
}
