function test() {
  this.queue = []
  this.next = function () {
    let task = this.queue.unshift()
    if (task) {
      task()
    }
  }
  for (let index = 0; index < 5; index++) {
    this.queue.push(() => {
      setTimeout(() => {
        console.log(index)
        this.next()
      })
    }, 1000)
  }
  return this
}
let instance1 = test()
