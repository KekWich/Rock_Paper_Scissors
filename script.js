let playerPoints = 0;
let computerPoints = 0;

function playRound() {
  function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
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

  let input = prompt('Pick rock, paper or scissors');
  let playerSelection = input.toLocaleLowerCase();

  if(computerSelection === playerSelection) {
    gameResult = 'DRAW!';
  }
  else if(
    (computerSelection === 'paper' && playerSelection === 'rock') || 
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'rock' && playerSelection === 'scissors')
  )  {
    gameResult = 'LOSS!';
    computerPoints++;
  }
  else {
    gameResult = 'WIN!';
    playerPoints++;
  }
  
}

playRound();
playRound();
playRound();
playRound();
playRound();

if (playerPoints >= 3) {
  alert('Player has won!')
}
else if (computerPoints >= 3) {
  alert('Computer has won!')
}
else {
  alert('Noone has won!')
}

console.log(`Result: ${gameResult}`);
console.log(`Player points: ${playerPoints}`);
console.log(`Computer points: ${computerPoints}`);