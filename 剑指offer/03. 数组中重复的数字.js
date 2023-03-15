/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  let countArr = new Array(nums.length).fill(0)
  for (let i = 0; i < nums.length; i++) {
    countArr[nums[i]]++
    if (countArr[nums[i]] > 1) return nums[i]
  }
}
