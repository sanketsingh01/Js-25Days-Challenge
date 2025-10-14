let score = undefined;

console.log(typeof score);

let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof valueInNumber);

// 1. Typeof NaN(Not a Number ) is a Number itself. So, if yor are converting the a string to number then, check the NaN explicitly
// 2. If the vairable has a value null and we convert it into the number then, the result will be the 0. So, check for that case also.
// 3. If the vairable has a value undefined and we convert it into the number then, the result will be the NaN. So, check for that case also.

let isLoggedIn = 1;

let booleanIsloggedIn = Boolean(isLoggedIn);
console.log(booleanIsloggedIn);

// 1 => true, 0 => false
// "" => false
// "hitesh" => true