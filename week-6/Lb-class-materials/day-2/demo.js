//! Hour 1
// JavaScript Constructor Functions and Prototypes Demo (Review)

// Introduction to Constructor Functions
// -------------------------------------------------
// Before ES6, constructor functions were used in JavaScript to create objects and manage inheritance.

// Example: Vehicle Constructor Function
// Define a constructor function for vehicles.
function VehicleConstructor(brand) {
  this.brand = brand; // The brand property is assigned to each new object.
}

// Adding a method to the prototype of VehicleConstructor
// This method will be available to all instances of VehicleConstructor.
VehicleConstructor.prototype.displayBrand = function () {
  console.log(`Vehicle Brand: ${this.brand}`);
};

// Creating an instance of VehicleConstructor
const vehicle1 = new VehicleConstructor('Ford');
vehicle1.displayBrand();

// Instructor Note:
// Explain that constructor functions are templates for objects.
// Methods added to the prototype are accessible to all instances created from the constructor.

// Introducing Inheritance with Constructor Functions
// -------------------------------------------------
// Inheritance in JavaScript can be achieved using constructor functions and the prototype chain.

// Car Constructor Function - Inherits from VehicleConstructor
function CarConstructor(brand, model) {
  VehicleConstructor.call(this, brand); // Inherit the brand property
  this.model = model; // Additional property specific to cars
}

// Setting the prototype of CarConstructor to be VehicleConstructor's prototype
CarConstructor.prototype = Object.create(VehicleConstructor.prototype);

// Ensure the constructor property points back to CarConstructor
CarConstructor.prototype.constructor = CarConstructor;

// Adding a method to CarConstructor
CarConstructor.prototype.displayModel = function () {
  console.log(`Car Model: ${this.model}`);
};

// Creating an instance of CarConstructor
const car1 = new CarConstructor('Toyota', 'Corolla');
car1.displayBrand(); // Inherited from VehicleConstructor
car1.displayModel(); // Specific to CarConstructor

// Instructor Note:
// Highlight how inheritance allows CarConstructor to have properties and methods of VehicleConstructor, plus its own unique properties and methods.
// Discuss the complexity and verbosity involved in setting up this inheritance pattern.

// Conclusion:
// Constructor functions and prototypes are fundamental to understanding how objects and inheritance work in JavaScript.
// They provide a powerful way to create and manage objects before the introduction of ES6 classes.
//! Hour 2
// JavaScript ES6 Classes and Inheritance

// Introduction to ES6 Class Syntax
// -------------------------------------------------
// ES6 introduced the 'class' syntax in JavaScript, providing a more modern and readable way to create objects and implement inheritance.

// ES6 features like 'let' and 'const' for variable declarations, arrow functions, template strings, and default parameters, have significantly improved JavaScript.

// Step 1: Defining a Basic Class
// -------------------------------------------------
// Classes in JavaScript are templates for objects, encapsulating data and behavior.

// Defining the Plant Class
// -------------------------------------------------
// The 'Plant' class serves as a blueprint for creating plant objects with specific properties and methods.

class Plant {
  // The constructor is a special method for creating and initializing objects created with a class.
  // Here, it takes three parameters: species, height, and age.
  constructor(species, height, age) {
    // The 'this' keyword refers to the object instance.
    // 'this.species', 'this.height', and 'this.age' are properties that will be unique to each instance of Plant.
    this.species = species;
    this.height = height;
    this.age = age;
  }

  // 'displayInfo' is a method that all instances of the Plant class will have.
  // This method, when called, will log information about the plant to the console.
  displayInfo() {
    console.log(
      `Plant: ${this.species}, ${this.height} cm tall, ${this.age} years old.`
    );
  }
}

// Instructor Note:
// - Emphasize the role of the constructor in initializing object properties.
// - Discuss how each instance of the Plant class will have its own set of these properties.
// - Explain that the displayInfo method can be called on any instance of the Plant class to log its details.

// Step 2: Creating an Object from a Class
// -------------------------------------------------
const myPlant = new Plant('Fern', 30, 2);
myPlant.displayInfo();

// Instructor Note:
// Emphasize that 'new Plant()' creates an instance of the Plant class, inheriting its properties and methods.

