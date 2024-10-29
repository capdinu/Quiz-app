const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "HomeTool Markup Language",
        c: "Hyperlink and Markup Language",
        d: "Hyperlink Language",
        correct: "a",
    },
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Computer Style Sheets",
        c: "Creative Style Sheets",
        d: "Colorful Style Sheets",
        correct: "a",
    },
    {
        question: "What year was JavaScript created?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "1993",
        correct: "b",
    },
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
];

const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const nextBtn = document.getElementById('next');``

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.textContent = currentQuizData.question;
    a_text.textContent = currentQuizData.a;
    b_text.textContent = currentQuizData.b;
    c_text.textContent = currentQuizData.c;
    d_text.textContent = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

nextBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            alert(`Quiz completed! Your score is ${score}/${quizData.length}.`);
            nextBtn.textContent = 'Restart';
            nextBtn.addEventListener('click', () => location.reload());
        }
    } else {
        alert('Please select an answer before moving to the next question.');
    }
});
