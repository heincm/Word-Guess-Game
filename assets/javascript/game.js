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

var gameComplete; 

for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    var node = document.createTextNode("_ ");
    wordPara.appendChild(node);
    var wordElement = document.getElementById("blanks");
    wordElement.appendChild(wordPara);
}

document.onkeyup = function (event) {
    var letterGuessed = event.key.toLowerCase();
    var foundLetter = false;
    gameComplete = false;

    if (!previousLetterArray.includes(letterGuessed)) {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === letterGuessed) {
                answerArray[j] = letterGuessed.toUpperCase();
                foundLetter = true;
                remainingLetters--;
            }
        } if (foundLetter === false) {
            var node2 = document.createTextNode(letterGuessed.toUpperCase() + ", ");
            guessedPara.appendChild(node2);
            var guessedElement = document.getElementById("letterGuessed");
            guessedElement.appendChild(guessedPara);
            remainingGuesses = remainingGuesses - 1;
        }
        previousLetterArray.push(letterGuessed);
        updateGuesses();
        updateBlanks();
    }
    if (remainingGuesses === 0 || remainingLetters === 0) {
        gameComplete = true;
        resetGame();
    }
    function updateGuesses() {
        document.querySelector("#remainingGuesses").innerHTML = remainingGuesses
    }
    function updateBlanks() {
        document.getElementById("blanks").innerHTML = answerArray.join(" ");

        if (answerArray.join() === word) {
            document.getElementById("image").innerHTML = "<img src=\"https://www.balloonsandweights.com/wp-content/uploads/2014/10/Mini-Foam-Soccer-Ball-Back-Side-BalloonsAndWeights.com_.jpg\" width=\"400px\" height=\"150px\">";
        }
    }
}

function resetGame(){
    word = wordArray[Math.floor(Math.random() * wordArray.length)];
    remainingGuesses = 10;
    remainingLetters = word.length;
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
        var node = document.createTextNode("_ ");
        wordPara.appendChild(node);
        var wordElement = document.getElementById("blanks");
        wordElement.appendChild(wordPara);
    }
    
}