// Array of soccer words 
let wordArray = ["ball", "keeper", "hattrick", "goal", "redcard", "yellowcard",
"referee", "pitch", "striker", "forward", "sweeper", "fullback", "midfielder",
"handball", "header", "relegation"]
// End array

let word
let wordPara
let remainingLetters
let remainingGuesses = 10;
let guessedPara
let previousLetterArray = [];
let answerArray = [];
let score = 0;
let storage
let removed

function removeWord() {
    storage = wordArray.indexOf(word);
    removed = wordArray.splice(storage, 1);
}

function updateGuesses() {
    document.querySelector("#remainingGuesses").innerHTML = remainingGuesses
}

function updateBlanks() {
    document.getElementById("blanks").innerHTML = answerArray.join(" ");
}

function resetGame() {
    if (wordArray.length === 0) {
        document.getElementsByClassName("winnerText").innerHTML = "WINNER!"
        document.getElementById("winner").src= "../Word-Guess-Game/assets/images/winner.gif";
    }
    word = wordArray[Math.floor(Math.random() * wordArray.length)];
    remainingGuesses = 10;
    remainingLetters = word.length;
    previousLetterArray = [];
    answerArray = [];
    wordPara = document.createElement("p");
    guessedPara = document.createElement("p")
    updateGuesses();
    updateBlanks();

    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
        let node = document.createTextNode("_ ");
        wordPara.appendChild(node);
        let wordElement = document.getElementById("blanks");
        wordElement.appendChild(wordPara);
    }
}

function updateScore() {
    score += 1;
    document.getElementById("score").innerHTML = score;
}

function clearGuesses() {
    guessedElement.removeChild(guessedPara)
}

resetGame();
document.onkeyup = function (event) {
    let letterGuessed = event.key.toLowerCase();
    let foundLetter = false;

    if (!previousLetterArray.includes(letterGuessed)) {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === letterGuessed) {
                answerArray[j] = letterGuessed.toUpperCase();
                foundLetter = true;
                remainingLetters--;
            }
        }
        if (foundLetter === false) {
            let guessedNode = document.createTextNode(letterGuessed.toUpperCase() + ", ");
            guessedPara.appendChild(guessedNode);
            let guessedElement = document.getElementById("letterGuessed");
            guessedElement.appendChild(guessedPara);
            remainingGuesses = remainingGuesses - 1;
        }
        previousLetterArray.push(letterGuessed);
        updateGuesses();
        updateBlanks();
    }
    if (remainingLetters === 0) {
        document.getElementById("image").src = "../Word-Guess-Game/assets/images/" + word + ".jpg";
        document.getElementById("wordBanner").innerHTML = word.toUpperCase();
        updateScore();
        if (remainingGuesses < 10) {
            document.getElementById("letterGuessed").removeChild(guessedPara);
        }
        removeWord();
        resetGame();
    }

    if (remainingGuesses === 0) {
        document.getElementById("letterGuessed").removeChild(guessedPara);
        document.getElementById("image").src = "../Word-Guess-Game/assets/images/loser.gif";
        document.getElementById("wordBanner").innerHTML = "YOU LOSE!";
        resetGame();
    }
}