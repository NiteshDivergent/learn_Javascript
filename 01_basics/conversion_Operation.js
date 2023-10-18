// Converting in Number
let score = 33;
let valueOfNumber = Number(score);
//console.log(typeof valueOfNumber);
//console.log(valueOfNumber); 

/*
1. let score = "33";    then normally Converted into number 
2. let score = "33abc"; then it will convert in NaN type mean Its Not a number and not a String properly.
3. let score = true ;   then it will convert in number but its output will be 1 and false will be 0
4. let score = null ;   then it will convert in number but its output will be 0
*/


//Converting in Boolean
let isLoggedIn = 1;
let valueOfisLoggedIn = Boolean(isLoggedIn);
//console.log(valueOfisLoggedIn);

/*
1. let isLoggedIn = 1;        then normally Converted into true boolean Value 
2. let isLoggedIn = "";       then it will convert in false.
3. let isLoggedIn = "Nitesh"; then it will convert true.
4. let isLoggedIn = 0;        then it will convert in false.
*/

// Converting in String
let someNumber = 99; 
let valueOfSomeNumber = String(someNumber);
console.log(typeof valueOfSomeNumber);
console.log(valueOfSomeNumber);
