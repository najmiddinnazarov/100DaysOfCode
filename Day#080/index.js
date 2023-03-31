// 461. Hamming Distance
/* var hammingDistance = function (x, y) {
  let str = x.toString(2);
  let str2 = y.toString(2);
  let padStart = Math.max(str.length, str2.length);
  str = str.padStart(padStart, "0");
  str2 = str2.padStart(padStart, "0");
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str2[i]) counter++;
  }
  return counter;
};
console.log(hammingDistance(1, 4));
 */
