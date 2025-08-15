let prompt = require("prompt-sync")();
let a = [1,2,3,4,5,6];
let b = prompt("enter the number to be added to the array");
b = Number.parseInt(b);
a.push(b);
console.log(a);