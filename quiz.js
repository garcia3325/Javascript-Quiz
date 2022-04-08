const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choiceText"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "JavaScript is a ___ side programming language?",
    choices1: "client only",
    choices2: "server only",
    choices3: "both",
    choices4: "none",
    answer: 3,
  },
  {
    question:
      "Which of the following will write the message “Hello DataFlair!” in an alert box?",

    choices1: "alertBox(“Hello DataFlair!”);",
    choices2: "alert(Hello DataFlair!);",
    choices3: "cmsgAlert(“Hello DataFlair!”);",
    choices4: "alert(“Hello DataFlair!”);",
    answer: 3,
  },
  {
    question: "How do you find the minimum of x and y using JavaScript?",
    choices1: "min(x,y);",
    choices2: "Math.min(x,y)",
    choices3: "Math.min(xy);",
    choices4: "min(xy)",
    answer: 1,
  },
  {
    question: "A Function Associated With An object is Called:",
    choices1: "Method",
    choices2: "Link",
    choices3: "Variable",
    choices4: "None",
    answer: 1,
  },
  {
    question:
      "Which JavaScript label catches all the values, except for the ones specified?",
    choices1: "catch",
    choices2: "label",
    choices3: "try",
    choices4: "Default",
    answer: 3,
  },
  {
    question:
      "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
    choices1: "if(x 2)",
    choices2: "if(x = 2)",
    choices3: "if(x == 2)",
    choices4: "if(x != 2 )",
    answer: 3,
  },
];

const CorrectScore = 10;
const MaxQuestions = 5;

startQuiz = () => {
  questionCounter = 0;
  availableQuestions = [...questions];
  getNewQuestions();
};

getNewQuestions = () => {
  if (availableQuestions.length === 0 || questionCounter >= MaxQuestions) {
    return window.location.assign("end.html");
  }

  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choices) => {
    const number = choices.dataset["number"];
    choices.innerText = currentQuestion["choices" + number];
  });

  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
};

choices.forEach((choices) => {
  choices.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    
    const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    console.log (classToApply);
    /*add incorrect or correct feedback*/
    
     setTimeout (() =>{
       getNewQuestions();
    }, 1000);
  });
});

const startingMinutes = 75;
let time = startingMinutes*60;

const timerEl = document.getElementById('timer');

setInterval (updateTimer, 1000);
  
function updateTimer () {
  const minutes = Math.floor(time/60);
  let seconds = time % 60;

  timerEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
}
startQuiz();
