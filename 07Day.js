// Comparison of DataTypes in JavaScript

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null === 0); // false
console.log(null >= 0);// true
// The reason is that an equality operator check == and comparison > < >= <= work differenlty.
// COmpaorison convert null to number, treating it as 0. That's why null >= 0 is true and null > 0 is false.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// Use Strict Check (===) - compared both values and DataType also

console.log("2" === 2);