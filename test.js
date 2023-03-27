let arr = [
  ['.', '.', '#', '#'],
  ['#', '.', '.', '.'],
]
let resArr = new Array(2).fill(new Array(4).fill(0))
console.log(resArr)
resArr[0][0] = 1
// for (let i = 0; i < 4; i++) {
//   if (arr[0][i] === '.') {
//     resArr[0][i] = 1
//   } else {
//     resArr[0][i] = 0
//   }
//   // arr[0][i] === '.' ? (resArr[0][i] = 1) : (resArr[0][i] = 0)
// }
// for (let j = 1; j < 2; j++) {
//   arr[j][0] === '.' ? (resArr[j][0] = 1) : (resArr[j][0] = 0)
// }
console.log(resArr)
