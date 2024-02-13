// 1. 
// Get computer to generate number - DONE
// Asign the number to rock, papar, scissors
// Show the result

// 2. 
// Get plyer input
// Create if statemets that compare computer and player number
// Make player selection case-insensitive


//3.
// Create game that plays 5 rouns of RPS
// Use loop till one player gets 3 wins



//---------------------------------------------------------------------------//



let randomNumber = Math.floor(Math.random() * 3);
let rock


if(randomNumber === 0) {
  console.log('You have got rock');
}

else if(randomNumber === 1) {
  console.log('You have got paper');
}
else {
  console.log('You have got scissors');
}

console.log(randomNumber);
