//https://github.com/YvetteLau/Blog/issues/2
//https://juejin.cn/post/6910858750354325518#heading-6
//https://www.jianshu.com/p/43de678e918a
//https://tech.meituan.com/2014/06/05/promise-insight.html
// 1.立即resolve,done
// 2.异步resolve,done
// 3.状态一旦改变，不会再发生变化,done
// 4.promise 可以then多次，promise 的then 方法返回一个 promise，todo
const Pending = Symbol()
const Fulfilled = Symbol()
const Rejected = Symbol()
function Prom(execute) {
  this.status = Pending
  this.value = undefined
  this.successQueue = []
  this.failQueue = []
  const reslove = (value) => {
    this.status = Fulfilled
    this.value = value
    this.successQueue.forEach((fn) => {
      fn(this.value)
    })
  }
  const reject = (error) => {
    this.status = Rejected
    this.value = error
  }
  execute(reslove, reject)
}
Prom.prototype.then = function (success, fail) {
  if (this.status === Pending) {
    this.successQueue.push(success)
    this.failQueue.push(fail)
  } else if (this.status === Fulfilled) {
    success(this.value)
  } else {
    fail(this.value)
  }
}
let prom = new Prom(function (res, rej) {
  setTimeout(() => {
    res('done')
  }, 2000)
})
prom.then(
  function (result) {
    console.log(result)
  },
  function (error) {}
)
