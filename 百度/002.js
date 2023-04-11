// 本题为考试多行输入输出规范示例，无需提交，不计分。
const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  // Write your code here
  var len = parseInt(await readline())
  let arr1 = []
  let arr2 = []
  for (var i = 0; i < len; i++) {
    peach = (await readline()).split(' ')
    arr1.push(BigInt(peach[0]))
    arr2.push(BigInt(peach[1]))
  }
  let max = 0
  for (let index = 0; index < arr1.length; index++) {
    swap(arr1, arr2, index)
    let temp = countMulti(arr2)
    if (temp >= max) {
      max = temp
    }
    swap(arr1, arr2, index)
  }
  let res = max % BigInt(Math.pow(10, 9) + 7)
  console.log(Number(res))
  function swap(arr1, arr2, index) {
    let temp = arr1[index]
    arr1[index] = arr2[index]
    arr2[index] = temp
  }
  function countMulti(arr) {
    let initial = BigInt(1)
    return arr.reduce((pre, now) => pre * now, initial)
  }
})()
