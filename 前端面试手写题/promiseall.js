/**
 *
 * @param {[]} iterator
 */
function myPromiseAll(iterator) {
  return new Promise((resolve, reject) => {
    let res = []
    let count = 0
    let promises = iterator.map((item) => {
      return Promise.resolve(item)
    })

    promises.forEach((pro, index) => {
      pro.then(
        (result) => {
          res[index] = result
          count++
          if (count === promises.length) {
            resolve(res)
          }
        },
        (error) => {
          reject(error)
        }
      )
    })
  })
}
