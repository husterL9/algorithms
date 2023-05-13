const { getHeapCodeStatistics } = require('v8')

// 本题为考试多行输入输出规范示例，无需提交，不计分。
const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  // Write your code here
  var count = parseInt(await readline())
  var countArr = (await readline()).split(' ')
  let strArr = []
  for (let index = 0; index < count; index++) {
    countArr[index] = parseInt(countArr[index])
    if (index % 2 === 0) {
      strArr.push('1'.repeat(countArr[index]))
    } else {
      strArr.push('0'.repeat(countArr[index]))
    }
  }
  let res = 0
  let str = strArr.join('')
  let temp = ''
  for (let k = 1; k < str.length + 1; k++) {
    for (let p = 0; p < str.length - k + 1; p++) {
      temp = str.slice(p, p + k)
      if (isHuiwen(temp)) {
        res++
      }
    }
  }
  function isHuiwen(str) {
    let arr = str.split('')
    arr.reverse()
    let newStr = arr.join('')
    if (newStr === str) {
      return true
    }
    return false
  }
  console.log(res)
})()
