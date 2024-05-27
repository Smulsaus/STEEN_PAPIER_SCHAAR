// script.js
document.addEventListener('DOMContentLoaded', () => {
    const options = ['steen', 'papier', 'schaar'];
    const resultDiv = document.getElementById('result');

    // Gebruik één event handler voor alle knoppen
    document.querySelectorAll('.choice').forEach(button => {
        button.addEventListener('click', event => {
            const playerChoice = event.target.getAttribute('data-choice');
            playGame(playerChoice);
        });
    });

    // Speel het spel
    function playGame(playerChoice) {
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        displayResult(playerChoice, computerChoice, result);
    }

    // willekeurige optie voor de computer
    function getComputerChoice() {
        return options[Math.floor(Math.random() * options.length)];
    }

    // Bepaal de winnaar 
    function determineWinner(player, computer) {
        switch (player) {
            case 'steen':
                return (computer === 'schaar') ? "Jij wint!" : (computer === 'papier') ? "Computer wint!" : "Het is gelijkspel!";
            case 'papier':
                return (computer === 'steen') ? "Jij wint!" : (computer === 'schaar') ? "Computer wint!" : "Het is gelijkspel!";
            case 'schaar':
                return (computer === 'papier') ? "Jij wint!" : (computer === 'steen') ? "Computer wint!" : "Het is gelijkspel!";
            default:
                return "Ongeldige keuze!";
        }
    }

    // Toon het resultaat van het spel
    function displayResult(playerChoice, computerChoice, result) {
        resultDiv.textContent = `Jij koos: ${playerChoice}, Computer koos: ${computerChoice}. ${result}`;
    }
});
