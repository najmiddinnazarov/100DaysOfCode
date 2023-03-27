// 226. Invert Binary Tree
/* var invertTree = function (root) {
  if (root == null) return null;
  let tmpTree = root.left;
  root.left = root.right;
  root.right = tmpTree;
  invertTree(root.right);
  invertTree(root.left);
  return root;
};
console.log(invertTree([4, 2, 7, 1, 3, 6, 9]));
 */
