const score = 400;
console.log(score);


// To dedicatley define that we only anted the number in variable do the following
const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // used to get fixed values after the decimal 

const otherNumber = 123.8966;

console.log(otherNumber.toPrecision(3));

const hundredes = 100000;

console.log(hundredes.toLocaleString('en-IN'));
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);

// ***************************MATHS****************************************

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2)); // always choose the upper value
console.log(Math.floor(4.7)); // always choose the lower value

console.log(Math.random()); // always gives random value between 0 to 1
console.log((Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
