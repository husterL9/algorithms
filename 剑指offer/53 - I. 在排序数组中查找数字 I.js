/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function (nums, target) {
//   let index = nums.findIndex((element) => target === element)
//   if (index === -1) return 0
//   let count = 0
//   for (let i = index; i < nums.length; i++) {
//     if (nums[i] === target) count++
//     else return count
//   }
//   return count
// }
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1
  return countTarget(nums, left, right, target)
}
const countTarget = (nums, left, right, target) => {
  let count = 0
  let mid = Math.floor((left + right) / 2)
  if (left >= right) {
    if (nums[left] === target) return 1
    else return 0
  }
  if (nums[mid] === target) {
    for (let i = mid; i >= left; i--) {
      if (nums[i] === target) {
        count++
      }
    }
    for (let i = mid + 1; i <= right; i++) {
      if (nums[i] === target) {
        count++
      }
    }
  } else if (nums[mid] > target) {
    count = countTarget(nums, left, mid, target)
  } else {
    count = countTarget(nums, mid + 1, right, target)
  }
  return count
}
