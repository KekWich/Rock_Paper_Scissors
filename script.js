// 1. - 
// Get computer to generate number - DONE
// Asign the number to rock, papar, scissors - DONE 
// Show the result - DONE 
// Create function - DONE

// 2. 
// Get player input - DONE
// Create if statemets that compare computer and player number - DONE
// Make player selection case-insensitive - DONE


//3.
// Create game that plays 5 rouns of RPS
// Use loop till one player gets 3 wins



//---------------------------------------------------------------------------//



let randomNumber = Math.floor(Math.random() * 3);
let input = prompt('Pick rock, paper or scissors');
let playerSelection = input.toLocaleLowerCase();

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
  if(computerSelection === playerSelection) {
    gameResult = 'DRAW!';
  }
  else if(computerSelection === 'paper' && playerSelection === 'rock') {
    gameResult = 'LOSS!';
  }
  else if(computerSelection === 'scissors' && playerSelection === 'rock') {
    gameResult = 'WIN!';
  }
  else if(computerSelection === 'scissors' && playerSelection === 'paper') {
    gameResult = 'LOSS!';
  }
  else if(computerSelection === 'rock' && playerSelection === 'paper') {
    gameResult = 'WIN!';
  }
  else if(computerSelection === 'rock' && playerSelection === 'scissors') {
    gameResult = 'LOSS!';
  }
  else if(computerSelection === 'paper' && playerSelection === 'scissors') {
    gameResult = 'WIN!';
  }
  else {
    '';
  }
    return gameResult;
}

console.log(firstRound())

console.log(computerSelection);
console.log(randomNumber)
console.log(playerSelection)