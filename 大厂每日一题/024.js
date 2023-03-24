function Promiseall(promises) {
  let len = promises && promises.length
  let count = 0
  let resArr = []
  let finalPromise = new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise.then((res) => {
        count++
        resArr[index] = res
        if (count === len) {
          resolve(resArr)
        }
      })
    })
  })
  return finalPromise
}

let promises = []
Array.from('abcde').forEach((e, index) => {
  promises[index] = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(index)
    }, (5 - index) * 1000)
  })
})
Promiseall(promises).then((res) => {
  console.log(11, res)
})
