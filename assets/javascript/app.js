$(document).ready(function() {
    
    function initialScreen() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Game</a></p>"
        + "<img class='center-block img-start'width = '200' src='https://media.giphy.com/media/l3UcqjMBeQzXaoqGI/giphy.gif'>";
        
        $(".mainArea").html(startScreen);
    }
    initialScreen();
    
    $("body").on("click", ".start-button", function(event){
        generateHTML();
        timerWrapper();
    }); 
    
    $("body").on("click", ".answer", function(event){
        selectedAnswer = $(this).text();
        if(selectedAnswer === correctAnswers[questionCounter]) {
            clearInterval(theClock);
            generateWin();
        }
        else {
            clearInterval(theClock);
            generateLoss();
        }
    }); 
    
    $("body").on("click", ".reset-button", function(event){
        resetGame();
    }); 
    
}); 

function generateLossDueToTimeOut() {
    unansweredTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" 
    + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer is: " 
    + correctAnswers[questionCounter] + "</p>" 
    + "<img class='center-block img-wrong'width = '300' src='https://media.giphy.com/media/3ornjXizVZDbngmjRK/giphy-downsized.gif'>";
    
    letsWait();  
    function letsWait() {
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 3000);
    }
}

function generateWin() {
    correctTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" 
    + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " 
    + correctAnswers[questionCounter] + "</p>" 
    + imageArray[questionCounter];
    
    letsWait();  
    function letsWait() {
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 3000);
    }
}

function generateLoss() {
    incorrectTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" 
    + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "
    + correctAnswers[questionCounter] + "</p>" 
    + "<img class='center-block img-wrong'width = '300' src='https://media.giphy.com/media/3o7btT1T9qpQZWhNlK/giphy-downsized.gif'>";
    
    letsWait(); 
    function letsWait() {
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 3000);
    }
}

function generateHTML() {
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" 
    + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " 
    + answerArray[questionCounter][0]+ "</p><p class='answer'>B. "
    + answerArray[questionCounter][1]+"</p><p class='answer'>C. "
    + answerArray[questionCounter][2]+"</p><p class='answer'>D. "
    + answerArray[questionCounter][3]+"</p>";
    $(".mainArea").html(gameHTML);
}

function wait() {
    if (questionCounter < 7) {
        questionCounter++;
        generateHTML();
        counter = 30;
        timerWrapper();
    }
    else {
        finalScreen();
    }
}

function timerWrapper() {
    theClock = setInterval(thirtySeconds, 1000);
    function thirtySeconds() {
        if (counter === 0) {
            clearInterval(theClock);
            generateLossDueToTimeOut();
        }
        if (counter > 0) {
            counter--;
        }
        $(".timer").html(counter);
    }
}

function finalScreen() {
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" 
    + counter + "</span></p>" + "<p class='text-center'>Done! Here is your score:" + "</p>" + "<p class='summary-correct'>Correct Answers: " 
    + correctTally + "</p>" + "<p>Wrong Answers: " 
    + incorrectTally + "</p>" + "<p>Unanswered: " 
    + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Game!</a></p>";

    $(".mainArea").html(gameHTML);
}

function resetGame() {
    questionCounter = 0;
    correctTally = 0;
    incorrectTally = 0;
    unansweredTally = 0;
    counter = 30;
    generateHTML();
    timerWrapper();
}  
var startScreen;
var gameHTML;
var counter = 30;

var questionArray = ["On May 22, 2010, the first purchase with bitcoins was recorded. <br> What was this purchase for? ",
"How many bitcoins were paid for those 2 pizzas?", 
"Who was the creator of the Bitcoin?",
"What is the maximum amount of bitcoins that can ever exist!?",
"Who was the first major U.S. retailer to accept the digital currency?",
"How many different cryptocurrencies are available over the internet as of February 1?",
"Can you reverse a bitcoin transfer or bitcoin transaction?",
"Which was the first city that boasted the first Bitcoin cash machine"];

var answerArray =   [["1 pound of heroin", "Ferrari", "2 pizzas", "Painting"],
["10,000", "1,000", "200","50"],
["Bill Gates", "Warren Buffet", "Donald Trump", "Satoshi Nakamoto"],
["Infinite", "3 million", "21 million", "100 million"],
["Amazon", "Gap", "Apple", "Overstock"],
["Around 1500", "Around 500", "Around 100", "Around 1000"],
["Hard but possible", "No", "Yes", "Only if it meets certain criteria"],
["Beijing", "New York","London","Vancouver"]];

var imageArray =     ["<img class='center-block img-right' width = '300' src='https://media.giphy.com/media/10kxE34bJPaUO4/giphy-downsized.gif'>",
"<img class='center-block img-right' width = '300' src='https://media.giphy.com/media/9M4m0A3rcE58s/giphy-downsized.gif'>",
"<img class='center-block img-right' width = '300' src='https://media.giphy.com/media/ez1LtcbtTAV6U/giphy-downsized.gif'>",
"<img class='center-block img-right' width = '300' src='https://media.giphy.com/media/ez1LtcbtTAV6U/giphy-downsized.gif'>",
"<img class='center-block img-right'width = '300' src='https://media.giphy.com/media/ez1LtcbtTAV6U/giphy-downsized.gif'>",
"<img class='center-block img-right'width = '300' src='https://media.giphy.com/media/ez1LtcbtTAV6U/giphy-downsized.gif'>",
"<img class='center-block img-right'width = '300' src='https://media.giphy.com/media/ez1LtcbtTAV6U/giphy-downsized.gif'>",
"<img class='center-block img-right'width = '300' src='https://media.giphy.com/media/ez1LtcbtTAV6U/giphy-downsized.gif'>"];

var correctAnswers = ["C. 2 pizzas", "A. 10,000", "D. Satoshi Nakamoto", "C. 21 million",
                      "D. Overstock", "A. Around 1500", "B. No", "D. Vancouver"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;