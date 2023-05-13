process.stdin.resume()
process.stdin.setEncoding('utf-8')
let input = ''
process.stdin.on('data', (data) => {
  input += data
})
process.stdin.on('end', () => {
  let inputArray = input.split('\n')
  /**
   * 待实现函数，在此函数中填入答题代码
   * doFunc()
   */
  function plus(str1, str2, isDot = false) {
    //两字符串相加
    let len1 = str1.length
    let len2 = str2.length
    let len = len1 > len2 ? len1 : len2
    let res = ''
    let carry = 0
    for (let i = 0; i < len; i++) {
      let temp
      if (str1[len1 - 1 - i] === '!') {
        if (str2[len2 - 1 - i] === '!') {
          temp = 0 + carry
        } else if (str2[len2 - 1 - i] === '@') {
          temp = 13 + carry
        } else if (str2[len2 - 1 - i] === '#') {
          temp = 4 + carry
        }
      } else if (str1[len1 - 1 - i] === '@') {
        if (str2[len2 - 1 - i] === '@') {
          temp = 7 + carry
        } else if (str2[len2 - 1 - i] === '!') {
          temp = 13 + carry
        } else {
          temp = 20 + carry
        }
      } else if (str1[len1 - 1 - i] === '#') {
        if (str2[len2 - 1 - i] === '@') {
          temp = 20 + carry
        } else if (str2[len2 - 1 - i] === '#') {
          temp = 5 + carry
        } else {
          temp = 4 + carry
        }
      } else {
        let a = i < len1 ? str1.charAt(len1 - 1 - i) - '0' : 0
        let b = i < len2 ? str2.charAt(len2 - 1 - i) - '0' : 0
        temp = a + b + carry
      }

      carry = Math.floor(temp / 10)
      res = (temp % 10) + res
    }
    if (carry > 0) {
      if (!isDot) {
        res = carry + res
      } else {
        return [carry, res]
      }
    }
    return res
  }
  function plusDot(str1, str2) {
    //使str1和str2的length相等
    let len1 = str1.length
    let len2 = str2.length
    let len = len1 > len2 ? len1 : len2
    if (len1 < len) {
      for (let i = 0; i < len - len1; i++) {
        str1 = str1 + '0'
      }
    }
    if (len2 < len) {
      for (let i = 0; i < len - len2; i++) {
        str2 = str2 + '0'
      }
    }
    return plus(str1, str2, true)
  }
  function doFunc() {
    // let len = parseInt(inputArray[0])
    let str = inputArray[1]
    let op = str.split('+')
    let op1 = op[0]
    let op2 = op[1]
    let op1L = op1.split('.')[0]
    let op1R = op1.split('.')[1]
    let op2L = op2.split('.')[0]
    let op2R = op2.split('.')[1]
    let resL = plus(op1L, op2L)
    let [carry, res] = plusDot(op1R, op2R)
    resL = plus(resL, carry.toString())
    //去掉resL前面的0
    let i = 0
    while (resL.charAt(i) === '0') {
      i++
    }
    resL = resL.substring(i)
    //去掉res后面的0
    if (resL === '') {
      resL = '0'
    }
    i = res.length - 1
    while (res.charAt(i) === '0') {
      i--
    }
    res = res.substring(0, i + 1)
    if (parseInt(res) === 0) {
      console.log(resL)
    } else {
      console.log(resL + '.' + res)
    }
  }
  doFunc()
  process.exit()
})
