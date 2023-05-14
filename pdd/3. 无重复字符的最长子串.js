/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s === '') {
    return 0
  }
  let head = 0
  let tail = 0
  while (tail < s.length - 1) {
    let substr = s.slice(head, tail + 1)
    if (hasChar(substr, s[tail + 1])) {
      head++
      tail++
    } else {
      tail++
    }
  }
  return tail - head + 1
  //   let point = 0
  //   let temp = ''
  //   let max = 0
  //   for (let index = 0; index < s.length; index++) {
  //     let count = 0
  //     temp = ''
  //     point = index
  //     while (point < s.length) {
  //       if (hasChar(temp, s[point])) {
  //         break
  //       }
  //       temp += s[point]
  //       count++
  //       point++
  //     }
  //     if (count > max) {
  //       max = count
  //     }
  //   }
  //   return max
}
/**
 * @param {string} str
 */
function hasChar(str, char) {
  let set = new Set()
  for (const item of str) {
    set.add(item)
  }
  set.add(char)
  if (set.size < str.length + 1) {
    return true
  }
  return false
}
