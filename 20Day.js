// Concept of scopes in JS
// There are two types of scopes which are - GLOBAl and LOCAL scope

// let a = 10;
// const b = 20;
// var c= 30;

// console.log(a);
// console.log(b);
// console.log(c);

// Now, currenlty a,b,c are the GLOBAl scopes and these are accessiable anywhere in the code. 
// But, now suppose thet a,b,c are declared inside the if consiftion then, there are not accessiable outside the curly barces of thet if condition. 
// This work is called blocked scope. only accessiable to that scope not outsie it.

// See the following

if(true) {
    let a = 10;
    const b = 20;
    var c= 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

// Now, suppose the let and const consoles are comneted and when you run the var console you will get the result 30;
console.log(c);
// This is var is - function scoped
// 1. It ignores block boundaries like if or for.
// 2. It only cares about function boundaries — meaning, if you declare a var inside a function, it’s scoped to that function.
// 3. But if it’s not inside a function (like your example), it becomes global (or script-scoped).

let a = 300;
if (true) {
    let a= 10;
    console.log("INNER: ", a); // value is 10 due to local scope
}
