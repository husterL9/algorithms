console.log([, , ,])
console.log(Array.from(new Array(3)))
Array.prototype.map.call([, , ,], (x) => {
  console.log(x)
  return x
})
Array.prototype.filter.call([, , ,], (x) => {
  console.log('sd')
  console.log(x)
  return 1
})
