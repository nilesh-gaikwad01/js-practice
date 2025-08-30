//Date

let mydate = new Date();//you can insert the parameter

// let myCreatedDate = new Date(2023,0,23,5,3);
let myCreatedDate = new Date("2023-01-14");



// Print the date and time
console.log(mydate);  // Outputs the current date and time

// Print the date and time as a string
console.log(mydate.toString());  // Outputs date and time in string format

// Print the date and time in a locale-sensitive format
console.log(mydate.toLocaleString());  // Outputs date and time based on locale

// Print the type of the date object
console.log(typeof(mydate));  // Outputs 'object'

// Print the date portion of the date object
console.log(mydate.toDateString());  // Outputs date in human-readable format

// Print the date object in JSON format
console.log(mydate.toJSON());  // Outputs date in JSON format

// Print the time portion of the date object
console.log(mydate.toTimeString());  // Outputs time in human-readable format

// Print the date object in ISO format
console.log(mydate.toISOString());  // Outputs date in ISO 8601 format

console.log(mydate.getDate);
console.log(mydate.getDay);
console.log(mydate.getFullYear);
console.log(mydate.getHours);
console.log(mydate.getMinutes);
console.log(mydate.getTime);







