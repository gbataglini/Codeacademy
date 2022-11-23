console.log("Hi!");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error!");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
     return 'rock'; 
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
};

const determineWinner = (getUserChoice, getComputerChoice) => { 
  if (getUserChoice === getComputerChoice) { 
    return 'The game is a tie!';
  }
  if (getUserChoice === 'rock') { 
    if (getComputerChoice === 'paper') {
      return 'The computer won!'; 
    } else { 
      return 'You won!';
    }
  }
    if (getUserChoice === 'paper') { 
      if (getComputerChoice === 'scissors') {
      return 'The computer won!'; 
    } else { 
      return 'You won!'
    }
    }
    if (getUserChoice === 'scissors') { 
      if (getComputerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!'
     }
   }
  };

const playGame = () => {
const userChoice = getUserChoice('paper');
const computerChoice = getComputerChoice(); 
console.log('You threw: ' + userChoice);
console.log('The computer threw: ' + computerChoice);

console.log(determineWinner(userChoice, computerChoice))
};

playGame();