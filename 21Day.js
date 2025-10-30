// scope and mini Hoisting n js

function one() {
    const username = "sanket";

    function two(){
        const website = "youtube";
        console.log(username);
    }

    // console.log(website); // since website is in the function two() and the scope ofthe website is in the two() only - that's why here we get website as undefined

    two();
}

// one();

// This structure is also called the closure - Closure is a way by which an inner function rembers the variables of the outer function even if the scope of the outer function is over.

if(true) {
    const username = "hitesh";
    if(username === 'hitesh'){
        const website = "youtube";
        console.log(username + website);
    }
    // console.log(website); This will give the error because scope of the variable webiste is in the if condition
}

// console.log(username);

function addOne(num) {
    return num + 1;
}

// Functions can also be declared and stired direclty in the value
const addTwo = function (num) {
    return num + 2;
}

// The main difference between them is that the function that is normally declared are support hoisting and function stored in varibale do not support hoisting
// Hositing - It says that we can access or cal the function or vaibale before the decleration the funcion or variable
// Means if we call addOne() before the function decleration i will work fine and give us answer while if we call addTwo() then, if will give error
