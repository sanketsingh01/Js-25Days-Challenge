// Functions and parameters in JavaScript

// Declaring a function

// Function in Js is declared using the function keyword followed by the name of the function and then paranthesis inside it we pass the parameters as , seprated
// See the following example of the function decleration

function sayName() {
    console.log("s");
    console.log("a");
    console.log("n");
    console.log("k");
    console.log("e");
    console.log("t");
}

// sayName(); // Calling the function

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

function addTwoNumbers1(number1, number2){
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}

addTwoNumbers(1, 5); 
// addTwoNumbers(); if passed it empty the it will give Nan (Not a Number)
// addTwoNumbers(3, 'a'); This will work and give us '3a' as js aumatically converts value 3 to string due to toString() method. To prevent this type of errors we have to implement checks in our function.

// Parameters - when the function is created and values inside the paranthesis are parameters
// Arguments - values passed to the function at the time of callin gthe function is called the arguments

const result = addTwoNumbers1(3,3); // the value which is returned from the user will be stroed in the result variable
// console.log(result);

function loginUserMsg(username = "sam"){ // by this we can give a default value to the parameter and now value username will never be undefined
    // if(username === undefined){
    //     console.log("please enter a Uasename");
    //     return; // not executed code below it
    // }
    if(!username){
        console.log("please enter a Uasename");
        return; // not executed code below it
    }
    return `${username} just logged in`;
}

loginUserMsg("Sanket"); // this will give noting in console as function is returning value not printing it we have to print it explicitly
console.log(loginUserMsg("Sanket"));
// if we passed nothing then unfined will we returned.
loginUserMsg();