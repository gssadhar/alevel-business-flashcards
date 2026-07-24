// Categorized A-Level Business Past-Paper Database (AQA & Edexcel Aligned)
const questionDatabase = {
    "Marketing": [
        {
            difficulty: "Hard",
            question: "If a product has a Price Elasticity of Demand (PED) of -1.8, explain what happens to total revenue if the business raises its price.",
            modelAnswer: "Total revenue will fall because demand is price elastic (greater than 1 numeric value), meaning a percentage increase in price results in a proportionally larger percentage decrease in quantity demanded.",
            reasoning: "To score full marks, candidates must explicitly state that demand is price elastic, link the price increase to a greater drop in volume sold, and conclude the direct mathematical outcome on total revenue."
        },
        {
            difficulty: "Easy",
            question: "State two differences between above-the-line and below-the-line promotion.",
            modelAnswer: "Above-the-line uses mass media advertising directed at a wide audience (e.g., TV, radio) where the business pays an independent media agency. Below-the-line uses direct, controlled promotional methods targeted at specific individuals (e.g., direct mail, sales promotions, loyalty cards).",
            reasoning: "Direct definition question. 1 mark for identifying media type/reach and 1 mark for control or targeting differences."
        },
        {
            difficulty: "Medium",
            question: "Analyze one benefit to a luxury fashion brand of using selective distribution.",
            modelAnswer: "Selective distribution restricts outlets to high-end stores, which helps maintain an exclusive brand image and allows the business to charge premium prices.",
            reasoning: "Chain of analysis: Restricting outlets -> protects brand prestige -> prevents dilution by discount retailers -> sustains high profit margins."
        }
    ],
    "Finance": [
        {
            difficulty: "Medium",
            question: "Explain one limitation of using Average Rate of Return (ARR) for investment appraisal.",
            modelAnswer: "ARR ignores the timing of cash flows, treating money received in year one the same as year five, thus ignoring the time value of money.",
            reasoning: "Exam boards typically award 3 marks here: 1 mark for identifying the limitation (ignoring cash flow timing), 1 mark for development (impact of inflation or opportunity cost), and 1 mark for context application."
        },
        {
            difficulty: "Medium",
            question: "Explain why a rapidly growing retail business might experience cash flow problems despite making strong profits.",
            modelAnswer: "The business suffers from overtrading. As sales grow, it has to tie up working capital in purchasing larger inventories and extending trade credit to customers before receiving cash from them.",
            reasoning: "Examiners award marks for distinguishing between profit (an accounting concept) and cash (actual liquidity), showing how working capital gets trapped in receivables and inventory."
        },
        {
            difficulty: "Hard",
            question: "Evaluate the usefulness of payback period compared to net present value (NPV) when choosing between two long-term investment projects.",
            modelAnswer: "Payback calculates how quickly cash is recovered, making it simple and useful for assessing liquidity risk. However, NPV discounts future cash flows to account for the time value of money and total profitability over the project's entire life.",
            reasoning: "Full evaluation requires balancing the simplicity and focus on cash liquidity of payback against NPV's superior financial accuracy and long-term perspective."
        }
    ],
    "Human Resources": [
        {
            difficulty: "Medium",
            question: "Analyze one potential drawback of introducing a piece-rate payment system for manufacturing workers.",
            modelAnswer: "It can lead to a decline in product quality as workers rush production quantities to maximize their individual financial output rather than checking for defects.",
            reasoning: "Strong answers demonstrate a clear chain of cause and effect: Piece-rate incentivizes speed -> workers cut corners -> quality suffers -> potential increase in customer returns or waste costs."
        },
        {
            difficulty: "Easy",
            question: "Distinguish between a tall organizational structure and a flat organizational structure.",
            modelAnswer: "A tall structure has many layers of hierarchy and a narrow span of control. A flat structure has fewer layers and a wider span of control.",
            reasoning: "Core curriculum definitions. Candidates must correctly link management layers to span of control."
        },
        {
            difficulty: "Hard",
            question: "Discuss the view that non-financial motivators (like job enrichment) are more effective long-term than financial bonuses.",
            modelAnswer: "Financial rewards provide short-term boosts in productivity, but Herzberg's two-factor theory suggests true long-term motivation comes from hygiene and motivators like achievement, responsibility, and challenging work.",
            reasoning: "Requires a balanced argument using motivational theorists (Taylor, Mayo, Maslow, or Herzberg) and weighing short-term compliance against intrinsic job satisfaction."
        }
    ],
    "Operations": [
        {
            difficulty: "Medium",
            question: "Calculate the capacity utilization if a factory produces 8,000 units per week out of a maximum possible output of 10,000 units per week.",
            modelAnswer: "80% capacity utilization. Calculation: (Actual Output / Maximum Possible Output) * 100 -> (8,000 / 10,000) * 100 = 80%.",
            reasoning: "Standard quantitative skill mark. Candidates must show the formula or correct working out followed by the correct percentage sign to secure full marks."
        },
        {
            difficulty: "Hard",
            question: "Analyze one risk to a manufacturer of adopting a 'Just-in-Time' (JIT) inventory management system during a global supply chain disruption.",
            modelAnswer: "JIT relies on zero buffer stock and timely deliveries from suppliers. During disruptions, component shortages will immediately halt production lines, leading to unfulfilled orders and lost revenue.",
            reasoning: "Chain of analysis: Supply shock occurs -> no backup inventory exists -> production halts completely -> fixed overheads continue while output drops to zero."
        }
    ],
    "Strategy": [
        {
            difficulty: "Hard",
            question: "Using Ansoff's Matrix, explain the risk profile associated with a 'Diversification' strategy.",
            modelAnswer: "Diversification involves selling new products to entirely new markets. It carries the highest level of risk because the business has no prior experience or customer data in the new market and lacks familiarity with the new product lines.",
            reasoning: "Examiners look for clear definitions of both dimensions of Ansoff's matrix (products and markets) combined with a justification of why lack of operational experience multiplies financial exposure."
        },
        {
            difficulty: "Hard",
            question: "Analyze how a depreciation of the domestic currency (e.g., British Pound falling against the US Dollar) impacts a UK-based manufacturing business that imports raw materials from the USA.",
            modelAnswer: "Costs of production will rise because raw materials priced in dollars become more expensive to buy in pounds, squeezing profit margins unless the business passes costs onto customers through higher prices.",
            reasoning: "Requires application of the economic concept of exchange rates. Chain of analysis must link currency change to cost of goods sold and profit margins."
        }
    ]
};

