const box = document.querySelectorAll(".box");
const resetBtn = document.getElementById("resetBtn");
let totalClicks = 0;

// Getting all unique boxes
// Row one
const [boxA, boxB, boxC] = [
  document.getElementById("a"),
  document.getElementById("b"),
  document.getElementById("c"),
];

// Row two
const [boxD, boxE, boxF] = [
  document.getElementById("d"),
  document.getElementById("e"),
  document.getElementById("f"),
];

// Row one
const [boxG, boxH, boxI] = [
  document.getElementById("g"),
  document.getElementById("h"),
  document.getElementById("i"),
];

// All boxes
const allBoxes = [
  [boxA, boxB, boxC],
  [boxD, boxE, boxF],
  [boxG, boxH, boxI],
];

// Set to fill with chosen boxes
let chosenBoxes = new Set();

// Adds one to totalClicks
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

// "AI" functionality here
function aiPlayer() {
  // Filter out all empty boxes
  let emptyBoxes = [];
  box.forEach((aiBox) => {
    if (aiBox.innerHTML === "") {
      emptyBoxes.push(aiBox);
    }
  });

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

// Calling all functions
// incrementClicks();
boxHover();
fillBox();
resetBoard();
