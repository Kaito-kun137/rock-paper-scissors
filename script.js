let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNum = Math.random() * 3;
    const randomIndex = Math.floor(randomNum);

    if (randomIndex === 0) {
        return "rock";
    } else if (randomIndex === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

const prompt = require('prompt-sync')();

// Function to get the human player's choice via prompt
function getHumanChoice() {
    const userInput = prompt("Enter your choice: rock, paper, or scissors: ");
    return userInput;
}

// Function to play a single round and determine the winner
function playRound(humanChoice, computerChoice) {
    // Convert human choice to lowercase for case-insensitive comparision
    humanChoice = humanChoice.toLowerCase();

// Check for tie
    if (humanChoice === computerChoice) {
        console.log(`Its a tie! ${humanChoice} ties ${computerChoice}`);
    }
// Check for human win conditions
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        playerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        playerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper");
        playerScore++;
    }
    // Computer wins (all other cases)
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

}

// Main game function that plays 5 rounds 
function playGame() {
    // Reset scores
    playerScore = 0;
    computerScore = 0;

    // Play 5 rounds
    console.log("---Round 1---");
    playRound(getHumanChoice(), getComputerChoice());

    console.log("---Round 2---");
    playRound(getHumanChoice(), getComputerChoice());

    console.log("---Round 3---");
    playRound(getHumanChoice(), getComputerChoice());

    console.log("---Round 4---");
    playRound(getHumanChoice(), getComputerChoice());

    console.log("---Round 5---");
    playRound(getHumanChoice(), getComputerChoice());

    // Declare final winner
    console.log("\nFinal Scores:");
    console.log(`Human: ${computerScore}`);
    console.log(`Computer: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > playerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie game!");
    }

}

// Start the game 
playGame();





