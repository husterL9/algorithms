/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let max = 0
  let temp = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j)
        if (temp > max) {
          max = temp
        }
      }
      temp = 0
    }
  }
  return max
  function dfs(i, j) {
    if (isOut(i, j)) {
      return
    }
    if (grid[i][j] === 1) {
      grid[i][j] = 2
      temp++
      dfs(i, j - 1)
      dfs(i - 1, j)
      dfs(i, j + 1)
      dfs(i + 1, j)
    }
  }
  function isOut(i, j) {
    let bound1 = grid.length - 1
    let bound2 = grid[0].length - 1
    if (i > bound1 || j > bound2 || i < 0 || j < 0) {
      return true
    } else {
      return false
    }
  }
}
let grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
]
maxAreaOfIsland(grid)
