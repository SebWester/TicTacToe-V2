const allBoxes = [
  ["boxA", "boxB", "boxC"],
  ["boxD", "boxE", "boxF"],
  ["boxG", "boxH", "boxI"],
];

// ATT GÖRA - FLYTTA IN RANDOMNUMS INNANFÖR FOR-LOOPEN!!!!
for (let i = 0; i < 5; i++) {
  let randomRow = Math.floor(Math.random() * 3); // Random number 0-2
  let randomCol = Math.floor(Math.random() * 3); // Random number 0-2
  console.log(allBoxes[randomRow][randomCol]);
}
