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
        },
        {
            id: "1c",
            marks: 4,
            question: "Calculate the market share (by value) of Business X if it sold 45,000 units at an average price of £150 in a total market revenue of £13.5 million.",
            extract: "Extract (June 2019): Industry data showing total sector revenue relative to individual firm sales volumes.",
            correctAnswer: "50%",
            explanation: "Business X total revenue is 45,000 * £150 = £6,750,000. Divided by £13,500,000 total market revenue * 100 = 50%.",
            type: "calculation",
            min: 50,
            max: 50
        },
        {
            id: "1d",
            marks: 10,
            question: "Evaluate whether financial or non-financial motivators are more effective in reducing staff turnover in a service-sector business.",
            extract: "Extract (October 2020): TechFirm Ltd experienced high staff turnover in its customer service department and weighed bonuses against job enrichment.",
            correctAnswer: "Financial incentives give immediate reward (Taylor/Herzberg hygiene), but non-financial motivators (empowerment, enrichment) address long-term psychological needs.",
            explanation: "Herzberg's Two-Factor Theory shows hygiene factors prevent dissatisfaction while motivators drive true retention.",
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
        },
        {
            id: "2b",
            marks: 10,
            question: "Calculate the Payback Period for Project A and evaluate whether the business should choose Project A or Project B.",
            extract: "Extract (June 2018): Project A requires £150k outlay with cash inflows of £40k, £50k, £60k, £70k. Project B requires £120k with steady inflows of £45k.",
            correctAnswer: "Project A payback is exactly 3 years. Project B payback is 2.67 years (2 years 8 months).",
            explanation: "Quick payback reduces liquidity risk, though Project A yields higher cumulative returns (£220k total vs £180k).",
            type: "extended"
        },
        {
            id: "2c",
            marks: 10,
            question: "Calculate the Acid Test Ratio (Quick Ratio) for Retail PLC and assess its short-term liquidity health.",
            extract: "Extract (November 2021): Retail PLC reports current assets of £2.4m (including inventory of £1.4m), current liabilities of £1.6m.",
            correctAnswer: "0.63:1 (or 0.625:1)",
            explanation: "Formula: (Current Assets - Inventory) / Current Liabilities. (£2.4m - £1.4m) / £1.6m = 0.63:1, indicating reliance on fast stock turnover.",
            type: "extended"
        }
    ],
    "Theme 3": [
        {
            id: "3a",
            marks: 8,
            question: "Calculate the Expected Values (EV) for both options and recommend which strategic path the business should choose.",
            extract: "Extract (June 2017): Option 1 (Online expansion, cost £50k) has 0.7 prob of £150k return, 0.3 of £20k. Option 2 (Physical store, cost £80k) has 0.5 prob of £220k return, 0.5 of £10k.",
            correctAnswer: "Option 1 Net Gain = £61,000; Option 2 Net Gain = £35,000. Recommend Option 1.",
            explanation: "Decision trees quantify uncertainty by multiplying probabilities by outcomes to determine net expected financial gains.",
            type: "extended"
        },
        {
            id: "3b",
            marks: 12,
            question: "Evaluate the potential risks and rewards of pursuing unrelated diversification (Ansoff's Matrix) for an established manufacturer.",
            extract: "Extract (June 2019): A dominant food manufacturer considered diversifying into financial services via corporate acquisition.",
            correctAnswer: "Rewards include spreading risk and capturing higher margins; risks involve lack of core competencies and managerial diseconomies.",
            explanation: "Diversification is Ansoff's riskiest growth vector due to entering unfamiliar markets without established brand equity.",
            type: "extended"
        }
    ],
    "Theme 4": [
        {
            id: "4a",
            marks: 8,
            question: "Assess the impact of a GBP depreciation from £1 = $1.30 to £1 = $1.15 on a UK manufacturer importing US raw materials and exporting finished goods.",
            extract: "Extract (October 2020): Foreign exchange rate movements affecting international procurement and sales revenues.",
            correctAnswer: "SPICED principle: Weak pound makes imports dearer (increasing production costs) and exports cheaper/more competitive abroad.",
            explanation: "Net exposure depends heavily on the ratio of imported component costs versus international export volume.",
            type: "extended"
        },
        {
            id: "4b",
            marks: 12,
            question: "Evaluate whether maintaining strict corporate social responsibility (CSR) standards globally outweighs the cost advantages of low-cost manufacturing.",
            extract: "Extract (November 2021): A multinational clothing corporation facing public scrutiny over developing-nation supply chain conditions.",
            correctAnswer: "CSR protects brand equity and long-term loyalty against PR boycotts, but adds short-term operational monitoring costs.",
            explanation: "Modern ESG expectations make brand reputation paramount; short-term savings from unethical practices are quickly neutralized by consumer backlash.",
            type: "extended"
        }
    ]
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
    
    document.getElementById("theme-selection").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    
    document.getElementById("question-meta").innerText = `${currentTheme} (Marks: ${q.marks})`;
    document.getElementById("question-counter").innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    document.getElementById("extract-text").innerText = q.extract;
    document.getElementById("question-text").innerText = q.question;
    
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
        awardedMarks = studentInput.length > 20 ? q.marks : 0;
    }
    
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 9372b972118b912dbf5ee56d2435619bb862dbf0
