//! Hour 1
// JavaScript Object Literals and Constructors Demo

// Step 1: Creating an Object Literal
// -------------------------------------------------
// Object literals are a simple way to create objects but can become cumbersome when creating multiple objects of the same type.

// Example of an object literal for a car
let car1 = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2021,
  displayInfo: function () {
    return this.make + ' ' + this.model + ' (' + this.year + ')';
  },
};

// Instructor Note:
// Explain that car1 is an object representing a car, with properties and a method to display its info.
// However, if we need to create another car, we have to rewrite this structure, which is inefficient.

// Step 2: Introduction to Constructors
// -------------------------------------------------
// Constructors are functions that are used to create objects. They allow us to define a 'template' for an object and then create multiple instances of it without repeating code.

// Defining a Constructor Function for a Car
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.displayInfo = function () {
    return this.make + ' ' + this.model + ' (' + this.year + ')';
  };
}

// Instructor Note:
// Point out the similarities between the object literal and the constructor function.
// Emphasize that with the constructor, we can create multiple cars without repeating the structure.

// Step 3: Creating Objects Using Constructor Function
// -------------------------------------------------
// We use the 'new' keyword to create instances of the Car object.

let car2 = new Car('Honda', 'Civic', 2020);
let car3 = new Car('Ford', 'Mustang', 2022);

// Instructor Note:
// Highlight that car2 and car3 are new objects created using the Car constructor.
// This method is more efficient than writing out each object literally as we did with car1.

// Step 4: Comparing Object Literal with Constructor
// -------------------------------------------------
// Using constructors simplifies object creation and management, especially when dealing with multiple objects of the same type.

console.log(car1.displayInfo()); // Output: Toyota Corolla (2021)
console.log(car2.displayInfo()); // Output: Honda Civic (2020)
console.log(car3.displayInfo()); // Output: Ford Mustang (2022)

// Instructor Note:
// Conclude by discussing the benefits of constructors in organizing and managing code, especially when the same object structure is used repeatedly.
//! Hour 2

// JavaScript Prototypes and Prototype Chains Demo

// Understanding Prototypes, Prototype Chains, and __proto__
// -------------------------------------------------
// Prototypes are fundamental in JavaScript, providing a means for objects to inherit properties and methods.

// Difference Between 'prototype' and '__proto__'
// -------------------------------------------------
// 'prototype' is a property on a constructor function that sets what will become the __proto__ property on the constructed objects.

// '__proto__' is the actual object that is used in the lookup chain to resolve methods, etc. It references the prototype of the object.

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// Adding a method to the Car prototype
Car.prototype.displayInfo = function () {
  return this.make + ' ' + this.model + ' (' + this.year + ')';
};

// Creating a new car object
let myCar = new Car('Tesla', 'Model 3', 2021);

// Instructor Note:
// The Car function has a 'prototype' property. We add methods to this prototype.
// Objects created by 'new Car(...)' will have these methods available in their __proto__.

// Example of accessing prototype methods
console.log(myCar.displayInfo()); // Outputs: "Tesla Model 3 (2021)"

// Understanding Prototype Chains
// -------------------------------------------------
// The prototype chain is a series of links between objects' prototypes (__proto__ properties).

// Accessing the prototype of myCar
console.log(myCar.__proto__); // Shows the Car prototype
console.log(myCar.__proto__.__proto__); // Shows the Object prototype, the prototype of Car's prototype

// Instructor Note:
// myCar's __proto__ property points to Car's prototype. This is how myCar 'inherits' methods from Car.prototype.
// The chain continues up to Object.prototype, which is the top of the prototype chain.

// Adding More Methods to Car Prototype
// -------------------------------------------------
Car.prototype.getAge = function () {
  return new Date().getFullYear() - this.year;
};

// myCar inherits the getAge method through the prototype chain
console.log(myCar.getAge()); // Outputs the age of the car

// Instructor Note:
// Emphasize that prototype chain allows objects to inherit properties and methods.
// The 'prototype' property on constructor functions and '__proto__' property on objects play a crucial role in this inheritance mechanism.

// Conclusion:
// Prototypes and prototype chains are key to understanding object-oriented features in JavaScript.
// They provide a powerful way to extend object functionality and promote code reuse.
