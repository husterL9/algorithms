function debounce(fn, wait) {
  let timer
  return function () {
    let that = this
    let args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(that, args)
    }, wait)
  }
}
function throttle(fn, wait) {
  let timer
  return function () {
    if (timer) return
    let that = this
    let args = arguments
    timer = setTimeout(() => {
      timer = null
      fn.apply(that, args)
    }, wait)
  }
}
