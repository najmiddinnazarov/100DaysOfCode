// Find Characters with Lazy Matching
/* let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/g;
let result = text.match(myRegex);
 */

// Find One or More Criminals in a Hunt
/* let reCriminals = /C+/; */

// Match Beginning String Patterns
/* let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal); */

// Match Ending String Patterns
/* let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose); */

// Match All Letters and Numbers
/* let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length; */

// Match Everything But Letters and Numbers
/* let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length; */

// Match All Numbers
/* let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length; */

// Match All Non-Numbers
/* let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result = movieName.match(noNumRegex).length; */
