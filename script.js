
/* Here we go */

const opening = document.getElementById('opening');
const quiz = document.getElementById('quiz');
const closing = document.getElementById('closing');
const skor = document.getElementById('score');

let current_question = 0;
let total_score = 0;
let saved_answer = [];


function startQuiz() {
    opening.classList.add('hidden');
    quiz.classList.remove('hidden');

    setupQuestion();
}


function setupQuestion() {
    
    document.getElementById('question').innerText = DB_QUIZ[current_question]['question'];
    
    for (let i = 0; i < 4; i++) {
        document.getElementById('choiceText'+i).innerText = DB_QUIZ[current_question]['answers'][i];
    }

    document.querySelector('input[name="choices"]:checked').checked = false;
}


function nextQuestion() {
    current_question++;

    saveAnswer();

    if (current_question > DB_QUIZ.length - 1) {
        stopQuiz();
    }
    
    setupQuestion();
}


function stopQuiz() {
    checkScore();

    quiz.classList.add('hidden');
    closing.classList.remove('hidden');

    skor.innerText = `Skor Anda: ${total_score}`;

    return;
}


function saveAnswer() {
    const answer = document.querySelector('input[name="choices"]:checked');

    if (answer != null) {
        saved_answer.push(parseInt(answer.getAttribute('data-id')));
    } else {
        // Default Answer A || 0
        saved_answer.push(0);
    }
}


function checkScore() {
    for (let i = 0; i < saved_answer.length; i++) {
        if (saved_answer[i] == CORRECT_ANSWER[i]) {
            total_score += 100;
        }
    }
}