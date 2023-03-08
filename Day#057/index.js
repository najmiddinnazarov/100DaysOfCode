// 1662. Check If Two String Arrays are Equivalent
/* var arrayStringsAreEqual = function (word1, word2) {
  return Object.is(word1.join(""), word2.join(""));
};
console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));
 */

// 1816. Truncate Sentence
/* var truncateSentence = function (s, k) {
  return s.split(" ").slice(0, k).join(" ");
};
console.log(truncateSentence("What is the solution to this problem", 4)); */

// 2418. Sort the People
/* var sortPeople = function (names, heights) {
  let arr = [];
  for (let i = 0; i < names.length; i++) {
    arr.push([names[i], heights[i]]);
  }
  let sortArr = arr.sort((a, b) => {
    return b[1] - a[1];
  });
  return sortArr.map((vl) => vl[0]);
};
console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
 */

// 2108. Find First Palindromic String in the Array
/* var firstPalindrome = function (words) {
  let findWords = words.find((vl) => {
    if (vl.split("").reverse().join("") == vl) return vl;
  });
  return findWords ? findWords : "";
};
console.log(firstPalindrome(["def", "ghi"]));
 */

// 2553. Separate the Digits in an Array
/* var separateDigits = function (nums) {
  let str = nums.join("").split("");
  return str.map((vl) => +vl);
};
console.log(separateDigits([13, 25, 83, 77]));
 */
