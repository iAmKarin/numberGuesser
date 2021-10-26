let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const difference = (a, b) => {
  return Math.abs(a - b);
}
// generate the target number
const generateTarget = () => Math.floor(Math.random() * 10);
// compare human and computer guess
const compareGuesses = (humanGuess, computerGuess, secretNumber) => {
    const humanDifference = difference(humanGuess, secretNumber);
    const computerDifference = difference(computerGuess, secretNumber);
    return humanDifference <= computerDifference ?
        true :
        false;           
}
// update the score between human and computer
const updateScore = (winner) => {
    winner === 'human' ?
        humanScore++ :
        computerScore++ ;
}
const advanceRound = () =>{
    currentRoundNumber++;
}
