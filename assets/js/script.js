var introEl= document.getElementById("intro")
var questionSectionEl= document.getElementById("question-section")
var initialInputEl= document.getElementById("initial-input")
var highscoreEl= document.getElementById("highscore")
var startQuizEL= document.getElementById("start-quiz")
var questionTitleEl= document.getElementById("question-title")
var choiceListEl= document.getElementById("choice-list")
var timerEl= document.getElementById("timer")
var messageEl=document.getElementById("message")
var scoreEl=document.getElementById("score")
var setIntervalId
var timeRemaining=questionData.length * 15
var index=0
var submitButton= document.querySelector("#submit")

// funtion to start quiz when user clicks 'start quiz' button


function startQuiz(){
    
// this is to hide the intro and reveal the quiz questions
    introEl.classList.add("hide")


    questionSectionEl.classList.remove("hide")
    renderQuestion()

    setIntervalId=setInterval(startTimer , 1000 )
}
// renderQuestion function to create the html and content for the quiz questions 
function renderQuestion(){
    messageEl.innerHTML=""
    questionTitleEl.textContent=questionData[index].title
    choiceListEl.textContent=""
    // <li> <button>choice1</button>  </li>
    for(var i=0; i<questionData[index].choices.length; i++ ){
                // <li>  </li>
        var li=document.createElement("li")
        // <button>  </button>
        var button=document.createElement("button")
        
        // <buton> C1  </button> 
        button.textContent=questionData[index].choices[i]
        li.appendChild(button)
        choiceListEl.appendChild(li)
    }
}
// allows the quiz timer to countdown
function startTimer(){
    timerEl.textContent=timeRemaining--
}

function nextQuestion(event){
    var currentChoiceBtn= event.target
    var solution=questionData[index].solution
    index++
    // only display all questions inside the array
    if(index < questionData.length){

        if(currentChoiceBtn.textContent === solution){
            messageEl.innerHTML="<h4>Correct!</h4>"
        }else{
            messageEl.innerHTML="<h4>Wrong!</h4>"
            timeRemaining=timeRemaining-10
        }
        //set a half second delay before rendering next question
        setTimeout( renderQuestion, 500)
        
    }else{
        //you go beyond the 5 questions you end the quiz
        endQuiz()
    }
}

function endQuiz(){
    clearInterval(setIntervalId)
    questionSectionEl.classList.add("hide")
    initialInputEl.classList.remove("hide")
    scoreEl.textContent=timerEl.textContent
    highscoreEl.classList.remove("hide")
    highscore=highscoreEl.textContent
}
 startQuizEL.addEventListener("click",startQuiz)
 choiceListEl.addEventListener("click", nextQuestion)

 submitButton.addEventListener("click", function() {

    var user ={
        score: scoreEl.textContent,
    };

    localStorage.setItem("user",JSON.stringify(user));
 });

