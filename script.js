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

// Saving user's choice

let userChoice;

const resultMsg = {
  draw: "It's a draw!",
  userVictory: "You win!",
  userDefeat: "You lose!",
};

const allChoiceBtnsArr = Array.from(allChoiceBtns);

function game() {
  allChoiceBtnsArr.forEach((btn, _, arr) => {
    btn.addEventListener("click", function (e) {
      // Saving the clicked button's text content
      userChoice = e.target.textContent;
      console.log(userChoice);
      // Disabling all buttons
      arr.forEach((btn) => (btn.disabled = true));

      // Making the computer choose a random option
      const availableChoices = allChoiceBtnsArr.map((btn) => btn.textContent);
      const randomIndex = Math.floor(Math.random() * availableChoices.length);
      const computerChoice = availableChoices[randomIndex];
      console.log(computerChoice);

      // Displaying user and computer choices

      // Displaying the user's choice
      displayedUserChoice.textContent = `You chose: ${userChoice}`;
      displayedUserChoice.classList.remove("hidden");

      // Displaying the computer's choice
      displayedOpponentChoice.textContent = `The computer chose: ${computerChoice}`;
      displayedOpponentChoice.classList.remove("hidden");

      // Displaying the result
      if (!userChoice && !computerChoice) return;

      if (userChoice === computerChoice) {
        displayedResult.textContent = resultMsg.draw;
        displayedResult.classList.remove("hidden");
      }
      if (userChoice === "Rock" && computerChoice === "Scissors") {
        displayedResult.textContent = resultMsg.userVictory;
        displayedResult.classList.remove("hidden");
      }
      if (userChoice === "Rock" && computerChoice === "Paper") {
        displayedResult.textContent = resultMsg.userDefeat;
        displayedResult.classList.remove("hidden");
      }
      if (userChoice === "Paper" && computerChoice === "Rock") {
        displayedResult.textContent = resultMsg.userVictory;
        displayedResult.classList.remove("hidden");
      }
      if (userChoice === "Paper" && computerChoice === "Scissors") {
        displayedResult.textContent = resultMsg.userDefeat;
        displayedResult.classList.remove("hidden");
      }
      if (userChoice === "Scissors" && computerChoice === "Paper") {
        displayedResult.textContent = resultMsg.userVictory;
        displayedResult.classList.remove("hidden");
      }
      if (userChoice === "Scissors" && computerChoice === "Rock") {
        displayedResult.textContent = resultMsg.userDefeat;
        displayedResult.classList.remove("hidden");
      }
      // Displaying the restart game button
      restartBtn.classList.remove("hidden");
    });
  });
}

game();

// Restarting the game
function restartGameBtn() {
  restartBtn.addEventListener("click", function (e) {
    allChoiceBtnsArr.forEach((btn) => (btn.disabled = false));
    displayedUserChoice.classList.add("hidden");
    displayedOpponentChoice.classList.add("hidden");
    displayedResult.classList.add("hidden");
    e.target.classList.add("hidden");
  });
}

restartGameBtn();
