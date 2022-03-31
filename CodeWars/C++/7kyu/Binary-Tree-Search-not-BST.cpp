/*
  Given a number and a binary tree (again, NOT a BST):

  Return True if the given number is in the tree
  Return False if it isn't

  Solution by TribalK
*/

struct Node{
  int val;
  Node *left = nullptr;
  Node *right = nullptr;
};

bool search(int n, Node *root){
  if(root == nullptr) {
    return false;
  } else if(root->val == n) {
    return true;
  } else {
    return search(n, root->left) || search(n, root->right);
  }
}
