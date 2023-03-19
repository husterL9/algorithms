//https://github.com/YvetteLau/Blog/issues/2
//https://juejin.cn/post/6910858750354325518#heading-6
//https://www.jianshu.com/p/43de678e918a
//https://tech.meituan.com/2014/06/05/promise-insight.html
// 1.立即resolve,done
// 2.异步resolve,done
// 3.状态一旦改变，不会再发生变化,done
// 4.promise 可以then多次，promise 的then 方法返回一个 promise，done
// 5.支持立即reslove的resolve(promise),done
// 6.支持异步reslove的resolve(promise),todo
const Pending = Symbol()
const Fulfilled = Symbol()
const Rejected = Symbol()
function Prom(execute) {
  this.status = Pending
  this.value = undefined
  this.successQueue = []
  this.failQueue = []
  const reslove = (value) => {
    if (typeof value === 'object') {
      var then = value.then
      if (typeof then === 'function') {
        then.call(value, reslove)
        return
      }
    }
    this.status = Fulfilled
    this.value = value
    console.log(11, this.successQueue)
    this.successQueue.forEach((fnPair) => {
      let res = fnPair.callback(this.value)
      fnPair.resolve(res)
    })
  }
  const reject = (error) => {
    this.status = Rejected
    this.value = error
    this.failQueue.forEach((fn) => {
      fn(this.value)
    })
  }
  execute(reslove, reject)
}
Prom.prototype.then = function (success, fail) {
  let prom2 = new Prom((resolve, reject) => {
    if (this.status === Pending) {
      this.successQueue.push({ callback: success, resolve: resolve })
      // this.failQueue.push(fail)
    } else if (this.status === Fulfilled) {
      let thenRes = success(this.value)
      resolve(thenRes)
    } else {
      fail(this.value)
    }
  })
  return prom2
}
let prom = new Prom(function (resolve, reject) {
  // setTimeout(() => {
  //   resolve(1)
  // }, 2000)
  resolve(1)
})
prom
  .then(
    function (result) {
      return new Prom((resolve, reject) => {
        console.log(result)
        resolve('我是prom')
      })
    },
    function (error) {}
  )
  .then(
    function (result) {
      console.log(result)
    },
    function (error) {}
  )
