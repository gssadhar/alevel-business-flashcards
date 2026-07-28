let gcseData = {};
let activeQuiz = null;

async function init() {
    try {
        const response = await fetch('./data/gcse.json');
        gcseData = await response.json();
        const topicContainer = document.getElementById('gcse-topics');
        
        Object.keys(gcseData).forEach(topic => {
            const btn = document.createElement('button');
            btn.className = 'p-4 bg-slate-100 rounded-lg hover:bg-slate-200';
            btn.innerText = topic.toUpperCase();
            btn.onclick = () => loadQuiz(topic);
            topicContainer.appendChild(btn);
        });
    } catch (err) { console.error("Data load failed", err); }
}

function showSection(id) {
    document.querySelectorAll('#app > div').forEach(el => el.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function loadQuiz(topic) {
    activeQuiz = gcseData[topic];
    document.getElementById('question-text').innerText = activeQuiz.q;
    document.getElementById('feedback').classList.add('hidden');
    showSection('quiz-container');
}

function submitAnswer() {
    document.getElementById('model-answer').innerText = activeQuiz.a;
    document.getElementById('feedback').classList.remove('hidden');
}

init();
