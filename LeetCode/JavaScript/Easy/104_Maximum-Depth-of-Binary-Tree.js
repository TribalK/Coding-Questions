/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root == null) {
        return 0;
    }

    let maxLeft = maxDepth(root.left);
    let maxRight = maxDepth(root.right);

    return maxLeft > maxRight ? maxLeft+1 : maxRight+1;
};
