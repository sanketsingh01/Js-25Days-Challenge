// This file continues the arrays topic ocvered on Day 13

const marvel_heros = ["thor","IronMan", "spiderman"];
const dc_heros = ["spiderman", "falsh", "batman"];

// marvel_heros.push(dc_heros);


// const all_heros = marvel_heros.concat(dc_heros); combines both the array elemnts and return a new array
// console.log(all_heros);

// const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// const real_another_array = another_array.flat(Infinity); Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// console.log(real_another_array);


console.log(Array.isArray("hitesh"));
console.log(Array.from("Hitesh")); // converts the strig or anothing to the array which we passed 

let score1 = 100;
let score2 = 200;
let score3 = 200;

console.log(Array.of(score1, score2, score3));