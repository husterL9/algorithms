/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function (nums) {
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === 0) continue
    let slow = index
    let fast = next(nums, slow)
    if (!(nums[slow] * nums[fast] > 0 && nums[slow] * next(nums, slow) > 0)) break
    while (true) {
      let temp1 = slow
      let temp2 = fast
      slow = next(nums, slow)
      fast = next(nums, next(nums, fast))
      if (slow === fast) {
        return true
      } else {
        if (nums[slow] * nums[fast] > 0 && nums[slow] * nums[next(nums, slow)] > 0) {
          nums[temp1] = 0
          nums[temp2] = 0
        } else {
          break
        }
      }
    }
  }
  return false
  function next(nums, cur) {
    let n = nums.length
    return (((cur + nums[cur]) % n) + n) % n
  }
}
