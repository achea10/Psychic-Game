var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesThusFar = [];
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    guessesThusFar.push(userGuess); 

        if (userGuess === computerGuess) {
            alert("You Win! :)");
            wins++; 
        }

        else if (guessesLeft === 0) {
            alert("You Lose :(");
            losses++;
        }

        else if (userGuess !== computerGuess) {
            guessesLeft--;
         }

    var html = 
    "<h1>Can you guess the letter of which I'm thinking?</h1>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Your guesses, thus far: " + guessesThusFar + "</p>";

    document.getElementById("game").innerHTML = html;

    var reset = {
        resetGame: function() {
        guessesLeft = 10;
        guessesThusFar.length = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; 
        } 
} }