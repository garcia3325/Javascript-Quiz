const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choiceText"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
const timerEl = document.getElementById("timer");
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
    const feedback = document.getElementById("feedback");
    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    console.log(classToApply + "here");
    if (classToApply == "correct") {
      let div = document.createElement("div");
      let p = document.createElement("h2");
      div.append("Correct!", p);
      feedback.append(div);
      console.log("correct answer");
    } else {
      time = time - 15;
      let div = document.createElement("div");
      let p = document.createElement("p");
      div.append("Wrong!", p);
      feedback.append(div);

      console.log(div.childNodes); // NodeList [ #text "Some text", <p> ]
    }

    setTimeout(() => {
      getNewQuestions();
    }, 1000);
  });
});

let time = 75;
function updateTimer() {
  timerEl.innerHTML = time;
  time--;
  if (time < 0) clearInterval(updateTimer);
}

setInterval(updateTimer, 1000);

startQuiz();
