// Arrays in JAvaScript
// Array in JS strore any type of data in it
// Arrays in JS are resizable
// Indexing in array starts from 0
// Array creates shallow copy on operations

// Declaring an array in JS

const myArray = [1,2,3,4,5];
const myArr = new Array(1,2,3,"sanket", true);

// console.log(myArr);

// Array methods

// myArr.push(false); // insert an element at end of the array
// myArr.pop(); // removes an element from the end of the array

// console.log(myArr.includes(9)); // tells wheater the element present in the aray or not

// const newArr = myArr.join('-'); // The join method join all elements of the array by the seprator and converts it into String
// console.log(typeof newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr)

const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("C ", myArr);

// So from above we can say that the slice only rerturns the portion of the array and doen't chnage the original aray 
// while the splice method delets the portion of the array from tthe original array and manipulates the original array