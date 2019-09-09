// JavaScript classes and extensions example
// To run this example in the terminal run:
// `node {file_name}.js`

// Here we define a Class Shape, it has a constructor that takes initialization parameters
// And some class methods, these will be exposed on each class instance 
class Shape {
    // The constructor is a special method that gets called whenever we call `new Shape(...)`
    // The arguments passed in the initialization will be the constructor's arguments
    // Notice that we use the `arg = defaultValue` syntax to specify initial values for all required arguments
    constructor(x = 0, y = 0, z = 0) {
        // He we store the initialization parameters on the class instance
        // `this` represents the context of a function execution.
        // When a function is called on a class instance that instance will be the value of `this`
        this.x = x
        this.y = y
        this.z = z
    }

    // Class methods are exposed on the instance, not the class
    // They have access to the instance context and are frequently used
    // To set and get data and perform various operations on the instance
    getPosition() {
        return {
            x: this.x, 
            y:this.y,
            z: this.z
        }
    }

    // In the case that we're planning for a class to be extended by other classes
    // it's common practice to create empty class methods with some kind of useful
    // error or logging to let us know a class that's being used needs to be extended
    getSize() {
        throw new Error("getSize not implemented");
    }
}

// Here we're using the `extend` keyword to extend one class into another
// This lets us reuse functionality already implemented in the `Shape` 
// and add extra functionality and data to create a `Box` class from it.
class Box extends Shape {
    constructor(x = 0, y = 0, z = 0, s = 1) {
        // Since we're overwriting the constructor of the class,
        // we must call super(), a special method that refers to the constructor of the parent
        // this will execute the constructor of the `Shape` class before doing
        // any work specific to the initialization of the `Box`
        super(x, y, z);
        this.s = s;
    }

    // Here we're overriding the `getSize` method, so the error from line 31 won't be thrown
    getSize() {
        return this.s * this.s * this.s;
    }
}

// Here we're branching off to another class from `Shape`, a `Circle` class
// notice that both `Circle` and `Box` inherit from `Shape` and not from one another
class Circle extends Shape {
    constructor(x = 0, y = 0, z = 0, r = 1) {
        super(x, y, z);
        this.r = r;
    }

    // Here we're implementing a different getSize, that's quitable for circles
    // It's common to expose similar interfaces between classes that will be used
    // in the same place, so that they can be swapped easily.
    getSize() {
        return Math.PI * Math.pow(this.r, 2);
    }
}

// Yet another shape extension, a triangle this time.
class Triangle extends Shape {
    constructor(x = 0, y = 0, z = 0, s = 1) {
        super(x, y, z);
        this.s = s;
    }
}

// To initialize an instance of the box class, we'll call new Box and pass parameters to it's constructor
let box = new Box(10, 15, 10, 2)

console.log(box.x, box.y, box.z)
console.log(box.printPosition())
console.log(box.getPosition())
console.log(box.getSize())

// We can do the same with a circle, and call it's circle-specific methods
let circle = new Circle(10, 15, 10, 2)

console.log(circle.x, circle.y, circle.z)
console.log(circle.getPosition())
console.log(circle.getSize())
