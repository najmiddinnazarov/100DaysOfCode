// 2235. Add Two Integers
/* var sum = function (num1, num2) {
  return num1 + num2;
};
 */

// 771. Jewels and Stones
/* var numJewelsInStones = function (jewels, stones) {
  let obj = {};
  let res = 0;
  for (const i of stones) {
    if (i in obj) obj[i]++;
    else obj[i] = 1;
  }
  for (const j of jewels) {
    if (obj[j]) res += obj[j];
  }
  return res;
};
console.log(numJewelsInStones("z", "ZZ"));
 */

// 1342. Number of Steps to Reduce a Number to Zero
/* var numberOfSteps = function (num) {
  let count = 0;
  while (num > 0) {
    count++;
    if (num % 2 === 0) num = num / 2;
    else num = num - 1;
  }
  return count;
};
console.log(numberOfSteps(14));
 */
