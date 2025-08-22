// let prompt = require("prompt-sync")();
let input = prompt("Enter one of these Snake,Water,Gun");
let versus = ["SNAKE","WATER","GUN"];
let random = Math.floor(Math.random()*3);
let capran = versus[random].toUpperCase(); 
let cap = input.toUpperCase()
switch(true){
     case cap === capran:
        console.log("Salaar U got it!!");
        break;
    default:
        console.log("Ahh U missed it babe");
}