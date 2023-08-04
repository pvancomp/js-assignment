let score = [];

alert("You are about to play the game of your life!");
alert("THERE IS NO WAY OUT!!!");
alert("You will get 2 chances to enter an answer.");
alert("If you don't enter an answer, you lose the round");
alert("You cannot quit, until you OR the computer wins 5 rounds");
alert("THERE IS NO WAY OUT!!!");

function playerChoice() {
  let playerMove = prompt("Type 'rock', 'paper' or 'scissors':");
  if (
    playerMove !== "rock" &&
    playerMove !== "paper" &&
    playerMove !== "scissors"
  ) {
    prompt("Please type 'rock', 'paper' or 'scissors':");
  } else {
    return playerMove;
    console.log("Player has chosen: " + playerMove);
  }
}

// works
let selectionArray = ["rock", "paper", "scissors"];

function computerChoice() {
  let computerMove =
    selectionArray[Math.floor(Math.random() * selectionArray.length)];
  console.log("Computer has chosen: " + computerMove);
  return computerMove;
}

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection);
  console.log(computerSelection);
  if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("Player wins!");
    score.push("P");
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("Player wins!");
    score.push("P");
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log("Player wins!");
    score.push("P");
  } else if (playerSelection == computerSelection) {
    console.log("Tie! Play again!");
  } else {
    console.log("Computer wins!");
    score.push("C");
  }
  return score;
}

function game() {
  while (score.length < 5) {
    playRound(playerChoice(), computerChoice());
    console.log(score.filter((X) => (X = "P")));
  }
  if (score.filter((X) => (X = "P")) > 2) {
    console.log("Player is the winner!");
  } else {
    console.log("Computer is the winner!");
  }
}

game();
