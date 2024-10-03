const allBoxes = [
  ["boxA", "boxB", "boxC"],
  ["boxD", "boxE", "boxF"],
  ["boxG", "boxH", "boxI"],
];

// ATT GÖRA - FLYTTA IN RANDOMNUMS INNANFÖR FOR-LOOPEN!!!!
const chosenBoxes = new Set();

for (let i = 0; i < 10; i++) {
  let randomRow = Math.floor(Math.random() * 3); // Random number 0-2
  let randomCol = Math.floor(Math.random() * 3); // Random number 0-2
  if (i % 2 === 0) {
    console.log("Players move");
    // Push to chosenBoxes
  } else {
    console.log(allBoxes[randomRow][randomCol]);
    chosenBoxes.add(allBoxes[randomRow][randomCol]);
    if (allBoxes[randomRow][randomCol] in chosenBoxes) {
      for (let j = 0; i < allBoxes.length; j++) {
        let newRow = Math.floor(Math.random() * 3);
        let newCol = Math.floor(Math.random() * 3);
        console.log("Trying to find a free box");
        console.log(allBoxes[newRow][newCol]);
        chosenBoxes.add(allBoxes[newRow][newCol]);
      }
    }
  }
}

console.log(chosenBoxes);
