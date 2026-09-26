let coinFlip;
let coinFlipNumber = Number(
  prompt("Enter a number between 1 and 10 to flip a coin:")
);

if (
  !Number.isInteger(coinFlipNumber) ||
  coinFlipNumber < 1 ||
  coinFlipNumber > 10
) {
  alert("Please enter a whole number between 1 and 10.");
} else {
  for (let i = coinFlipNumber; i > 0; i--) {
    coinFlip = Math.floor(Math.random() * 2);

    if (coinFlip === 0) {
      console.log("Heads");
    } else {
      console.log("Tails");
    }
  }
}
