// Use getters and setters to Control Access to an Object
/* class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }

  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }

  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius */

// Create a Module Script
/* <html>
  <body>
    <script type="module" src="index.js"></script>
  </body>
</html>; */

// Use export to Share a Code Block
/* const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
export { uppercaseString, lowercaseString } */

// Reuse JavaScript Code Using import
/* import { uppercaseString, lowercaseString } from './string_functions.js';
uppercaseString("hello");
lowercaseString("WORLD!"); */

// Use * to Import Everything from a File
/* import * as stringFunctions from "./string_functions.js";
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!"); */

// Create an Export Fallback with export default
/* export default function subtract(x, y) {
  return x - y;
}
 */

// Import a Default Export
/* import subtract from "./math_functions.js";
subtract(7,4); */

// Create a JavaScript Promise
/* const makeServerRequest = new Promise((resolve, reject) => {});
 */

// Complete a Promise with resolve and reject
/* const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer;
  if (responseFromServer) resolve("We got the data");
  else reject("Data not received");
}); */

// Handle a Fulfilled Promise with then
/* const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = true;
  if (responseFromServer) resolve("We got the data");
  else reject("Data not received");
});
makeServerRequest.then((result) => {
  console.log(result);
});
 */

// Handle a Rejected Promise with catch
/* const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = false;
  if (responseFromServer) resolve("We got the data");
  else reject("Data not received");
});
makeServerRequest
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  }); */

/* ======================= ES6 Finished ======================= */
