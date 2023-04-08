// 133. Clone Graph
/* var cloneGraph = function (node) {
  if (node === null) {
    return null;
  }
  const map = new Map();
  const clone = (root) => {
    if (!map.has(root.val)) {
      map.set(root.val, new Node(root.val));
      map.get(root.val).neighbors = root.neighbors.map(clone);
    }
    return map.get(root.val);
  };
  return clone(node);
};
 */
