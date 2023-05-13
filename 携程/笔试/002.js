const { getHeapCodeStatistics } = require('v8')

// 本题为考试多行输入输出规范示例，无需提交，不计分。
const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  // Write your code here
  var count = parseInt(await readline())
  let arr = []
  let res
  for (let i = 0; i < count; i++) {
    arr.push(parseInt(await readline()))
  }

  for (let index = 0; index < arr.length; index++) {
    res = maxLcm(arr[index])
    console.log(res[0], res[1])
  }
  function maxLcm(n) {
    if (n % 2 === 0) {
      const a = n / 2
      const b = n / 2
      return [a, b]
    } else {
      const a = (n - 1) / 2
      const b = (n + 1) / 2
      return [a, b]
    }
  }
  // function maxLcm(n) {
  //   let max = 0
  //   let a = 0
  //   let b = 0
  //   for (let i = 1; i < n / 2; i++) {
  //     let j = n - i
  //     let lcm = (i * j) / gcd(i, j)
  //     if (lcm > max) {
  //       max = lcm
  //       a = i
  //       b = j
  //     }
  //   }
  //   return [a, b]
  // }
  // function gcd(i, j) {
  //   if (j === 0) {
  //     return i
  //   }
  //   return gcd(j, i % j)
  // }
})()
