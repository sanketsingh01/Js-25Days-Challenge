// DeStructuring Onjects in JavaScript

const course = {
    courseName: "js in Hindi",
    price: "999",
    courseInstructor: "Hitesh Sir",
}

const {courseInstructor: instructor} = course;

console.log(instructor);

// APi's in JavaScript

// JSON - JavaScript Object Notation is jsut like object but this object doesn't have any name - usually in JSON both key-values are strings

// {
//     "name": "Hitesh",
//     "coursename": "Js in Hindi",
//     "price": "free"
// }

//  Wanted see JSON format: search on browser - api.github.com/users/sanketsingh01
// Data from API call can also be array of Objects - 
// To study or understand you API Response - paste you response Data on json formatter.