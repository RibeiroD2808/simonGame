var buttoncolours = ["red", "blue", "green", "yellow"];
var randomChosenColour = 0;
var gamepattern = [];


function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

randomChosenColour = nextSequence();

gamepattern.push(randomChosenColour);
console.log(gamepattern);
console.log(buttoncolours[randomChosenColour]);

$("#" + buttoncolours[randomChosenColour]).fadeIn().fadeOut().fadeIn();

var audio = new Audio("sounds/" + buttoncolours[randomChosenColour] + ".mp3");
var audio = new Audi0("sounds/blue.mp3");
audio.play();

