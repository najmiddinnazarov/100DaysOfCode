// 1047. Remove All Adjacent Duplicates In String
/* var removeDuplicates = function (s) {
  let output = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === output[output.length - 1]) {
      output.pop();
    } else {
      output.push(s[i]);
    }
  }
  return output.join("");
};
console.log(removeDuplicates("abbaca"));
 */

// 1051. Height Checker
/* var heightChecker = function (heights) {
  const sortedHeights = [...heights].sort((a, b) => a - b);
  let output = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sortedHeights[i]) output++;
  }
  return output;
};
console.log(heightChecker([1, 1, 4, 2, 1, 3]));
 */
