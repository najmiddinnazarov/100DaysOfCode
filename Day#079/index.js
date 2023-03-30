// 1748. Sum of Unique Elements
/* var sumOfUnique = function (nums) {
  let map = {};
  let sum = 0;
  for (let num of nums) {
    map[num] ? map[num]++ : (map[num] = 1);
    if (map[num] === 1) sum += num;
    else if (map[num] === 2) sum -= num;
  }
  return sum;
};
console.log(sumOfUnique([1, 2, 3, 4, 4])); */
