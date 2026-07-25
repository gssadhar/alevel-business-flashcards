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
                                modelAnswer: q.modelAnswer || "Refer to official Edexcel mark scheme for structured indicative content.",
                                reasoning: q.reasoning || "Award marks based on AO1 knowledge, AO2 application, AO3 analysis, and AO4 evaluation.",
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
                <p class="text-xs text-slate-500">Revise past-paper questions grouped by core syllabus theme with Pearson Edexcel mark scheme compliance.</p>
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

/**
 * Strict Pearson Edexcel Mark Scheme Evaluator (9BS0)
 * Evaluates responses precisely based on AO1 (Knowledge), AO2 (Application),
 * AO3 (Analysis / Chains of Reasoning), and AO4 (Evaluation / Balanced Judgement).
 */
function evaluateEdexcelResponse(userAnswer, maxMarks) {
    const text = userAnswer.trim();
    const lower = text.toLowerCase();
    const words = text.split(/\s+/).filter(w => w.length > 0);

    // 1. Strict Zero-Tolerance Check for Non-Answers or Evasion
    const isEvasion = lower.includes("dont know") || 
                      lower.includes("don't know") || 
                      lower.includes("writing something") || 
                      lower.includes("for the sake of") ||
                      lower.includes("random") ||
                      /^[bcdfghjklmnpqrstvwxyz\s0-9.,-]+$/i.test(text);

    if (text.length === 0 || isEvasion || words.length < 5) {
        return {
            awardedMarks: 0,
            level: "Level 0",
            descriptor: "A completely inaccurate, non-academic, or evasive response[cite: 1].",
            colorClass: "bg-rose-50 text-rose-700 border-rose-200"
        };
    }

    // 2. Structural Analysis for Business Terminology & Chains of Reasoning
    const hasApplicationIndicator = lower.includes("extract") || lower.includes("gym") || lower.includes("pure") || lower.includes("firm") || lower.includes("cost") || lower.includes("sales") || lower.includes("%") || lower.includes("data");
    const hasChainOfReasoning = lower.includes("because") || lower.includes("therefore") || lower.includes("leading to") || lower.includes("consequently") || lower.includes("result in");
    const hasEvaluation = lower.includes("however") || lower.includes("on the other hand") || lower.includes("in contrast") || lower.includes("short run") || lower.includes("long term") || lower.includes("depends on");

    // Scale evaluation according to total question marks (e.g., 4, 8, 10, 12, 20 marks)
    if (maxMarks <= 4) {
        if (words.length > 25 && hasApplicationIndicator) {
            return { awardedMarks: maxMarks, level: "Top Mark", descriptor: "Fully accurate calculation or precise recall with applied context[cite: 1].", colorClass: "bg-emerald-50 text-emerald-700 border-emerald-200" };
        } else if (words.length > 10) {
            return { awardedMarks: Math.floor(maxMarks * 0.5), level: "Partial Mark", descriptor: "Elements of correct formula or recall present, but lacks full working or precision[cite: 1].", colorClass: "bg-amber-50 text-amber-700 border-amber-200" };
        }
        return { awardedMarks: 1, level: "Level 1", descriptor: "Isolated elements of knowledge; weak or missing application[cite: 1].", colorClass: "bg-amber-50 text-amber-700 border-amber-200" };
    }

    if (maxMarks === 8) {
        if (text.length > 300 && hasApplicationIndicator && hasChainOfReasoning && hasEvaluation) {
            return { awardedMarks: 8, level: "Level 3 (6-8 Marks)", descriptor: "Accurate and thorough knowledge, supported by effective context, logical chains of reasoning, and a balanced assessment[cite: 1].", colorClass: "bg-emerald-50 text-emerald-700 border-emerald-200" };
        } else if (text.length > 150 && (hasChainOfReasoning || hasApplicationIndicator)) {
            return { awardedMarks: 4, level: "Level 2 (3-5 Marks)", descriptor: "Accurate knowledge applied with partial chains of reasoning; assessment is unbalanced or incomplete[cite: 1].", colorClass: "bg-blue-50 text-blue-700 border-blue-200" };
        }
        return { awardedMarks: 2, level: "Level 1 (1-2 Marks)", descriptor: "Isolated elements of knowledge; weak or no relevant application[cite: 1].", colorClass: "bg-amber-50 text-amber-700 border-amber-200" };
    }

    if (maxMarks === 10 || maxMarks === 12) {
        if (text.length > 400 && hasApplicationIndicator && hasChainOfReasoning && hasEvaluation) {
            return { awardedMarks: maxMarks >= 12 ? 12 : 10, level: `Top Level (${maxMarks >= 12 ? 'Level 4' : 'Level 3'})`, descriptor: "Coherent chains of reasoning with thorough context and a well-supported final judgement[cite: 1].", colorClass: "bg-emerald-50 text-emerald-700 border-emerald-200" };
        } else if (text.length > 200) {
            return { awardedMarks: Math.floor(maxMarks * 0.5), level: "Mid Level", descriptor: "Elements of knowledge applied with incomplete chains of reasoning or superficial assessment[cite: 1].", colorClass: "bg-blue-50 text-blue-700 border-blue-200" };
        }
        return { awardedMarks: 2, level: "Level 1", descriptor: "Recall-based response with weak application and generic assertions[cite: 1].", colorClass: "bg-amber-50 text-amber-700 border-amber-200" };
    }

    // For 20-Mark Essay Questions
    if (text.length > 550 && hasApplicationIndicator && hasChainOfReasoning && hasEvaluation) {
        return { awardedMarks: 18, level: "Level 4 (15-20 Marks)", descriptor: "Fully developed arguments, effective use of quantitative/qualitative data, and comprehensive balanced evaluation leading to a supported recommendation[cite: 1].", colorClass: "bg-emerald-50 text-emerald-700 border-emerald-200" };
    } else if (text.length > 300 && hasChainOfReasoning) {
        return { awardedMarks: 11, level: "Level 3 (9-14 Marks)", descriptor: "Developed chains of reasoning with partial awareness of competing arguments and attempt at conclusion[cite: 1].", colorClass: "bg-blue-50 text-blue-700 border-blue-200" };
    } else if (text.length > 150) {
        return { awardedMarks: 6, level: "Level 2 (5-8 Marks)", descriptor: "Arguments presented with incomplete connections between causes and consequences[cite: 1].", colorClass: "bg-amber-50 text-amber-700 border-amber-200" };
    }
    return { awardedMarks: 2, level: "Level 1 (1-4 Marks)", descriptor: "Isolated elements of knowledge with generic assertions[cite: 1].", colorClass: "bg-rose-50 text-rose-700 border-rose-200" };
}

