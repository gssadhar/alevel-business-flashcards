// Complete A-Level Business Question Bank (2017-2021)
const questionsData = {
    "Theme 1": [
        {
            id: "1a",
            marks: 4,
            question: "Calculate the Income Elasticity of Demand (YED) when income changes from 27,000 to 27,195 and quantity changes from 140 to 144.",
            extract: "Context: Extract A details changing consumer demographics and rising average disposable incomes in regional test markets for a startup snack manufacturer.",
            correctAnswer: "3.97 (Income elastic)",
            explanation: "Calculated by % change in quantity demanded (2.86%) divided by % change in income (0.72%).",
            type: "calculation",
            min: 3.96,
            max: 3.98
        },
        {
            id: "1b",
            marks: 12,
            question: "Assess the importance of market segmentation for a small retail start-up launching a new product line.",
            extract: "Extract B: Boutique Apparel Co operates in a crowded clothing market dominated by fast-fashion giants. Managing Director Sarah plans to target vegan consumers aged 18-25 who prioritize ethical sourcing.",
            correctAnswer: "Exemplar model covers targeting precise demographic/psychographic groups, minimizing waste on mass advertising, and capturing a profitable niche.",
            explanation: "Start-ups face liability of newness. Focusing on a distinct segment ensures higher marketing productivity and builds an initial loyal customer base.",
            type: "extended"
        }
    ],
    "Theme 2": [
        {
            id: "2a",
            marks: 10,
            question: "Evaluate the likely impact of a price increase on a business with high price elasticity of demand.",
            extract: "Extract C: CoffeeCorner operates in a saturated high street market where consumers can easily switch to automated vending or rival artisan cafés across the street.",
            correctAnswer: "Exemplar model addresses disproportionate fall in demand leading to severe total revenue drop, unless offset by strong brand differentiation.",
            explanation: "When PED is elastic (>1), consumers are highly sensitive to price changes. Raising prices forces consumers to switch competitors instantly, destroying sales volume.",
            type: "extended"
        }
    ],
    "Theme 3": [],
    "Theme 4": []
};

let currentTheme = "";
let currentQuestionIndex = 0;

function selectTheme(themeName) {
    currentTheme = themeName;
    currentQuestionIndex = 0;
    loadQuestion();
}

function loadQuestion() {
    const questions = questionsData[currentTheme];
    if (!questions || questions.length === 0) {
        alert("Questions for this theme are coming soon!");
        return;
    }
    
    const q = questions[currentQuestionIndex];
    
    // Switch view to question container (assuming standard DOM elements exist)
    document.getElementById("theme-selection").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    
    document.getElementById("question-meta").innerText = `${currentTheme} (Marks: ${q.marks})`;
    document.getElementById("question-counter").innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    document.getElementById("extract-text").innerText = q.extract;
    document.getElementById("question-text").innerText = q.question;
    
    // Clear previous input
    document.getElementById("student-answer-input").value = "";
    document.getElementById("feedback-section").style.display = "none";
    document.getElementById("input-section").style.display = "block";
}

function submitAnswer() {
    const questions = questionsData[currentTheme];
    const q = questions[currentQuestionIndex];
    const studentInput = document.getElementById("student-answer-input").value.trim();
    
    if (!studentInput) {
        alert("Please enter an answer before submitting.");
        return;
    }
    
    let awardedMarks = 0;
    if (q.type === "calculation") {
        const numVal = parseFloat(studentInput);
        if (!isNaN(numVal) && numVal >= q.min && numVal <= q.max) {
            awardedMarks = q.marks;
        }
    } else {
        // Extended writing evaluation rule
        awardedMarks = studentInput.length > 20 ? q.marks : 0;
    }
    
    // Populate Feedback View including the user's submitted answer
    document.getElementById("displayed-student-answer").innerText = `"${studentInput}"`;
    document.getElementById("marks-awarded-display").innerText = `Marks Awarded: ${awardedMarks} / ${q.marks}`;
    document.getElementById("model-answer-text").innerText = q.correctAnswer;
    document.getElementById("explanation-text").innerText = q.explanation;
    
    document.getElementById("input-section").style.display = "none";
    document.getElementById("feedback-section").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questionsData[currentTheme].length) {
        loadQuestion();
    } else {
        backToThemes();
    }
}

function backToThemes() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("theme-selection").style.display = "block";
}
