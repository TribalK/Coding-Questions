/*
  Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

  An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

  Solution by TribalK
*/
class Solution {
public:
    void isSafe(int i, int j, int row_size, int col_size,vector<vector<char>>& grid) {
        if(i >= 0 && i < row_size && j >= 0 && j < col_size && grid[i][j] == '1')
        {
            grid[i][j] = '0';
            isSafe(i-1, j, row_size, col_size, grid);
            isSafe(i, j-1, row_size, col_size, grid);
            isSafe(i, j+1, row_size, col_size, grid);
            isSafe(i+1, j, row_size, col_size, grid);
        }
    }

    int numIslands(vector<vector<char>>& grid) {
        int row_size = grid.size();
        int col_size = grid[0].size();
        int island_count = 0;

        for(int i=0; i<row_size; i++)
        {
            for(int j=0; j<col_size; j++)
            {
                if(grid[i][j] == '1') {
                    isSafe(i, j, row_size, col_size, grid);
                    island_count++;
                }
            }
        }

        return island_count;
    }
};
