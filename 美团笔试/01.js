const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value
let length, arr
let resArr = []
void (async function () {
  length = parseInt(await readline())
  let str = await readline()
  arr = str.split(' ')
  console.log(length, arr)
  function countAbs(nums) {
    let res = 0
    for (let index = 0; index < nums.length - 1; index++) {
      res += Math.abs(nums[index] - nums[index + 1])
    }
    return res
  }
  function swap(nums, i, j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
  function dfsNums(ptr, nums) {
    if (ptr === length) {
      resArr.push(countAbs(nums))
      return
    }
    for (let index = ptr; index < nums.length; index++) {
      swap(nums, ptr, index)
      dfsNums(ptr + 1, nums)
      swap(nums, ptr, index)
    }
  }
  /**
   *
   * @param {Array} nums
   * @return {Number}
   */
  function findMin(nums) {
    dfsNums(0, nums)
    console.log(resArr)
    return Math.min(...resArr)
  }
  console.log(findMin(arr))
})()
