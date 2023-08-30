// need to define
    // timer
    // score
let score = 0;
    // user initials
    // user answer selection
    // questions and answers
let questions = [
    {
        prompt: "Which of the following is NOT a primitive type?\n(a) Boolean\n(b) Data\n(c) String\n(d) Number",
        answer: "b"
    },
    {
        prompt: "Which of the following keywords is NOT used to define a variable in JavaScript?\n(a) let\n(b) const\n(c) key\n(d) var",
        answer: "c"
    },
    {
        prompt: "What does HTML stand for?\n(a) Hyper Text Markup Language\n(b) Hyper Text Mardown Language\n(c) Hypo Text Mark Lang\n(d) Hippos That May Lounge",
        answer: "a"
    },
    {
        prompt: "What does CSS stand for?\n(a) Cascading Style Shorts\n(b) Cascading Style Sheets\n(c) Crocodiles Swimming Silently\n(d) Cascading Style Sheet",
        answer: "b"
    }
]

// user clicks on "start quiz" button
    //click event
startQuiz.addEventListener("click", quizQuestions)

// questions appear
    // 3-4 possible options appear
    //user selects an option
        //click event
    //move on to next question
    for (var i = 0; i < questions.length; i++) {
        let response = window.prompt(questions[i].prompt)
        if (response == questions[i].answer) {
            score++;
            alert("Correct!")
        } else {
            alert("Sorry, that's wrong.")
        }
    }


// if the answer is right user recieves a point

// if the answer is wrong the user loses a second on the timer

// after all the questions are answered or the timer reaches 0
    //user inputs their initials 
        //click event
    // initials and score saved on scoreboard
    // click event - go back and clear scoreboard