// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
/* const squareList = (arr) => {
  let array = [];
  return arr.reduce((sum, curr) => {
    if (Math.sign(curr) == 1 && Number.isInteger(curr)) array.push(curr ** 2);
    return array;
  }, 1);
};
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers); */

// Sort an Array Alphabetically using the sort Method
/* function alphabeticalOrder(arr) {
  return arr.sort((a, b) => a.localeCompare(b));
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"])); */

// Return a Sorted Array Without Changing the Original Array
/* const globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  let array = [].concat(arr);
  return array.sort((a, b) => a - b);
}
nonMutatingSort(globalArray);
 */

// Split a String into an Array Using the split Method
/* function splitify(str) {
  return str.split(/\W/);
}
console.log(splitify("Hello World,I-am code")); */

// Combine an Array into a String Using the join Method
/* function sentensify(str) {
  return str.split(/\W/).join(" ");
}
console.log(sentensify("May-the-force-be-with-you")); */

// Apply Functional Programming to Convert Strings to URL Slugs
/* function urlSlug(title) {
  let arr = title.toLowerCase().split(" ");
  let newArr = [];
  arr.forEach((el) => {
    if (el !== "") newArr.push(el);
  });
  return newArr.join("-");
}
console.log(urlSlug(" Winter Is  Coming")); */

// Use the every Method to Check that Every Element in an Array Meets a Criteria
/* function checkPositive(arr) {
  return arr.every((vl) => Math.sign(vl) == 1);
}
console.log(checkPositive([1, 2, 3, -4, 5])); */

// Use the some Method to Check that Any Elements in an Array Meet a Criteria
/* function checkPositive(arr) {
  return arr.some((vl) => Math.sign(vl) == 1);
}
console.log(checkPositive([-1, -2, -3, -4, -5])); */

// Introduction to Currying and Partial Application
/* const add = x => y => z => x + y + z;
add(10)(20)(30); */

/* =============== Finished Functional Programming =============== */
