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
    function initPool(min, max) {
      let pool = []
      for (let i = min; i <= max; i++) {
        pool.push(0)
      }
      return pool
    }
    function updateFirstFree(pool, firstFree) {
      let n = pool.length
      while (firstFree < n && pool[firstFree] !== 1) {
        firstFree++
      }
      return firstFree
    }
    function allocateDynamic(pool, firstFree) {
      let n = pool.length
      if (firstFree >= n) {
        pool[firstFree] = 1
        firstFree = updateFirstFree(pool, firstFree)
      } else {
      }
      return firstFree
    }
    function allocateSpecific(pool, firstFree, id) {
      let n = pool.length
      if (id > -1 && id < n && pool[id] === 0) {
        pool[id] = 1
        if (id === firstFree) {
          firstFree = updateFirstFree(pool, firstFree)
        }
      } else {
      }
      return firstFree
    }
    function releaseResource(pool, id) {
      let n = pool.length
      if (id > 0 && id < n && pool[id] === 1) {
        pool[id] = 0
        pool.push(pool.splice(id, 1)[0])
      } else {
      }
    }
    function handleOperation(pool, firstFree, op) {
      let type = op[0]
      let id = op[1]
      switch (type) {
        case 1:
          firstFree = allocateDynamic(pool, firstFree)
          break
        case 2:
          firstFree = allocateSpecific(pool, firstFree, id)
          break
        case 3:
          releaseResource(pool, id)
          break
        default:
          break
      }
      return firstFree
    }
    let range = inputArray[0].split(' ')
    let min = parseInt(range[0])
    let max = parseInt(range[1])
    let pool = initPool(min, max)
    let firstFree = min
    let count = parseInt(inputArray[1])
    for (let i = 0; i < count; i++) {
      let op = inputArray[i + 2].split(' ')
      op = op.map((item) => parseInt(item))
      firstFree = handleOperation(pool, firstFree, op)
    }
    console.log(firstFree)
  }
  doFunc()
  process.exit()
})
