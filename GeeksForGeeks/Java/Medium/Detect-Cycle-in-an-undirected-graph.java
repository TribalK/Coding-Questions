// { Driver Code Starts
import java.util.*;
import java.lang.*;
import java.io.*;
class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br =
            new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while (T-- > 0) {
            String[] s = br.readLine().trim().split(" ");
            int V = Integer.parseInt(s[0]);
            int E = Integer.parseInt(s[1]);
            ArrayList<ArrayList<Integer>> adj = new ArrayList<>();
            for (int i = 0; i < V; i++) adj.add(i, new ArrayList<Integer>());
            for (int i = 0; i < E; i++) {
                String[] S = br.readLine().trim().split(" ");
                int u = Integer.parseInt(S[0]);
                int v = Integer.parseInt(S[1]);
                adj.get(u).add(v);
                adj.get(v).add(u);
            }
            Solution obj = new Solution();
            boolean ans = obj.isCycle(V, adj);
            if (ans)
                System.out.println("1");
            else
                System.out.println("0");
        }
    }
}// } Driver Code Ends

/*
  Complete the function isCycle() which takes V denoting the number of vertices and adjacency list as input parameters and returns a boolean value denoting if the undirected graph contains any cycle or not, return 1 if a cycle is present else return 0.

  NOTE: The adjacency list denotes the edges of the graph where edges[i][0] and edges[i][1] represent an edge.

  Constraints:
  1 ≤ V, E ≤ 105

  Solution by TribalK
*/

class Solution {
    // Function to detect cycle in an undirected graph.
    public boolean isCycle(int V, ArrayList<ArrayList<Integer>> adj) {

        boolean[] visited = new boolean[V];

        for(int i=0; i<V; i++) {
            if(!visited[i] && cycleFound(adj,i,-1,visited)) {
                return true;
            }
        }

        return false;
    }

    public boolean cycleFound(ArrayList<ArrayList<Integer>> adj, int currentNode, int prevNode, boolean[] visited) {
        visited[currentNode] = true;

        ArrayList<Integer> nodeEdges = adj.get(currentNode);

        for(int i=0; i<nodeEdges.size(); i++) {
            if(visited[nodeEdges.get(i)] && nodeEdges.get(i) != prevNode) {
                return true;
            } else if(!visited[nodeEdges.get(i)] && cycleFound(adj, nodeEdges.get(i), currentNode, visited)) {
                return true;
            }
        }

        return false;
    }
}
