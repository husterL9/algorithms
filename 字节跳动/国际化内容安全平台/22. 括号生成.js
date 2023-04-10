/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  function assit(n) {
    if (n === 1) {
      return new Set(['()'])
    }
    let set = generateParenthesis(n - 1)
    let tempSet = new Set()
    set.forEach((item) => {
      insertString(item).forEach((str) => {
        tempSet.add(str)
      })
    })
    return tempSet
  }
  return Array.from(assit(n))
  function insertString(str) {
    let strArr = str.split('')
    let resArr = []
    let temp
    for (let index = 0; index <= strArr.length; index++) {
      temp = Array.from(strArr)
      temp.splice(index, 0, '(')
      for (let j = index + 1; j <= temp.length; j++) {
        temp.splice(j, 0, ')')
        resArr.push(temp.join(''))
        temp.splice(j, 1)
      }
      temp.splice(index, 1)
    }
    return resArr
  }
}
generateParenthesis(3)
