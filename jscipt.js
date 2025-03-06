//ROCK PAPER SCISORS PROJECT//
console.log("Welcome to my 'Rock - Paper - Scissors' minigame!")

//User will choose via prompt one of 'Rock - Paper - Scissors'
//Computer will be asigned a random one 
//We shall have 3 functions - one for each user's choise: 
// - ex: if user: rock && comp: paper => user lost , 
// else if comp: rock => try again, else => user won

let userOptions = ["rock","paper","scissors"];
userInput=prompt("Welcome to ROCK PAPER SCISSORS! Make your choice!");

while(userInput === "" || userInput === null){
    userInput =prompt("Please make your choice");
    
}
while (!userOptions.includes(userInput)){
    userInput= prompt("Wrong choice, try again!")
}
alert ("You chose " + userInput+ ".");



