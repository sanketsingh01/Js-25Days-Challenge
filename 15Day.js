// Objects in JavaScript

// Singleton is only crated when object is created using the new Object.

const mySum = Symbol("key1");

// Object literal
const JsUser = {
    name: "Sanket",
    "full name": "Sanket Singh",
    age: 18,
    [mySum]: "myKey1",
    location: "Punjab",
    email: "sanket@google.com",
    isLoggedIn: false,
    lastLoaginDays: ["Monday", "Tuesday"]
}

// Accesing value in js
console.log(JsUser.name);
console.log(JsUser["email"]); // We use accessing by square brackets because if value(key) in object is declared in string it can't be accessed using the dot operator
console.log(JsUser["full name"]);
console.log(JsUser[mySum]); // we can't direclty decalre symbol in object. if we wanted to declare we have to first declare it outsie the object then write that in square bracket inside the object

// Changing value in js
JsUser.email = "Sanket@openAi.com";
// Object.freeze(JsUser); // the freez() method is used to free object means, after that no one can alter any value in js.. no error will occur but value not chnaged.
JsUser.email = "Sanket@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello Js USer");
}

console.log(JsUser.greeting());