// Step 3: Extending a Class and Method Overriding
// -------------------------------------------------
// Here we demonstrate the concept of inheritance in ES6 classes, which is a key principle in object-oriented programming.

class FloweringPlant extends Plant {
  // The 'extends' keyword is used to create a subclass (FloweringPlant) that inherits from a parent class (Plant).
  constructor(species, height, age, flowerColor) {
    // The 'super' keyword calls the constructor of the parent class (Plant).
    // This is necessary to ensure that the properties of the parent class are initialized in the subclass.
    super(species, height, age);

    // Adding a new property specific to FloweringPlant, which is not present in the Plant class.
    this.flowerColor = flowerColor;
  }

  // Overriding the 'displayInfo' method inherited from the Plant class.
  // This is an example of method overriding where a method in a subclass has the same name as a method in the parent class, but the behavior is modified.
  displayInfo() {
    // We are adding additional information about the flower color in the overridden method.
    console.log(
      `Flowering Plant: ${this.species}, ${this.height} cm tall, ${this.age} years old, with ${this.flowerColor} flowers.`
    );
  }
}

// Creating an instance of FloweringPlant
// This demonstrates how an object of the subclass can be created and used.
const myFloweringPlant = new FloweringPlant('Rose', 45, 3, 'red');

// Testing the overridden method
// Calling 'displayInfo' on the FloweringPlant instance. It will use the overridden method from FloweringPlant, not the original from Plant.
myFloweringPlant.displayInfo();

// Instructor Note:
// - Highlight how 'extends' creates a new class (FloweringPlant) based on another class (Plant), inheriting its properties and methods.
// - Emphasize the use of 'super' to call the parent class's constructor within the subclass.
// - Discuss method overriding as a means to change or extend the behavior of inherited methods.
// - Explain that myFloweringPlant now has properties and behaviors from both Plant and FloweringPlant, demonstrating the power of inheritance.

// Conclusion:
// ES6 classes simplify the implementation of object-oriented concepts in JavaScript.
// Method overriding allows subclasses to modify or extend the behavior of methods inherited from parent classes.

// Refactor yesterdays Coffee Demo into class if there is time:
// Defining the CoffeeMaker Class using ES6 syntax
class CoffeeMaker {
  // The constructor method to initialize the CoffeeMaker instances
  constructor(powerStatus, waterLevel, coffeeStrength) {
    this.powerStatus = powerStatus;
    this.waterLevel = waterLevel;
    this.coffeeStrength = coffeeStrength;
  }

  // Method to change the power status of the CoffeeMaker
  changePower() {
    this.powerStatus = !this.powerStatus;
    console.log(`CoffeeMaker is now ${this.powerStatus ? 'ON' : 'OFF'}`);
  }

  // Method to add water to the CoffeeMaker
  addWater(amountInCups) {
    this.waterLevel += amountInCups;
    console.log(`There is now ${this.waterLevel} cups.`);
  }

  // Method to select the coffee strength
  selectStrength(newStrength) {
    this.coffeeStrength = newStrength;
  }

  // Method to brew coffee
  brewCoffee() {
    if (!this.powerStatus) {
      console.log('Please turn on the coffee maker.');
      return;
    } else if (this.waterLevel < 1) {
      console.log('Not Enough Water, Please add water!');
      return;
    } else {
      console.log('Brewing Coffee...');
      this.waterLevel -= 1;
    }
  }

  // Method to get details of the CoffeeMaker settings
  getDetails() {
    console.log(`CoffeeMaker power is ${this.powerStatus ? 'ON' : 'OFF'}`);
    console.log(`CoffeeMaker has ${this.waterLevel} cups`);
    console.log(
      `CoffeeMaker is set to make a ${this.coffeeStrength} cup of joe`
    );
  }
}

// Creating an instance of the CoffeeMaker class
const myCoffeeMaker = new CoffeeMaker(false, 12, 'strong');

// Example usage
myCoffeeMaker.brewCoffee();
// Fixing the method call to selectStrength as it was incorrectly called as a property
myCoffeeMaker.selectStrength('Weak');
myCoffeeMaker.getDetails();
