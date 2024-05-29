// Selecting elements
const computerOutput = document.querySelector("#computer");
const humanOutput = document.querySelector("#human");
const resultOutput = document.querySelector("#result");
const highscoreOutput = document.querySelector("#highscore");
const streakOutput = document.querySelector("#streak");
const roundOutput = document.querySelector("#round");
const playerScoreOutput = document.querySelector("#playerScore");
const computerScoreOutput = document.querySelector("#computerScore");
const winSound = document.getElementById("winSound");
const loseSound = document.getElementById("loseSound");

const choices = ["Rock", "Paper", "Scissors"];
let highscore = 0;
let streak = 0;
let round = 1;
let playerScore = 0;
let computerScore = 0;

// Function to get computer choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

// Function to determine winner
function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a draw!";
    }
    switch (humanChoice) {
        case "Rock":
            return computerChoice === "Scissors" ? "You win!" : "You lose!";
        case "Paper":
            return computerChoice === "Rock" ? "You win!" : "You lose!";
        case "Scissors":
            return computerChoice === "Paper" ? "You win!" : "You lose!";
    }
}

// Function to play the game
function playGame(humanChoice) {
    const computerChoice = getComputerChoice();
    computerOutput.innerHTML = computerChoice;
    humanOutput.innerHTML = humanChoice;
    const result = determineWinner(humanChoice, computerChoice);
    resultOutput.innerHTML = result;

    // Update scores
    if (result === "You win!") {
        streak++;
        highscore = Math.max(highscore, streak);
        playerScore++;
        playerScoreOutput.innerHTML = playerScore;
        highscoreOutput.innerHTML = highscore;
        streakOutput.innerHTML = streak;
        winSound.play();
    } else if (result === "You lose!") {
        streak = 0;
        computerScore++;
        computerScoreOutput.innerHTML = computerScore;
        streakOutput.innerHTML = streak;
        loseSound.play();
    }

    // Update round
    round++;
    roundOutput.innerHTML = round;
}

// Add event listeners to buttons
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        playGame(button.getAttribute("data-choice"));
    });
});
