let prompt = require("prompt-sync")();
let a = [1,2,4,5,6,7];
let c;
do {
    c = prompt("enter the number to be added to the array");
    c = Number.parseInt(c)
    if(c !== 0){
        a.push(c);
    }
}
while(c !== 0);
console.log(a);