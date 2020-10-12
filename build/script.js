var wordsToGuess = ['red', 'yellow', 'blue'];
var word = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
var guessedArray = [];
for (let i = 0; i < word.length; i++) {
	guessedArray[i] = '*';
}
var livesLeft = 4;
var remainingLetters = word.length;

function takeaLetter() {
	let input = document.getElementById('letter').value;

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
		livesLeft--;
		document.getElementById('lives').innerHTML = `You have ${livesLeft} left lives`;
	}
	if (livesLeft === 3) {
		let firstDiv = document.getElementById('firstDiv');
		firstDiv.classList.add('firstDiv');
	} else if (livesLeft === 2) {
		let secondDiv = document.getElementById('secondDiv');
		secondDiv.classList.add('secondDiv');
	} else if (!isLetterCorrect && livesLeft === 1) {
		let thirdDiv = document.getElementById('thirdDiv');
		thirdDiv.classList.add('thirdDiv');
	} else if (livesLeft === 0) {
		let forthdDiv = document.getElementById('forthdDiv');
		forthdDiv.classList.add('forthdDiv');
		let fifthdDiv = document.getElementById('fifthdDiv');
		fifthdDiv.classList.add('fifthdDiv');
		let sixthDiv = document.getElementById('sixthDiv');
		sixthDiv.classList.add('sixthDiv');
		let seventhDiv = document.getElementById('seventhDiv');
		seventhDiv.classList.add('seventhDiv');
		let eigthDiv = document.getElementById('eigthDiv');
		eigthDiv.classList.add('eigthDiv');
		let ninethDiv = document.getElementById('ninethDiv');
		ninethDiv.classList.add('ninethDiv');
		let tenthDiv = document.getElementById('tenthDiv');
		tenthDiv.classList.add('tenthDiv');
		document.getElementById('lives').innerHTML = `Looser`;
	} else if (livesLeft <= 0) {
		livesLeft--;
		document.getElementById('lives').innerHTML = `Looser`;
		return;
	}

	printArray(guessedArray);
}

function printArray(input) {
	let guessedLetters = document.getElementById('currentGuess');
	guessedLetters.innerText = input.join(' ');
}

function hello(name) {
	return 'Hello ' + name.charAt(0).toUpperCase() + name.slice(1);
}
const reloadtButton = document.querySelector('#reload');
function reload() {
	reload = location.reload();
}
reloadButton.addEventListener('click', reload, false);
