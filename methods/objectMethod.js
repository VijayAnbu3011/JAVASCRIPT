//hasOwnProperty()
//example
//The hasOwnProperty() method in JavaScript is used to check whether the 
//object has the specified property as its own property. This is useful for 
//checking if the object has inherited the property rather than being it’s own.
console.log("hasOwnProperty()");
function checkProperty() {
    let exampleObj = {};
    exampleObj.height = 100;
    exampleObj.width = 100;

    // Checking for existing property
    let result1 = exampleObj.hasOwnProperty("height");

    // Checking for non-existing property
    let result2 = exampleObj.hasOwnProperty("breadth");
    return console.log(`Checking for\nheight: ${result1}\nbreadth: ${result2}`);

}
checkProperty()

//toString()
//example
console.log("toString()");
let text = "Hello World!";
let result = text.toString();
console.log(result);

//Object.keys()
// The Object.keys() method returns an array of a given object's own enumerable property
//  names,iterated in the same order that a normal loop would.
//example
console.log("Object.keys()");
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};

console.log(Object.keys(object1));
//Object.values()
//example
console.log("Object.values()");
const object2 = {
    a: 'somestring',
    b: 42,
    c: false
};

console.log(Object.values(object2));

//object.entries()
//example
console.log("Object.entries()");
var object = { 0: '23', 1: 'time', 2: 'true' };
console.log(Object.entries(object));

const object3 = {
    a: 'somestring',
    b: 42
};

for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
}

//object.create()

// Object.create() method is used to create a new object with the specified
// prototype object and properties.Object.create() method returns a new object 
//with the specified prototype object and properties.

// Applications:  
// Object.create() is used for implementing inheritance.
// Syntax:  
// Object.create(prototype[, propertiesObject])
//example
console.log("object.create()");

function fruitsFive() {
    this.name = 'fruit 1';
    this.season = 'summer';
}

function apple() {
    fruitsFive.call(this);
}

apple.prototype
    = Object.create(fruitsFive.prototype);
const app = new apple();

console.log(app.name);
console.log(app.season);
//Object.assign()
console.log("Object.assign()");
// Applications: 
// Object.assign() is used for cloning an object.
// Object.assign() is used to merge object with same properties.

// Syntax: 
// Object.assign(target, ...sources)
// Parameters Used: 

// target: It is the target object to which values and properties have to be copied.
// sources: It is the source object from which values and properties have to be copied.
// Return Value: Object.assign() returns the target object.
//example
var obj1 = { a: 10, b: 10, c: 10 };
var obj2 = { b: 20, c: 20 };
var obj3 = { c: 30 };
var new_obj = Object.assign({}, obj1, obj2, obj3);
console.log(new_obj);

//Object.freeze()
// The Object.freeze() method freezes an object.
//  A frozen object can no longer be changed; 
//  freezing an object prevents new properties from being added to it, 
//  existing properties from being removed, prevents changing the 
//  enumerability, configurability, or writability of existing properties, 
//  and prevents the values of existing properties from being changed. 
//  In addition, freezing an object also prevents its prototype from being changed.
//  freeze() returns the same object that was passed in.
//example
console.log("Object.freeze()");
const obj = {
    prop: 42
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
  // expected output: 42
