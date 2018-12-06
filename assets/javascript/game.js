// Array of soccer words 
var wordArray = ["ball", "keeper", "hattrick", "goal", "redcard", "yellowcard",
    "referee", "pitch", "striker", "forward", "sweeper", "fullback", "midfielder",
    "handball", "header", "relegation", "touchline"]
// End array

var word = wordArray[Math.floor(Math.random() * wordArray.length)];
var wordPara = document.createElement("p");
var remainingLetters = word.length;
var remainingGuesses = 10;
var guessedPara = document.createElement("p")
var previousLetterArray = [];
var answerArray = [];

var score = 0;

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
        document.getElementById("image").src="../Word-Guess-Game/assets/images/"+word+".jpg";
        updateScore();
        resetGame();  
    }
    
    if (remainingGuesses === 0) {
        resetGame();
    }
}

   
function updateGuesses() {
    document.querySelector("#remainingGuesses").innerHTML = remainingGuesses
}

function updateBlanks() {
    document.getElementById("blanks").innerHTML = answerArray.join(" ");
}

function resetGame() {
    word = "header"//wordArray[Math.floor(Math.random() * wordArray.length)];
    remainingGuesses = 10;
    remainingLetters = word.length;
    previousLetterArray = [];
    answerArray = [];
    
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