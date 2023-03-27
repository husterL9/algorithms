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

  let resArr = new Array(a).fill(new Array(b).fill(0))

  for (let i = 0; i < b; i++) {
    arr[0][i] === '.' ? (resArr[0][i] = 1) : (resArr[0][i] = 0)
  }
  for (let j = 1; j < a; j++) {
    arr[j][0] === '.' ? (resArr[j][0] = 1) : (resArr[j][0] = 0)
  }
  console.log(resArr)
  for (let k = 1; k < a; k++) {
    for (let m = 1; m < b; m++) {
      resArr[k][m] = resArr[k - 1][m] + resArr[k][m - 1]
    }
  }
  console.log(resArr, arr)
})()
