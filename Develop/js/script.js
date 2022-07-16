// let score = 0;
// let wins = 0; 
// const timerEl = document.getElementById('countdown');
// const questionContainerElement = document.getElementById('question-container');
// const nextButton = document.getElementById("next-btn");
// const startBtn = document.getElementById("start-btn");
// const nextBtn = document.getElementById("next-btn");
// const questionElement = document.getElementById("question");
// const answerButtonsElement = document.getElementById("answer-btns")
// let questions = [
//   {
//     question: "What is an array?",
//     answers: [
//       {text: "An HTML element", correct: false},
//       {text: "A JavaScript function", correct: false},
//       {text: "A variable that can hold more than one value", correct: true},
//       {text: "A parameter within a function", correct: false}
//     ]
//   },
//   {
//     question: "What number does an array start?",
//     answers: [
//       {text: "1", correct: false},
//       {text: "0", correct: true},
//       {text: "2", correct: false},
//       {text: "-1", correct: false}
//     ]
//   },
//   {
//     question: "Is Java and JavaScript the same?",
//     answers: [
//       {text: "yes", correct: false},
//       {text: "no", correct: true}
//     ]
//   },
//   {
//     question: "What does var stand for?",
//     answers: [
//       {text: "Another Name for the DOM", correct: false},
//       {text: "Variable", correct: true},
//       {text: "Version", correct: false},
//       {text: "eventListener", correct: false}
//     ]
//   }
// ]
// let shuffledQuestions, currentQuestionIndex;

// startBtn.addEventListener("click", startGame);

// function startGame() {
//   startBtn.classList.add('hide');
//   shuffledQuestions = questions.sort(() => Math.random() - .5)
//   currentQuestionIndex = 0;
//   questionContainerElement.classList.remove('hide');
//   countdown();
//   // setNextQuestion()
// }
// // Timer that counts down from 5
// function countdown() {
//   var timeLeft = 5;

//   // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//   var timeInterval = setInterval(function () {
//     // As long as the `timeLeft` is greater than 1
//     if (timeLeft > 1) {
//       // Set the `textContent` of `timerEl` to show the remaining seconds
//       timerEl.textContent = 'You have ' + timeLeft + ' seconds remaining';
//       // Decrement `timeLeft` by 1
//       timeLeft--;
//     } else if (timeLeft === 0) {
//       // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
//       timerEl.textContent = 'You have' + timeLeft + ' second remaining';
//       timeLeft--;
//     } else {
//       // Once `timeLeft` gets to 0, set `timerEl` to an empty string
//       timerEl.textContent = 'You are out of time!';
//       // Use `clearInterval()` to stop the timer
//       clearInterval(timeInterval);
//     }
//   }, 1000);
// }

// nextButton.addEventListener("click", function () {
//   console.log("next")
// })

// // var questionBox = document.querySelector(".card");
// // console.log
// // for (let i = 0; i < questions.length; i++) {
// //   const question = questions[i];
// //   var questionNode = document.createElement("p");
// //   questionNode.appendChild(questionNode);
// // };

// function setNextQuestion() {
//   showQuestion(shuffledQuestions[currentQuestionIndex])
// }

// function showQuestion (question) {
//   questionElement.innerText = question.question
//   question.answers.forEach(function answer() {
//     const button = document.createElement('button')
//     button.innerText = answer.text
//     button.classList.add("btn")
//     if (answer.correct) {
//       button.dataset.correct = answer.correct
//     }
//     button.addEventListener("click", selectAnswer)
//     answerButtonsElement.appendChild(button)
//   });
// }

// function selectAnswer(e) {
//   const selectedButton = e.target
//   const correct = selectedButton.dataset.correct
//   setStatusClass(document.body, correct)
//   Array.from(answerButtonsElement.children).forEach(button => {
//     setStatusClass(button, button.dataset.correct)
//   })
//   nextButton.classList.remove('hide')
// }

// function setStatusClass(element, correct) {
//   clearStatusClass(element)
//   if (correct) {
//     element.classList.add('correct')
//   } else {
//     element.classList.add('wrong')
//   }
// }

