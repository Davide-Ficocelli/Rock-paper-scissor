"use strict";

// Selecting elements

// Buttons
const allChoiceBtns = document.querySelectorAll(".choice-btn");
const restartBtn = document.querySelector(".restart");

// Other elements
const displayedUserChoice = document.querySelector(".user-choice");
const displayedOpponentChoice = document.querySelector(".opponent-choice");
const displayedResult = document.querySelector(".result");

// Game logic

// Initializing userChoice variable
let userChoice;

// Storing messages for different cases
const resultMsg = {
  draw: "It's a draw!",
  userVictory: "You win!",
  userDefeat: "You lose!",
};

// Converting all choice buttons from node list to array
const allChoiceBtnsArr = Array.from(allChoiceBtns);

// Gets user's choice by extracting the text from the clicked button
function _getUserChoice(e, arr) {
  userChoice = e.target.textContent;
}

// Disables all choice buttons
function _buttonsAreWorking(arr, boolean) {
  boolean
    ? arr.forEach((btn) => (btn.disabled = false))
    : arr.forEach((btn) => (btn.disabled = true));
}

// Generate a random choice for the computer to choose
function _getComputerRandomChoice(arr) {
  const availableChoices = arr.map((btn) => btn.textContent);
  const randomIndex = Math.floor(Math.random() * availableChoices.length);
  const finalComputerChoice = availableChoices[randomIndex];

  return finalComputerChoice;
}

// Determines whether an element should be visible or not
const _elementIsVisible = (element, boolean) => {
  boolean
    ? element.classList.remove("hidden")
    : element.classList.add("hidden");
};

// Displays a message in a specific element
const _displayMsgInEl = (element, message) => (element.textContent = message);

// Establishes the winner
function _getResult(user, computer) {
  if (!user && !computer) return;

  if (user === computer) {
    _displayMsgInEl(displayedResult, resultMsg.draw);
    _elementIsVisible(displayedResult, true);
  }
  if (user === "Rock" && computer === "Scissors") {
    _displayMsgInEl(displayedResult, resultMsg.userVictory);
    _elementIsVisible(displayedResult, true);
  }
  if (user === "Rock" && computer === "Paper") {
    _displayMsgInEl(displayedResult, resultMsg.userDefeat);
    _elementIsVisible(displayedResult, true);
  }
  if (user === "Paper" && computer === "Rock") {
    _displayMsgInEl(displayedResult, resultMsg.userVictory);
    _elementIsVisible(displayedResult, true);
  }
  if (user === "Paper" && computer === "Scissors") {
    _displayMsgInEl(displayedResult, resultMsg.userDefeat);
    _elementIsVisible(displayedResult, true);
  }
  if (user === "Scissors" && computer === "Paper") {
    _displayMsgInEl(displayedResult, resultMsg.userVictory);
    _elementIsVisible(displayedResult, true);
  }
  if (user === "Scissors" && computer === "Rock") {
    _displayMsgInEl(displayedResult, resultMsg.userDefeat);
    _elementIsVisible(displayedResult, true);
  }
}

// Restarts the game by setting values to their initial state
function restartGame(e) {
  _buttonsAreWorking(allChoiceBtnsArr, true);
  _elementIsVisible(displayedUserChoice, false);
  _elementIsVisible(displayedOpponentChoice, false);
  _elementIsVisible(displayedResult, false);
  _elementIsVisible(e.target, false);
}

// Main game function's logic
function game() {
  allChoiceBtnsArr.forEach((btn, _, arr) => {
    btn.addEventListener("click", function (e) {
      _getUserChoice(e);

      _buttonsAreWorking(arr, false);

      const computerChoice = _getComputerRandomChoice(arr);

      // Displaying user and computer choices

      // Displaying the user's choice
      _displayMsgInEl(displayedUserChoice, `You chose: ${userChoice}`);
      _elementIsVisible(displayedUserChoice, true);

      // Displaying the computer's choice
      _displayMsgInEl(
        displayedOpponentChoice,
        `The computer chose: ${computerChoice}`
      );
      _elementIsVisible(displayedOpponentChoice, true);

      // Displaying the result
      _getResult(userChoice, computerChoice);

      // Displaying the restart game button
      _elementIsVisible(restartBtn, true);
    });
  });
}

game();

// Restart game button
restartBtn.addEventListener("click", restartGame);
