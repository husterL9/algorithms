// 本题为考试多行输入输出规范示例，无需提交，不计分。
const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  // Write your code here
  var len = parseInt(await readline())
  let arr = []
  for (var i = 0; i < len; i++) {
    let subArr = []
    let subArrLen = parseInt(await readline())
    let lines = (await readline()).split(' ')
    for (var j = 0; j < subArrLen; j++) {
      subArr.push(parseInt(lines[j]))
    }
    arr.push(subArr)
  }
  arr.forEach((item) => {
    console.log(findCount(item))
  })
  /**
   *
   * @param {number[]} arr
   */
  function findCount(arr) {
    let indexOf1 = arr.indexOf(1)
    let left = indexOf1
    let right = indexOf1
    let count = 0
    for (; left >= 0; left--) {
      for (; right < arr.length; right++) {
        if (isAPaiLie(arr, left, right)) {
          count++
        }
      }
      right = indexOf1
    }
    return count
  }
  function isAPaiLie(arr, left, right) {
    let newArr = arr.slice(left, right + 1)
    newArr.sort()
    if (newArr.length === newArr[newArr.length - 1]) {
      return true
    }
    return false
  }
})()
