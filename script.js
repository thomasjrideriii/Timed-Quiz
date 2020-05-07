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

var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");

var question1 = {
    "question text": "What is Han's record for the Kessel run in the 'Millenium Falcon'?",
    "answer1": "12 Parsecs",
    "answer2": "15 Parsecs",
    "answer3": "8 Parsecs",
    "answer4": "20 Parsecs",
    "correct answer": 1
}

var question2 = {
    "question text": " ",
    "answer1": "",
    "answer2": "",
    "answer3": "",
    "answer4": "",
    "correct answer": 1
}

var question3 = {
    "question text": " ",
    "answer1": "",
    "answer2": "",
    "answer3": "",
    "answer4": "",
    "correct answer": 1
}

var question4 = {
    "question text": " ",
    "answer1": "",
    "answer2": "",
    "answer3": "",
    "answer4": "",
    "correct answer": 1
}

var question5 = {
    "question text": " ",
    "answer1": "",
    "answer2": "",
    "answer3": "",
    "answer4": "",
    "correct answer": 1
}

var timerInterval

var questionArray = [
    question1, question2, question3, question4, question5
]

var questionCurrent = 0;

function startTimer() {
    timerNum.textContent = parseInt(questionArray.length * 15);
    timerInterval = setInterval(function() {

        if (parseInt(timerNum.textContent) <= 0) {
            clearInterval(timerInterval);
            alert("Game Over!")
        }
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
    if (questionCurrent === questionArray.length) {
        clearInterval(timerInterval);
        alert("You Win!\n\You're score is " + timerNum.textContent);

    }
    
    questionNum.textContent = questionCurrent + 1;
    questionCont.textContent = questionArray[questionCurrent]["question text"];
    answer1.textContent = questionArray[questionCurrent]["answer1"];
    answer2.textContent = questionArray[questionCurrent]["answer2"];
    answer3.textContent = questionArray[questionCurrent]["answer3"];
    answer4.textContent = questionArray[questionCurrent]["answer4"];
    questionCurrent++;
}

function selectAnswer() {
    event.preventDefault;
    
    var element = event.target

    var selectedAnswer = parseInt(element.getAttribute("data-num"))
    var correctAnswer = questionArray[questionCurrent]["correct answer"]

    console.log(selectedAnswer)
    console.log(correctAnswer)

    if (selectedAnswer === correctAnswer) {
        alert("Correct!");
        nextQuestion();
    } else if (selectedAnswer |= null) {
        alert("Incorrect!");
        timerNum.textContent = (timerNum.textContent - 10)
        nextQuestion();
    }
}

btnStart.addEventListener("click", changeScreen)

document.body.addEventListener("click", selectAnswer)