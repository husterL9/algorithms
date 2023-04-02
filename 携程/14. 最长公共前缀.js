/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let resStr = []
  let start = 0
  let standard
  while (1) {
    standard = strs[0][start]
    if (standard === undefined) {
      break
    }
    let flag = true
    for (let index = 0; index < strs.length; index++) {
      if (strs[index][start] !== standard) {
        flag = false
        break
      }
    }
    if (!flag) {
      break
    }
    start++
    resStr.push(standard)
  }
  return resStr.join('')
}
