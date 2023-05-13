/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let arr1 = version1.split('.')
  let arr2 = version2.split('.')
  let len = Math.max(arr1.length, arr2.length)
  for (let i = 0; i < len; i++) {
    let v1 = arr1[i] ? parseInt(arr1[i]) : 0
    let v2 = arr2[i] ? parseInt(arr2[i]) : 0
    if (v1 > v2) return 1
    if (v1 < v2) return -1
  }
  return 0
}
