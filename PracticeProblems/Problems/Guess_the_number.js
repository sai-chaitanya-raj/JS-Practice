/*
Write a js program to generate a random number and stores it in a var
iable.The program then takes an input from the user to tell them weat
her the guess was correct , greater  or lesser than the original number,
100-(number of guesses) is the score of the user the program is expected
to terminate once the number is guessed. Number should be between 
1 -100
*/
let prompt = require("prompt-sync")();
let a = Math.floor(Math.random()*100 +1);
for(let i = 0;i<=100;i++){
    let GN = prompt("Guess the number");
    switch(GN){
        case (GN > a) :
            console.log("The number u have Guessed is greater than the required");
            break;
        case (GN < a) :
            console.log("The number u have Guessed is less than the required");
            break;
        case (GN = a):
            console.log("Shabash u have guess the correct number.");
            break;
    } 

}