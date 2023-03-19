// Promise.map(
//   Iterable<any>|Promise<Iterable<any>> input,
//   function(any item, int index, int length) mapper,
//   [Object {concurrency: int=Infinity} options]
// ) -> Promise
function Limit() {}
Promise.map = function (list, fn, { concurrency }) {
  const limit = new Limit(concurrency)
  return Promise.all(
    list.map((...args) => {
      return limit.build(() => fn(...args))
    })
  )
}
