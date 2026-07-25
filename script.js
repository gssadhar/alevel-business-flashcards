// Complete A-Level Business Question Bank (2017-2021) - Upgraded with Self-Assessment & Edexcel Mark Schemes
const questionsData = {
    "Theme 1": [
        {
            id: "1a",
            marks: 4,
            question: "Calculate the Income Elasticity of Demand (YED) when income changes from 27,000 to 27,195 and quantity changes from 140 to 144.",
            extract: "Context: Extract A details changing consumer demographics and rising average disposable incomes in regional test markets for a startup snack manufacturer.",
            correctAnswer: "3.97 (Income elastic)",
            explanation: "Full Mark Scheme Breakdown & Calculation:\n• Formula: % Change in Quantity Demanded / % Change in Income\n• Step 1 (% Change in Q): (4 / 140) * 100 = 2.857%\n• Step 2 (% Change in Income): (195 / 27,000) * 100 = 0.7222%\n• Step 3 (YED): 2.857 / 0.7222 = 3.965 (rounds to 3.97).\n\n💡 Examiner Tips for Max Marks:\n1. Always state the formula clearly before plugging in numbers to secure method marks even if a minor arithmetic error occurs.\n2. State the interpretation (+3.97 means it is a normal luxury good and income elastic) to ensure complete credit.",
            type: "calculation",
            min: 3.96,
            max: 3.98
        },
        {
            id: "1b",
            marks: 12,
            question: "Assess the importance of market segmentation for a small retail start-up launching a new product line.",
            extract: "Extract B: Boutique Apparel Co operates in a crowded clothing market dominated by fast-fashion giants. Managing Director Sarah plans to target vegan consumers aged 18-25 who prioritize ethical sourcing.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Knowledge (Level 1 - 2 marks): Identification of segmentation (dividing a market into distinct groups of consumers based on demographics, psychographics, etc.).\n• Application (Level 2 - 2 marks): Contextual linkage to Boutique Apparel Co targeting vegan consumers aged 18-25 seeking ethical sourcing.\n• Analysis (Level 3 - 4 marks): Explaining that segmentation allows small start-ups to avoid direct price competition with giants like fast-fashion brands, building tailored marketing mixes that maximize customer loyalty.\n• Evaluation (Level 4 - 4 marks): Weighing up limitations such as small market size restricting total revenue growth, or the risk of high marketing costs relative to a narrow customer base, concluding that survival for a start-up depends on capturing a profitable niche.",
            explanation: "💡 Examiner Tips for Max Marks (Level 4 Evaluation):\n1. Use the 'It depends on...' framework (e.g., depends on the accuracy of market research and the size of the niche segment).\n2. Balance your argument: while segmentation prevents mass market destruction by larger competitors, it limits economies of scale.",
            type: "extended"
        },
        {
            id: "1c",
            marks: 4,
            question: "Calculate the market share (by value) of Business X if it sold 45,000 units at an average price of £150 in a total market revenue of £13.5 million.",
            extract: "Extract (June 2019): Industry data showing total sector revenue relative to individual firm sales volumes.",
            correctAnswer: "50%",
            explanation: "Full Mark Scheme Breakdown & Calculation:\n• Formula: (Business Revenue / Total Market Revenue) * 100\n• Step 1: Calculate Business X Revenue = 45,000 units * £150 = £6,750,000.\n• Step 2: Divide by total market revenue = (£6,750,000 / £13,500,000) * 100 = 50%.\n\n💡 Examiner Tips for Max Marks:\n1. Show units clearly (£6.75m vs £13.5m) to avoid mixing up values with volumes.\n2. Always include the percentage sign (%) in your final answer.",
            type: "calculation",
            min: 50,
            max: 50
        },
        {
            id: "1d",
            marks: 10,
            question: "Evaluate whether financial or non-financial motivators are more effective in reducing staff turnover in a service-sector business.",
            extract: "Extract (October 2020): TechFirm Ltd experienced high staff turnover in its customer service department and weighed bonuses against job enrichment.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Knowledge/Application: Financial motivators (bonuses, PRP) vs non-financial (job enrichment, empowerment) applied to customer service environments.\n• Analysis: Financial rewards satisfy lower-level economic needs (Taylor, Herzberg hygiene factors), providing quick boosts. Non-financial motivators tackle root causes of burnout and monotony in customer service roles (Herzberg motivators).\n• Evaluation: Short-term cash fixes retention only temporarily if workplace stress or poor culture persists; therefore, non-financial empowerment delivers superior long-term retention.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Reference motivational theorists explicitly (Taylor, Maslow, Herzberg) to score higher AO1/AO3 marks.\n2. Contextualize your answer specifically to the service sector where employee attitude directly dictates customer retention.",
            type: "extended"
        }
    ],
    "Theme 2": [
        {
            id: "2a",
            marks: 10,
            question: "Evaluate the likely impact of a price increase on a business with high price elasticity of demand.",
            extract: "Extract C: CoffeeCorner operates in a saturated high street market where consumers can easily switch to automated vending or rival artisan cafés across the street.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Knowledge/Application: PED > 1 means demand is price elastic, illustrated by CoffeeCorner's direct exposure to local substitutes.\n• Analysis: A price increase leads to a proportionately greater fall in quantity demanded, destroying total revenue because consumers immediately switch to cheaper alternatives.\n• Evaluation: The impact depends heavily on whether CoffeeCorner can build brand loyalty or differentiate its product offering to make demand inelastic.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Sketch or reference the revenue implications of elastic demand (raising price reduces total revenue).\n2. Ensure you weave the extract context (rival artisan cafés/vending machines) directly into your analysis.",
            type: "extended"
        },
        {
            id: "2b",
            marks: 10,
            question: "Calculate the Payback Period for Project A and evaluate whether the business should choose Project A or Project B.",
            extract: "Extract (June 2018): Project A requires £150k outlay with cash inflows of £40k, £50k, £60k, £70k. Project B requires £120k with steady inflows of £45k.",
            correctAnswer: "Exemplar Mark Scheme Model Answer & Calculation:\n• Project A Cumulative: Yr 1 (£40k), Yr 2 (£90k), Yr 3 (£150k). Payback = Exactly 3 years.\n• Project B Payback: £120,000 / £45,000 = 2.67 years (2 years and 8 months).\n• Evaluation: Project B provides faster liquidity recovery, reducing risk. However, Project A yields higher overall profitability (£220k total inflows vs £180k), making long-term strategic choice dependent on cash flow priorities.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Show month conversions clearly for partial years (e.g., 0.67 years * 12 months = 8 months).\n2. Combine quantitative findings with qualitative considerations (risk aversion vs overall return).",
            type: "extended"
        },
        {
            id: "2c",
            marks: 10,
            question: "Calculate the Acid Test Ratio (Quick Ratio) for Retail PLC and assess its short-term liquidity health.",
            extract: "Extract (November 2021): Retail PLC reports current assets of £2.4m (including inventory of £1.4m), current liabilities of £1.6m.",
            correctAnswer: "Exemplar Mark Scheme Model Answer & Calculation:\n• Formula: (Current Assets - Inventory) / Current Liabilities\n• Calculation: (£2,400,000 - £1,400,000) / £1,600,000 = £1,000,000 / £1,600,000 = 0.63:1 (or 0.625:1).\n• Assessment: Below the standard 1:1 benchmark, signaling liquidity vulnerability if immediate debts fall due, though typical for high-turnover retailers.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Explain *why* inventory is subtracted (it cannot be turned into immediate cash to pay short-term creditors without selling first).\n2. Always evaluate the figure against standard business benchmarks (1:1).",
            type: "extended"
        }
    ],
    "Theme 3": [
        {
            id: "3a",
            marks: 8,
            question: "Calculate the Expected Values (EV) for both options and recommend which strategic path the business should choose.",
            extract: "Extract (June 2017): Option 1 (Online expansion, cost £50k) has 0.7 prob of £150k return, 0.3 of £20k. Option 2 (Physical store, cost £80k) has 0.5 prob of £220k return, 0.5 of £10k.",
            correctAnswer: "Exemplar Mark Scheme Model Answer & Calculation:\n• EV Option 1 Gross: (0.7 * 150,000) + (0.3 * 20,000) = 105,000 + 6,000 = £111,000. Net Gain: £111,000 - £50,000 = £61,000.\n• EV Option 2 Gross: (0.5 * 220,000) + (0.5 * 10,000) = 110,000 + 5,000 = £115,000. Net Gain: £115,000 - £80,000 = £35,000.\n• Recommendation: Choose Option 1 due to higher net expected return (£61k vs £35k) and lower financial risk exposure.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Clearly calculate *Net Gain* by subtracting initial outlay from gross expected value.\n2. Add a concluding recommendation linking back to risk profiles.",
            type: "extended"
        },
        {
            id: "3b",
            marks: 12,
            question: "Evaluate the potential risks and rewards of pursuing unrelated diversification (Ansoff's Matrix) for an established manufacturer.",
            extract: "Extract (June 2019): A dominant food manufacturer considered diversifying into financial services via corporate acquisition.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Knowledge/Application: Unrelated diversification involves taking new products into completely new markets, breaking away from the firm's core competencies.\n• Analysis: Rewards include spreading business risk across industries and capturing high growth/margin opportunities. Risks include managerial diseconomies of scale and lack of industry expertise.\n• Evaluation: High failure rate unless backed by strong financial reserves and expert external leadership.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Explicitly reference Ansoff's Matrix and define diversification as the highest risk quadrant.\n2. Use business terminology like 'core competencies' and 'managerial diseconomies'.",
            type: "extended"
        }
    ],
    "Theme 4": [
        {
            id: "4a",
            marks: 8,
            question: "Assess the impact of a GBP depreciation from £1 = $1.30 to £1 = $1.15 on a UK manufacturer importing US raw materials and exporting finished goods.",
            extract: "Extract (October 2020): Foreign exchange rate movements affecting international procurement and sales revenues.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Knowledge/Application: SPICED principle (Strong Pound Imports Cheap, Exports Dear -> Weak Pound means Imports Dear, Exports Cheap).\n• Analysis: US raw material imports become more expensive, increasing cost of production and putting pressure on profit margins. Conversely, UK exports to the US become cheaper and more price-competitive, boosting international sales volume.\n• Assessment: Net impact depends on trade balance; if raw material import costs exceed export revenue gains, overall profitability will fall.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. State the SPICED mnemonic clearly at the start of your answer.\n2. Evaluate both sides of the coin (costs of inputs vs revenues of outputs) to secure full analytical credit.",
            type: "extended"
        },
        {
            id: "4b",
            marks: 12,
            question: "Evaluate whether maintaining strict corporate social responsibility (CSR) standards globally outweighs the cost advantages of low-cost manufacturing.",
            extract: "Extract (November 2021): A multinational clothing corporation facing public scrutiny over developing-nation supply chain conditions.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Knowledge/Application: CSR involves ethical obligations to stakeholders beyond shareholders, especially regarding supply chain labor standards.\n• Analysis: Maintaining high CSR protects brand equity and avoids damaging consumer boycotts or ESG investor divestment. Ignoring CSR maximizes short-term profit margins through cheap labor.\n• Evaluation: In the digital age, brand reputation is vulnerable; long-term PR damage from ethical scandals far outweighs short-term cost savings.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Weigh short-term financial savings against long-term intangible asset value (brand reputation).\n2. Conclude with a justified final judgment supported by recent industry trends (ESG investing).",
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
    let markDisplayHtml = "";

    if (q.type === "calculation") {
        const numVal = parseFloat(studentInput);
        if (!isNaN(numVal) && numVal >= q.min && numVal <= q.max) {
            awardedMarks = q.marks;
        }
        markDisplayHtml = `Marks Awarded: ${awardedMarks} / ${q.marks} (Auto-graded calculation)`;
    } else {
        // Self-assessment mode for essay/extended questions
        markDisplayHtml = `
            <div style="background: #eef2ff; border: 1px solid #c7d2fe; padding: 1rem; border-radius: 8px; margin-bottom: 0.5rem;">
                <p style="margin: 0 0 0.5rem 0; font-weight: 600; color: #312e81;">✍️ Essay Self-Assessment Mode</p>
                <p style="margin: 0; font-size: 0.95rem; color: #4338ca;">Compare your answer against the official mark scheme below and honestly evaluate your chains of reasoning (AO2, AO3, AO4):</p>
            </div>
            <div style="display: flex; gap: 0.5rem; align-items: center; margin-top: 0.75rem;">
                <label style="font-weight: 600; font-size: 0.95rem;">Select your self-assessed marks (out of ${q.marks}):</label>
                <select id="self-score" style="padding: 0.35rem 0.75rem; border-radius: 6px; border: 1px solid #cbd5e1; font-weight: 600;">
                    ${generateMarkOptions(q.marks)}
                </select>
                <button class="primary-btn" style="padding: 0.35rem 0.75rem; font-size: 0.9rem;" onclick="confirmSelfScore(${q.marks})">Confirm Score</button>
            </div>
            <p id="confirmed-score-text" style="margin-top: 0.5rem; font-weight: 700; color: var(--primary);"></p>
        `;
    }
    
    document.getElementById("displayed-student-answer").innerText = `"${studentInput}"`;
    document.getElementById("marks-awarded-display").innerHTML = markDisplayHtml;
    document.getElementById("model-answer-text").innerText = q.correctAnswer;
    document.getElementById("explanation-text").innerText = q.explanation;
    
    document.getElementById("input-section").style.display = "none";
    document.getElementById("feedback-section").style.display = "block";
}

function generateMarkOptions(maxMarks) {
    let options = "";
    for (let i = 0; i <= maxMarks; i++) {
        options += `<option value="${i}">${i} marks</option>`;
    }
    return options;
}

function confirmSelfScore(maxMarks) {
    const selectedScore = document.getElementById("self-score").value;
    document.getElementById("confirmed-score-text").innerText = `✓ Self-Assessed Score Saved: ${selectedScore} / ${maxMarks} marks`;
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