// Use Inheritance So You Don't Repeat Yourself
/* function Cat(name) {
  this.name = name;
}
Cat.prototype = {
  constructor: Cat,
};
function Bear(name) {
  this.name = name;
}
Bear.prototype = {
  constructor: Bear,
};
function Animal() {}
Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};
 */

// Inherit Behaviors from a Supertype
/* function Animal() { }
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype); */

// Set the Child's Prototype to an Instance of the Parent
/* function Animal() { }
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
function Dog() { }
let beagle = new Dog();
Dog.prototype = Object.create(Animal.prototype);
 */

// Reset an Inherited Constructor Property
/* function Animal() { }
function Bird() { }
function Dog() { }
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
let duck = new Bird();
Bird.prototype.constructor = Bird;
let beagle = new Dog();
Dog.prototype.constructor = Dog; */

// Add Methods After Inheritance
/* function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};
function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function () {
  console.log("Woof!");
};
Dog.prototype.constructor = Dog;
let beagle = new Dog();
beagle.eat();
beagle.bark();
 */

// Override Inherited Methods
/* function Bird() {}
Bird.prototype.fly = function () {
  return "I am flying!";
};
function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function () {
  return "Alas, this is a flightless bird.";
};
let penguin = new Penguin();
console.log(penguin.fly());
 */

// Use a Mixin to Add Common Behavior Between Unrelated Objects
/* let bird = {
  name: "Donald",
  numLegs: 2,
};
let boat = {
  name: "Warrior",
  type: "race-boat",
};
let glideMixin = function (bird) {
  bird.glide = function () {
    console.log("Flying, wooosh!");
  };
  bird.boat = function () {
    console.log("Flying, wooosh!");
  };
};
glideMixin(bird);
glideMixin(boat);
 */

// Use Closure to Protect Properties Within an Object from Being Modified Externally
/* function Bird() {
  let weight = 15;
  this.getWeight = function () {
    return weight;
  };
}
let ducky = new Bird();
ducky.getWeight();
 */

// Understand the Immediately Invoked Function Expression (IIFE)
/* (function () {
  console.log("Chirp, chirp!");
})();
 */

// Use an IIFE to Create a Module
/* let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.glide = function () {
        console.log("Gliding on the water");
      };
    },
    singMixin: function (obj) {
      obj.fly = function () {
        console.log("Flying, wooosh!");
      };
    },
  };
})();
 */

/* =========== Object Oriented Programming finished ===========  */
