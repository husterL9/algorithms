function f(...b) {
  console.log(this.a, b)
}
Function.prototype.fakeBind = function (thisArg, ...args) {
  return (...rest) => this.call(thisArg, ...args, ...rest)
}
f.fakeBind({ a: 3 })(4)

f.fakeBind({ a: 3 }, 10)(11)
