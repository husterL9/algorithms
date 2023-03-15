var CQueue = function () {
  //   /**
  //  * @param {number[]} Hstack
  //  * @param {number[]} Tstack
  //  * @return {void}
  //  */
  this.Hstack = []
  this.Tstack = []
  this.HPoint = 0
  this.TPoint = 0
}

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.Tstack.push(value)
  this.TPoint++
}

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.TPoint === 0 && this.Hstack[this.HPoint] === undefined) {
    return null
  } else if (this.TPoint !== 0 && this.Hstack[this.HPoint] === undefined) {
    this.HPoint = 0
    this.Hstack = []
    this.Tstack.forEach((item) => {
      this.Hstack.push(item)
    })
    this.Tstack = []
    this.TPoint = 0
    return this.Hstack[this.HPoint++]
  } else {
    return this.Hstack[this.HPoint++]
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
