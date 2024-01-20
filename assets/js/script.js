var introEl= document.getElementById("intro")
var questionSectionEl= document.getElementById("question-section")
var initialInputEl= document.getElementById("initial-input")
var highscoreEl= document.getElementById("highscore")
var startQuizEL= document.getElementById("start-quiz")
var questionTitleEl= document.getElementById("question-title")
var choiceListEl= document.getElementById("choice-list")
var timerEl= document.getElementById("")
var setIntervalId
var timeRemaining=questionData.length * 15

function startQuiz(){
    

    introEl.classList.add("hide")


    questionSectionEl.classList.remove("hide")

    setIntervalId=setInterval(startTimer , 1000 )
}

function startTimer(){
    timerEl.textContent=timeRemaining--
}

 startQuizEL.addEventListener("click",startQuiz)
