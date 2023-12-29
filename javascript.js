console.log(playRound(getComputerChoice(), "rock"));
game();






function getComputerChoice() {

    let choice = Math.floor(Math.random() * 3);

    if(choice == 0) 
        return "rock";
    else if(choice == 1)
        return "paper";
    else
        return "scissors";
}

function playRound(computerSelection, playerSelection) {

    if(computerSelection == "rock" && playerSelection.toLowerCase() == "paper")
        return "You Win! Paper beats Rock!";
    else if(playerSelection.toLowerCase() == "rock" && computerSelection == "paper")
        return "You Lose! Paper beats Rock!";
    else if(computerSelection == "paper" && playerSelection.toLowerCase() == "scissors")
        return "You Win! Scissors beats Paper!";
    else if(playerSelection.toLowerCase() == "paper" && computerSelection == "scissors")
        return "You Lose! Scissors beats Paper!";
    else if(computerSelection == "rock" && playerSelection.toLowerCase() == "scissors")
        return "You Lose! Rock beats Scissors!";
    else if(playerSelection.toLowerCase() == "rock" && computerSelection == "scissors")
        return "You Win! Rock beats Scissors!";
    else 
        return "You Tied!"
}

function game() {

    for(let x = 0; x < 5; x++) {

        console.log(playRound(getComputerChoice(), prompt("Choose: ")));
    }
}