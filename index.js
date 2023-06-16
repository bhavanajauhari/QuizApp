var main = 0,
  quiz,
  quizstatus,
  question,
  selectedans,
  options,
  optionA,
  optionB,
  optionC,
  optionD,
  correct = 0,
  sec;

var questions = [
  {
    ques: "Which of the following keywords is used to define a variable in Javascript?",
    optA: "var",
    optB: "let",
    optC: "Both A and B",
    optD: "None of these",
    ans: "C",
  },
  {
    ques: "Arrays in JavaScript are defined by which of the following statements?",
    optA: "It is an ordered list of values",
    optB: "It is an ordered list of objects",
    optC: "It is an ordered list of string",
    optD: "It is an ordered list of functions",
    ans: "A",
  },
  {
    ques: "Which of the following is not javascript data types?",
    optA: "Null type",
    optB: "Undefined type",
    optC: "Number type",
    optD: "All of the mentioned",
    ans: "D",
  },
  {
    ques: "Which of the following can be used to call a JavaScript Code Snippet?",
    optA: "Function/Method",
    optB: "Preprocessor",
    optC: "Triggering Event",
    optD: "RMI",
    ans: "A",
  },
  {
    ques: "Which of the following scoping type does JavaScript use?",
    optA: "Sequential",
    optB: "Segmental",
    optC: "Lexical",
    optD: "Literal",
    ans: "C",
  },
];
let x = 10;
var tis;
let InterStar = () => {
  return setInterval(() => {
    console.log(x, "current");
    x--;
    document.getElementById("timer").innerText = x;
  }, 1000);
};
let timer = setInterval(() => {
  checkAnswer();
}, 10000);
function renderQues() {
  quiz = document.getElementById("quiz");

  if (main >= questions.length) {
    quiz.innerHTML =
      "<h2>You answered " +
      correct +
      " of " +
      questions.length +
      " questions correctly.</h2><br><button onclick='renderQues()'>Play Again</button>";
    document.getElementById("quizstatus").innerHTML = "Quiz Completed";

    main = 0;
    correct = 0;
    let r = document.getElementById("timer");
    r.remove();
    clearInterval(timer);
    clearTimeout(tis);
    return false;
  }
  tis = InterStar();
  document.getElementById("quizstatus").innerHTML =
    "Question " + (main + 1) + " of " + questions.length;

  question = questions[main].ques;
  optionA = questions[main].optA;
  optionB = questions[main].optB;
  optionC = questions[main].optC;
  optionD = questions[main].optD;

  quiz.innerHTML = "<h3>" + question + "<h3>";

  quiz.innerHTML +=
    "<label> <input type='radio' name='options' value='A'>" +
    optionA +
    "</lable><br>";
  quiz.innerHTML +=
    "<label> <input type='radio' name='options' value='B'>" +
    optionB +
    "</lable><br>";
  quiz.innerHTML +=
    "<label> <input type='radio' name='options' value='C'>" +
    optionC +
    "</lable><br>";
  quiz.innerHTML +=
    "<label> <input type='radio' name='options' value='D'>" +
    optionD +
    "</lable><br><br>";
  quiz.innerHTML += "<button onclick='checkAnswer()'>Check</button>";
}
console.log(main);
function checkAnswer() {
  options = document.getElementsByName("options");
  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      selectedans = options[i].value;
    }
  }
  if (selectedans == questions[main].ans) {
    correct++;
  }

  main++;
  renderQues();
  clearTimeout(tis);
  x = 10;
}

window.addEventListener("load", renderQues);

