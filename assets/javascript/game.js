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
    

    updateScore();

    remainingGuesses = remainingGuesses - 1;


    if (!previousLetterArray.includes(letterGuessed)) {
        var node2 = document.createTextNode(letterGuessed.toUpperCase() + ", ");
        para2.appendChild(node2);
        var elementE = document.getElementById("letterGuessed");
        elementE.appendChild(para2);
        previousLetterArray.push(letterGuessed);
    }
    
}


function updateScore() {
    document.querySelector("#remainingGuesses").innerHTML = "Remaining Guesses: " + remainingGuesses
}