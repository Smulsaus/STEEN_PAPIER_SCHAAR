// Selecting elements
const gameModeSelect = document.querySelector("#gameMode");
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
let gameMode = "bestOf3"; // Default game mode

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
            return computerChoice === "Scissors" ? "You won!" : "You lose!";
        case "Paper":
            return computerChoice === "Rock" ? "You won!" : "You lose!";
        case "Scissors":
            return computerChoice === "Paper" ? "You won!" : "You lose!";
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
    if (result === "You won!") {
        streak++;
        highscore = Math.max(highscore, streak);
        playerScore++;
        playerScoreOutput.innerHTML = playerScore;
        highscoreOutput.innerHTML = highscore;
        streakOutput.innerHTML = streak;
        winSound.play();

        // Check if player wins 3 times in best of 3 mode
        if (gameMode === "bestOf3" && playerScore === 3) {
            // Show confetti
            // You can add confetti animation here or trigger it from a library
            alert("Congratulations! You won the best of 3 round!");
            resetGame();
        }
    } else if (result === "You lose!") {
        streak = 0;
        computerScore++;
        computerScoreOutput.innerHTML = computerScore;
        streakOutput.innerHTML = streak;
        loseSound.play();

        // Check if computer wins 3 times in best of 3 mode
        if (gameMode === "bestOf3" && computerScore === 3) {
            alert("You lost the best of 3 round!");
            resetGame();
        }
    }

    // Update round
    round++;
    roundOutput.innerHTML = round;
}

// Function to reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    round = 1;
    playerScoreOutput.innerHTML = playerScore;
    computerScoreOutput.innerHTML = computerScore;
    roundOutput.innerHTML = round;
}

// Add event listener to game mode select
gameModeSelect.addEventListener("change", function () {
    gameMode = gameModeSelect.value;
    // Reset game variables if needed based on game mode
    if (gameMode === "bestOf3") {
        resetGame();
    }
});

// Add event listeners to buttons
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        playGame(button.getAttribute("data-choice"));
    });
});
