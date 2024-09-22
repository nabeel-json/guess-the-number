const btn = document.querySelector("button");
const inputField = document.querySelector("#input-field");
const description = document.querySelector("#description");
const previousGuessesPara = document.querySelector("#previous-guesses");
const randomNumber = Math.floor(Math.random() * 100) + 1;
let previousGuesses = [];
let attempts = 0;
const maxAttempts = 10; // Set maxAttempts as a constant

console.log(randomNumber); // For debugging

// Function to handle the guessing logic
function handleGuess() {
  const inputNumber = Math.round(Number(inputField.value));

  // Validate the input
  if (inputNumber < 1 || inputNumber > 100 || isNaN(inputNumber)) {
    description.textContent = "Please enter a valid number between 1 and 100.";
    return; // Exit the function if input is invalid
  }

  attempts++; // Increment attempts

  // Check if the user has reached the maximum attempts
  if (attempts >= maxAttempts) {
    description.textContent = `Game over! The number was ${randomNumber}.`;
    btn.textContent = "Click to Restart";
    btn.onclick = () => location.reload(); // Disable the button after max attempts
    inputField.value = "";
    return; // Exit the function
  }

  // Check the user's guess
  if (inputNumber === randomNumber) {
    description.textContent = "You got it right! 🎉";
    previousGuessesPara.textContent = `Previous Guesses: ${previousGuesses.join(
      ", "
    )}`;
    btn.textContent = "Click to Restart";
    btn.onclick = () => location.reload(); // Disable the button after a correct guess
    inputField.value = ""; // Clear input field
  } else if (inputNumber > randomNumber) {
    description.textContent = "Your answer is high!";
  } else {
    description.textContent = "Your answer is low!";
  }

  // Store the guess
  previousGuesses.push(inputNumber);
  previousGuessesPara.textContent = `Previous Guesses: ${previousGuesses.join(
    ", "
  )}`;

  // Clear the input field after submission
  inputField.value = "";
}

// Button click event
btn.addEventListener("click", handleGuess);

// Enter key event on input field
inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleGuess();
  }
});
