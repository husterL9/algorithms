//https://jasonlam0990.github.io/2019/04/02/%E5%BE%AE%E4%BF%A1%E4%BA%8B%E4%B8%9A%E7%BE%A4%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%9AHardMan-LazyMan/
class HardMan {
  constructor(name) {
    this.name = name
  }
  rest(wait) {
    this.wait = wait * 1000
    console.log(`I am ${this.name}`)
    this.now = 'rest'
    return this
  }
  restFirst(fisrtWait) {
    this.fisrtWait = fisrtWait * 1000
    this.now = 'restFirt'
    return this
  }
  learn(course) {
    if (this.now === 'rest') {
      setTimeout(() => {
        console.log(`Start learning after ${this.wait / 1000} seconds`)
        console.log(`Learning ${course}`)
      }, this.wait)
    } else if (this.now === 'restFirst') {
      setTimeout(() => {
        console.log(`Start learning after ${this.wait / 1000} seconds`)
        console.log(`I am ${this.name}`)
        console.log(`Learning ${course}`)
      }, this.fisrtWait)
    }
  }
}
let man = HardMan('jack')
console.log(man)
