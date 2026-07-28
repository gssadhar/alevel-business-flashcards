let currentQuestions = [];
let questionIndex = 0;
let userPerformance = JSON.parse(localStorage.getItem('revision-stats')) || {};

// Fisher-Yates shuffle to ensure questions appear in random order
function shuffleArray(array) {
    // Create a shallow copy to avoid mutating the original source data
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
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
    
    // Ensure dashboard updates immediately after tracking
    updateProgressDashboard();
}

function updateProgressDashboard() {
    const container = document.getElementById('progress-dashboard');
    if (!container) return;
    
    let html = '<h2 class="text-xl font-bold mb-4">Your Revision Status</h2>';
    let hasData = false;
    for (const theme in userPerformance) {
        hasData = true;
        const stats = userPerformance[theme];
        const percentage = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
        const color = percentage < 50 ? 'text-red-600' : 'text-emerald-600';
        
        html += `
            <div class="mb-3 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                <div class="flex justify-between items-center">
                    <span class="font-semibold">${theme}</span>
                    <span class="${color} font-bold">${percentage}% Correct</span>
                </div>
                ${percentage < 50 ? '<p class="text-xs text-red-500 font-medium italic mt-1">Needs more practice!</p>' : ''}
            </div>
        `;
    }
    container.innerHTML = hasData ? html : '<p class="text-slate-500">Practice a topic to see your performance dashboard!</p>';
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
    
    // Simplified flow: logic remains, but now triggers the update correctly
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
