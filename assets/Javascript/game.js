

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];

window.onload = onloadCompGuess;

function onloadCompGuess() {
    var compGuess = computerChoices[Math.ceil(Math.random() * computerChoices.length)];
    computerGuess.push(compGuess);
}

document.onkeyup = gameLogic;

function gameLogic(event) {
    var playerGuess = event.key;
    lettersGuessed.push(playerGuess);


    if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
        wins++;
        guessesLeft = 9;
        lettersGuessed.length = 0;
        computerGuess.length = 0;
        onloadCompGuess();
    }

    else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
        guessesLeft = guessesLeft - 1;
    }

    else {
        losses++;
        guessesLeft = 9;
        lettersGuessed.length = 0;
        computerGuess.length = 0;
        onloadCompGuess();
    }

    var html =
        "<br>" +
    "<p>Guess what letter I'm thinking of!</p>" +
        "<br>" +
    "<p>Wins: " + wins + "</p>" +
        "<br>" +
    "<p>Losses: " + losses + "</p>" +
        "<br>" +
    "<p>Guesses left: " + guessesLeft + "</p>" +
        "<br>" +
    "<p>Your guesses so far: " + lettersGuessed + "</p>";

    document.getElementById("game").innerHTML = html;
}