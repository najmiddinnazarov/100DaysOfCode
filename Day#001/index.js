/* =================== Basic JavaScript =================== */

// Chaining If Else Statements
// function testSize(num) {
//   if (num < 5) return "Tiny";
//   else if (num < 10) return "Small";
//   else if (num < 15) return "Medium";
//   else if (num < 20) return "Large";
//   else if (num >= 20) return "Huge";
// }

// testSize(7);

// Golf Code
// const names = [
//   "Hole-in-one!",
//   "Eagle",
//   "Birdie",
//   "Par",
//   "Bogey",
//   "Double Bogey",
//   "Go Home!",
// ];
// function golfScore(par, strokes) {
//   if (strokes === 1) return "Hole-in-one!";
//   else if (strokes === 2) return "Eagle";
//   else if (strokes === 3) return "Birdie";
//   else if (par === 4 && strokes === 4) return "Par";
//   else if (par === 4 && strokes === 5) return "Bogey";
//   else if (par === 4 && strokes === 6) return "Double Bogey";
//   else if (par >= 4 && strokes >= 7) return "Go Home!";
//   else if (par === 5 && strokes === 5) return "Par";
// }

// golfScore(5, 4);

// Selecting from Many Options with Switch Statements
// function caseInSwitch(val) {
//   let answer = "";
//   switch (val) {
//     case 1:
//       answer = "alpha";
//       break;
//     case 2:
//       answer = "beta";
//       break;
//     case 3:
//       answer = "gamma";
//       break;
//     case 4:
//       answer = "delta";
//       break;
//   }
//   return answer;
// }

// caseInSwitch(1);

// Adding a Default Option in Switch Statements
// function switchOfStuff(val) {
//   let answer = "";
//   switch (val) {
//     case "a":
//       answer = "apple";
//       break;
//     case "b":
//       answer = "bird";
//       break;
//     case "c":
//       answer = "cat";
//       break;
//     default:
//       answer = "stuff";
//   }
//   return answer;
// }

// switchOfStuff(1);

// Multiple Identical Options in Switch Statements
// function sequentialSizes(val) {
//   let answer = "";
//   switch (val) {
//     case 1:
//     case 2:
//     case 3:
//       answer = "Low";
//       break;
//     case 4:
//     case 5:
//     case 6:
//       answer = "Mid";
//       break;
//     case 7:
//     case 8:
//     case 9:
//       answer = "High";
//       break;
//   }
//   return answer;
// }

// sequentialSizes(1);

// Replacing If Else Chains with Switch
// function chainToSwitch(val) {
//   let answer = "";
//   switch (val) {
//     case "bob":
//       answer = "Marley";
//       break;
//     case 42:
//       answer = "The Answer";
//       break;
//     case 1:
//       answer = "There is no #1";
//       break;
//     case 99:
//       answer = "Missed me by this much!";
//       break;
//     case 7:
//       answer = "Ate Nine";
//       break;
//   }
//   return answer;
// }

// chainToSwitch(7);

// Returning Boolean Values from Functions
// function isLess(a, b) {
//   return a < b;
// }

// isLess(10, 15);

// Return Early Pattern for Functions
// function abTest(a, b) {
//   if (Math.sign(a) === -1 || Math.sign(b) === -1) return undefined;
//   else return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }

// console.log(abTest(2, -2));
