/*
  You are given pointer to the root of the binary search tree and two values  and . You need to return the lowest common ancestor (LCA) of  and  in the binary search tree.

  Complete the function lca in the editor below. It should return a pointer to the lowest common ancestor node of the two values given.

  lca has the following parameters:
  - root: a pointer to the root node of a binary search tree
  - v1: a node.data value
  - v2: a node.data value

  Input Format

  The first line contains an integer, n, the number of nodes in the tree.
  The second line contains n space-separated integers representing node.data values.
  The third line contains two space-separated integers, v1 and v2.

  To use the test data, you will have to create the binary search tree yourself. Here on the platform, the tree will be created for you.

  Constraints
  1 <= n, node.data <= 25
  1 <= v1, v2 <= 25
  v1 != v2
  The tree will contain nodes with data equal to v1 and v2.

  Output Format

  Return the a pointer to the node that is the lowest common ancestor of v1 and v2.

*/
#include <bits/stdc++.h>

using namespace std;

class Node {
    public:
        int data;
        Node *left;
        Node *right;
        Node(int d) {
            data = d;
            left = NULL;
            right = NULL;
        }
};

class Solution {
    public:
  		Node* insert(Node* root, int data) {
            if(root == NULL) {
                return new Node(data);
            } else {
                Node* cur;
                if(data <= root->data) {
                    cur = insert(root->left, data);
                    root->left = cur;
                } else {
                    cur = insert(root->right, data);
                    root->right = cur;
               }

               return root;
           }
        }

/*The tree node has data, left child and right child
class Node {
    int data;
    Node* left;
    Node* right;
};

*/

/*
  Solution by TribalK
*/

    Node *lca(Node *root, int v1,int v2) {
        queue<Node*> nodeQueue;
        Node* lcaNode = NULL;

        nodeQueue.push(root);
        while(!nodeQueue.empty()) {
            Node* curNode = nodeQueue.front();
            bool v1Path = findPath(curNode, v1);
            bool v2Path = findPath(curNode, v2);

            if(v1Path && v2Path) {
                lcaNode = curNode;

                if(curNode->left != NULL) {
                    nodeQueue.push(curNode->left);
                }

                if(curNode->right != NULL) {
                    nodeQueue.push(curNode->right);
                }
            }

            nodeQueue.pop();
        }

        return lcaNode;
    }

    bool findPath(Node* curNode, int v) {
        if(curNode == NULL) {
            return false;
        } else if(curNode->data == v) {
            return true;
        } else {
            return findPath(curNode->left,v) || findPath(curNode->right,v);
        }
    }

}; //End of Solution
