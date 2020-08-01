console.log("hangman !");
let wordToGuess = prompt("Please give word to guess");
wordToGuess.length;
let unguessedPattern = "*";
let currentGuess = unguessedPattern.repeat(wordToGuess.length);
console.log(currentGuess);
let liveLeft = 5;
let gameWon = false;
while (liveLeft > 0 && !gameWon) {
  let didIGuessInTheCurrentIteration = false;
  let currentLetter = prompt("please give a letter");
  for (let i = 0; i < wordToGuess.length; i++) {
    if (wordToGuess[i] === currentLetter) {
      currentGuess =
        currentGuess.substring(0, i) +
        currentLetter +
        currentGuess.substring(i + 1);
      didIGuessInTheCurrentIteration = true;
      console.log(
        `Pentru iteratia ${i} si litera introdusa |${currentLetter}| avem in cuvantul |${wordToGuess}| ghicite urmatorul patern |${currentGuess}|`
      );
    }
  }
  if (!didIGuessInTheCurrentIteration) {
    liveLeft--;
  }
  console.log(`vieti ramase ${liveLeft}`);
}
