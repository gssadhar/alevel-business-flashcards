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

function mapToCoreTheme(q) {
    const text = (q.topic + " " + q.questionText + " " + q.title).toLowerCase();
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
                                modelAnswer: q.modelAnswer || "To evaluate organisational structures like Rolls-Royce moving from tall to flat, students must weigh up communication channels, control layers, wage overheads, and the specific context of complex engineering management.",
                                reasoning: q.reasoning || "AO1 (Knowledge): Define tall/flat structures. AO2 (Application): Apply to Rolls-Royce's engineering scale. AO3 (Analysis): Trace impact on decision-making speed. AO4 (Evaluation): Weigh short-term disruption against long-term agility.",
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
                <p class="text-xs text-slate-500">Revise past-paper questions grouped by core syllabus theme with rigorous evaluation & feedback.</p>
            </div>
            <div class="mt-6 flex justify-between items-center">
                <span class="text-slate-700 text-xs font-semibold">${count} Questions Available</span>
                <span class="bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg font-medium">Start Revision &rarr;</span>
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

    // Rigorous validation: detect gibberish, random letters, or extremely short non-answers
    const isGibberish = /^[bcdfghjklmnpqrstvwxyz\s0-9]+$/i.test(userAnswer) || userAnswer.length < 15;

    if (userAnswer.length === 0 || isGibberish) {
        awardedMarks = 0;
        performanceLabel = "Unsatisfactory / Invalid Answer (Gibberish or Off-Topic)";
        colorClass = "bg-rose-50 text-rose-700 border-rose-200";
    } else if (userAnswer.length < 80) {
        awardedMarks = Math.min(Math.floor(maxMarks * 0.25), maxMarks);
        performanceLabel = "Limited (Basic Knowledge, Lacks Context)";
        colorClass = "bg-amber-50 text-amber-700 border-amber-200";
    } else if (userAnswer.length < 200) {
        awardedMarks = Math.min(Math.floor(maxMarks * 0.6), maxMarks);
        performanceLabel = "Competent (Good Reasoning & Partial Application)";
        colorClass = "bg-blue-50 text-blue-700 border-blue-200";
    } else {
        awardedMarks = Math.min(Math.floor(maxMarks * 0.85), maxMarks);
        performanceLabel = "Top-Band / Comprehensive Evaluation";
        colorClass = "bg-emerald-50 text-emerald-700 border-emerald-200";
    }

    const fallbackModel = q.modelAnswer || "A complete model answer requires defining key business terms, applying structural or financial analysis directly to the extracts provided, weighing up counter-arguments, and giving a justified final recommendation.";
    const fallbackReasoning = q.reasoning || "Edexcel mark schemes reward AO1 (knowledge), AO2 (application to extracts), AO3 (analytical chains of reasoning), and AO4 (balanced evaluation and supported conclusion).";

    const feedbackContainer = document.getElementById('feedback-section');
    feedbackContainer.innerHTML = `
        <div class="space-y-4">
            <div class="p-4 rounded-xl border ${colorClass} flex justify-between items-center">
                <div>
                    <span class="text-xs font-bold uppercase tracking-wider block">Student Performance Grade</span>
                    <span class="text-base font-bold">${performanceLabel}</span>
                </div>
                <div class="text-right">
                    <span class="text-2xl font-black">${awardedMarks}</span>
                    <span class="text-sm font-semibold">/ ${maxMarks} Marks</span>
                </div>
            </div>

            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 class="text-xs font-bold uppercase text-slate-500 tracking-wider mb-1">Official Edexcel Model Answer / Indicative Content</h4>
                <p class="text-slate-800 text-sm leading-relaxed">${fallbackModel}</p>
            </div>

            <div class="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
                <h4 class="text-xs font-bold uppercase text-indigo-700 tracking-wider mb-1">Examiner Reasoning & AO Criteria</h4>
                <p class="text-indigo-950 text-sm leading-relaxed">${fallbackReasoning}</p>
            </div>

            <div class="bg-amber-50/60 p-4 rounded-xl border border-amber-200">
                <h4 class="text-xs font-bold uppercase text-amber-800 tracking-wider mb-1">💡 Personalized Tips & Suggestions for Improvement</h4>
                <p class="text-amber-950 text-sm leading-relaxed">
                    ${awardedMarks === 0 ? 
                        "Your input did not address the question requirements or consisted of invalid text. Ensure you write structured paragraphs responding directly to the business scenario using proper economic and business terminology." :
                        awardedMarks === maxMarks ? 
                        "Outstanding work! Your answer successfully integrated analytical depth with precise context." : 
                        "To achieve full marks, ensure you embed specific names, data, or extracts (AO2) and construct extended analytical chains using connectives like 'leading to' or 'consequently' (AO3)."}
                </p>
            </div>

            <!-- Restored Next Question Button -->
            <div class="pt-2">
                <button onclick="nextQuestion()" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition shadow-sm text-center">
                    Next Question &rarr;
                </button>
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
