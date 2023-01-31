// Slice and Splice
/* function frankenSplice(arr1, arr2, n) {
  let res = [];
  res.push(arr2.slice(0, n), arr1, arr2.slice(n));
  return res.flat(Infinity);
}
console.log(
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
); */

// Falsy Bouncer
/* function bouncer(arr) {
  let res = [];
  arr.forEach((vl) => {
    if (vl) res.push(vl);
  });
  return res;
}
console.log(bouncer([7, "ate", "", false, 9])); */
