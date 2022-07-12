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

for(var i = 0; i < questions.length; i++) {
  let response = prompt(questions[i].prompt);
  if (response == questions[i].answer) {
    score++;
    alert("correct")
  } else {
    alert("Nope")
  }
}

alert("you got " + score + "/" + questions.length)