/* =========== Start Regular Expressions ===========  */

// Using the Test Method
/* let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); */

// Match Literal Strings
/* let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding); */

// Match a Literal String with Different Possibilities
/* let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString); */

// Ignore Case While Matching
/* let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString); */

// Extract Matches
/* let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex); */

// Find More Than the First Match
/* let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);  */

// Match Anything with Wildcard Period
/* let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /run.|sun.|fun.|pun.|nun.|bun./;
let result = unRegex.test(exampleStr); */

// Match Single Character with Multiple Possibilities
/* let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiuo]/gi;
let result = quoteSample.match(vowelRegex); */

// Match Letters of the Alphabet
/* let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex); */

// Match Numbers and Letters of the Alphabet
/* let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi;
let result = quoteSample.match(myRegex); */
