// 944. Delete Columns to Make Sorted
/* var minDeletionSize = function (strs) {
  let count = 0;
  for (let i = 0; i < strs[0].length; i++) {
    let str = "";
    for (let j = 0; j < strs.length; j++) {
      str += strs[j][i];
    }
    let check = str.split("").sort().join("") == str;
    if (!check) {
      count += 1;
    }
  }
  return count;
};
console.log(minDeletionSize(["cba", "daf", "ghi"]));
 */
