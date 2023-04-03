/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let len = Math.min(num1.length, num2.length)
  let multiplyNum = num1.length === len ? num1 : num2
  let multipliedNum = num1.length !== len ? num1 : num2
  let resArr = []
  for (let index = len - 1; index >= 0; index--) {
    let digit = multiplyNum[index]
    let resStr = digitMultiply(multipliedNum, digit)
    resStr = resStr.concat('0'.repeat(len - index - 1))
    resArr.push(resStr)
  }
  let res = resArr.reduce((pre, now) => {
    return stringAdd(pre, now)
  })
  return res
  function stringAdd(str1, str2) {
    let minLen = Math.min(str1.length, str2.length)
    let maxLen = Math.max(str1.length, str2.length)
    let longStr = str1.length === maxLen ? str1 : str2
    let shortStr = str1.length !== maxLen ? str1 : str2
    let cutStr = longStr.slice(-minLen)
    let resArr = []
    let carry = new Array(maxLen + 1).fill(0)
    for (let index = minLen - 1; index >= 0; index--) {
      let op1 = cutStr[index]
      let op2 = shortStr[index]
      let strToNum1 = parseInt(op1)
      let strToNum2 = parseInt(op2)
      let resNum = strToNum1 * strToNum2 + carry[index + 1]
      let resStr = resNum.toString()
      if (resNum >= 10) {
        carry[index] = parseInt(resStr.charAt(0))
        resArr.unshift(resStr.charAt(1))
      } else {
        resArr.unshift(resStr.charAt(0))
      }
    }
    for (
      let index = longStr.slice(0, -minLen).length - 1;
      index >= 0;
      index--
    ) {
      let resNum = parseInt(longStr.charAt(index)) + carry[index + 1]
      let resStr = resNum.toString()
      if (resNum > 10) {
        carry[index] = parseInt(resStr.charAt(0))
        resArr.unshift(resStr.charAt(1))
      } else {
        resArr.unshift(resStr.charAt(0))
      }
    }
    if (carry[0] !== 0) {
      return resArr.join('')
    }
    resArr.unshift(carry[0].toString())
    return resArr.join('')
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
multiply('123', '456')