let activeTopic = null;
let currentIdx = 0;
let currentQuestions = [];

// DOM Elements
const dashboardView = document.getElementById("dashboard-view");
const quizView = document.getElementById("quiz-view");
const topicsGrid = document.getElementById("topics-grid");
const homeBtn = document.getElementById("home-btn");
const cardTopic = document.getElementById("card-topic");
const progressBadge = document.getElementById("progress-badge");
const cardQuestion = document.getElementById("card-question");
const userAnswer = document.getElementById("user-answer");
const submitBtn = document.getElementById("submit-btn");
const feedbackSection = document.getElementById("feedback-section");
const modelAnswerText = document.getElementById("model-answer-text");
const reasoningText = document.getElementById("reasoning-text");

// Initialize Dashboard
function renderDashboard() {
    dashboardView.classList.remove("hidden");
    quizView.classList.add("hidden");
    homeBtn.classList.add("hidden");
    
    topicsGrid.innerHTML = "";
    
    for (const topic in questionDatabase) {
        const count = questionDatabase[topic].length;
        const card = document.createElement("div");
        card.className = "bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg hover:border-indigo-200 transition cursor-pointer flex flex-col justify-between";
        card.innerHTML = `
            <div>
                <h3 class="text-lg font-bold text-slate-900 mb-1">${topic}</h3>
                <p class="text-xs text-slate-500">${count} revision flashcard questions available</p>
            </div>
            <div class="mt-4 flex items-center text-xs font-semibold text-indigo-600">
                Start Topic &rarr;
            </div>
        `;
        card.onclick = () => startQuiz(topic);
        topicsGrid.appendChild(card);
    }
}

function startQuiz(topic) {
    activeTopic = topic;
    currentQuestions = questionDatabase[topic];
    currentIdx = 0;
    
    dashboardView.classList.add("hidden");
    quizView.classList.remove("hidden");
    homeBtn.classList.remove("hidden");
    
    loadCard();
}

function loadCard() {
    const current = currentQuestions[currentIdx];
    cardTopic.textContent = `${activeTopic} • ${current.difficulty} Level`;
    cardQuestion.textContent = current.question;
    userAnswer.value = "";
    feedbackSection.classList.add("hidden");
    submitBtn.classList.remove("hidden");
    progressBadge.textContent = `Question ${currentIdx + 1} of ${currentQuestions.length}`;
}

function checkAnswer() {
    const current = currentQuestions[currentIdx];
    modelAnswerText.textContent = current.modelAnswer;
    reasoningText.textContent = current.reasoning;
    
    submitBtn.classList.add("hidden");
    feedbackSection.classList.remove("hidden");
}

function nextQuestion() {
    currentIdx++;
    if (currentIdx < currentQuestions.length) {
        loadCard();
    } else {
        alert("You have completed all questions in this topic!");
        returnToDashboard();
    }
}

function returnToDashboard() {
    renderDashboard();
}

// Run on page load
window.onload = renderDashboard;
