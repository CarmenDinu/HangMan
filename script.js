let wordToGuess = prompt("Please give a word to guess");
console.log(wordToGuess);

let totalLives = 4;
let livesLeft = document.getElementById("livesLeft");
livesLeft.innerHTML = 'You have ' + totalLives + ' lives remaining';

let unguessedPattern = "*";
let currentGuess = unguessedPattern.repeat(wordToGuess.length);
document.getElementById("stars").innerHTML = `Current Word to Guess is: 
<br>
<br>
${currentGuess}`;

let guessedArray = [];

for (i = 0; i < wordToGuess.length; i++) {
    guessedArray.push(unguessedPattern);
}

function takeInput() {
    let guessInputLetter = document.getElementById("currentLetter").value;
  
    if (guessInputLetter === null || guessInputLetter === "null" || guessInputLetter === "") {
        return

    } else {
        for (let i = 0; i < wordToGuess.length; i++) {

          if (wordToGuess[i] === guessInputLetter) {
              guessedArray[i] = guessInputLetter;  
           } 
        }
    }
    let didIGuessInTheCurrentIteration = guessedArray.includes(guessInputLetter);

    if (!didIGuessInTheCurrentIteration) {
       totalLives--;

       livesLeft.innerHTML = `You have ` + totalLives + ` lives remaining`;
    }
    document.getElementById("stars").innerText = guessedArray.join(' ');
     
}
