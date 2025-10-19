const name = "Sanket";
const repoCount = 22;

// console.log(name + repoCount + "Value"); This is old way to concatnate values..use backticks as moderns syntax
// type of string is Object

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hiteshhs");

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // get to know what character at that index
console.log(gameName.indexOf('h')); // get to knwo ar which index the cahracter situated

// To get the subsiring of a string - use below
const newString = gameName.substring(0, 4); // end index is not included in it
console.log(newString);

const anotherString = "    Sanket          ";
console.log(anotherString.trim()); // remove whitespace from the string

const url = "https://hitesh.com/hitesh%20@Choudary";

console.log(url.includes("hitesh")); // check wethaer given string in the serach string or not -- returns true or false
