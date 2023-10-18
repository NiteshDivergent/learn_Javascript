let na = "Nitesh Jaitwar";
var age = 24;
const village = "Darwaritola";
console.table([na, age, village]);

na="Welcome Nitesh Jaitwar"; //here we can change the value of let na: but we can not change in the scope{}.

age = 25; //here we can change the value of var age: it can be changed any where.

console.table([na, age, village]);

// village = "Kanari"; we can not change the value of const

/*
Prefer Not to use Var Because avr is not using in moden javaScript
here a major problem is we cxan change value in any where by mistake if we are taking sam
variable name so its value will be changed so we have to mostly avoid var uses in our code.
*/