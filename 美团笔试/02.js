/**
 * @param {string} str
 */
function huiwen(str) {
  let strArr = str.split('')
  strArr.reverse()
  let newStr = strArr.join('')
  if (str === newStr) {
    return true
  }
  return false
}
console.log(huiwen('12213'))
