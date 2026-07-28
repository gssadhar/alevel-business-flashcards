let currentQuestions = [];
let questionIndex = 0;
let userPerformance = JSON.parse(localStorage.getItem('revision-stats')) || {};

// Fisher-Yates shuffle to ensure questions appear in random order
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showSection(id) {
    document.querySelectorAll('main > div').forEach(div => div.style.display = 'none');
    document.getElementById(id).style.display = 'block';
    if (id === 'level-selection') updateProgressDashboard();
}

function trackResult(theme, isCorrect) {
    if (!userPerformance[theme]) userPerformance[theme] = { correct: 0, total: 0 };
    userPerformance[theme].total++;
    if (isCorrect) userPerformance[theme].correct++;
    localStorage.setItem('revision-stats', JSON.stringify(userPerformance));
}

function updateProgressDashboard() {
    const container = document.getElementById('progress-dashboard');
    if (!container) return;
    
    let html = '<h2 class="text-xl font-bold mb-4">Your Revision Status</h2>';
    for (const theme in userPerformance) {
        const stats = userPerformance[theme];
        const percentage = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
        const color = percentage < 50 ? 'text-red-600' : 'text-emerald-600';
        
        html += `
            <div class="mb-2">
                <div class="flex justify-between">
                    <span class="font-medium">${theme}</span>
                    <span class="${color} font-bold">${percentage}% Correct</span>
                </div>
                ${percentage < 50 ? '<p class="text-xs text-red-500 italic">Needs more practice!</p>' : ''}
            </div>
        `;
    }
    container.innerHTML = html;
}

function selectALevelSubject(theme) {
    fetch('./data/alevel.json')
        .then(r => r.json())
        .then(data => {
            currentQuestions = shuffleArray([...data[theme]]);
            questionIndex = 0;
            showSection('question-container');
            showQuestion();
        })
        .catch(err => console.error("Error loading data:", err));
}

function showQuestion() {
    const q = currentQuestions[questionIndex];
    document.getElementById('question-counter').innerText = `Question ${questionIndex + 1} of ${currentQuestions.length}`;
    document.getElementById('question-meta').innerText = q.meta;
    document.getElementById('extract-text').innerText = q.extract;
    document.getElementById('question-text').innerText = q.question;
    document.getElementById('feedback-section').style.display = 'none';
    document.getElementById('student-answer-input').value = '';
}

function submitAnswer() {
    const q = currentQuestions[questionIndex];
    // In a production app, use a proper modal instead of confirm()
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
        alert("Well done! You've finished this set.");
        showSection('level-selection');
    }
}
