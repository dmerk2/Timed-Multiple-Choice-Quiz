let score = 0;
let questions = [
  {
    prompt: "What is an array?\n(a) An HTML element\n(b) A JavaScript function\n(c) A variable that can hold more than one value \n(d) A parameter of a function",
    answer: "c"
  },
  {
    prompt: "What number does an array start?\n(a) 1\n(b) 2\n(c) 0\n(d) -1",
    answer: "c"
  },
  {
    prompt: "Is Java and JavaScript the same?\n(a) yes\n(b) no",
    answer: "a"
  },
  {
    prompt: "What does var stand for?\n(a) Another name for the DOM\n(b) Variable\n(c) Version\n(d) eventListener",
    answer: "b"
  }
]
let timer = 15;
let wins = 0;
let losses = 0;
const timerEl = document.getElementById('countdown');
const questionElContainer = document.getElementById('question-container')
const startButton = document.querySelector("#start-btn");
 

// for(var i = 0; i < questions.length; i++) {
//   let response = prompt(questions[i].prompt);
//   if (response == questions[i].answer) {
//     score++;
//   }
// }

// alert("you got " + score + "/" + questions.length)

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", startGame);

function startGame() {
  console.log("Started");
  startBtn.classList.add('hide');
  questionElContainer.classList.remove('hide');
  timeLeft = 5;
  countdown();
  if (timeLeft === 0) {
    clearInterval(timeInterval);
  }
  // setNextQuestion();
}
// Timer that counts down from 5
function countdown() {
  var timeLeft = 15;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 0) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      // timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}

const nextBtn = document.getElementById("next-btn")
nextBtn.addEventListener("click", nextBtn)

function nextQuestion () {
  console.log("Next")
}

function selectAnswer() {

}