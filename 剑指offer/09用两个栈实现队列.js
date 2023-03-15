var CQueue = function () {
  this.TPoint = 0
  this.Hstack = []
  this.Tstack = []
}

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.Tstack.push(value)
  this.TPoint = this.Tstack.length
}

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.Hstack.length === 0) {
    this.Tstack.reverse()
    this.TPoint = 0
    this.Tstack.forEach((item) => {
      this.Hstack.push(item)
    })
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
