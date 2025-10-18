// There are two types of Memories in the JAvaScript
// 1. Stack Memeory  2. Heap Memeory

// Stack memeory - used in all primitive types - we get copy of variable on access
// Heap Memeory - used in al Non - Primitive types - we got refrence to original variable on access

let myName = "Sanket";

let anotherName = "Singh";
anotherName = "Hitesh";

console.log(anotherName);

let userOne = {
    email: "Hitesh@google.com",
    upi: "hitesh@1234"
}

let userTwo = userOne; // Since it is Non - primitive so the refrence of the variable is passed and cash is also added in UserOne also
userTwo["cash"] = 1000;
console.log(userTwo);
console.log(userOne);