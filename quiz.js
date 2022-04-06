const question =  document.getElementById ("question");
const choices = Array.from(document.getElementsByClassName ("choiceText"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "JavaScript is a ___ side programming language?",
    choices: ["client only", "server", "client and server", "none"],
    answer: 2,
  },
  {
    question:
      "Which of the following will write the message “Hello DataFlair!” in an alert box?",
    choices: [
      "alertBox(“Hello DataFlair!”);",
      "alert(Hello DataFlair!);",
      "cmsgAlert(“Hello DataFlair!”);",
      "alert(“Hello DataFlair!”);",
    ],
    answer: 3,
  },
  {
    question: "How do you find the minimum of x and y using JavaScript?",
    choices: ["min(x,y);", "Math.min(x,y)", "Math.min(xy);", "min(xy)"],
    answer: 1,
  },
  {
    question:
      "Which of the following statements will throw an error? Please select 2 correct answers",
    choices: [
      "var fun = function bar( ){ }",
      "Math.min(x,y)",
      "function fun( ){ }",
      "function( ){ }",
    ],
    answers: 1, //option 3 is wrong look up multiple select
  },
  {
    question:
      "If you type the following code in the console window, what result will you get? 3 > 2 > 1 === false;",
    choices: ["True", "False"],
    answer: 1,
  },
  {
    question:
      "Which JavaScript label catches all the values, except for the ones specified?",
    choices: ["catch", "label", "try", "Default"],
    answer: 3,
  },
  {
    question:
      "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
    choices: ["if(x 2)", "if(x = 2)", "if(x == 2)", "if(x != 2 )"],
    answer: 2,
  },
]; 

const CorrectScore = 10;
const MaxQuestions = 5;

startQuiz = () => {
  questionCounter = 0;
  availableQuestions = [ ... questions];
  console.log(availableQuestions);
  getNewQuestions ();
};

getNewQuestions = () => {
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
};

startQuiz();
