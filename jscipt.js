//ROCK PAPER SCISORS PROJECT//
console.log("Welcome to my 'Rock - Paper - Scissors' minigame!")

//User will choose via prompt one of 'Rock - Paper - Scissors'
//Computer will be asigned a random one 
//We shall have 3 functions - one for each user's choise: 
// - ex: if user: rock && comp: paper => user lost , 
// else if comp: rock => try again, else => user won


let userOptions = ["Rock","Paper","Scissors"];

//the whole game

function playGame (){

    let userScore= 0;

    let aiScore = 0;

    

for (let i=0; i<5; i++){
    let roundResult = playRound();
    if (roundResult === "win") {
        userScore++
    }
    else if (roundResult === "lose") {
        aiScore++
    }
}
    if (userScore>aiScore) {
        alert("Player score: " + userScore +" \nComputer score: "+ aiScore +". \nYou won!")}
        else if (userScore<aiScore) {
            alert("Player score: " + userScore +" \nComputer score: "+ aiScore +". \nYou lost!");
        }
        else {
            alert("Player score: " + userScore +" \nComputer score: "+ aiScore +". \nIt's a draw!");
        }
    }

//each round

function playRound(userInput) {
userInput=prompt("Welcome to ROCK PAPER SCISSORS! Make your choice!");

userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

while(userInput === "" || userInput === null){
    userInput =prompt("Please make your choice");
}
while (!userOptions.includes(userInput)){
    userInput= prompt("Wrong choice, try again!")
};

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
console.log("You chose " + userInput + ". " + "Computer chose " +aiChoiceString + ".");

//deciding factors
let roundResult= ""
//draw

if (userInput === aiChoiceString) {
    alert("You chose " + userInput + "." + "\nComputer chose " +aiChoiceString + "." +"\nIt's a draw!")
    console.log("Draw! You both picked the same thing.")
    roundResult = "draw"
}

//winning conditions

else if ((userInput === "Rock" && aiChoiceString === "Scissors") || 
        (userInput === "Paper" && aiChoiceString === "Rock") || 
        (userInput === "Scissors" && aiChoiceString === "Rock")) {
            alert("You chose " + userInput + "." + "\nComputer chose " +aiChoiceString + "." +"\nYou won this round!")
        console.log("You won!");
        roundResult = "win"

    }

//losing conditions

else {
    alert("You chose " + userInput + "." + "\nComputer chose " +aiChoiceString + "." +"\nYou lost this round!")
    console.log("You lost!" + "\nThe score is:\nPlayer: " + userScore + "\nComputer: " + aiScore);
    roundResult = "lose";
    
};
return roundResult
}
playGame()

//FINALLY!!!