const module2 = {
  x: 42,
  getX: function () {
    return this.x
  },
}

const unboundGetX = module2.getX
console.log(unboundGetX())
Function.prototype.bind = function () {}
