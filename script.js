"use strict";

class Game {
  constructor() {
    // DOM elements
    this.allChoiceBtns = document.querySelectorAll(".choice-btn");
    this.restartBtn = document.querySelector(".restart");
    this.displayedUserChoice = document.querySelector(".user-choice");
    this.displayedOpponentChoice = document.querySelector(".opponent-choice");
    this.displayedResult = document.querySelector(".result");

    // Converting all choice buttons from node list to array
    this.allChoiceBtnsArr = Array.from(this.allChoiceBtns);

    // Inizializing the userChoice field
    this.userChoice = null;

    // Storing messages for different cases
    this.resultMsg = {
      draw: "It's a draw!",
      userVictory: "You win!",
      userDefeat: "You lose!",
    };

    // Event listeners
    this.allChoiceBtnsArr.forEach((btn, _, arr) => {
      btn.addEventListener("click", this.gameLogic.bind(this, arr));
    });

    // Restart game button
    this.restartBtn.addEventListener("click", this.restartGame.bind(this));
  }

  // Helper methods

  // Gets user's choice by extracting the text from the clicked button
  _getUserChoice(e) {
    this.userChoice = e.currentTarget.textContent;
  }

  // Disables all choice buttons
  _buttonsAreWorking(arr, boolean) {
    boolean
      ? arr.forEach((btn) => (btn.disabled = false))
      : arr.forEach((btn) => (btn.disabled = true));
  }

  // Generate a random choice for the computer to choose
  _getComputerRandomChoice(arr) {
    const availableChoices = arr.map((btn) => btn.textContent);
    const randomIndex = Math.floor(Math.random() * availableChoices.length);
    const finalComputerChoice = availableChoices[randomIndex];

    return finalComputerChoice;
  }

  // Determines whether an element should be visible or not
  _elementIsVisible = (element, boolean) => {
    boolean
      ? element.classList.remove("hidden")
      : element.classList.add("hidden");
  };

  // Displays a message in a specific element
  _displayMsgInEl = (element, message) => (element.textContent = message);

  // Establishes the winner
  _getResult(user, computer) {
    if (!user && !computer) return;

    if (user === computer) {
      this._displayMsgInEl(this.displayedResult, this.resultMsg.draw);
      this._elementIsVisible(this.displayedResult, true);
    }
    if (user === "Rock" && computer === "Scissors") {
      this._displayMsgInEl(this.displayedResult, this.resultMsg.userVictory);
      this._elementIsVisible(this.displayedResult, true);
    }
    if (user === "Rock" && computer === "Paper") {
      this._displayMsgInEl(this.displayedResult, this.resultMsg.userDefeat);
      this._elementIsVisible(this.displayedResult, true);
    }
    if (user === "Paper" && computer === "Rock") {
      this._displayMsgInEl(this.displayedResult, this.resultMsg.userVictory);
      this._elementIsVisible(this.displayedResult, true);
    }
    if (user === "Paper" && computer === "Scissors") {
      this._displayMsgInEl(this.displayedResult, this.resultMsg.userDefeat);
      this._elementIsVisible(this.displayedResult, true);
    }
    if (user === "Scissors" && computer === "Paper") {
      this._displayMsgInEl(this.displayedResult, this.resultMsg.userVictory);
      this._elementIsVisible(this.displayedResult, true);
    }
    if (user === "Scissors" && computer === "Rock") {
      this._displayMsgInEl(this.displayedResult, this.resultMsg.userDefeat);
      this._elementIsVisible(this.displayedResult, true);
    }
  }

  // Business logic functions

  // Restarts the game by setting values to their initial state
  restartGame(e) {
    this._buttonsAreWorking(this.allChoiceBtnsArr, true);
    this._elementIsVisible(this.displayedUserChoice, false);
    this._elementIsVisible(this.displayedOpponentChoice, false);
    this._elementIsVisible(this.displayedResult, false);
    this._elementIsVisible(e.target, false);
  }

  // Contains game logic
  gameLogic(arr, e) {
    this._getUserChoice(e);

    this._buttonsAreWorking(arr, false);

    const computerChoice = this._getComputerRandomChoice(arr);

    // Displaying user and computer choices

    // Displaying the user's choice
    this._displayMsgInEl(
      this.displayedUserChoice,
      `You chose: ${this.userChoice}`
    );
    this._elementIsVisible(this.displayedUserChoice, true);

    // Displaying the computer's choice
    this._displayMsgInEl(
      this.displayedOpponentChoice,
      `The computer chose: ${computerChoice}`
    );
    this._elementIsVisible(this.displayedOpponentChoice, true);

    // Displaying the result
    this._getResult(this.userChoice, computerChoice);

    // Displaying the restart game button
    this._elementIsVisible(this.restartBtn, true);
  }
}

new Game();
