let value = 3;
let negValue = -value;
// console.log(negValue);

// Arithmetic Operations
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello";
let str2 = " hitesh";

str3 = str1 + str2; // Concatination of strings
// console.log(str3);

// console.log("1" + 2);
// console.log(3 + "1");
// console.log("1" + 2 + 2);

// *************Do not use this like this in the production code*****************
// console.log(+true);
// console.log(+"");

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3" This is because when the program run x++ is executed and return value before the incrmenting

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4" This is because when thr program run ++x is executde and return value after the incrementing