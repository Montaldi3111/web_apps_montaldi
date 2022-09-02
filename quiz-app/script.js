const quizData =[{
    question: "¿Qué lenguaje se utiliza en este navegador?",
    a:"Java",
    b:"C",
    c:"Python",
    d:"Javascript",
    correct: "d"
}, {
    question: "¿Qué significan las siglas de CSS?",
    a:"Central Style Sheets",
    b:"Cascading Style Sheets",
    c:"Casdading Simple Sheets",
    d:"Cars SUVs Sailboats",
    correct: "b"
}, {
    question: "¿Qué significa HTML?",
    a:"Hypertext Markup Languaje",
    b:"Hypertext Markdown Languaje",
    c:"Hyperloop Machine Languaje",
    d:"Helicopters Terminals Motorboats Lamborginis",
    correct: "a"
}, {
    question: "¿Qué año se creo el lenguaje Javascript?",
    a:"1996",
    b:"1995",
    c:"1994",
    d:"Ninguna de las anteriores",
    correct: "b"
}];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
    answerElements.forEach(answer => (answer.checked = false))
};

const getSelected = () => {
    let answer;
    answerElements.forEach(answerElement => {
        if(answerElement.checked) answer = answerElement.id;
    })
    return answer;
};

const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};

loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
        score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = '<h2> Has respondido: ' + score + " " + "/" + " "+ quizData.length + ' respuestas correctas</h2>';
        }
    }
})