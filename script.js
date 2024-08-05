const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const guesses = document.getElementById("guesses");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let numGuesses = 0;

guessButton.addEventListener("click", () => {
  let userGuess = parseInt(guessInput.value);
  numGuesses++;

  if (userGuess === randomNumber) {
    message.textContent = `Congratulations! You guessed the number in ${numGuesses} tries.`;
    guessInput.disabled = true;
    guessButton.disabled = true;
  } else if (userGuess < randomNumber) {
    message.textContent = "Too low! Try again.";
  } else {
    message.textContent = "Too high! Try again.";
  }

  guesses.textContent = `Guesses: ${numGuesses}`;
  guessInput.value = "";
});