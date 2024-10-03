// Testing scripts

for (let i = 0; i < 10; i++) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);

  if (randomNumber === 3 || randomNumber === 7) {
    console.log("Not 3 or 7");
    continue;
  } else {
    winImminent();
  }
}
