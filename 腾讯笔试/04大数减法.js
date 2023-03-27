const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value
let str1, str2
void (async function () {
  str1 = await readline()
  str2 = await readline()
  console.log(BigInt(str1))
  let temp = []
  str1 = str1.split('')
  str2 = str2.split('')
  let count = new Array(str1.length).fill(0)
  for (let index = 0; index < str2.length; index++) {
    let current1 = str1.length - index - 1
    let temp1 = str1[current1]
    let temp2 = str2[str2.length - index - 1]
    let a = parseInt(temp1)
    let b = parseInt(temp2)
    if (a >= b) {
      temp.unshift((a - b - count[current1]).toString())
    } else {
      //借位
      count[current1 - 1] = 1
      temp.unshift(10 + a - b).toString()
    }
  }
  console.log(temp)
})()
