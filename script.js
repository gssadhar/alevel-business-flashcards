<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A-Level Business Studies Flashcards</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 text-slate-800 min-h-screen flex flex-col justify-between">

    <!-- Header -->
    <header class="bg-indigo-600 text-white shadow-md py-4 px-6">
        <div class="max-w-3xl mx-auto flex justify-between items-center">
            <h1 class="text-xl font-bold tracking-wide cursor-pointer" onclick="returnToDashboard()">A-Level Business Hub</h1>
            <button id="home-btn" onclick="returnToDashboard()" class="hidden bg-indigo-700 hover:bg-indigo-800 text-xs px-3 py-1.5 rounded-lg font-semibold transition">
                &larr; Back to Topics
            </button>
        </div>
    </header>

    <!-- Main Container -->
    <main class="max-w-3xl w-full mx-auto p-4 sm:p-6 my-auto">
        
        <!-- DASHBOARD VIEW -->
        <div id="dashboard-view" class="space-y-6">
            <div class="text-center space-y-2">
                <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">Select a Topic to Revise</h2>
                <p class="text-sm text-slate-500">Choose a section below to target your weaker areas with past-paper questions from 2017 and 2018.</p>
            </div>
            
            <div id="topics-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <!-- Populated dynamically via JavaScript -->
            </div>
        </div>

        <!-- QUIZ VIEW -->
        <div id="quiz-view" class="hidden">
            <div class="flex justify-between items-center mb-3">
                <span id="card-topic" class="text-xs font-bold text-indigo-600 uppercase tracking-wider">Topic</span>
                <span id="progress-badge" class="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full font-semibold">Question 1 of 30</span>
            </div>

            <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-slate-100">
                <div id="paper-meta" class="text-xs font-semibold text-slate-400 mb-2">Paper Reference</div>
                <h2 id="card-question" class="text-lg sm:text-xl font-bold text-slate-900 mb-4">Question text</h2>

                <div class="mb-5">
                    <label for="user-answer" class="block text-sm font-medium text-slate-600 mb-1">Your Answer / Notes Space:</label>
                    <textarea id="user-answer" rows="3" placeholder="Type your structured answer or mental notes here before checking..." class="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"></textarea>
                </div>

                <button id="submit-btn" onclick="checkAnswer()" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition shadow-lg shadow-indigo-100">
                    Check Model Answer & Reasoning
                </button>

                <div id="feedback-section" class="hidden mt-6 pt-6 border-t border-slate-100 space-y-4">
                    <div>
                        <h3 class="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Model Answer / Indicative Content:</h3>
                        <p id="model-answer-text" class="text-slate-700 bg-emerald-50 border border-emerald-100 p-3.5 rounded-xl text-sm font-medium"></p>
                    </div>
                    <div>
                        <h3 class="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">Examiner Reasoning & Breakdown:</h3>
                        <p id="reasoning-text" class="text-slate-600 bg-indigo-50 border border-indigo-100 p-3.5 rounded-xl text-sm leading-relaxed"></p>
                    </div>
                    <button onclick="nextQuestion()" class="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-xl transition">
                        Next Question &rarr;
                    </button>
                </div>
            </div>
        </div>

    </main>

    <footer class="text-center py-4 text-xs text-slate-400">
        A-Level Business Studies Revision Platform &bull; Powered by GitHub Pages
    </footer>

    <!-- Script to Fetch Multi-File JSON Setup (2017 & 2018 Papers) -->
    <script>
        let questionDatabase = {}; 
        let currentTopic = '';
        let currentQuestionIndex = 0;
        let shuffledQuestions = [];

        // List of all paper files you created across 2017 and 2018
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

                // Fetch all JSON files concurrently
                const promises = paperFiles.map(async (file) => {
                    try {
                        const response = await fetch(file);
                        if (!response.ok) return null;
                        const paperData = await response.json();
                        
                        // Flatten nested sections/questions into a unified list with metadata
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

                // Fallback check if individual files aren't found, try single questions.json
                if (allQuestions.length === 0) {
                    const fallback = await fetch('data/questions.json');
                    if (fallback.ok) {
                        allQuestions = await fallback.json();
                    }
                }

                // Group questions by their topic property
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
                document.getElementById('topics-grid').innerHTML = `<p class="text-red-500 text-sm col-span-2 text-center">Failed to load paper files. Please ensure your folder paths matching data/2017/ and data/2018/ are correct in GitHub.</p>`;
            }
        }

        function renderDashboard() {
            const grid = document.getElementById('topics-grid');
            grid.innerHTML = '';
            
            const topics = Object.keys(questionDatabase);
            if (topics.length === 0) {
                grid.innerHTML = `<p class="text-slate-500 text-sm col-span-2 text-center">No questions found yet. Add your 2017/2018 JSON files to the data folders.</p>`;
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
    </script>
</body>
</html>
