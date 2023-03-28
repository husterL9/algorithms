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
var inorderTraversal = function (root) {
  //递归
  let res = []
  // function inorder(root) {
  //   if (!root) {
  //     return
  //   }
  //   inorder(root.left)
  //   res.push(root.val)
  //   inorder(root.right)
  // }
  // inorder(root)
  // return res

  //迭代
  let stack = []
  if (!root) {
    return res
  }
  stack.push(root)
  while (stack.length > 0) {
    let node = stack[stack.length - 1].left
    while (node) {
      stack.push(node)
      node = node.left
    }
    let pop
    while ((pop = stack.pop())) {
      res.push(pop.val)
      if (pop.right) {
        stack.push(pop.right)
        break
      }
    }
  }
}
