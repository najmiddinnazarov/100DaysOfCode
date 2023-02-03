// Understand Own Properties
/* function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}
let canary = new Bird("Tweety");
let ownProps = [];
for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
console.log(ownProps); */

// Use Prototype Properties to Reduce Duplicate Code
/* function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 2;
let beagle = new Dog("Snoopy");
 */

// Iterate Over All Properties
/* function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
let ownProps = [];
let prototypeProps = [];
for (let property in beagle) {
  if(beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
} */

// Understand the Constructor Property
/* function Dog(name) {
  this.name = name;
}
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
} */

// Change the Prototype to a New Object
/* function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  numLegs: 2,
  eat: function(){},
  describe: function(){}
}; */

// Remember to Set the Constructor Property when Changing the Prototype
/* function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
}; */

// Understand Where an Object’s Prototype Comes From
/* function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
 */

// Understand the Prototype Chain
/* function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
Object.prototype.isPrototypeOf(Dog.prototype); */