// function clearStatusClass(element) {
//   element.classList.remove('correct')
//   element.classList.remove('wrong')
// }

// // function winGame() {
// //   wins++
// // }

// // for(var i = 0; i < questions.length; i++) {
// //   let response = console.log(questions[i]);
// //   if (response == questions[i].answer) {
// //     wins++;
// //   }
// // }

//Questions, options and answers are stored in an array
var questions = [
  {
    questionText: "Inside which HTML element do we put the javascript?",
    options: [
      "1. <h1>",
      "2. <js>",
      "3. <script>",
      "4. <head>"],
    answer: "3. <script>",
  },
  {
    questionText: "What defines the logical structure of documents and the way a document is accessed and manipulated?",
    options: [
      "1. do overnight modules",
      "2. document object model",
      "3. department of modeling",
      "4. do over methods"],
    answer: "2. document object model",
  },
  {
    questionText: "String values must be enclosed within _____ when being assigned to variables.",
    options: [
      "1. commas",
      "2. curly brackets",
      "3. quotes",
      "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText: "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",],
    answer: "4. console.log",
  },
  {
    questionText: "Arrays in Javascript can be used to store __________.",
    options: ["1. numbers", "2. booleans", "3. strings", "4. all of the above"],
    answer: "4. all of the above",
  },
];

//Select each card div by id and assign to variables
var startCard = document.querySelector("#start-card");
var questionCard = document.querySelector("#question-card");
var scoreCard = document.querySelector("#score-card");
var leaderboardCard = document.querySelector("#leaderboard-card");

//Hide cards
function hideCards() {
  startCard.setAttribute("hidden", true);
  questionCard.setAttribute("hidden", true);
  scoreCard.setAttribute("hidden", true);
  leaderboardCard.setAttribute("hidden", true);
}

var resultDiv = document.querySelector("#result-div");
var resultText = document.querySelector("#result-text");

//Hide result div
function hideResultText() {
  resultDiv.style.display = "none";
}

//Set variables
var intervalID;
var time;
var currentQuestion;

document.querySelector("#start-button").addEventListener("click", startQuiz);

function startQuiz() {
  //Hide visible cards, show the question card
  hideCards();
  questionCard.removeAttribute("hidden");

  //Assign 0 to currentQuestion when start button is clicked, then display the current question on the page
  currentQuestion = 0;
  displayQuestion();

  //Set total time depending on number of questions
  time = questions.length * 5;

  //Executes function "countdown" every 1000ms to update time and display on page
  intervalID = setInterval(countdown, 1000);

  //Invoke displayTime here to ensure time appears on the page as soon as the start button is clicked, not after 1 second
  displayTime();
}

//Reduce time by 1 and display new value, if time runs out then end quiz
function countdown() {
  time--;
  displayTime();
  if (time < 1) {
    endQuiz();
  }
}

//Display time on page
var timeDisplay = document.querySelector("#time");
function displayTime() {
  timeDisplay.textContent = time;
}

//Display the question and answer options for the current question
function displayQuestion() {
  var question = questions[currentQuestion];
  var options = question.options;

  var h2QuestionElement = document.querySelector("#question-text");
  h2QuestionElement.textContent = question.questionText;

  for (var i = 0; i < options.length; i++) {
    var option = options[i];
    var optionButton = document.querySelector("#option" + i);
    optionButton.textContent = option;
  }
}

//Behavior when an answer button is clicked: click event bubbles up to div with id "quiz-options"
//EventObject.target identifies the specific button element that was clicked on
document.querySelector("#quiz-options").addEventListener("click", checkAnswer);

//Compare the text content of the option button with the answer to the current question
function optionIsCorrect(optionButton) {
  return optionButton.textContent === questions[currentQuestion].answer;
}

//If answer is incorrect, deduct time
function checkAnswer(eventObject) {
  var optionButton = eventObject.target;
  resultDiv.style.display = "block";
  if (optionIsCorrect(optionButton)) {
    resultText.textContent = "Correct!";
    setTimeout(hideResultText, 1000);
  } else {
    resultText.textContent = "Incorrect!";
    setTimeout(hideResultText, 1000);
    if (time >= 10) {
      time = time - 5;
      displayTime();
    } else {
      //If time is less than 10, display time as 0 and end quiz
      //Time is set to zero in this case to avoid displaying a negative number in cases where a wrong answer is submitted with < 10 seconds left on the timer
      time = 0;
      displayTime();
      endQuiz();
    }
  }

  //Increment current question by 1
  currentQuestion++;
  //If we have not run out of questions then display next question, else end quiz
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

//Display scorecard and hide other divs
var score = document.querySelector("#score");

//At end of quiz, clear the timer, hide any visible cards and display the scorecard and display the score as the remaining time
function endQuiz() {
  clearInterval(intervalID);
  hideCards();
  scoreCard.removeAttribute("hidden");
  score.textContent = time;
}

var submitButton = document.querySelector("#submit-button");
var inputElement = document.querySelector("#initials");

//Store user initials and score when submit button is clicked
submitButton.addEventListener("click", storeScore);

function storeScore(event) {
  //prevent default behaviour of form submission
  event.preventDefault();

  //Check for input
  if (!inputElement.value) {
    alert("Please enter your initials before pressing submit!");
    return;
  }

  //Store score and initials in an object
  var leaderboardItem = {
    initials: inputElement.value,
    score: time,
  };

  updateStoredLeaderboard(leaderboardItem);

  //Hide the question card, display the leaderboardcard
  hideCards();
  leaderboardCard.removeAttribute("hidden");

  renderLeaderboard();
}

//Updates the leaderboard stored in local storage
function updateStoredLeaderboard(leaderboardItem) {
  var leaderboardArray = getLeaderboard();
  //append new leaderboard item to leaderboard array
  leaderboardArray.push(leaderboardItem);
  localStorage.setItem("leaderboardArray", JSON.stringify(leaderboardArray));
}

//Get "leaderboardArray" from local storage (if it exists) and parse it into a javascript object using JSON.parse
function getLeaderboard() {
  var storedLeaderboard = localStorage.getItem("leaderboardArray");
  if (storedLeaderboard !== null) {
    var leaderboardArray = JSON.parse(storedLeaderboard);
    return leaderboardArray;
  } else {
    leaderboardArray = [];
  }
  return leaderboardArray;
}

//Display leaderboard on leaderboard card
function renderLeaderboard() {
  var sortedLeaderboardArray = sortLeaderboard();
  var highscoreList = document.querySelector("#highscore-list");
  highscoreList.innerHTML = "";
  for (var i = 0; i < sortedLeaderboardArray.length; i++) {
    var leaderboardEntry = sortedLeaderboardArray[i];
    var newListItem = document.createElement("li");
    newListItem.textContent =
      leaderboardEntry.initials + " - " + leaderboardEntry.score;
    highscoreList.append(newListItem);
  }
}

//Sort leaderboard array from highest to lowest
function sortLeaderboard() {
  var leaderboardArray = getLeaderboard();
  if (!leaderboardArray) {
    return;
  }

  leaderboardArray.sort(function (a, b) {
    return b.score - a.score;
  });
  return leaderboardArray;
}

var clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", clearHighscores);

//Clear local storage and display empty leaderboard
function clearHighscores() {
  localStorage.clear();
  renderLeaderboard();
}

var backButton = document.querySelector("#back-button");
backButton.addEventListener("click", returnToStart);

//Hide leaderboard card show start card
function returnToStart() {
  hideCards();
  startCard.removeAttribute("hidden");
}

//Use link to view highscores from any point on the page
var leaderboardLink = document.querySelector("#leaderboard-link");
leaderboardLink.addEventListener("click", showLeaderboard);

function showLeaderboard() {
  hideCards();
  leaderboardCard.removeAttribute("hidden");

  //Stop countdown
  clearInterval(intervalID);

  //Assign undefined to time and display that, so that time does not appear on page
  time = undefined;
  displayTime();

  //Display leaderboard on leaderboard card
  renderLeaderboard();
}