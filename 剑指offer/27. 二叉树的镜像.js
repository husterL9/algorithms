// var isSymmetric = function (root) {
//   if (root === null) {
//     return true
//   }
//   function arrIsSymmetric(arr) {
//     let left = 0
//     let right = arr.length - 1
//     while (left <= right) {
//       if (arr[left] === arr[right]) {
//         left++
//         right--
//       } else {
//         return false
//       }
//     }
//     return true
//   }
//   let queue = []
//   queue.push(root)
//   while (queue.length > 0) {
//     let tempArr = []
//     let count = queue.length
//     let node
//     while (count > 0) {
//       count--
//       node = queue.shift()
//       if (node === null) {
//         tempArr.push(null)
//       } else {
//         tempArr.push(node.val)
//       }
//       queue.push(node ? node.left : null)
//       queue.push(node ? node.right : null)
//     }
//     if (tempArr.every((item) => item === null)) {
//       break
//     }
//     if (!arrIsSymmetric(tempArr)) {
//       return false
//     }
//   }
//   return true
// }
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {}
