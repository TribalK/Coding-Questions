/*
  There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

  A province is a group of directly or indirectly connected cities and no other cities outside of the group.

  You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

  Return the total number of provinces.

  Constraints:

  1 <= n <= 200
  n == isConnected.length
  n == isConnected[i].length
  isConnected[i][j] is 1 or 0.
  isConnected[i][i] == 1
  isConnected[i][j] == isConnected[j][i]

  Solution by TribalK
*/
class Solution {
    public int findCircleNum(int[][] isConnected) {
        int numberOfNodes = isConnected.length;
        int numberOfConnections = isConnected[0].length;
        // once a city is visited, we no longer need to revisit it
        boolean[] visited = new boolean[numberOfNodes];
        int numberOfProvinces = 0;
        // using Map for time complexity reduction
        Map<Integer,ArrayList<Integer>> cityConnections = new HashMap<Integer,ArrayList<Integer>>();

        // set visited array and map all city connctions together
        for(int x=0; x<numberOfNodes; x++) {
            visited[x] = false;

            ArrayList<Integer> connectedCityCodes = new ArrayList<Integer>();

            for(int y=0; y<numberOfConnections; y++) {
                if(x != y && isConnected[x][y] == 1) {
                   connectedCityCodes.add(y);
                }
            }

            // place connections for each city
            cityConnections.put(x, connectedCityCodes);
        }

        for(int i=0; i<numberOfNodes; i++) {
             if(!visited[i] && DFSUtil(visited,cityConnections,i)) {
                 numberOfProvinces++;
             }
        }

        return numberOfProvinces;
    }

    // Depth-First Search to traverse connected cities
    public boolean DFSUtil(boolean[] visited, Map<Integer,ArrayList<Integer>> cityConnections, int curCity) {
        visited[curCity] = true;

        ArrayList<Integer> connections = cityConnections.get(curCity);

        for(int i=0; i<connections.size(); i++) {
            if(!visited[connections.get(i)]) {
                DFSUtil(visited, cityConnections, connections.get(i));
            }
        }

        return true;
    }
}
