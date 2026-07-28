let currentQuestions = [];
let questionIndex = 0;
let userPerformance = JSON.parse(localStorage.getItem('revision-stats')) || {}; 
// Tracks { 'Theme 1': { correct: 0, total: 0 }, ... }

function showSection(id) {
    document.querySelectorAll('main > div').forEach(div => div.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

function trackResult(theme, isCorrect) {
    if (!userPerformance[theme]) userPerformance[theme] = { correct: 0, total: 0 };
    userPerformance[theme].total++;
    if (isCorrect) userPerformance[theme].correct++;
    localStorage.setItem('revision-stats', JSON.stringify(userPerformance));
}

function selectALevelSubject(theme) {
    fetch('./data/alevel.json')
        .then(r => r.json())
        .then(data => {
            currentQuestions = data[theme];
            questionIndex = 0;
            showSection('question-container');
            showQuestion();
        })
        .catch(err => console.error("Error loading data:", err));
}

function showQuestion() {
    const q = currentQuestions[questionIndex];
    document.getElementById('question-meta').innerText = q.meta;
    document.getElementById('extract-text').innerText = q.extract;
    document.getElementById('question-text').innerText = q.question;
    document.getElementById('feedback-section').style.display = 'none';
    document.getElementById('student-answer-input').value = '';
}

function submitAnswer() {
    const q = currentQuestions[questionIndex];
    const userAnswer = document.getElementById('student-answer-input').value.trim();
    
    // Logic to mark as correct (simple keyword match or manual self-check)
    const isCorrect = confirm("Did you match the key points of the Model Answer?");
    trackResult(q.meta.split(' • ')[0], isCorrect);
    
    document.getElementById('feedback-section').style.display = 'block';
    document.getElementById('model-answer-text').innerText = q.modelAnswer;
    document.getElementById('explanation-text').innerText = q.explanation;
}

function nextQuestion() {
    questionIndex++;
    if (questionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        alert("Well done! You've finished this set. Check the console for your overall performance stats.");
        console.table(userPerformance);
        showSection('level-selection');
    }
}
