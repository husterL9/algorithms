const obj = {
  re: /hello/,
  f() {},
  date: new Date(),
  map: new Map(),
  list: [1, 2, 3],
  a: 3,
  b: 4,
}

/**
 * 深拷贝关注点:
 * 1. JavaScript内置对象的复制: Set、Map、Date、Regex等
 * 2. 循环引用问题
 * @param {*} source
 * @returns
 */
const a = { b: { c: { d: 4 } } }
a.z = a
function cloneDeep(source, record) {
  let target = null
  record || (record = new WeakMap())
  if (typeof source !== 'object' || typeof source === null) {
    target = source
  } else if (typeof source === 'object') {
    if (record.has(source)) {
      target = record.get(source)
    } else {
      target = Object.create(null)
      record.set(source, target)
      for (const key in source) {
        target[key] = cloneDeep(source[key], record)
      }
    }
  }
  return target
}
console.log(cloneDeep(a))
