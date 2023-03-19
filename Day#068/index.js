// 100. Same Tree
/* var isSameTree = function (p, q) {
  let isSame = true;
  if (!p && !q) {
    return true;
  }
  if ((p && !q) || (!p && q)) {
    return false;
  }
  let traverse = (a, b) => {
    if (a.val !== b.val) {
      isSame = false;
    }
    if (a.left && b.left) {
      traverse(a.left, b.left);
    }
    if (a.right && b.right) {
      traverse(a.right, b.right);
    }
    if ((a.left && !b.left) || (!a.left && b.left)) {
      isSame = false;
    }
    if ((a.right && !b.right) || (!a.right && b.right)) {
      isSame = false;
    }
  };
  traverse(p, q);
  return isSame;
};
console.log(isSameTree([1, 2, 3], [1, 2, 3]));*/

// 1688. Count of Matches in Tournament
/* const numberOfMatches = (n) => n - 1;
console.log(numberOfMatches(7)); */
