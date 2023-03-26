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
    console.log(lines)
    arr[i] = lines
  }

  console.log(arr)
})()
