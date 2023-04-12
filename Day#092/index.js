// 290. Word Pattern
/* const wordPattern = function (pattern, s) {
  const words = s.split(" ");
  const patternArr = pattern.split("");
  if (s.split(" ").length !== patternArr.length) {
    return false;
  }
  const patternRule = patternArr.reduce((acc, el, i) => {
    if (Object.values(acc).includes(words[i])) {
      return acc;
    }
    return {
      ...acc,
      [el]: words[i],
    };
  }, {});
  return patternArr.every((el, i) => patternRule[el] === words[i]);
};
console.log(wordPattern("abba", "dog cat cat dog"));
 */
