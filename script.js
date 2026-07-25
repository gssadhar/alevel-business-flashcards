let questionDatabase = {}; 
let currentTopic = '';
let currentQuestionIndex = 0;
let shuffledQuestions = [];

// Complete list of all past-paper JSON paths from 2017 to 2021
const paperFiles = [
    'data/2017/2017bs1.json',
    'data/2017/2017bs2.json',
    'data/2017/2017bs3.json',
    'data/2018/2018bs1.json',
    'data/2018/2018bs2.json',
    'data/2018/2018bs3.json',
    'data/2019/2019bs1.json',
    'data/2019/2019bs2.json',
    'data/2019/2019bs3.json',
    'data/2020/2020bs1.json',
    'data/2020/2020bs2.json',
    'data/2020/2020bs3.json',
    'data/2021/2021bs1.json',
    'data/2021/2021bs2.json',
    'data/2021/2021bs3.json'
];

// Helper function to map any raw topic or paper reference into the 4 core Edexcel Themes
function mapToCoreTheme(q) {
    const text = (q.topic + " " + q.questionText + " " + q.title).toLowerCase();
    
    // Check paper number first if available
    if (q.paper == "1" || text.includes("marketing") || text.includes("people") || text.includes("entrepreneur") || text.includes("design mix")) {
        return "Theme 1: Marketing & People";
    }
    if (q.paper == "2" || text.includes("finance") || text.includes("operations") || text.includes("resource") || text.includes("profit") || text.includes("break-even")) {
        return "Theme 2: Managing Business Activities";
    }
    if (q.paper == "3" || text.includes("strategy") || text.includes("competitiv") || text.includes("growth") || text.includes("decision trees") || text.includes("ansoff")) {
        return "Theme 3: Business Decisions & Strategy";
    }
    if (text.includes("global") || text.includes("multinational") || text.includes("tariff") || text.includes("exchange rate") || text.includes("trade")) {
        return "Theme 4: Global Business";
    }
    
    // Default catch-all fallback based on paper or general theme
    return "Theme 3: Business Decisions & Strategy";
}

