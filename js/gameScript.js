document.addEventListener("DOMContentLoaded", () => {
    let humanScore = 0;
    let computerScore = 0;
    let playRounds = 5;

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        return randomChoice;
    }

    function updateScore() {
        const scoreDiv = document.getElementById('score');
        scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    }

    function displayResult(result) {
        const resultDiv = document.getElementById('results');
        resultDiv.textContent = result;
    }

    function checkWinner() {
        if (humanScore === 5) {
            displayResult("You won the game!");
            disableButtons();
        } else if (computerScore === 5) {
            displayResult("Computer won the game!");
            disableButtons();
        }
    }

    function disableButtons() {
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
    }

    function playRound(humanChoice) {
        const computerChoice = getComputerChoice();

        if (humanChoice === computerChoice) {
            displayResult("It's a draw!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            humanScore++;
            displayResult(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
        } else {
            computerScore++;
            displayResult(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
        }

        updateScore();
        checkWinner();
    }


    document.getElementById('rock').addEventListener('click', () => playRound('rock'));
    document.getElementById('paper').addEventListener('click', () => playRound('paper'));
    document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));


    updateScore();
});
