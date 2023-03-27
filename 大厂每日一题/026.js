let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url',
]

let promises = urls.map((url) => {
  return fetch(url)
})
console.log(promises)
function allSettled(promises) {
  const rejectHandler = (res) => {
    return { value: res, status: 'rejected' }
  }
  const resolveHandler = (value) => ({ status: 'fulfilled', value })
  const convertedPromises = promises.map((p) => {
    return Promise.resolve(p).then(
      (res) => {
        return resolveHandler(res)
      },
      (err) => {
        return rejectHandler(err)
      }
    )
  })
  return Promise.all(convertedPromises)
}
allSettled(promises).then((res) => {
  console.log(res)
})
