
var wordArray = ["ball", "keeper", "hattrick", "goal", "redcard", "yellowcard",
    "referee", "pitch", "striker", "forward", "sweeper", "fullback", "midfielder",
    "handball", "header", "relegation", "touchline"]

var word = wordArray[Math.floor(Math.random() * wordArray.length)];

var para = document.createElement("p");

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    console.log(answerArray[i]);
    
    var node = document.createTextNode("_ ");
    para.appendChild(node);
    var element = document.getElementById("blanks");
    element.appendChild(para);
}

var remainingLetters = word.length;

var remainingGuesses = 10;


document.onkeyup = function (event) {

    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var letterGuessed = event.key.toLowerCase();
    console.log(letterGuessed)

    //adding guessed letter to html 

    remainingGuesses = remainingGuesses - 1;

    console.log(remainingGuesses)
}


