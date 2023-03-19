// compose(add10, mul10, add100)(10);

const add10 = (x) => x + 10
const mul10 = (x) => x * 10
const add100 = (x) => x + 100
/**
 *
 * @param  {Function[]} funs
 * @return {Function}
 */
function compose(...funs) {
  console.log(funs)
  return (arg) => {
    let n = funs.length - 1
    let temp = arg
    while (n >= 0) {
      console.log(funs[n])
      temp = funs[n](temp)
      n--
    }
    return temp
  }
}
console.log(11)
console.log(compose(add10, mul10, add100)(10))
