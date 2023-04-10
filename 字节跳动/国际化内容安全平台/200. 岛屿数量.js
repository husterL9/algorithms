/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let k = 0; k < grid[0].length; k++) {
      if (dfs(i, k)) {
        count++
      }
    }
  }
  return count
  function dfs(i, j) {
    if (isOut(i, j)) {
      return false
    }
    if (grid[i][j] === '1') {
      grid[i][j] = '2'
      dfs(i - 1, j)
      dfs(i, j + 1)
      dfs(i + 1, j)
      dfs(i, j - 1)
      return true
    }
    return false
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
