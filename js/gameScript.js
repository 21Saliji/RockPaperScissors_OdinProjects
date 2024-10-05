let humanScore = 0;
let computerScore = 0;
let playRounds = 5;

function getComputerChoice(){
const choices= ["rock", "paper", "scissors"]
const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    return randomChoice;
}
//console.log(getComputerChoice())

function getHumanChoice(){
    let userChoice;
    while(true){
        userChoice = prompt("Rock/Paper/Scissors?: ").toLowerCase();
        if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors"){
                break;
        }else {
            alert("Invalid choice! Kindly choose Rock/Paper/Scissors")
        }
    }
    return userChoice;

}
//console.log(getHumanChoice())

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("Thats a draw!");
    }else if(humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        console.log("You lose! Paper beats Rock");
    }else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        console.log("You lose! Rock beats Scissors");
    }else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        console.log("You lose! Scissors beats Paper");
    }else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        console.log("You win! Paper beats rock");
    }else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        console.log("You win! Rock beats Scissors");
    }else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        console.log("You win! Scissors beats Paper");
    }
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);

}



//console.log(playRound(humanSelection, computerSelection));

function playGame(){
    while (playRounds > 0){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        playRounds --;
    }
    console.log("Game Over!");
    console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
}

playGame();