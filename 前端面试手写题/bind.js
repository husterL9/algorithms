function mybind(fn, thisArg, ...args) {
  return (...yourArgs) => {
    fn.call(thisArg, ...args, ...yourArgs)
  }
}
