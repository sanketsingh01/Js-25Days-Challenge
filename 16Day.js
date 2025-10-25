// This is continuation of Objects - Part 2

const tinderUser = new Object(); // This is a singleton Object

tinderUser.id = "123abc";
tinderUser.name = "sami";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "sam@google.com",
    fullName: {
        userfullName: {
            firstName: "sanket",
            lastName: "Singh"
        }
    }
}

// console.log(regularUser.fullName?.userfullName.firstName); // applied optional chaning say that if value not found in the object it will return undefined instead of trowing the error

const obj1 = {
    1: "a", 
    2: "b",
}

const obj2 = {
    3: "a",
    4: "b",
}

// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2};
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "edge@gmail.com",
    },
    {
        id: 2,
        email: "edge1@gmail.com",
    },
    {
        id: 3,
        email: "edge2@gmail.com",
    },
];

users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // The ouptut of the keys() function is an array dataType
console.log(Object.values(tinderUser)); // The ouptut of the values() function is an array dataType
console.log(Object.entries(tinderUser)); // Stores each key-value pairs in different arrays and store al;l that arrays in another array

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // checks weather that given propert is located in object or not