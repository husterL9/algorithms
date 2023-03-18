var arr = [1, 2, 3, 4, 5]
var t = new Object()
arr.forEach((item) => {
  console.log(item)
})
function b() {}
console.log(typeof b === 'object', typeof b === 'function')
console.log(b.hasOwnProperty)
