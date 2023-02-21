// Sorted Union
/* function uniteUnique(...arr) {
  return [...arr.flat(Infinity)].filter(
    (vl, index) => [...arr.flat(Infinity)].indexOf(vl) === index
  );
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
 */

// Convert HTML Entities
/* function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  return str.replace(/([&<>\"'])/g, (match) => htmlEntities[match]);
}
convertHTML("Dolce & Gabbana"); */
