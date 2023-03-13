/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.minStack = []
  this.minStackAssist = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  if (this.minStack.length === 0) {
    this.minStackAssist.push(x)
    this.minStack.push(x)
    return
  }
  this.minStack.push(x)
  if (x < this.minStackAssist[this.minStackAssist.length - 1]) {
    this.minStackAssist.push(x)
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.minStack.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.minStack[this.minStack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return this.min
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
