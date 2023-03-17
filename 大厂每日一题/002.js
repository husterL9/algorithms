//https://github.com/YvetteLau/Blog/issues/2
//https://juejin.cn/post/6910858750354325518#heading-6
//https://www.jianshu.com/p/43de678e918a
//https://tech.meituan.com/2014/06/05/promise-insight.html
function Prom(execute) {
  this.status = 'pending'
  this.executeQueue = []
  function reslove(value) {}
  function reject(error) {}
  execute(reslove, reject)
}
Prom.prototype.then = function (success, fail) {
  if (this.status === 'pending') {
  } else if (this.status === 'fulfilled') {
  } else {
  }
}
let prom = new Prom()
prom.then(
  function (result) {
    /* handle a successful result */
  },
  function (error) {
    /* handle an error */
  }
)
