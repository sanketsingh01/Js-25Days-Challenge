// Data is catorgrized into two data types - 1. Primitive and 2. Non-Primitive

// Primitive - it have 7 types - they are call by value(copy of data is given)
// string, Number, Boolean, null, undefined, Sumbol, BigInt

const isLoggedIn = false;

const outSideTemp = null;

const id = Symbol("123");
const anotherId = Symbol('123');

console.log(id === anotherId);


// Refrence type(Non - Primitive) - which give the address of the datain memnory directly
// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof null);