/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  //递归
  if (!root) {
    return root
  }
  let left = root.left
  let right = root.right
  root.right = left
  root.left = right
  mirrorTree(left)
  mirrorTree(right)
  return root
  //queue维护
  //   if (!root) {
  //     return root
  //   }
  //   let queue = []
  //   queue.push(root)
  //   while (queue.length > 0) {
  //     let node = queue.pop()
  //     if (node.left) queue.push(node.left)
  //     if (node.right) queue.push(node.right)
  //     let temp = node.right
  //     node.right = node.left
  //     node.left = temp
  //   }
  //   return root
}
