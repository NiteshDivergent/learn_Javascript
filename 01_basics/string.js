let name = "Nitesh ";
let age = 24;

//basic wrong way to concatenate two strings
//console.log(name + age) //Wrong Way to Concatenate

//perfect way to concatenate two string in javascript  
//console.log(`Hellow my name ${name} and my Age ${age}`); //Good Way to Concatenate

let village = new String('Darwaritola');
// console.log(village.toLocaleUpperCase());
// console.log(village.length);
// console.log(village.charAt(7));
//console.log(village.indexOf('t'));

const newString = village.substring(0, 4)
//console.log(newString);

const anothorString = village.slice(-8, 11);
//console.log(anothorString);

const newStringOne = "  Nitesh  ";
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://localhost:8080/Nitesh%20Ji";
// console.log(url.replace('%20', '_'));
// console.log(url.includes('Nitesh'));

let goal = "learn new technologies as soon as possible"
console.log(goal.split(" "));
//[ 'learn', 'new', 'technologies', 'as', 'soon', 'as', 'possible' ]