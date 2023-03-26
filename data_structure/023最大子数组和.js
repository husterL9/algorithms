/**
 * @param {number[]} nums
 * @return {number}
 */
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
var maxSubArray = function (nums) {
  let ans = nums[0]
  let sum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i])
    ans = Math.max(ans, sum)
  }
  return ans
  // if (!nums.length) {
  //   return
  // }
  // 在每一个扫描点计算以该点数值为结束点的子数列的最大和（正数和）。
  // let max_ending_here = nums[0]
  // let max_so_far = nums[0]

  // for (let i = 1; i < nums.length; i++) {
  //   // 以每个位置为终点的最大子数列 都是基于其前一位置的最大子数列计算得出,

  //   max_ending_here = Math.max(nums[i], max_ending_here + nums[i])
  //   max_so_far = Math.max(max_so_far, max_ending_here)
  // }

  // return max_so_far
}

console.log(maxSubArray(nums))
