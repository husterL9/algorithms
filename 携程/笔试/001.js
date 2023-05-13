// 本题为考试多行输入输出规范示例，无需提交，不计分。
const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  // Write your code here
  var size = (await readline()).split(' ')
  let n = parseInt(size[0])
  let m = parseInt(size[1])
  let arr = []
  for (let i = 0; i < n; i++) {
    arr.push((await readline()).split(''))
  }
  let count = 0
  for (let row = 0; row < n - 1; row++) {
    for (let col = 0; col < m - 1; col++) {
      if (containTarget(arr, row, col)) {
        count++
      }
    }
  }
  /**
   *
   * @param {string[]} arr
   * @param {number} row
   * @param {number} col
   * @return {boolean}
   */
  function containTarget(arr, row, col) {
    let a11 = arr[row][col]
    let a12 = arr[row][col + 1]
    let a21 = arr[row + 1][col]
    let a22 = arr[row + 1][col + 1]
    let temp = [a11, a12, a21, a22]
    let res = hasStr('y', temp) && hasStr('o', temp) && hasStr('u', temp)
    return res
  }
  function hasStr(target, arr) {
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] === target) return true
    }
    return false
  }
  console.log(count)
})()
