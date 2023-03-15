/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  //   /**
  //    * @param {string[]} sArr
  //    */
  let sArr = s.split('')
  for (let i = 0; i < n; i++) {
    sArr.push(sArr.shift())
  }
  return sArr.join('')
}
