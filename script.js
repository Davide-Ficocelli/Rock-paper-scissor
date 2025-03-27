"use strict";

// Selecting elements

// Buttons
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const restart = document.querySelector(".restart");

// Other elements
const userChoice = document.querySelector(".user-choice");
const opponentChoice = document.querySelector(".opponent-choice");
const userVictory = document.querySelector(".user-victory");
const userDefeat = document.querySelector(".user-defeat");
const draw = document.querySelector(".draw");

// Game logic

// 1. Saving user's choice and hiding and disabling the others

function getUserChoiceHideAll() {
  if (rock)
    rock.addEventListener("click", function () {
      rock.disabled = true;
      paper.classList.add("hidden");
      scissors.classList.add("hidden");
      return rock.textContent;
    });

  if (paper)
    paper.addEventListener("click", function () {
      paper.disabled = true;
      rock.classList.add("hidden");
      scissors.classList.add("hidden");
      return paper.textContent;
    });

  if (scissors)
    scissors.addEventListener("click", function () {
      scissors.disabled = true;
      rock.classList.add("hidden");
      paper.classList.add("hidden");
      return scissors.textContent;
    });
}

getUserChoiceHideAll();

// 2. Making the computer choose a random option

// 3. Displaying the choices

// 4. Displaying the result

// 5. Displaying the restart game button

// 6. Restarting the game
