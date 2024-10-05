let humanScore = 0;
let computerScore = 0;

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
        if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissor"){
                break;
        }else {
            alert("Invalid choice! Kindly choose Rock/Paper/Scissors")
        }
    }
    return userChoice;

}
console.log(getHumanChoice())