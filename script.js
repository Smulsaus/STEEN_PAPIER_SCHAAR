document.addEventListener('DOMContentLoaded', () => {
    const options = ['steen', 'papier', 'schaar'];
    const resultDiv = document.getElementById('result');
    const player1Name = localStorage.getItem('player1Name') || 'Speler 1';
    const player2Name = localStorage.getItem('player2Name') || 'Computer';
    const player1ScoreDiv = document.getElementById('player1Score');
    const player2ScoreDiv = document.getElementById('player2Score');
    let player1Score = 0;
    let player2Score = 0;
    let player2IsComputer = player2Name === 'Computer';

    document.querySelectorAll('.choice').forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    document.getElementById('resetGame').addEventListener('click', resetGame);

    function handleButtonClick(event) {
        const player1Choice = event.target.getAttribute('data-choice');
        let player2Choice;

        if (player2IsComputer) {
            player2Choice = getComputerChoice();
        } else {
            // Simuleer keuze voor speler 2 (in een echte game, hier kan een interface komen)
            player2Choice = getPlayer2Choice();
        }

        playGame(player1Choice, player2Choice);
    }

    function playGame(player1Choice, player2Choice) {
        const result = determineWinner(player1Choice, player2Choice);
        displayResult(player1Choice, player2Choice, result);
        updateScore(result);
    }

    function getComputerChoice() {
        return options[Math.floor(Math.random() * options.length)];
    }

    function getPlayer2Choice() {
        // Simuleer een keuze voor speler 2 (in een echte game, hier kan een interface komen)
        return options[Math.floor(Math.random() * options.length)];
    }

    function determineWinner(player1, player2) {
        if (player1 === player2) {
            return "Het is gelijkspel!";
        }
        switch (player1) {
            case 'steen':
                return (player2 === 'schaar') ? `${player1Name} wint!` : `${player2Name} wint!`;
            case 'papier':
                return (player2 === 'steen') ? `${player1Name} wint!` : `${player2Name} wint!`;
            case 'schaar':
                return (player2 === 'papier') ? `${player1Name} wint!` : `${player2Name} wint!`;
            default:
                return "Ongeldige keuze!";
        }
    }

    function displayResult(player1Choice, player2Choice, result) {
        resultDiv.textContent = `${player1Name} koos: ${player1Choice}, ${player2Name} koos: ${player2Choice}. ${result}`;
    }

    function updateScore(result) {
        if (result.includes(player1Name)) {
            player1Score++;
        } else if (result.includes(player2Name)) {
            player2Score++;
        }
        updateScoreboard();
    }

    function updateScoreboard() {
        player1ScoreDiv.textContent = `${player1Name}: ${player1Score}`;
        player2ScoreDiv.textContent = `${player2Name}: ${player2Score}`;
    }

    function resetGame() {
        player1Score = 0;
        player2Score = 0;
        updateScoreboard();
        resultDiv.textContent = '';
    }
});
