const box = document.querySelectorAll(".box");
const resetBtn = document.getElementById("resetBtn");
let totalClicks = 0;

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
    });

    box.addEventListener("mouseout", function () {
      box.classList.remove("hoverGreen");
      box.classList.remove("hoverRed");
    });
  });
}

// Fills box with X or O depending on totalClicks
function fillBox() {
  box.forEach((checkBox) => {
    checkBox.addEventListener("click", function () {
      if (totalClicks % 2 === 0) {
        checkBox.classList.add("redBox");
        checkBox.classList.remove("greenBox");
        checkBox.innerHTML = "O";
      } else {
        checkBox.classList.add("greenBox");
        checkBox.classList.remove("redBox");
        checkBox.innerHTML = "X";
      }
    });
  });
}

incrementClicks();
boxHover();
fillBox();
