//https://jishuin.proginn.com/p/763bfbd67a9b
async function target() {
  let res = await fetch('https://www.baidu.com')
  console.log('do something')
  let res1 = await fetch('https://www.baidu.com')
  return res
}
let res = target().then((res) => {
  console.log(res)
})
function* gen() {}
function immitate(generator) {
  return function () {
    return new Promise((resolve, reject) => {})
  }
}
let asyncFn = immitate(gen)
