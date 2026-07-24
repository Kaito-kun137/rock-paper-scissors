let playerScore = 0;
let computerScore = 0;

const scoreDisplay = document.getElementById("score");
const resultsDisplay = document.getElementById("results");

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);

    if (randomIndex === 0) {
        return "rock";
    } else if (randomIndex === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function updateScore() {
    scoreDisplay.textContent = `Score - You: ${playerScore} | Computer: ${computerScore}`;
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let resultMessage;

    if (playerSelection === computerSelection) {
        resultMessage = `It's a tie! You both chose ${playerSelection}.`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        resultMessage = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        resultMessage = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }

    updateScore();

    if (playerScore === 5) {
        resultsDisplay.textContent = `You win the game! ${resultMessage}`;
        document.querySelectorAll("button").forEach((button) => {
            button.disabled = true;
        });
    } else if (computerScore === 5) {
        resultsDisplay.textContent = `Computer wins the game! ${resultMessage}`;
        document.querySelectorAll("button").forEach((button) => {
            button.disabled = true;
        });
    } else {
        resultsDisplay.textContent = `${resultMessage}`;
    }
}

document.querySelectorAll("button[data-selection]").forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.dataset.selection);
    });
});

updateScore();
