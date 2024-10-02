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
  // Generates random number between 0-2
  let randomRow;
  let randomCol;
  let filled = false;

  // Looping for empty box while preventing infinite loop
  for (let attempts = 0; attempts < 10 && !filled; attempts++) {
    randomRow = Math.floor(Math.random() * 3);
    randomCol = Math.floor(Math.random() * 3);

    console.log("randomRow = " + randomRow);
    console.log("randomCol = " + randomCol);

    // Check if selected box is empty
    if (allBoxes[randomRow][randomCol].innerHTML === "") {
      allBoxes[randomRow][randomCol].innerHTML = "O";
      allBoxes[randomRow][randomCol].classList.remove("greenBox");
      allBoxes[randomRow][randomCol].classList.add("redBox");
      totalClicks++;
      filled = true;
      console.log(`AI box select --> Row:${randomRow}, Col:${randomCol}`);
      break;
    }
  }

  if (!filled) {
    console.log("No empty box found");
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

        totalClicks++;

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
