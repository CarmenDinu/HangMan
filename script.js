var wordsToGuess = ["pink", "blue", "red", "yey", "ney"];
var word = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
var guessedArray = [];
for (let i = 0; i < word.length; i++) {
  guessedArray[i] = "*";
}
var livesLeft = 5;
var remainingLetters = word.length;

function takeaLetter() {
  let input = document.getElementById("letter").value;

  if (input === null) {
    return;
  } else if (input.length !== 1) {
    return;
  } else {
    for (let k = 0; k < word.length; k++) {
      if (word[k] === input) {
        guessedArray[k] = input;
      }
    }
  }
  let isLetterCorrect = guessedArray.includes(input);
  if (!isLetterCorrect) {
    let firstDiv = document.getElementById("firstDiv");
    firstDiv.classList.add("firstDiv");
  }

  printArray(guessedArray);
}

function printArray(input) {
  let guessedLetters = document.getElementById("currentGuess");
  guessedLetters.innerText = input.join(" ");
}
