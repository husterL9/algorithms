process.stdin.resume()
process.stdin.setEncoding('utf-8')
let input = ''
process.stdin.on('data', (data) => {
  input += data
})
process.stdin.on('end', () => {
  let inputArray = input.split('\n')
  /**
   * 待实现函数，在此函数中填入答题代码
   * doFunc()
   */
  function doFunc() {
    let n = parseInt(inputArray[0])
    let moduleArr = []
    for (let index = 0; index < n; index++) {
      moduleArr.push(inputArray[index + 1])
    }
    function toAdjList(arr) {
      let adjList = []
      for (let i = 0; i < arr.length; i++) {
        let deps = arr[i].split(' ')
        let num = parseInt(deps[0])
        adjList[i] = []
        for (let j = 1; j <= num; j++) {
          adjList[i].push(parseInt(deps[j]) - 1)
        }
      }
      return adjList
    }
    function initTimes(arr) {
      let adjList = toAdjList(arr)
      let n = arr.length
      let inDegree = new Array(n).fill(0)
      let queue = []
      let result = []
      let times = 0
      for (let i = 0; i < n; i++) {
        for (let j of adjList[i]) {
          inDegree[j]++
        }
      }
      for (let i = 0; i < n; i++) {
        if (inDegree[i] == 0) {
          queue.push(i)
        }
      }
      while (queue.length) {
        let size = queue.length
        times++
        while (size--) {
          let cur = queue.shift()
          result.push(cur)
          for (let next of adjList[cur]) {
            inDegree[next]--
            if (inDegree[next] === 0) {
              queue.push(next)
            }
          }
        }
      }
      return result.length === n ? times : -1
    }
    console.log(initTimes(moduleArr))
  }
  doFunc()
  process.exit()
})
