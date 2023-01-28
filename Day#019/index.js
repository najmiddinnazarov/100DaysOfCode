/* =========== Start Basic Algorithm Scripting ===========  */

// Convert Celsius to Fahrenheit
/* function convertCtoF(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}
convertCtoF(30); */

// Reverse a String
/* function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("hello"); */

// Factorialize a Number
/* let count = 1;
function factorialize(num) {
  if (num <= 1) return count;
  else {
    count *= num;
    return factorialize(num - 1);
  }
}
console.log(factorialize(0));
 */

// Find the Longest Word in a String
/* function findLongestWordLength(str) {
  let maxStr = [];
  let array = str.split(" ");
  for (const i of array) {
    maxStr.push(i.length);
  }
  return Math.max(...maxStr);
}
findLongestWordLength("The quick brown fox jumped over the lazy dog"); */
