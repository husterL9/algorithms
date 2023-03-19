const obj = {
  a: 3,
  b: 4,
  c: null,
  d: undefined,
  get e() {
    return 1
  },
  t() {
    return 3
  },
  P: function () {},
}
console.log(JSON.stringify(obj))
