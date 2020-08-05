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

let numberOfUnguessedLetter = 0;

let unguessedLetter1 = document.getElementById("id1");
let unguessedLetter2 = document.getElementById("id2");
let unguessedLetter3 = document.getElementById("id3");
let unguessedLetter4 = document.getElementById("id4");
let unguessedLetter5 = document.getElementById("id5");
let unguessedLetter6 = document.getElementById("id6");
let unguessedLetter7 = document.getElementById("id7");
let unguessedLetter8 = document.getElementById("id8");
let unguessedLetter9 = document.getElementById("id9");
let unguessedLetter10 = document.getElementById("id10");


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

       numberOfUnguessedLetter += 1;

    if (numberOfUnguessedLetter === 1) {
        unguessedLetter1.className = "id1Visible";
        unguessedLetter2.className = "id2Visible";
        unguessedLetter3.className = "id3Visible";
        unguessedLetter4.className = "id4Visible";
    } else if (numberOfUnguessedLetter === 2) {
        unguessedLetter5.className = "id5Visible";
        unguessedLetter6.className = "id6Visible";
    } else if (numberOfUnguessedLetter === 3) {
        unguessedLetter7.className = "id7Visible";
        unguessedLetter8.className = "id8Visible";
    } else if (numberOfUnguessedLetter === 4) {
        unguessedLetter9.className = "id9Visible";
        unguessedLetter10.className = "id10Visible";
        // let hiddenBox = document.getElementById("currentLetter");
        // let hiddenButton = document.getElementById("guess");
        // hiddenBox.className = "pHidden";
        // hiddenButton.className = "pHidden";
        let hiddenBox = document.getElementById("inputBox");
        hiddenBox.className = "pHidden";
    } 
    
    }
    document.getElementById("stars").innerText = guessedArray.join(' ');
    document.getElementById("currentLetter").value = "";
     

}
