var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

var userClickedPattern = [];

var level = 0;

var started = false;

$(document).on("keypress", function(){
    if(!started){
        //console.log(level);
        $("h1").text("Level"+level);
        //console.log(level);
        nextsequence();
        started = true;
    }
});

$(".btn").on("click",function(){
    //console.log("button clicked");
    var userChoosenColor = $(this).attr("id");
    //console.log(userChoosenColor);
    userClickedPattern.push(userChoosenColor);
    (userClickedPattern);
    //console.log(userClickedPattern.length);
    // var audio = new Audio("sounds/" +userChoosenColor +".mp3");
    // audio.play();

    playsound(userChoosenColor);
    //$("#" + userChoosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    animatePress(userChoosenColor);

    checkAnswer(userClickedPattern.length-1); // 0-blue,
});


function checkAnswer(currentLevel){

    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        if(gamePattern.length === userClickedPattern.length){

            setTimeout( function(){
                nextsequence();
            },1000);

        }
    }
    else{
        console.log("wrong");

        // var wrongaudio = new Audio("sounds/wrong.mp3");
        // wrongaudio.play();
        playsound("wrong");
        
        $("body").addClass("game-over");
    
        setTimeout (function(){
            $("body").removeClass("game-over");
    
        },200);


        $("h1").text("Game Over, Press Any Key to Restart");

        startOver();
        
    }
}



function nextsequence(){
    userClickedPattern = [];
    level++;
    //console.log(level);

    $("h1").text("level"+level)
    randomNumber = Math.floor(Math.random()*4);
    randomChoosenColor = buttonColors[randomNumber];
    // console.log(randomChoosenColor);
    gamePattern.push(randomChoosenColor);
    console.log(gamePattern);

    $("#" + randomChoosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    // var audio = new Audio("sounds/" +randomChoosenColor +".mp3");
    // audio.play();
    playsound(randomChoosenColor);
}





function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");

    setTimeout (function(){
        $("#"+currentColor).removeClass("pressed");

    },100);
}


function playsound(name){
    var audio = new Audio("sounds/" +name +".mp3");
    audio.play();
}

function startOver(){
    level = 0 ;
    gamePattern = [];
    started = false;
}
