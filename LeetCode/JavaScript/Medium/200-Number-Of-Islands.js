/*
  Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

  An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

  Solution by TribalK
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const rowSize = grid.length;
    const colSize = grid[0].length;
    let islandCount = 0;

    for(let i=0; i<rowSize; i++) {
        for(let j=0; j<colSize; j++) {
            if(grid[i][j] === '1') {
                isSafe(grid, i, j, rowSize, colSize);
                islandCount++;
            }
        }
    }

    return islandCount;
};

var isSafe = function(grid, x, y, rowSize, colSize) {
    if(x >= 0 && y >= 0 && x < rowSize && y < colSize && grid[x][y] === '1') {
        grid[x][y] = '0';
        isSafe(grid, x, y-1, rowSize, colSize);
        isSafe(grid, x+1, y, rowSize, colSize);
        isSafe(grid, x, y+1, rowSize, colSize);
        isSafe(grid, x-1, y, rowSize, colSize);
    }
}
