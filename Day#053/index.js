// 169. Majority Element
/* var majorityElement = function (nums) {
  let obj = {};
  nums.map((vl) => {
    if (vl in obj) obj[vl]++;
    else obj[vl] = 1;
  });
  let max = Math.max(...Object.values(obj));
  for (const key in obj) {
    if (obj[key] == max) return key;
  }
};
console.log(majorityElement([3, 2, 3])); */
