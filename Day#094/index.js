// 451. Sort Characters By Frequency
/* var frequencySort = function (s) {
  let freq = {},
    max = 1;
  for (let c of s) {
    freq[c] = (freq[c] || 0) + 1;
    max = Math.max(max, freq[c]);
  }
  let res = Array(max + 1).fill("");
  for (let c of Object.keys(freq))
    res[res.length - freq[c]] = res[res.length - freq[c]] + c.repeat(freq[c]);
  return res.join("");
};
console.log(frequencySort("tree"));
 */
