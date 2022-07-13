// let score = 0;
// let wins = 0;
const timerEl = document.getElementById('countdown');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");

let questions = [
  {
    question: "What is an array?",
    answers: [
      {text: "An HTML element", correct: false},
      {text: "A JavaScript function", correct: false},
      {text: "A variable that can hold more than one value", correct: true},
      {text: "A parameter within a function", correct: false}
    ]
  },
  {
    question: "What number does an array start?",
    answers: [
      {text: "1", correct: false},
      {text: "0", correct: true},
      {text: "2", correct: false},
      {text: "-1", correct: false}
    ]
  },
  {
    question: "Is Java and JavaScript the same?",
    answers: [
      {text: "yes", correct: false},
      {text: "no", correct: true}
    ]
  },
  {
    question: "What does var stand for?",
    answers: [
      {text: "Another Name for the DOM", correct: false},
      {text: "Variable", correct: true},
      {text: "Version", correct: false},
      {text: "eventListener", correct: false}
    ]
  }
]
let shuffledQuestions, currentQuestionIndex;

startBtn.addEventListener("click", startGame);

function startGame() {
  startBtn.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  countdown();
  setNextQuestion()
}

// Timer that counts down from 5
function countdown() {
  var timeLeft = 5;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = 'You have ' + timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 0) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = 'You have' + timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = 'You are out of time!';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
    }
  }, 1000);
}

nextButton.addEventListener("click", function () {
  console.log("next")
})



function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
  console.log("Next")
}

function resetState() {
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }
}

function showQuestion (question) {
  questionElement.innerText = question.question
  question.answers.forEach(function answer() {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add("btn")
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answerButtonsElement.appendChild(button)
  });
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(function button() {
    setStatusClass(button, button.dataset.correct)
  })
  nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

// function winGame() {
//   wins++
// }

// for(var i = 0; i < questions.length; i++) {
//   let response = console.log(questions[i]);
//   if (response == questions[i].answer) {
//     wins++;
//   }
// }