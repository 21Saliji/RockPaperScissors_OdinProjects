console.log("Hello World")
function getComputerChoice(){
const choices= ["rock", "paper", "scissors"]
const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    return randomChoice;
}
console.log(getComputerChoice())