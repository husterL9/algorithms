//https://jasonlam0990.github.io/2019/04/02/%E5%BE%AE%E4%BF%A1%E4%BA%8B%E4%B8%9A%E7%BE%A4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%9AHardMan-LazyMan/
// 方案一，宏任务
// class _HardMan {
//   constructor(name) {
//     this.name = name
//     this.tasks = []
//     setTimeout(() => {
//       this.next()
//     })
//     this.tasks.push(() => {
//       console.log(`I am ${this.name}`)
//       this.next()
//     })
//   }
//   next() {
//     let task = this.tasks.shift()
//     task && task()
//   }
//   rest(wait) {
//     this.tasks.push(() => {
//       console.log(`//等待${wait}秒`)
//       setTimeout(() => {
//         console.log(`Start learning after ${wait} seconds`)
//         this.next()
//       }, wait * 1000)
//     })
//     return this
//   }
//   restFirst(wait) {
//     this.tasks.shift()
//     this.tasks.push(() => {
//       console.log(`//等待${wait}秒`)
//       setTimeout(() => {
//         console.log(`Start learning after ${this.wait} seconds`)
//         console.log(`I am ${this.name}`)
//         this.next()
//       }, wait * 1000)
//     })
//     return this
//   }
//   learn(course) {
//     this.tasks.push(() => {
//       console.log(`Learning ${course}`)
//     })
//   }
// }
// function HardMan(name) {
//   return new _HardMan(name)
// }
// // HardMan('jack')
// // HardMan('jack').rest(10).learn('computer')
// HardMan('jack').restFirst(5).learn('chinese')

//方案二promise
class _HardMan {
  constructor(name) {
    this.name = name
    this.tasks = []
    setTimeout(() => {
      this.next()
    })
    this.tasks.push(() => {
      return new Promise((resolve) => {
        console.log(`I am ${this.name}`)
        resolve()
      })
    })
  }
  next() {
    let task = this.tasks.shift()
    task &&
      task().then(() => {
        this.next()
      })
  }
  rest(wait) {
    this.tasks.push(
      new Promise((resolve) => {
        console.log(`//等待${wait}秒`)
        setTimeout(() => {
          console.log(`Start learning after ${wait} seconds`)
          resolve()
        }, wait * 1000)
      })
    )
    return this
  }
  restFirst(wait) {
    this.tasks.shift()
    this.tasks.push(
      new Promise((resolve) => {
        console.log(`//等待${wait}秒`)
        setTimeout(() => {
          console.log(`Start learning after ${wait} seconds`)
          console.log(`I am ${this.name}`)
          resolve()
        }, wait * 1000)
      })
    )
    return this
  }
  learn(course) {
    this.tasks.push(
      new Promise((resolve) => {
        console.log(`Learning ${course}`)
        resolve()
      })
    )
  }
}
function HardMan(name) {
  return new _HardMan(name)
}
// HardMan('jack')
// HardMan('jack').rest(10).learn('computer')
HardMan('jack').restFirst(5).learn('chinese')
