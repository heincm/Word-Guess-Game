// Array of soccer words 
var wordArray = ["ball", "keeper", "hattrick", "goal", "redcard", "yellowcard",
    "referee", "pitch", "striker", "forward", "sweeper", "fullback", "midfielder",
    "handball", "header", "relegation", "touchline"]
// End array

var word = wordArray[Math.floor(Math.random() * wordArray.length)];

var para = document.createElement("p");

var remainingLetters = word.length;

var remainingGuesses = 10;

var para2 = document.createElement("p")

var previousLetterArray = [];

var answerArray = [];
for (var i = 0; i < word.length; i++) {

    answerArray[i] = "_";
    var node = document.createTextNode("_ ");
    para.appendChild(node);
    var element = document.getElementById("blanks");
    element.appendChild(para);
}

document.onkeyup = function (event) {

    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var letterGuessed = event.key.toLowerCase();
    var foundLetter = false;

    if (!previousLetterArray.includes(letterGuessed)) {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === letterGuessed) {
                answerArray[j] = letterGuessed;
                foundLetter = true;
            }
        } if (foundLetter === false) {
            var node2 = document.createTextNode(letterGuessed.toUpperCase() + ", ");
            para2.appendChild(node2);
            var elementE = document.getElementById("letterGuessed");
            elementE.appendChild(para2);
            remainingGuesses = remainingGuesses - 1;
        }
        previousLetterArray.push(letterGuessed);
        updateScore();
    }
    function updateScore() {
        document.querySelector("#remainingGuesses").innerHTML = "Remaining Guesses: " + remainingGuesses
    }
}
