const quizContent = [
    {
        question: "Which way is east?",
        answers: ["North", "East", "South", "West"],
        correct: "East"
    },
    {
        question: "What is 2+2?",
        answers: ["0", "2", "4", "22"],
        correct: "4"
    },
    {
        question: "Which way is south?",
        answers: ["North", "East", "South", "West"],
        correct: "South"
    }
];
const corrections = [ {

    }
];
//Links all constants to their Id
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const endElement = document.getElementById("end");
const alarmPage = document.getElementById("alarmPage");
const settingsPage = document.getElementById("settingsPage");
const home = document.getElementById("home");
const quiz = document.getElementById("quiz");
const alarmButton = document.getElementsByClassName("standardAlarmButton");
const alarm1 =  document.getElementById("alarm1");
const alarm2 =  document.getElementById("alarm2");
const alarm3 =  document.getElementById("alarm3");
const alarm4 =  document.getElementById("alarm4");
const alarm5 =  document.getElementById("alarm5");

const backElement = document.createElement("button");

let currentQuestion = 0;
let score = 0;

backElement.innerText = "Go Back";
backElement.style.display = "none";
document.body.appendChild(backElement);
backElement.onclick = goHome;

//Opens the settings menu on click
document.getElementById("settingsButton").onclick = function openSettingsPage() {
    home.style.display = "none";
    settingsPage.style.display = "block";
    backElement.style.display = "block";
};
//Opens the alarm menu on click
document.getElementById("alarmButton").onclick = function openAlarmPage() {
    home.style.display = "none";
    alarmPage.style.display = "block";
    backElement.style.display = "block";
};
//Hides the home page and displays the quiz page
document.getElementById("quizzes").onclick = function openQuizPage() {
    home.style.display = "none";
    quiz.style.display = "block";
    backElement.style.display = "block";
    quizSystem();
};

//Displays the home page and hides the quiz page
function goHome() {
    home.style.display = "block";
    quiz.style.display = "none";
    endElement.style.display = "none";
    backElement.style.display = "none";
    settingsPage.style.display = "none";
    alarmPage.style.display = "none";
    resetQuiz();
};

//Resets quiz so it can be re-entered later
function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    questionElement.innerHTML = "";
    answersElement.innerText = "";
};
//Creates quiz system
function quizSystem() {
    const question = quizContent[currentQuestion];
    questionElement.innerText = question.question;

    answersElement.innerHTML = "";
    question.answers.forEach(answers => {
        const answerButtons = document.createElement("button");
        answerButtons.innerText = answers;
        answersElement.appendChild(answerButtons);
        answerButtons.addEventListener("click", pickAnswer);4
    });
    backElement.style.display = "block";
};

//Detects which button is pressed and compares it to the correct answer
function pickAnswer (any) {
    const selectedButton = any.target;
    const correct = quizContent[currentQuestion].correct;

    if (selectedButton.innerText == correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizContent.length) {
        quizSystem();
    } else {
        finish();
    }
};

function finish() {
    endElement.innerHTML = `
        <h1> End </h1>
        <p>score: ${score}/${quizContent.length}</p>
    `;
    endElement.style.display = "block";
    backElement.style.display = "block";
    quiz.style.display = "none";
};
function alarmAlert1() {
    var txt;
    if (confirm("Set this as alarm?")) {
        alarmTime1 = setTimeout(playAlarm,3600);
        playAlarm1 = true
    } else {

    };
};
function playAlarm() {
    alarmOn = true;
    while (alarmOn = true, playAlarm1 = true) {
        play(alarm1);
    };
    while (alarmOn = true, playAlarm2 = true) {
        play(alarm2);
    };
    while (alarmOn = true, playAlarm3 = true) {
        play(alarm3);
    };
    while (alarmOn = true, playAlarm4 = true) {
        play(alarm4);
    };
    while (alarmOn = true, playAlarm5 = true) {
        play(alarm5);
    };
};
function endAlarm() {
    clearTimeout(alarmTime1,alarmTime2,alarmTime3,alarmTime4,alarmTime5);
    alarmOn = False;
    playAlarm1, playAlarm2, playAlarm3, playAlarm4, playAlarm5 = false
}