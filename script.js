"use strict";

// Selecting elements

// Buttons
const allChoiceBtns = document.querySelectorAll(".choice-btn");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const restart = document.querySelector(".restart");

// Other elements
const displayedUserChoice = document.querySelector(".user-choice");
const opponentChoice = document.querySelector(".opponent-choice");
const userVictory = document.querySelector(".user-victory");
const userDefeat = document.querySelector(".user-defeat");
const draw = document.querySelector(".draw");

// Game logic

// Saving user's choice

let userChoice = null;

const allChoiceBtnsArr = Array.from(allChoiceBtns);

function getUserChoice() {
  allChoiceBtnsArr.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      userChoice = e.target.textContent;
      console.log(userChoice);
    });
  });
}

getUserChoice();

// Hiding and disabling the others

// Making the computer choose a random option

// Displaying the choices

// Displaying the result

// Displaying the restart game button

// Restarting the game
