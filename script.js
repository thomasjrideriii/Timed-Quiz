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

var checker = document.getElementById("checker");

var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");

var question1 = {
    "question text": "What is Han's record for the Kessel run in the 'Millenium Falcon'?",
    "answer1": "8 Parsecs",
    "answer2": "12 Parsecs",
    "answer3": "15 Parsecs",
    "answer4": "20 Parsecs",
    "correct answer": 2
}

var question2 = {
    "question text": "Before Count Dooku, how many other Jedi Mastersleft the order?",
    "answer1": "12",
    "answer2": "13",
    "answer3": "19",
    "answer4": "25",
    "correct answer": 3
}

var question3 = {
    "question text": "What is the designation of the army of clones lead by General Kenobi and General Skywalker?",
    "answer1": "The 201st",
    "answer2": "The 501st",
    "answer3": "The 701st",
    "answer4": "The 1001st",
    "correct answer": 2
}

var question4 = {
    "question text": "What is the name of Darth Vader's flagship Star Dreadnought?",
    "answer1": "Executor",
    "answer2": "Adjudicator",
    "answer3": "Inexorable",
    "answer4": "Aggresive Negotiations",
    "correct answer": 1
}

var question5 = {
    "question text": "What was the race won by Anakin Skywalker to win his freedom?",
    "answer1": "The Tatooine Cup",
    "answer2": "The Mos Eisly 100",
    "answer3": "The Hutt Grand Prix",
    "answer4": "The Bantha Classic",
    "correct answer": 4
}

var timerInterval

var questionArray = [
    question1, question2, question3, question4, question5
]

var questionCurrent = -1;

var highscores = []

function startTimer() {
    timerNum.textContent = parseInt(questionArray.length * 15);
    timerInterval = setInterval(function() {

        if (parseInt(timerNum.textContent) <= 0) {
            clearInterval(timerInterval);
            gameOver()
            return
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
    questionCurrent++;
    if (questionCurrent === questionArray.length) {
        clearInterval(timerInterval);
        win();
        return
    }
    
    questionNum.textContent = questionCurrent + 1;
    questionCont.textContent = questionArray[questionCurrent]["question text"];
    answer1.textContent = questionArray[questionCurrent]["answer1"];
    answer2.textContent = questionArray[questionCurrent]["answer2"];
    answer3.textContent = questionArray[questionCurrent]["answer3"];
    answer4.textContent = questionArray[questionCurrent]["answer4"];
    
}

function selectAnswer() {
    event.preventDefault;
    
    var element = event.target

    var selectedAnswer = parseInt(element.getAttribute("data-num"))
    var correctAnswer = questionArray[questionCurrent]["correct answer"]

    console.log(selectedAnswer)
    console.log(correctAnswer)

    if (selectedAnswer === correctAnswer) {
        // alert("Correct!");
        correct();
        nextQuestion();
    } else if (selectedAnswer |= null) {
        incorrect();
        // alert("Incorrect!");
        timerNum.textContent = (timerNum.textContent - 10)
        nextQuestion();
    }
}

function gameOver() {
    var tryagain = confirm("Game Over!\n\Would you like to try again?");

    if (tryagain) {
        location.reload();
    } else {
        location.reload();
    }
}

function win() {
    var initials = prompt("You Win!\n\Your score is " + timerNum.textContent + "\n\Please Enter your initals to be added to the scoreboard!")

    var storedHighScores = localStorage.getItem("highscores")
    var score = timerNum.textContent
    if (score < 10) {
        score = "0" + score
    }
    if (score < 100) {
        score = "0" + score
    }

    
    highscores = JSON.parse(storedHighScores)
    if (highscores === null) {
        highscores = []
    }

    highscores.push(timerNum.textContent + " - " + initials)

    highscores.sort()
    highscores.reverse()
    console.log(highscores)
    localStorage.setItem("highscores", JSON.stringify(highscores))    

    var again = confirm("Would you like to try again?")

    if (again) {
        questionCurrent = -1;
        location.reload();
    } else {
        location.reload();
    }
}

function correct() {

    checker.textContent = "Correct!";

    checker.setAttribute("style", "color: lime; border-style: solid, border-color: lime");
    setTimeout(function() {
        checker.setAttribute("style", " ");
        checker.textContent = "";
    }, 1000)
}
function incorrect() {

    checker.textContent = "WRONG!";

    checker.setAttribute("style", "color: red; border-style: solid, border-color: red");
    setTimeout(function() {
        checker.setAttribute("style", " ");
        checker.textContent = "";
    }, 1000)
}

btnStart.addEventListener("click", changeScreen)

document.body.addEventListener("click", selectAnswer)