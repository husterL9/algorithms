const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value
let str1, str2
void (async function () {
  str1 = await readline()
  str2 = await readline()
  let temp = []
  str1 = str1.split('')
  str2 = str1.split('')
  for (let index = 0; index < str2.length; index++) {
    let temp1 = str1[str1.length - i - 1]
    let temp2 = str2[str2.length - i - 1]
    let a = parseInt(temp1)
    let b = parseInt(temp2)
    if (a >= b) {
      temp.unshift((a - b).toString())
    } else {
      //借位
    }
  }
})()
