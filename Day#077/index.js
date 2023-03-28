// 1365. How Many Numbers Are Smaller Than the Current Number
/* var smallerNumbersThanCurrent = function (nums) {
  let hash = new Map();
  let sorted = nums.slice().sort((a, b) => a - b);
  sorted.forEach((number, idx) =>
    hash.has(number) ? null : hash.set(number, idx)
  );
  return nums.map((x) => hash.get(x));
};
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
 */
