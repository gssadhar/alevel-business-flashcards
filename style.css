// A-Level Business Past-Paper Style Database (AQA & Edexcel Aligned)
const quizData = [
    {
        topic: "Finance - Investment Appraisal",
        difficulty: "Medium",
        question: "Explain one limitation of using Average Rate of Return (ARR) for investment appraisal.",
        modelAnswer: "ARR ignores the timing of cash flows, treating money received in year one the same as year five, thus ignoring the time value of money.",
        reasoning: "Exam boards typically award 3 marks here: 1 mark for identifying the limitation (ignoring cash flow timing), 1 mark for development (impact of inflation or opportunity cost), and 1 mark for context application."
    },
    {
        topic: "Marketing - Elasticity",
        difficulty: "Hard",
        question: "If a product has a Price Elasticity of Demand (PED) of -1.8, explain what happens to total revenue if the business raises its price.",
        modelAnswer: "Total revenue will fall because demand is price elastic (greater than 1 numeric value), meaning a percentage increase in price results in a proportionally larger percentage decrease in quantity demanded.",
        reasoning: "To score full marks, candidates must explicitly state that demand is price elastic, link the price increase to a greater drop in volume sold, and conclude the direct mathematical outcome on total revenue."
    },
    {
        topic: "Human Resources - Workforce Performance",
        difficulty: "Medium",
        question: "Analyze one potential drawback of introducing a piece-rate payment system for manufacturing workers.",
        modelAnswer: "It can lead to a decline in product quality as workers rush production quantities to maximize their individual financial output rather than checking for defects.",
        reasoning: "Strong answers demonstrate a clear chain of cause and effect: Piece-rate incentivizes speed -> workers cut corners -> quality suffers -> potential increase in customer returns or waste costs."
    },
    {
        topic: "Strategy - Strategic Choice",
        difficulty: "Hard",
        question: "Using Ansoff's Matrix, explain the risk profile associated with a 'Diversification' strategy.",
        modelAnswer: "Diversification involves selling new products to entirely new markets. It carries the highest level of risk because the business has no prior experience or customer data in the new market and lacks familiarity with the new product lines.",
        reasoning: "Examiners look for clear definitions of both dimensions of Ansoff's matrix (products and markets) combined with a justification of why lack of operational experience multiplies financial exposure."
    }
];

let currentIdx = 0;

const topicEl = document.getElementById("card-topic");
const difficultyEl = document.getElementById("card-difficulty");
const questionEl = document.getElementById("card-question");
const userAnswerEl = document.getElementById("user-answer");
const feedbackSection = document.getElementById("feedback-section");
const modelAnswerText = document.getElementById("model-answer-text");
const reasoningText = document.getElementById("reasoning-text");
const submitBtn = document.getElementById("submit-btn");
const progressBadge = document.getElementById("progress-badge");

function loadCard() {
    const current = quizData[currentIdx];
    topicEl.textContent = current.topic;
    difficultyEl.textContent = current.difficulty;
    questionEl.textContent = current.question;
    userAnswerEl.value = "";
    feedbackSection.classList.add("hidden");
    submitBtn.classList.remove("hidden");
    progressBadge.textContent = `Question ${currentIdx + 1} of ${quizData.length}`;
}

function checkAnswer() {
    const current = quizData[currentIdx];
    modelAnswerText.textContent = current.modelAnswer;
    reasoningText.textContent = current.reasoning;
    
    submitBtn.classList.add("hidden");
    feedbackSection.classList.remove("hidden");
}

function nextQuestion() {
    currentIdx = (currentIdx + 1) % quizData.length;
    loadCard();
}

// Initial load on page start
window.onload = loadCard;
