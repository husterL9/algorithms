/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i
    }
  }
  return nums.length
}
//二分法：递归
var divide = (left, right, nums) => {
  let mid = Math.floor((left + right) / 2)
  if (left > right) {
    return left
  }
  if (nums[mid] === mid) {
    return divide(mid + 1, right, nums)
  } else {
    return divide(left, mid - 1, nums)
  }
}
