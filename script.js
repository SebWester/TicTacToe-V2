const box = document.querySelectorAll(".box");
const resetBtn = document.getElementById("resetBtn");
let totalClicks = 0;

// All win combinations
const winningCombinations = [
  // Row
  [box[0], box[1], box[2]],
  [box[3], box[4], box[5]],
  [box[6], box[7], box[8]],
  // Cols
  [box[0], box[3], box[6]],
  [box[1], box[4], box[7]],
  [box[2], box[5], box[8]],
  // Diagonals
  [box[0], box[4], box[8]],
  [box[2], box[4], box[6]],
];

// Set to fill with chosen boxes
let chosenBoxes = new Set();

// Adds one to totalClicks --> Redundant code, Remove?
function incrementClicks() {
  box.forEach((addOne) => {
    addOne.addEventListener("click", function () {
      totalClicks++;
      console.log(`Total Clicks: ${totalClicks}`);
      return totalClicks;
    });
  });
}

// Hover green or red depending on totalClicks
function boxHover() {
  box.forEach((box) => {
    box.addEventListener("mouseover", function () {
      box.style.cursor = "pointer";
      if (totalClicks % 2 === 0) {
        box.classList.add("hoverGreen");
      } else {
        box.classList.add("hoverRed");
      }

      if (box.innerHTML !== "") {
        box.style.cursor = "not-allowed";
      }
    });

    box.addEventListener("mouseout", function () {
      box.classList.remove("hoverGreen");
      box.classList.remove("hoverRed");
    });
  });
}

// AI blocking function
function winImminent() {
  for (let possibleWin of winningCombinations) {
    const [box1, box2, box3] = possibleWin;

    if (
      box1.innerHTML !== "" &&
      box1.innerHTML === box2.innerHTML &&
      box3.innerHTML === ""
    ) {
      box3.innerHTML = "O"; // AI blocks
      box3.classList.add("redBox");
      box3.classList.remove("greenBox");
      totalClicks++;
      console.log("AI blocked possible win \n");
      return true;
    }

    if (
      box2.innerHTML !== "" &&
      box2.innerHTML === box3.innerHTML &&
      box1.innerHTML === ""
    ) {
      box1.innerHTML = "O"; // AI blocks
      box1.classList.add("redBox");
      box1.classList.remove("greenBox");
      totalClicks++;
      console.log("AI blocked possible win");
      return true;
    }
    if (
      box1.innerHTML !== "" &&
      box1.innerHTML === box3.innerHTML &&
      box2.innerHTML === ""
    ) {
      box2.innerHTML = "O"; // AI blocks
      box2.classList.add("redBox");
      box2.classList.remove("greenBox");
      totalClicks++;
      console.log("AI blocked possible win");
      return true;
    }
  }
  return false; // No block
}

// "AI" functionality here
function aiPlayer() {
  // Checks if player is about to win (only runs once each turn)
  for (let i = 0; i <= 1; i++) {
    let randomNumber = Math.floor(Math.random() * 10 + 1);

    // AI makes "a mistake" 20% of the time
    if (randomNumber === 3 || randomNumber === 5) {
      console.log("AI made a mistake!");
      console.log(`randomNumber: ${randomNumber}`);
      continue;
    } else {
      if (winImminent()) {
        winGame();
        return;
      }
    }
  }

  // Filter out all empty boxes
  let emptyBoxes = Array.from(box).filter(
    (emptyBox) => emptyBox.innerHTML === ""
  );

  // Check if there are any empty boxes left
  if (emptyBoxes.length > 0) {
    // Choose a random empty box
    let randomIndex = Math.floor(Math.random() * emptyBoxes.length);
    let chosenBox = emptyBoxes[randomIndex];

    // Place "O" in the chosen box
    chosenBox.classList.add("redBox");
    chosenBox.classList.remove("greenBox");
    chosenBox.innerHTML = "O";

    // Increase total clicks after AI move
    totalClicks++;
    console.log(`AI played. Total clicks: ${totalClicks}`);
  } else {
    console.log("No empty boxes left for AI to play.");
  }
}

// Fills box with X or O depending on totalClicks
function fillBox() {
  box.forEach((checkBox) => {
    checkBox.addEventListener("click", function () {
      if (totalClicks % 2 === 0 && checkBox.innerHTML === "") {
        checkBox.classList.add("greenBox");
        checkBox.classList.remove("redBox");
        checkBox.innerHTML = "X";

        // Adds all X to chosenBoxes
        chosenBoxes.add(checkBox);
        console.log(chosenBoxes);

        totalClicks++;
        console.log(`Total clicks: ${totalClicks}`);
        // Check if player wins
        winGame();

        // // Calling aiPlayer()
        let randomTime = Math.floor(Math.random() * 1000);
        setTimeout(aiPlayer, randomTime);
      }
    });
  });
}

function resetBoard() {
  resetBtn.addEventListener("click", function () {
    box.forEach((filledBox) => {
      filledBox.innerHTML = "";
      filledBox.classList.remove("greenBox");
      filledBox.classList.remove("redBox");
      chosenBoxes.clear();
      totalClicks = 0;
      console.log(`Total clicks: ${totalClicks}`);
    });
  });
}

// Game win logic
function winGame() {
  winningCombinations.forEach((combination) => {
    let [box1, box2, box3] = combination;

    if (
      box1.innerHTML !== "" &&
      box1.innerHTML === box2.innerHTML &&
      box1.innerHTML === box3.innerHTML
    ) {
      console.log(`${box1.innerHTML} wins!`);
    }
  });
}

// Calling all functions

boxHover();
fillBox();
resetBoard();
