function addGas(gas, cost) {
  let count
  let flag = false
  for (let index = 0; index < gas.length; index++) {
    count += gas[index]
    let temp = index + 1
    while (temp !== index) {
      if (temp === gas.length) {
        temp = 0
      }
      if (count < cost[temp - 1]) {
        break
      } else {
        count -= cost[temp - 1]
      }
    }
    if (flag) {
      return index
    }
  }
}
// 134. 加油站
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {}
