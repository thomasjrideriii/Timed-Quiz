var list = document.getElementById("highscoreList");
var highscores = []

function init() {
    list.innerHTML = "";

    var storedHighScores = localStorage.getItem("highscores")
    highscores = JSON.parse(storedHighScores)

    for (var i = 0; i < highscores.length; i++) {
        var score = highscores[i];

        var li = document.createElement("section");
        li.textContent = score;
        list.appendChild(li)
        li.classList.add(".score")
        li.setAttribute("style", "padding: 8px; font-size: 24px; border-radius: 16px; width: 50%; margin: 10px auto; background-color: #666;")
    }
}

init()