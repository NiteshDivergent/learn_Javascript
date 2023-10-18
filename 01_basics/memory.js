/*
We Have two type of memory here 
Stack and Heap
all premitive data types are present in stack memory
and all non premetive present in Heap
Stack (Primitive)
Heap (non-primitive)
*/

let channelName = " Success Story";
let channel = channelName;

channel = "My Youtube Channel Name";
console.log(channel);
console.table([channelName, channel]);

let userOne ={
    email:"user@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne;
console.table([userOne, userTwo]);

userTwo ={
    email:"userTwo@gmail.com",
    upi: "userTwo@ybl"
}
console.table([userOne, userTwo]);
