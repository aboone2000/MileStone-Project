const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
   setNextQuestion() 
})
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions,currentQuestionIndex


function startGame(){
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question){
questionElement.innerText = question.question
question.answers.array.forEach(element => {
 const button = document.createElement('button')
 button.innerText = answer.Text
 button.classList.add('btn')
 if(answer.correct){
     button.dataset.correct = answer.correct
 }
 button.addEventListener('click', selectAnswer)
 answerButtonsElement.appendChild(button)
});
}

function resetState(){
    clearStatutClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild
      (answerButtonsElement.firstChild)  
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
if (shuffledQuestions.length > currentQuestionIndex + 1){

nextButton.classList.remove('hide')
} else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
}
}
function setStatusClass(element, correct){
clearStatutClass(element)
if(correct) {
    element.classList.add('correct')
} else {
    element.classList.add('wrong')
    }
}


const questions = [
    {
        question: 'Who won MVP (Most Valuable Player)in the 2020 NBA Finals?',
        answers : [
            {Text : 'Lebron James', correct:true},
            {Text : 'Anthony Davis',correct:false},
            {Text: 'Jimmy Butler', correct: false},
            {Text: 'Jayson Tatum', correct:false}

        ]
    },
    {
        question:'What two teams faced off in the NBA Finals in 2016?',
        answers : [
            {Text : 'OKC Thunder Vs Toronto Raptors'},
            {Text : 'San Antonio Spurs Vs Miami Heat'},
            {Text : 'Golden State Warriors Vs Cleveland Cavilers'},
            {Text : 'LA Lakers Vs Boston Celtics'},
        ]
    },
    {
        question:'Who won MVP in the 2016/2017 regular season?',
        answers:[
            {Text: 'Kevin Durant'},
            {Text: 'Stephen Curry'},
            {Text: 'Russell Westbrook'},
            {Text: 'Tim Duncan'},
        ]
    },
    {
        question: 'Why was the NBA Season Supended in 2020?',
        answers:[
            {Text:'Summer break'},
            {Text:'Tornado'},
            {Text:'Global Pandemic'},
            {Text:'Too Many Injuries'},
        ]
    },
    {
        question: 'What NBA player in history has 0 loses in the Finals?',
        answers:[
            {Text:'Lebron James'},
            {Text:'Kobe Bryant'},
            {Text:'Bill Russell'},
            {Text:'Michael Jordan'},
        ]
    },
]
