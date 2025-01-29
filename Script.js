const physicsQuizContent = [
    {
        physicsQuestion: "Which way is east?",
        physicsAnswers: ["North", "East", "South", "West"],
        physicsCorrect: "East"
    },
    {
        physicsQuestion: "Which way is south?",
        physicsAnswers: ["North", "East", "South", "West"],
        physicsCorrect: "South"
    }
];
const mathsQuizContent = [
    {
        mathsQuestion: "What is 7 x 8",
        mathsAnswers: ["0", "78", "56", "West"],
        mathsCorrect: "56"
    },
    {
        mathsQuestion: "What is 2+2?",
        mathsAnswers: ["0", "2", "4", "22"],
        mathsCorrect: "4"
    }
];
const physicsCorrections = [ {

    }
];
const mathsCorrections = [ {

}
];

//defines some variables
let alarmTime1, alarmTime2, alarmTime3, alarmTime4, alarmTime5;
playAlarm1 = false;
playAlarm2 = false;
playAlarm3 = false;
playAlarm4 = false;
playAlarm5 = false;
isFirstClick = true;

//Links all constants to their Id
const physicsQuestionElement = document.getElementById("physicsQuestion");
const physicsAnswersElement = document.getElementById("physicsAnswers");
const physicsQuizPage = document.getElementById("physicsQuizPage");
const mathsQuestionElement = document.getElementById("mathsQuestion");
const mathsAnswersElement = document.getElementById("mathsAnswers");
const mathsQuizPage = document.getElementById("mathsQuizPage");
const endElement = document.getElementById("end");
const alarmPage = document.getElementById("alarmPage");
const settingsPage = document.getElementById("settingsPage");
const quizPage = document.getElementById("quizPage");
const home = document.getElementById("home");
const alarmButton = document.getElementsByClassName("standardAlarmButton");
const alarm1 =  document.getElementById("alarm1");
const alarm2 =  document.getElementById("alarm2");
const alarm3 =  document.getElementById("alarm3");
const alarm4 =  document.getElementById("alarm4");
const alarm5 =  document.getElementById("alarm5");
const backElement = document.getElementById("backButton");
var alarmTime = document.getElementById("alarmTime")
let currentQuestion = 0;
let score = 0;


//Hides the home page and displays the settings page on click
document.getElementById("settingsButton").onclick = function openSettingsPage() {
    home.style.display = "none";
    settingsPage.style.display = "block";
    backElement.style.display = "block";
};
//Hides the home page and displays the alarm page on click
document.getElementById("alarmButton").onclick = function openAlarmPage() {
    home.style.display = "none";
    alarmPage.style.display = "block";
    backElement.style.display = "block";
};
//Hides the home page and displays the main quiz page
document.getElementById("quizzesButton").onclick = function openQuizPage() {
    home.style.display = "none";
    quizPage.style.display = "block";
    backElement.style.display = "block";
};
//Hides the main quiz page and displays the physics quiz page
document.getElementById("physicsButton").onclick = function openPhysicsQuizPage() {    
    physicsQuizPage.style.display = "block";
    quizPage.style.display = "none";
    resetQuiz();
    physicsQuizSystem();
};
//Hides the main quiz page and displays the maths quiz page
document.getElementById("mathsButton").onclick = function openMathsQuizPage() {    
    mathsQuizPage.style.display = "block";
    quizPage.style.display = "none";
    resetQuiz();
    mathsQuizSystem();
};
//Function to create 2 click buttons
document.getElementById("twoClickButton").onclick = function twoClickButton() {
    if (isFirstClick) {
        firstClick = true
        secondClick = false
    } 
    else {
        SecondClick = true
        firstClick = false
    };
    isFirstClick = !isFirstClick
};



//Displays the home page and hides all other pages
function goHome() {
    home.style.display = "block";
    quizPage.style.display = "none";
    endElement.style.display = "none";
    backElement.style.display = "none";
    settingsPage.style.display = "none";
    alarmPage.style.display = "none";
    physicsQuizPage.style.display = "none";
    mathsQuizPage.style.display = "none";
    resetQuiz();
};

//Resets quiz so it can be re-entered later
function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    physicsQuestionElement.innerHTML = "";
    physicsAnswersElement.innerText = "";
    mathsQuestionElement.innerHTML = "";
    mathsAnswersElement.innerText = "";
};

//Creates quiz system
function physicsQuizSystem() {
    const physicsQuestion = physicsQuizContent[currentQuestion];
    physicsQuestionElement.innerText = physicsQuestion.physicsQuestion;

    physicsAnswersElement.innerHTML = "";
    physicsQuestion.physicsAnswers.forEach(physicsAnswers => {
        const answerButtons = document.createElement("button");
        answerButtons.innerText = physicsAnswers;
        physicsAnswersElement.appendChild(answerButtons);
        answerButtons.addEventListener("click", physicsPickAnswer);
        answerButtons.classList.add("button", "answerButtons");
    });
    backElement.style.display = "block";
};

