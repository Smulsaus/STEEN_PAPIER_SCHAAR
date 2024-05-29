// Selecting elements
const computerOutput = document.querySelector("#computer");
const humanOutput = document.querySelector("#human");
const resultOutput = document.querySelector("#result");

const choices = ["Rock", "Paper", "Scissors"];

// Function to get computer choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Function to determine winner
function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a draw!";
    }
    if ((humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Rock")) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

// Event listeners for buttons
document.querySelector("#rock").addEventListener("click", function() {
    playGame("Rock");
});
document.querySelector("#paper").addEventListener("click", function() {
    playGame("Paper");
});
document.querySelector("#scissors").addEventListener("click", function() {
    playGame("Scissors");
});

// Function to play the game
function playGame(humanChoice) {
    const computerChoice = getComputerChoice();
    computerOutput.innerHTML = computerChoice;
    humanOutput.innerHTML = humanChoice;
    resultOutput.innerHTML = determineWinner(humanChoice, computerChoice);
}
