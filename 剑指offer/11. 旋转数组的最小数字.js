/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  function search(left, right, nums) {
    if (left === right) {
      return numbers[left]
    }
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] < nums[left]) {
      return search(left, mid, nums)
    } else if (nums[mid] > nums[left]) {
      return search(mid + 1, right, nums)
    } else {
      return search(left, right - 1, nums)
    }
  }
  return search(0, numbers.length - 1, numbers)
}