function mathsQuizSystem() {
    const mathsQuestion = mathsQuizContent[currentQuestion];
    mathsQuestionElement.innerText = mathsQuestion.mathsQuestion;

    mathsAnswersElement.innerHTML = "";
    mathsQuestion.mathsAnswers.forEach(mathsAnswers => {
        const answerButtons = document.createElement("button");
        answerButtons.innerText = mathsAnswers;
        mathsAnswersElement.appendChild(answerButtons);
        answerButtons.addEventListener("click", mathsPickAnswer);
        answerButtons.classList.add("button", "answerButtons");
    });
    backElement.style.display = "block";
};



//Detects which button is pressed and compares it to the correct answer
function physicsPickAnswer (any) {
    const selectedButton = any.target;
    const physicsCorrect = physicsQuizContent[currentQuestion].physicsCorrect;

    if (selectedButton.innerText == physicsCorrect) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < physicsQuizContent.length) {
        physicsQuizSystem();
    } else {
        finish();
    }
};

function mathsPickAnswer (any) {
    const selectedButton = any.target;
    const mathsCorrect = mathsQuizContent[currentQuestion].mathsCorrect;

    if (selectedButton.innerText == mathsCorrect) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < mathsQuizContent.length) {
        mathsQuizSystem();
    } else {
        finish();
    }
};



//ends the quiz and gives your result
function finish() {
    endElement.innerHTML = `
        <h1> End </h1>
        <p>score: ${score}/${physicsQuizContent.length}</p>
    `;
    endElement.style.display = "block";
    backElement.style.display = "block";
    physicsQuizPage.style.display = "none";
    mathsQuizPage.style.display = "none";
};

//starts each alarm timer on button press
function alarmAlert1() {
    if (confirm("Set this as alarm?")) {
        var alarmTimeMinutes = (alarmTime.value) * 60000;
        alarmTime1 = setTimeout(alarmOver1,alarmTimeMinutes);
    } else {

    };
};
function alarmAlert2() {
    if (confirm("Set this as alarm?")) {
        var alarmTimeMinutes = (alarmTime.value) * 60000;
        alarmTime2 = setTimeout(alarmOver2,alarmTimeMinutes);
    } else {

    };
};
function alarmAlert3() {
    if (confirm("Set this as alarm?")) {
        var alarmTimeMinutes = (alarmTime.value) * 60000;
        alarmTime3 = setTimeout(alarmOver3,alarmTimeMinutes);
    } else {

    };
};
function alarmAlert4() {
    if (confirm("Set this as alarm?")) {
        var alarmTimeMinutes = (alarmTime.value) * 60000;
        alarmTime4 = setTimeout(alarmOver4,alarmTimeMinutes);
    } else {

    };
};
function alarmAlert5() {
    if (confirm("Set this as alarm?")) {
        var alarmTimeMinutes = (alarmTime.value) * 60000;
        alarmTime5 = setTimeout(alarmOver5,(alarmTimeMinutes));
    } else {

    };
};
function alarmOver1() {
    playAlarm1 = true;
    playAlarm()
}
function alarmOver2() {
    playAlarm2 = true;
    playAlarm()
}
function alarmOver3() {
    playAlarm3 = true;
    playAlarm()
}
function alarmOver4() {
    playAlarm4 = true;
    playAlarm()
}
function alarmOver5() {
    playAlarm5 = true;
    playAlarm()
}



function prevAlarm1() {
    isFirstClick = true
    if (firstClick === true) {
        playAlarm1()
    }
};



function playAlarm() {
    alarmOn = true;
    if (alarmOn == true, playAlarm1 == true) {
        alarm1.play();
    };
    if (alarmOn == true, playAlarm2 == true) {
        alarm2.play();
    };
    if (alarmOn == true, playAlarm3 == true) {
        alarm3.play();
    };
    if (alarmOn == true, playAlarm4 == true) {
        alarm4.play();
    };
    if (alarmOn == true, playAlarm5 == true) {
        alarm5.play();
    };
};

//stops all alarms
function endAlarms() {
    clearTimeout(alarmTime1);
    clearTimeout(alarmTime2);
    clearTimeout(alarmTime3);
    clearTimeout(alarmTime4);
    clearTimeout(alarmTime5);
    alarmOn = false;
    alarm1.pause();
    alarm2.pause();
    alarm3.pause();
    alarm4.pause();
    alarm5.pause();
    alarm1.load();
    alarm2.load();
    alarm3.load();
    alarm4.load();
    alarm5.load();
    playAlarm1 = playAlarm2 = playAlarm3 = playAlarm4 = playAlarm5 = false;
};
