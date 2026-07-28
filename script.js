let currentQuestions = [];
// NEW: Dynamic question generator to provide infinite variations
const QUESTION_GENERATORS = {
    "Algebra": () => {
        const a = Math.floor(Math.random() * 8) + 2;
        const b = Math.floor(Math.random() * 10) + 1;
        const x = Math.floor(Math.random() * 10) + 1;
        const c = a * x + b;
        return {
            meta: "Algebra • Linear Eq • 2 Marks",
            extract: "Solve for the variable x.",
            question: `Solve for x: ${a}x + ${b} = ${c}`,
            modelAnswer: `x = ${x}`,
            explanation: `Subtract ${b} from both sides (getting ${a}x = ${c - b}), then divide by ${a}.`
        };
    }
};

function selectALevelSubject(theme) {
    // UPDATED: Now uses generator logic for variety
    currentQuestions = [QUESTION_GENERATORS["Algebra"](), QUESTION_GENERATORS["Algebra"]()]; 
    questionIndex = 0;
    showSection('question-container');
    showQuestion();
}

function submitAnswer() {
    const q = currentQuestions[questionIndex];
    const userMatches = confirm("Did you match the key points of the Model Answer?");
    
    // TRACKING: We now store the theme for better dashboard filtering
    trackResult(q.meta.split(' • ')[0], userMatches);
    
    if (!userMatches) {
        // REPEAT LOGIC: Push this question to the end of the queue if failed
        currentQuestions.push(q);
    }
    
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
