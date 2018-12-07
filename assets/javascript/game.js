// Array of soccer words 
var wordArray = ["ball", "keeper", "hattrick", "goal", "redcard", "yellowcard",
"referee", "pitch", "striker", "forward", "sweeper", "fullback", "midfielder",
"handball", "header", "relegation"]
// End array

var word
var wordPara
var remainingLetters
var remainingGuesses = 10;
var guessedPara
var previousLetterArray = [];
var answerArray = [];
var score = 0;
var storage
var removed

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

    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
        var node = document.createTextNode("_ ");
        wordPara.appendChild(node);
        var wordElement = document.getElementById("blanks");
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
    var letterGuessed = event.key.toLowerCase();
    var foundLetter = false;

    if (!previousLetterArray.includes(letterGuessed)) {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === letterGuessed) {
                answerArray[j] = letterGuessed.toUpperCase();
                foundLetter = true;
                remainingLetters--;
            }
        }
        if (foundLetter === false) {
            var guessedNode = document.createTextNode(letterGuessed.toUpperCase() + ", ");
            guessedPara.appendChild(guessedNode);
            var guessedElement = document.getElementById("letterGuessed");
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