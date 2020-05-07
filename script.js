var timer = document.getElementById("timer");
var timerNum = document.getElementById("countdownTimer")
//container for start screen
var startScreen = document.getElementById("startScreen");
//container for quiz screen
var quizBox = document.getElementById("quizBox");
//start button, should disappear
var btnStart = document.getElementById("btnStart");

var questionNum = document.getElementById("questionNumber");

var questionCont = document.getElementById("question");

var timerInterval



function startTimer() {
    timerNum.textContent = 75;
    timerInterval = setInterval(function() {
            console.log("and again")
            timerNum.textContent = (timerNum.textContent - 1);
        }
    , 1000)
}

function changeScreen() {
event.preventDefault();
startScreen.classList.add("hide");
quizBox.classList.remove("hide");
timer.classList.remove("hide");
nextQuestion()
startTimer()
}

function nextQuestion() {
    questionNum.textContent++;

}

btnStart.addEventListener("click", changeScreen)