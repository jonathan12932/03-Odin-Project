const buttonOne = document.getElementById("button1");
const buttonTwo = document.getElementById("button2");
const buttonThree = document.getElementById("button3");
const restart = document.getElementById("restart");

const playerScore = document.getElementById('playerScore');
const playerMove = document.getElementById('playerMove');
let playerCount = 0;

const computerScore = document.getElementById('computerScore');
const computerMove = document.getElementById('computerMove');
let computerCount = 0;

const roundCheck = document.getElementById('roundCheck');

buttonOne.addEventListener('click', () => buttonClick("✊")); 
buttonTwo.addEventListener('click', () => buttonClick("✋")); 
buttonThree.addEventListener('click', () => buttonClick("✌️")); 

//Adds restart button function
restart.addEventListener('click', () => {

    playerCount = 0;
    playerScore.textContent = "Player Score: " + playerCount;
    playerMove.textContent = "❓";
    playerMove.style.color = "white";

    computerCount = 0;
    computerScore.textContent = "Computer Score: " + computerCount;
    computerMove.textContent = "❓";
    computerMove.style.color = "white";
}); 

//Adds move function with a choice of rock, paper, or scissors 
function buttonClick(type) {

    let compChoice = getComputerChoice();
    let check = playRound(compChoice, type);

    roundCheck.textContent = check;

    playerMove.textContent = type;
    playerMove.style.color = "yellow";

    computerMove.textContent = compChoice;
    computerMove.style.color = "yellow";

    if(check.substring(0, 7) == "You Win"){

        playerCount += 1;
        playerScore.textContent = "Player Score: " + playerCount;

    } else {

        computerCount += 1;
        computerScore.textContent = "Computer Score: " + computerCount;
    }
}

//Creates a move for the computer
function getComputerChoice() {

    let choice = Math.floor(Math.random() * 3);

    if(choice == 0) 
        return "✊";
    else if(choice == 1)
        return "✋";
    else
        return "✌️";
}

//Checks who won the round: user or computer
function playRound(computerSelection, playerSelection) {

    if(computerSelection == "✊" && playerSelection.toLowerCase() == "✋")
        return "You Win! Paper beats Rock!";
    else if(playerSelection.toLowerCase() == "✊" && computerSelection == "✋")
        return "You Lose! Paper beats Rock!";
    else if(computerSelection == "✋" && playerSelection.toLowerCase() == "✌️")
        return "You Win! Scissors beats Paper!";
    else if(playerSelection.toLowerCase() == "✋" && computerSelection == "✌️")
        return "You Lose! Scissors beats Paper!";
    else if(computerSelection == "✊" && playerSelection.toLowerCase() == "✌️")
        return "You Lose! Rock beats Scissors!";
    else if(playerSelection.toLowerCase() == "✊" && computerSelection == "✌️")
        return "You Win! Rock beats Scissors!";
    else 
        return "You Tied!"
}