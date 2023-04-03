/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let len = Math.min(num1.length, num2.length)
  let multiplyNum = num1.length === len ? num1 : num2
  let multipliedNum = num1.length !== len ? num1 : num2
  for (let index = len - 1; index >= 0; index++) {
    let digit = multiplyNum[index]
    let resStr = digitMultiply(multipliedNum, digit)
  }
  /**
   *
   * @param {string} num
   * @param {string} digit
   * @return {string}
   */
  function digitMultiply(num, digit) {
    let len = num.length
    let resArr = []
    digit = typeof digit === 'number' ? digit : parseInt(digit)
    // if (digit === 0) {
    //   return '0'
    // }
    let carry = new Array(len + 1).fill(0)
    for (let index = len - 1; index >= 0; index--) {
      const strToNum = parseInt(num[index])
      let resNum = strToNum * digit + carry[index + 1]
      let resStr = resNum.toString()
      if (resNum >= 10) {
        carry[index] = parseInt(resStr.charAt(0))
        resArr.unshift(resStr.charAt(1))
      } else {
        resArr.unshift(resStr.charAt(0))
      }
    }
    if (carry[0] !== 0) {
      resArr.unshift(carry[0].toString())
    }
    return resArr.join('')
  }
}
multiply()
