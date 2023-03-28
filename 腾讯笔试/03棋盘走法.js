const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value
let arr
void (async function () {
  let line = await readline()
  let tokens = line.split(' ')
  let a = parseInt(tokens[0])
  let b = parseInt(tokens[1])
  arr = new Array(a).fill(new Array(b))
  for (let i = 0; i < arr.length; i++) {
    let lines = (await readline()).split('')
    arr[i] = lines
  }
  let resArr = new Array(a)
  for (let index = 0; index < a; index++) {
    resArr[index] = new Array(b)
  }
  let flag = true
  for (let i = 0; i < b; i++) {
    if (flag) {
      if (arr[0][i] === '.') {
        resArr[0][i] = 1
      } else {
        resArr[0][i] = 0
        flag = false
      }
    } else {
      resArr[0][i] = 0
    }
  }
  flag = true
  for (let j = 0; j < a; j++) {
    if (flag) {
      if (arr[j][0] === '.') {
        resArr[j][0] = 1
      } else {
        resArr[j][0] = 0
        flag = false
      }
    } else {
      resArr[j][0] = 0
    }
  }
  for (let k = 1; k < a; k++) {
    for (let m = 1; m < b; m++) {
      arr[k][m] === '#' ? (resArr[k][m] = 0) : (resArr[k][m] = resArr[k - 1][m] + resArr[k][m - 1])
    }
  }
  console.log(resArr)
})()
