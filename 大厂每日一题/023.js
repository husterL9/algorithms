// https://jishuin.proginn.com/p/763bfbd67a9b
// async function target() {
//   let res = await fetch('https://www.baidu.com')
//   console.log('do something')
//   let res1 = await fetch('https://www.baidu.com')
//   return res
// }
// let res = target().then((res) => {
//   console.log(res)
// })
function timewait(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2)
    }, 2000)
  })
}
function* gen() {
  let num1 = yield timewait(1)
  let num2 = yield timewait(num1)
  let num3 = yield timewait(num2)
  return num3
}
function immitate(generator) {
  return function () {
    return new Promise((resolve, reject) => {
      let iterator = generator()
      console.log('iterator', iterator)
      let next1 = iterator.next()
      next1.value.then((num1) => {
        let next2 = iterator.next(num1)
        next2.value.then((num2) => {
          let next3 = iterator.next(num2)
          next3.value.then((num3) => {
            resolve(num3)
          })
        })
      })
    })
  }
}
let asyncFn = immitate(gen)
asyncFn().then((num) => {
  console.log(num)
})

function AutoExcuteGen(generator) {
  let gen = generator()
  return function () {
    function go() {
      let next = gen.next()
      next.value.then((num) => {
        go()
      })
    }
    return new Promise((resolve, reject) => {})
  }
}
let asyncAuto = AutoExcuteGen(gen)
asyncAuto().then((res) => {
  console.log(res)
})
