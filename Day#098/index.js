// 1768. Merge Strings Alternately
/* var mergeAlternately = function (word1, word2) {
  let i = 0,
    j = 0;
  let str = "";
  while (i < word1.length && j < word2.length) {
    str += str.length % 2 == 0 ? word1[i++] : word2[j++];
  }
  while (i < word1.length) {
    str += word1[i++];
  }
  while (j < word2.length) {
    str += word2[j++];
  }
  return str;
};
console.log(mergeAlternately("abc", "pqr"));
 */
