var buttoncolours = ["red", "blue", "green", "yellow"];
var randomChosenColour = 0;
var gamepattern = [];
var userClickedPattern = [];
var userChosenColour;
var level = 0;

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    userClickedPattern = [];
    playSound(buttoncolours[randomNumber]);
    gamepattern.push(buttoncolours[randomNumber]);
    $("#" + buttoncolours[randomNumber]).fadeIn().fadeOut().fadeIn();
    $("h1").text("Level " + level);
    level ++;
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){
    console.log(userClickedPattern);
    console.log(gamepattern);
    if(JSON.stringify(gamepattern) == JSON.stringify(userClickedPattern)){
        console.log("Correct");
        nextSequence();
    }
    else{
        console.log("Wrong");
        $("h1").text("Game Over, Press Any Key to Restart");
        level = 0;
    }
        
}


$(document).keypress(function(){
    if(level == 0){
        gamepattern = [];
        userClickedPattern = [];
        nextSequence();
    }
})

$(".btn").click(function(){
    userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    animatePress(this.id);
    checkAnswer(level);
})