// 1. - 
// Get computer to generate number - DONE
// Asign the number to rock, papar, scissors - 
// Show the result - 
// Create function - 

// 2. 
// Get player input
// Create if statemets that compare computer and player number
// Make player selection case-insensitive


//3.
// Create game that plays 5 rouns of RPS
// Use loop till one player gets 3 wins



//---------------------------------------------------------------------------//



let randomNumber = Math.floor(Math.random() * 3);
let playerSelection = prompt('Pick rock, paper or scissors');


function getComputerChoice() {
  if(randomNumber === 0) {
    computerMove = 'rock';
  }
  else if(randomNumber === 1) {
    computerMove = 'paper';
  }
  else {
    computerMove = 'scissors';
  }
  return computerMove;
}

let computerSelection = getComputerChoice();

function firstRound() {
  if(computerSelection === 'rock' && playerSelection === 'rock') {
    gameResult = 'DRAW!';
  }
  else if(computerSelection === 'paper' && playerSelection === 'rock') {
    gameResult = 'LOSS!';
  }
  else if(computerSelection === 'scissors' && playerSelection === 'rock') {
    gameResult = 'WIN!';
  }
    return gameResult;
}

console.log(firstRound())

console.log(computerSelection);
console.log(randomNumber)
console.log(playerSelection)