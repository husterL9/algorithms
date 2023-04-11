/**
 *
 * @param {object} left
 * @param {Function} right
 */
function myInstanceOf(left, right) {
  let prototype = right.prototype
  if (prototype === null) {
    return false
  }

  if (Object.getPrototypeOf(left) === prototype) return true
  let left = Object.getPrototypeOf(left)
  return myInstanceOf(left, right)
}
