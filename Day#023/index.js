// Where do I Belong
/* function getIndexToIns(arr, num) {
  const sortArr = arr.sort((a, b) => a - b);
  const findIndex = sortArr.findIndex((vl) => {
    if (vl >= num) return vl;
  });
  if (findIndex == -1) return arr.length;
  else return findIndex;
}
console.log(getIndexToIns([5, 3, 20, 3], 5)); */

// Mutations
/* function mutation(arr) {
  for (const i of arr[1].toLowerCase()) {
    if (!arr[0].toLowerCase().includes(i)) return false;
  }
  return true;
}
console.log(mutation(["Noel", "Ole"])); */

// Chunky Monkey
/* function chunkArrayInGroups(arr, size) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
} */

/* =========== Basic Algorithm Scripting finished ===========  */
