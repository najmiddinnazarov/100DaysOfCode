// Truncate a String
/* function truncateString(str, num) {
  if (num > 12) return str;
  else return str.substr(0, num).padEnd(num + 3, "...");
}
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length + 2
  )
);
 */

// Finders Keepers
/* function findElement(arr, func) {
  return arr.find((vl) => {
    return func(vl);
  });
}
console.log(findElement([1, 3, 5, 9], (num) => num % 2 === 0)); */

// Boo who
/* function booWho(bool) {
  if (bool === true || bool === false) return true;
  else return false;
}
console.log(booWho("true")); */

// Title Case a Sentence
/* function titleCase(str) {
  let arr = str.toLowerCase().split(" ");
  let res = "";
  arr.forEach((vl) => {
    res += vl.replace(vl.charAt(0), vl.charAt(0).toUpperCase()) + " ";
  });
  return res.substr(-res.length, res.length - 1);
}
console.log(titleCase("I'm a little tea pot"));
 */
