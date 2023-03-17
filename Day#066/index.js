// 1470. Shuffle the Array
/* var shuffle = function (nums, n) {
  const arr1 = nums.slice(0, n).reverse();
  const arr2 = nums.slice(n).reverse();
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      nums[i] = arr1.pop();
    } else {
      nums[i] = arr2.pop();
    }
  }
  return nums;
};
console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
 */

// 2574. Left and Right Sum Differences
/* var leftRigthDifference = function (nums) {
  const totalSum = nums.reduce((acc, num) => acc + num, 0);
  const res = [];
  let leftSum = 0;
  for (const num of nums) {
    res.push(Math.abs(totalSum - num - 2 * leftSum));
    leftSum += num;
  }
  return res;
};
console.log(leftRigthDifference([10, 4, 8, 3]));
 */

// 1512. Number of Good Pairs
// time O(N^2) space O(1)
/* var numIdenticalPairs = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
  }
  return count;
};
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
 */
