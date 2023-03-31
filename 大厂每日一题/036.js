Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error('Whoops!')), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(console.log) // 1
function promiseRace(array) {
  let promises = array.map((item) => Promise.resolve(item))
  return new Promise((resolve, reject) => {
    promise.forEach((promise) => {
      promise.then(
        (res) => {
          resolve(res)
        },
        (rej) => {
          reject(rej)
        }
      )
    })
  })
}
