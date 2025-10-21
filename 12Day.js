// Dates in JavaScript

let myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toDateString()); // Gives you date in string format
console.log(myDate.toISOString()); // This method always returns string representing the adte in ISO format ( YYYY-MM-DDTHH:mm:ss.sssZ )
console.log(myDate.toJSON()); // WOkrks same as toISOString()
console.log(myDate.toLocaleDateString()); // Give the date in string with format (MM/DD/YYYY)
console.log(myDate.toLocaleString()); // Gives the date with the timing also.. with Universal standard by default--- format (MM/DD/YYYY, HH:MM:SS AM/Pm)
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 25, 5, 3);
// let myCreatedDate = new Date("2025-01-14");
let myCreatedDate = new Date("01-14-2025");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(Math.floor(myTimeStamp/1000));

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());


console.log(newDate.toLocaleString('deafult', { // you can fuly custmize date by using like that
    weekday: "long",
}));
