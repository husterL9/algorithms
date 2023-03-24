//https://jishuin.proginn.com/p/763bfbd67a9b
// async function target() {
//   let res = await fetch('https://www.baidu.com')
//   console.log('do something')
//   let res1 = await fetch('https://www.baidu.com')
//   return res
// }
// let res = target().then((res) => {
//   console.log(res)
// })
// function asyncOperator(num) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(num)
//     }, 2000)
//   })
// }
function* gen(num) {
  let num1 = yield asyncOperator(num)
  let num2 = yield asyncOperator(num1)
  let num3 = yield asyncOperator(num2)
  return num3
}
function immitate(generator) {
  return function () {
    return new Promise((resolve, reject) => {})
  }
}

function autoGen(generator) {
  let gen = generator()

  return function () {
    return new Promise((resolve) => {
      go(resolve)
    })
  }
}
let asyncFn = autoGen(gen)
