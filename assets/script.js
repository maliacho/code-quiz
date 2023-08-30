// need to define

let timer = document.querySelector(".timer-count");
let start = document.querySelector(".start-button");

let timeInterval;
let timeLeft;
let score = 0;
    
// questions and answers
const questions = [
    {
        question: "What is the name of Troy and Abed's morning show?",
        options: ["Troy and Abed", "Abed and Troy in the Morning", "Troy and Abed in the Morning", "The Morning Show"],
        answer: "Troy and Abed in the Morning",
    },
    {
        questions: "What is Pierce's brother's name?",
        options: ["Gary", "Cornelius", "Jeffrey", "Gilbert"],
        answer: "Gilbert",
    },
    {
        questions: "Who is the Spanish teacher in season 1?",
        options: ["Señor Chang", "Señora Gonzalez", "Señor Pelton", "Señora Diaz"],
        answer: "Señor Chang",
    },
    {
        question: "What is the name of the show Troy and Abed like to watch?",
        options: [""],
        answer: "Inspector Spacetime",
    },
    {
        question: "What is the name of Shirley's youngest son?",
        options: ["Jordan Bennet", "Michael Bennet", "Troy Bennet", "Ben Bennet"],
        answer: "Ben Bennet",
    },
    {
        question: "Who is the dean of Greendale Community College?",
        options: ["Jeffrey Winger", "Craig Pelton", "Pierce Hawthorne", "Britta Perry"],
        answer: "Craig Pelton"
    }
];




// user clicks on "start quiz" button
start.addEventListener("click", startQuiz)

// timer starts to countdown
function startTimer () {
    timeLeft = 75;
    timeInterval = setInterval(function(){
        if (timeLeft > 1) {
            timer.textContent = timeLeft;
            timeLeft--;
        } else {
            timeLeft = "";
            clearInterval(timeInterval);
        }
    },1000);
timer.textContent = "No time Left"
};

// begin quiz
function startQuiz () {
    let displayQuestion = questions[i];
    document.getElementById("quiz").textContent = displayQuestion.question
    for (var i = 0; i < questions.length; i++); {
        let answer = displayQuestion.answer[i]
    }



};



// if the answer is right user recieves a point

// if the answer is wrong the user loses a second on the timer

// after all the questions are answered or the timer reaches 0
    //user inputs their initials 
        //click event
    // initials and score saved on scoreboard
    // click event - go back and clear scoreboard