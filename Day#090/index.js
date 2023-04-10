// 20. Valid Parentheses
/* var isValid = function (brackets) {
  const closingBracketFor = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const openingBrackets = [];
  for (const bracket of brackets) {
    if (bracket in closingBracketFor) {
      openingBrackets.push(bracket);
    } else if (closingBracketFor[openingBrackets.pop()] !== bracket) {
      return false;
    }
  }
  return openingBrackets.length === 0;
};
console.log(isValid("()[]{}"));
 */
