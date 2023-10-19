//Dates
let myDate = new Date();
let toDate = myDate.toDateString();
let toLocal = myDate.toLocaleDateString();
let tostr = myDate.toString();
let totime = myDate.toTimeString();
console.table([toDate,toLocal,tostr,totime]);


let myCreatedDate = new Date(2023,9,19);
console.log(myCreatedDate.toDateString());

