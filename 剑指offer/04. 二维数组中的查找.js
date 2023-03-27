/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  let rowStart = 0,
    colStart = 0
  let rowEnd = matrix.length - 1,
    colEnd = matrix[0].length - 1
}
//按行遍历，每一行使用二分
var matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
]
var findNumberIn2DArray = function (matrix, target) {
  for (let index = 0; index < matrix.length; index++) {
    let result = search(0, matrix[index].length - 1, matrix[index], target)
    if (result) {
      return result
    }
  }
  return false
}
var search = (left, right, nums, target) => {
  let mid = Math.floor((left + right) / 2)
  if (left > right) {
    return false
  }
  if (nums[mid] === target) {
    return true
  } else if (nums[mid] < target) {
    return search(mid + 1, right, nums, target)
  } else {
    return search(left, mid - 1, nums, target)
  }
}
let res = findNumberIn2DArray(matrix, 5)
console.log(res)
