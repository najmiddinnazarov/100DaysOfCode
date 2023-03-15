// 35. Search Insert Position
/* var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  if (target < nums[0]) {
    return 0;
  } else if (target > nums[end]) {
    return end + 1;
  }
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target < nums[mid]) {
      end = mid - 1;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return start;
};
console.log(searchInsert([1, 3, 5, 6], 5));
 */

// 14. Longest Common Prefix
/* var longestCommonPrefix = function (strs) {
  strs.sort();
  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] !== strs[strs.length - 1][i]) {
      return strs[0].substr(0, i);
    }
  }
  return strs[0];
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
 */
