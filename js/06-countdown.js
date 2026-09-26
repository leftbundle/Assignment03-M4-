let countDown = Number(
  prompt("Please enter a number to count down from:")
);

if (!Number.isInteger(countDown) || countDown < 0) {
  alert("Please enter a positive whole number.");
} else {
  for (let i = countDown; i >= 0; i--) {
    console.log(i);
  }
}