// 290. Word Pattern
/* var wordPattern = function (pattern, s) {
  const arrayString = s.split(" ");
  const hashMapPattern = {};
  const hashMapString = {};
  if (pattern.length !== arrayString.length) return false;
  for (let i = 0; i < arrayString.length; i++) {
    if (!hashMapPattern[pattern[i]] && !hashMapString[arrayString[i]]) {
      hashMapPattern[pattern[i]] = arrayString[i];
    }
    if (!hashMapString[arrayString[i]]) {
      hashMapString[arrayString[i]] = pattern[i];
    }

    if (hashMapPattern[pattern[i]] !== arrayString[i]) return false;
  }
  return true;
};
console.log(wordPattern("abba", "dog cat cat dog"));
 */
