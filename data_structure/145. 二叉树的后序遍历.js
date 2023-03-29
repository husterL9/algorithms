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
var postorderTraversal = function (root) {
  let res = []
  let stack = []
  //递归
  // function post(root) {
  //   if (!root) {
  //     return res
  //   }
  //   post(root.left)
  //   post(root.right)
  //   res.push(root.val)
  // }
  // post(root)

  //迭代
  if (!root) {
    return res
  }
  //[1,null,2,3]
  stack.push(root)
  while (root && stack.length > 0) {
    let leftNode = root.left
    let rightNode = root.right
    while (leftNode) {
      stack.push(leftNode)
      leftNode = leftNode.left
      if (leftNode) {
        rightNode = leftNode.right
      }
    }

    if (rightNode) {
      root = rightNode
    } else {
      let node = stack.pop()
      res.push(node.val)
    }
  }
  return res
}
