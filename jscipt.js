//ROCK PAPER SCISORS PROJECT//
console.log("Welcome to my 'Rock - Paper - Scissors' minigame!")

//User will choose via prompt one of 'Rock - Paper - Scissors'
//Computer will be asigned a random one 
//We shall have 3 functions - one for each user's choise: 
// - ex: if user: rock && comp: paper => user lost , 
// else if comp: rock => try again, else => user won


//user input//
let userOptions = ["Rock","Paper","Scissors"];

userInput=prompt("Welcome to ROCK PAPER SCISSORS! Make your choice!");

userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

while(userInput === "" || userInput === null){
    userInput =prompt("Please make your choice");
    
}
while (!userOptions.includes(userInput)){
    userInput= prompt("Wrong choice, try again!")
};
alert ("You chose " + userInput+ ".");

//ai choice
function getComputerChoice(){
    return Math.floor (Math.random() * 3)+1;
};

let aiChoiceNumber = getComputerChoice();

let aiChoiceString = "";

if (aiChoiceNumber === 1) {
aiChoiceString = "Rock"
} 
else if (aiChoiceNumber === 2) {
    aiChoiceString = "Paper"
}
else {
    aiChoiceString = "Scissors"
}
console.log("Computer chose " +aiChoiceString + ".")

//deciding factors

//draw

if (userInput === aiChoiceString) {
    console.log("Draw! You both picked the same thing.")
}

//winning conditions

else if ((userInput === "Rock" && aiChoiceString === "Scissor") || 
        (userInput === "Paper" && aiChoiceString === "Rock") || 
        (userInput === "Scissors" && aiChoiceString === "Rock")) {
        console.log("You won!");
        alert("You won! Computer picked "+ aiChoiceString + ".")
    }

//losing conditions

else {
    console.log ("You lost!")
    alert("You lost! Computer picked "+ aiChoiceString + ".")
};