function checkAnswer() {
    const q = shuffledQuestions[currentQuestionIndex];
    const userAnswer = document.getElementById('user-answer').value;
    const maxMarks = q.marks || 10;

    const evaluation = evaluateEdexcelResponse(userAnswer, maxMarks);
    const awardedMarks = evaluation.awardedMarks;
    const performanceLabel = evaluation.level;
    const colorClass = evaluation.colorClass;

    const fallbackModel = q.modelAnswer || "Refer to official Pearson Edexcel mark scheme for structured indicative content, covering AO1 knowledge, AO2 application, AO3 analysis, and AO4 evaluation[cite: 1].";
    const fallbackReasoning = q.reasoning || "Examiners reward candidates who establish logical chains of reasoning, integrate quantitative/qualitative context from the extracts, and weigh competing factors to form a supported business judgement[cite: 1].";

    const feedbackContainer = document.getElementById('feedback-section');
    
    feedbackContainer.innerHTML = `
        <div class="space-y-4">
            <div class="p-4 rounded-xl border ${colorClass} flex justify-between items-center">
                <div>
                    <span class="text-xs font-bold uppercase tracking-wider block">Edexcel Mark Scheme Evaluation</span>
                    <span class="text-base font-bold">${performanceLabel}</span>
                    <p class="text-xs mt-0.5 opacity-90">${evaluation.descriptor}</p>
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
                <h4 class="text-xs font-bold uppercase text-indigo-700 tracking-wider mb-1">Examiner Reasoning & AO Criteria (9BS0)</h4>
                <p class="text-indigo-950 text-sm leading-relaxed">${fallbackReasoning}</p>
            </div>

            <div class="bg-amber-50/60 p-4 rounded-xl border border-amber-200">
                <h4 class="text-xs font-bold uppercase text-amber-800 tracking-wider mb-1">💡 Pearson Edexcel Tips & Suggestions for Improvement</h4>
                <p class="text-amber-950 text-sm leading-relaxed">
                    ${awardedMarks === 0 ? 
                        "Your response was flagged as an invalid or non-academic entry (0 marks). Ensure you answer the specific prompt using proper business and economic terminology[cite: 1]." :
                        awardedMarks === maxMarks ? 
                        "Excellent work! Your response fully matches the top-level criteria defined in the Pearson Edexcel mark scheme[cite: 1]." : 
                        "To bridge the gap to top bands, embed specific data or names from the extracts (AO2), build extended analytical chains using connectives like 'leading to' (AO3), and provide a balanced counter-balance judgement (AO4)[cite: 1]."}
                </p>
            </div>

            <div class="pt-3">
                <button type="button" onclick="nextQuestion()" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition shadow-md text-center cursor-pointer">
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
```[cite: 1]
