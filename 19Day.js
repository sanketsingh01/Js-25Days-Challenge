// Countinuation of functions and object in 18Day.js file

// function calculateCartPrice(num1){
//     return num1;
// }

// console.log(calculateCartPrice(2));
// console.log(calculateCartPrice(200, 400, 500)); Now in this only 200 will be passed to function and rest will be discarded
// If you wanted to add all arguments then there is keyword in JSvaScript - rest or spread operator [...]
// The Rest and Spread operators in JavaScript both use the same ... syntax, but they serve distinct purposes depending on their context.
// Rest Operator: The Rest operator collects multiple elements into an array. It is primarily used in function parameters and array/object destructuring.
// Spread operator: The Spread operator expands an iterable (like an array or object) into individual elements. It is used in various contexts to unpack data. 

function calculateCartPrice(...num1){
    return num1; // It returns an array
}

console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "sanket",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is: ${anyObject.username} and price is: ${anyObject.price}`);
}

// handleObject(user);
// We can also pass direct Onject
handleObject({
    username: "sam",
    price: 44,
})

const myArray = [200, 300, 100, 600];

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myArray));
// can passed array direclty
console.log(returnSecondValue([200, 300, 100, 600]));