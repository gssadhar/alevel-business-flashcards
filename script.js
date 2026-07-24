let questionDatabase = {}; 
let currentTopic = '';
let currentQuestionIndex = 0;
let shuffledQuestions = [];

const paperFiles = [
    'data/2017/2017bs1.json',
    'data/2017/2017bs2.json',
    'data/2017/2017bs3.json',
    'data/2018/2018bs1.json',
    'data/2018/2018bs2.json',
    'data/2018/2018bs3.json'
];

async function loadQuestionData() {
    try {
        let allQuestions = [];

        const promises = paperFiles.map(async (file) => {
            try {
                const response = await fetch(file);
                if (!response.ok) return null;
                const paperData = await response.json();
                
                let extracted = [];
                if (paperData.sections) {
                    paperData.sections.forEach(sec => {
                        sec.questions.forEach(q => {
                            extracted.push({
                                year: paperData.year,
                                paper: paperData.paper,
                                reference: paperData.reference,
                                title: paperData.title,
                                section: sec.section,
                                ...q
                            });
                        });
                    });
                }
                return extracted;
            } catch (err) {
                console.warn(`Could not load ${file}:`, err);
                return null;
            }
        });

        const results = await Promise.all(promises);
        results.forEach(res => {
            if (res) allQuestions = allQuestions.concat(res);
        });

        questionDatabase = allQuestions.reduce((acc, q) => {
            const topicKey = q.topic || "General Business";
            if (!acc[topicKey]) {
                acc[topicKey] = [];
            }
            acc[topicKey].push(q);
            return acc;
        }, {});

        renderDashboard();
    } catch (error) {
        console.error("Error loading data:", error);
        document.getElementById('topics-grid').innerHTML = `<p class="text-red-500 text-sm col-span-2 text-center">Failed to load paper files. Check console for path errors.</p>`;
    }
}

function renderDashboard() {
    const grid = document.getElementById('topics-grid');
    grid.innerHTML = '';
    
    const topics = Object.keys(questionDatabase);
    if (topics.length === 0) {
        grid.innerHTML = `<p class="text-slate-500 text-sm col-span-2 text-center">No questions found. Make sure your JSON files are populated and in the correct year folders.</p>`;
        return;
    }

    topics.forEach(topic => {
        const count = questionDatabase[topic].length;
        const card = document.createElement('div');
        card.className = "bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-slate-100 cursor-pointer transition flex flex-col justify-between";
        card.onclick = () => startQuiz(topic);
        card.innerHTML = `
            <div>
                <h3 class="text-lg font-bold text-slate-900 mb-1">${topic}</h3>
                <p class="text-xs text-slate-500">Revise past-paper style questions with detailed examiner reasoning.</p>
            </div>
            <div class="mt-4 flex justify-between items-center">
                <span class="bg-indigo-50 text-indigo-700 text-xs font-semibold px-2.5 py-1 rounded-full">${count} Questions</span>
                <span class="text-indigo-600 text-sm font-bold">&rarr;</span>
            </div>
        `;
        grid.appendChild(card);
    });

    document.getElementById('dashboard-view').classList.remove('hidden');
    document.getElementById('quiz-view').classList.add('hidden');
    document.getElementById('home-btn').classList.add('hidden');
}

function startQuiz(topic) {
    currentTopic = topic;
    shuffledQuestions = [...questionDatabase[topic]];
    currentQuestionIndex = 0;

    document.getElementById('dashboard-view').classList.add('hidden');
    document.getElementById('quiz-view').classList.remove('hidden');
    document.getElementById('home-btn').classList.remove('hidden');

    loadQuestion();
}

function loadQuestion() {
    const q = shuffledQuestions[currentQuestionIndex];
    document.getElementById('card-topic').innerText = currentTopic;
    document.getElementById('progress-badge').innerText = `Question ${currentQuestionIndex + 1} of ${shuffledQuestions.length}`;
    document.getElementById('paper-meta').innerText = `${q.year || 'A-Level'} - Paper ${q.paper || ''} (${q.reference || 'Edexcel'}) • [${q.marks || 0} Marks]`;
    document.getElementById('card-question').innerText = q.text || q.question;
    
    document.getElementById('user-answer').value = '';
    document.getElementById('feedback-section').classList.add('hidden');
    document.getElementById('submit-btn').classList.remove('hidden');
}

function checkAnswer() {
    const q = shuffledQuestions[currentQuestionIndex];
    document.getElementById('model-answer-text').innerText = q.modelAnswer || q.indicativeContent || "Refer to official Edexcel mark scheme guidelines.";
    document.getElementById('reasoning-text').innerText = q.reasoning || q.examinerAdvice || "Apply context from the extracts to achieve Level 4/5 marks.";
    
    document.getElementById('submit-btn').classList.add('hidden');
    document.getElementById('feedback-section').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        loadQuestion();
    } else {
        alert('You have completed all questions in this topic!');
        returnToDashboard();
    }
}

function returnToDashboard() {
    renderDashboard();
}

window.onload = () => {
    loadQuestionData();
};