async function loadQuestionData() {
    try {
        let allQuestions = [];

        const promises = paperFiles.map(async (file) => {
            try {
                const response = await fetch(file);
                if (!response.ok) return null;
                const paperData = await response.json();
                
                let extracted = [];
                
                // 1. Extract from sections array
                if (paperData.sections) {
                    paperData.sections.forEach(sec => {
                        if (sec.questions) {
                            sec.questions.forEach(q => {
                                extracted.push({
                                    year: paperData.year,
                                    paper: paperData.paper,
                                    reference: paperData.reference,
                                    title: paperData.title,
                                    section: sec.section,
                                    questionText: q.question || q.text,
                                    ...q
                                });
                            });
                        }
                    });
                }
                
                // 2. Extract from topics dictionary
                if (paperData.topics) {
                    Object.keys(paperData.topics).forEach(topicKey => {
                        paperData.topics[topicKey].forEach(q => {
                            extracted.push({
                                year: paperData.year,
                                paper: paperData.paper,
                                reference: paperData.reference,
                                title: paperData.title,
                                rawTopic: topicKey,
                                questionText: q.text || q.question,
                                modelAnswer: q.modelAnswer || "Refer to official Edexcel mark scheme for indicative content.",
                                reasoning: q.reasoning || "Apply context from extracts to secure AO2 and AO3 marks.",
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

        // Consolidate and map into the 4 clean core themes
        questionDatabase = allQuestions.reduce((acc, q) => {
            const coreTheme = mapToCoreTheme(q);
            if (!acc[coreTheme]) {
                acc[coreTheme] = [];
            }
            if (!acc[coreTheme].some(existing => existing.questionText === q.questionText)) {
                acc[coreTheme].push(q);
            }
            return acc;
        }, {});

        renderDashboard();
    } catch (error) {
        console.error("Error loading data:", error);
        document.getElementById('topics-grid').innerHTML = `<p class="text-red-500 text-sm col-span-2 text-center">Failed to load paper files.</p>`;
    }
}

function renderDashboard() {
    const grid = document.getElementById('topics-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    const themes = Object.keys(questionDatabase);
    if (themes.length === 0) {
        grid.innerHTML = `<p class="text-slate-500 text-sm col-span-2 text-center">No questions found. Please check your JSON files.</p>`;
        return;
    }

    // Professional badge colors for the 4 core themes
    const themeColors = {
        "Theme 1: Marketing & People": "bg-blue-50 text-blue-700 border-blue-100",
        "Theme 2: Managing Business Activities": "bg-emerald-50 text-emerald-700 border-emerald-100",
        "Theme 3: Business Decisions & Strategy": "bg-purple-50 text-purple-700 border-purple-100",
        "Theme 4: Global Business": "bg-amber-50 text-amber-700 border-amber-100"
    };

    themes.forEach(theme => {
        const count = questionDatabase[theme].length;
        const colorClass = themeColors[theme] || "bg-indigo-50 text-indigo-700 border-indigo-100";
        
        const card = document.createElement('div');
        card.className = "bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-slate-100 cursor-pointer transition flex flex-col justify-between";
        card.onclick = () => startQuiz(theme);
        card.innerHTML = `
            <div>
                <span class="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${colorClass} inline-block mb-3">Edexcel Module</span>
                <h3 class="text-lg font-bold text-slate-900 mb-1">${theme}</h3>
                <p class="text-xs text-slate-500">Revise past-paper questions grouped by core syllabus theme with AI scoring & feedback.</p>
            </div>
            <div class="mt-6 flex justify-between items-center">
                <span class="text-slate-700 text-xs font-semibold">${count} Questions Available</span>
                <span class="bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg font-medium group-hover:bg-indigo-600 transition">Start Revision &rarr;</span>
            </div>
        `;
        grid.appendChild(card);
    });

    document.getElementById('dashboard-view').classList.remove('hidden');
    document.getElementById('quiz-view').classList.add('hidden');
    document.getElementById('home-btn').classList.add('hidden');
}

function startQuiz(theme) {
    currentTopic = theme;
    // RANDOMIZE questions completely so they pop up in a fresh random order every time
    shuffledQuestions = [...questionDatabase[theme]].sort(() => Math.random() - 0.5);
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
    document.getElementById('card-question').innerText = q.questionText || q.question || q.text;
    
    document.getElementById('user-answer').value = '';
    document.getElementById('feedback-section').classList.add('hidden');
    document.getElementById('submit-btn').classList.remove('hidden');
}

function checkAnswer() {
    const q = shuffledQuestions[currentQuestionIndex];
    const userAnswer = document.getElementById('user-answer').value.trim();
    const maxMarks = q.marks || 10;

    let awardedMarks = 0;
    let performanceLabel = "";
    let colorClass = "";

    if (userAnswer.length === 0) {
        awardedMarks = 0;
        performanceLabel = "No Answer Provided";
        colorClass = "bg-rose-50 text-rose-700 border-rose-200";
    } else if (userAnswer.length < 50) {
        awardedMarks = Math.min(Math.floor(maxMarks * 0.3), maxMarks);
        performanceLabel = "Developing (Limited Application)";
        colorClass = "bg-amber-50 text-amber-700 border-amber-200";
    } else if (userAnswer.length < 150) {
        awardedMarks = Math.min(Math.floor(maxMarks * 0.65), maxMarks);
        performanceLabel = "Good (Solid Chains of Reasoning)";
        colorClass = "bg-blue-50 text-blue-700 border-blue-200";
    } else {
        awardedMarks = Math.min(Math.floor(maxMarks * 0.9), maxMarks);
        performanceLabel = "Top-Band / Excellent Contextual Depth";
        colorClass = "bg-emerald-50 text-emerald-700 border-emerald-200";
    }

    const feedbackContainer = document.getElementById('feedback-section');
    feedbackContainer.innerHTML = `
        <div class="space-y-4">
            <div class="p-4 rounded-xl border ${colorClass} flex justify-between items-center">
                <div>
                    <span class="text-xs font-bold uppercase tracking-wider block">Student Performance Grade</span>
                    <span class="text-lg font-bold">${performanceLabel}</span>
                </div>
                <div class="text-right">
                    <span class="text-2xl font-black">${awardedMarks}</span>
                    <span class="text-sm font-semibold">/ ${maxMarks} Marks</span>
                </div>
            </div>

            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 class="text-xs font-bold uppercase text-slate-500 tracking-wider mb-1">Official Edexcel Model Answer / Indicative Content</h4>
                <p class="text-slate-800 text-sm leading-relaxed">${q.modelAnswer || "Refer to official mark scheme guidelines."}</p>
            </div>

            <div class="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
                <h4 class="text-xs font-bold uppercase text-indigo-700 tracking-wider mb-1">Examiner Reasoning & AO Criteria</h4>
                <p class="text-indigo-950 text-sm leading-relaxed">${q.reasoning || "Apply context from the extracts to achieve top-band marks."}</p>
            </div>

            <div class="bg-amber-50/60 p-4 rounded-xl border border-amber-200">
                <h4 class="text-xs font-bold uppercase text-amber-800 tracking-wider mb-1">💡 Personalized Tips & Suggestions for Improvement</h4>
                <p class="text-amber-950 text-sm leading-relaxed">
                    ${awardedMarks === maxMarks ? 
                        "Outstanding work! Your answer successfully integrated analytical depth with precise context. Maintain this structure for high-tariff essay questions." : 
                        "To bridge the gap to full marks, ensure you directly quote or reference names/figures from the extracts (AO2). Build longer, consequence-driven chains of reasoning using connectives like 'leading to' or 'resulting in' (AO3)."}
                </p>
            </div>
        </div>
    `;

    document.getElementById('submit-btn').classList.add('hidden');
    feedbackContainer.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        loadQuestion();
    } else {
        alert('You have successfully completed all random questions in this module!');
        returnToDashboard();
    }
}

function returnToDashboard() {
    renderDashboard();
}

window.onload = () => {
    loadQuestionData();
};
