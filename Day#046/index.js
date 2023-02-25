// Binary Agents
/* function binaryAgent(str) {
  let arr = str.split(" ");
  let res = arr.map((vl) => parseInt(vl, 2));
  return res.map((vl) => String.fromCharCode(vl)).join("");
}
console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
); */

// Everything Be True
/* function truthCheck(collection, pre) {
  let res = collection.map((vl) => {
    return Boolean(vl[pre]);
  });
  console.log(res);
  if (res.includes(false)) return false;
  else return true;
}
console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "role"
  )
); */

// Arguments Optional
/* function addTogether() {
  const [first, second] = arguments;
  if (typeof first !== "number") return undefined;
  if (arguments.length === 1) return (second) => addTogether(first, second);
  if (typeof second !== "number") return undefined;
  return first + second;
}
console.log(addTogether(5, 7)); */

// Make a Person
/* const Person = function (firstAndLast) {
  let fullName = firstAndLast;
  this.getFirstName = function () {
    return fullName.split(" ")[0];
  };
  this.getLastName = function () {
    return fullName.split(" ")[1];
  };
  this.getFullName = function () {
    return fullName;
  };
  this.setFirstName = function (name) {
    fullName = name + " " + fullName.split(" ")[1];
  };
  this.setLastName = function (name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };
  this.setFullName = function (name) {
    fullName = name;
  };
};

const bob = new Person("Bob Ross");
console.log(bob.getFullName()); */

// Map the Debris
/* function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2 * Math.PI;
  const newArr = [];
  const getOrbPeriod = function (obj) {
    const c = Math.pow(earthRadius + obj.avgAlt, 3);
    const b = Math.sqrt(c / GM);
    const orbPeriod = Math.round(a * b);
    return { name: obj.name, orbitalPeriod: orbPeriod };
  };
  for (let elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }
  return newArr;
}
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]); */

/* ======================= Intermediate Algorithm Scripting Finished ======================= */
