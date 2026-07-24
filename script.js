// ========================================================
// A-LEVEL BUSINESS HUB - COMPREHENSIVE MASTER SCRIPT.JS
// ========================================================
// This script contains all previously accumulated questions plus 
// every single question extracted from the 2017 Paper 1 & Paper 2 PDFs.
// No older questions have been removed or overwritten.

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
        },
        {
            difficulty: "Hard",
            marks: 10,
            question: "Assess the consequences to a business, such as Spirit Airlines, of only selling its tickets online.",
            modelAnswer: "Selling exclusively online significantly lowers overhead costs (no commission to travel agents, fewer staff), allowing low-cost pricing. However, it alienates non-digital consumers and reduces impulse booking opportunities through physical travel agencies.",
            reasoning: "From 2017 Paper 1 Q1(c). Must weigh cost-efficiency and direct channel control against potential limitations in market reach and customer service accessibility."
        },
        {
            difficulty: "Hard",
            marks: 12,
            question: "Assess the likely importance of its market positioning to the success of a business, such as Emirates.",
            modelAnswer: "Clear market positioning allows Emirates to differentiate itself from low-cost carriers by offering a premium business-class experience. This justifies high ticket prices and builds brand loyalty among high-income travelers, though it makes them vulnerable during economic downturns.",
            reasoning: "From 2017 Paper 1 Q1(d). Requires evaluation of differentiation strategy, customer loyalty, and resilience against macroeconomic shocks."
        },
        {
            difficulty: "Hard",
            marks: 12,
            question: "Assess the likely impact of media health campaigns on the price elasticity of demand for health and fitness clubs.",
            modelAnswer: "Media health campaigns make demand more price inelastic because they increase consumer awareness and perceived necessity of fitness, lowering responsiveness to membership price hikes.",
            reasoning: "From 2017 Paper 3 Q1(c) / Paper 2 equivalent context. Must apply PED theory, explain how advertising shifts consumer preferences, and evaluate revenue behaviors."
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
        },
        {
            difficulty: "Hard",
            marks: 20,
            question: "Using Extracts G and H data for The Gym Group, evaluate whether Pure Gym should have targeted The Gym Group or LA Fitness for takeover.",
            modelAnswer: "The Gym Group offered low-cost operational synergies aligning with Pure Gym's model, though financial statements showed net losses in 2015. LA Fitness required a £20m refurbishment and culture change but faced fewer CMA regulatory blocks.",
            reasoning: "From 2017 Paper 3 Q2(d). Requires calculating ratios and weighing financial standing against integration risks."
        },
        {
            difficulty: "Medium",
            marks: 4,
            question: "Using the data in Extract B, calculate the difference in Morrisons' acid test ratio between 2014 and 2015. You are advised to show your working.",
            modelAnswer: "2014 acid test: (1429 - 852) / 2873 = 0.20. 2015 acid test: (1138 - 658) / 2273 = 0.21. Difference: 0.01 (or 0.0098).",
            reasoning: "From 2017 Paper 2 Q1(b). Formula required: (Current Assets - Inventory) / Current Liabilities."
        },
        {
            difficulty: "Hard",
            marks: 4,
            question: "Using the data in Extracts E and F, calculate the amount Pfizer would have saved in 2014 if it had paid corporation tax in Ireland, rather than the USA. You are advised to show your working.",
            modelAnswer: "Pfizer profit 2014 = $9.135bn. US tax rate 2014 = 40% ($3.654bn). Irish tax rate 2014 = 12.5% ($1.141875bn). Savings = $3.654bn - $1.141875bn = $2.512bn (or $2,512,125,000).",
            reasoning: "From 2017 Paper 1 Q2(b). Multi-step quantitative calculation involving profit figures and corporation tax percentages."
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
        },
        {
            difficulty: "Hard",
            marks: 20,
            question: "Evaluate whether financial rewards or non-financial techniques are more effective for reducing labor turnover in fitness clubs like Fitness First.",
            modelAnswer: "Financial rewards address extrinsic hygiene needs and offer short-term retention. Non-financial methods address intrinsic motivation, reducing long-term turnover.",
            reasoning: "From 2017 Paper context. Requires deep evaluation using motivational frameworks."
        },
        {
            difficulty: "Hard",
            marks: 20,
            question: "Evaluate these two options (remaining as a tall structure or changing to a flat organisational structure) and recommend which is most suitable for a business, such as Rolls-Royce.",
            modelAnswer: "Moving to a flat structure removes management layers, speeding up decision-making (as Warren East noted, saving a week per month) and cutting overhead costs in a struggling firm. However, a tall structure maintains tighter managerial control over highly skilled engineers and complex aviation projects.",
            reasoning: "From 2017 Paper 1 Q1(e). Comprehensive evaluation analyzing communication speed, control, redundancy costs, and operational safety in high-tech engineering."
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
        },
        {
            difficulty: "Medium",
            marks: 4,
            question: "Using the data in Extract F, explain one implication of the level of capacity utilisation for the soft drinks manufacturer A, compared to B. You are advised to show your working.",
            modelAnswer: "Manufacturer A capacity utilisation is 50% (250,000 / 500,000 * 100), whereas Manufacturer B is 80% (400,000 / 500,000 * 100). Implication: A has high excess capacity (50%), leading to higher unit fixed costs, whereas B operates much closer to full capacity, maximizing asset efficiency.",
            reasoning: "From 2017 Paper 2 Q2(b). Requires calculation and commercial interpretation regarding unit fixed costs."
        },
        {
            difficulty: "Hard",
            marks: 4,
            question: "Using the data in the network diagram (Paper 2 Q2a), calculate the Earliest Start Times (EST) and Latest Finishing Times (LFT) for each activity and identify the critical path.",
            modelAnswer: "Critical path is A-C-F-H with a total duration of 18 days (EST/LFT nodes calculated sequentially across nodes 1 to 5).",
            reasoning: "From 2017 Paper 2 Q2(a). Standard critical path analysis (CPA) calculation mapping forward and backward passes."
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
        },
        {
            difficulty: "Hard",
            marks: 8,
            question: "Assess two possible examples of trade-offs between profit and ethics for a health and fitness club.",
            modelAnswer: "Clubs may face a trade-off when pushing high-margin sales products or locking customers into long-term contracts despite unrealistic customer goals, prioritizing short-term revenue over ethical customer welfare.",
            reasoning: "From 2017 Paper 3 Q1(a) / Paper 2 context. Must link profit-maximizing action to an ethical compromise."
        },
        {
            difficulty: "Medium",
            marks: 8,
            question: "Assess the importance of two entrepreneurial roles carried out by Peter Roberts to the success of Pure Gym.",
            modelAnswer: "Peter Roberts identified the low-cost model gap in the UK market (innovation/spotting trends) and committed capital to launch sites (risk-taking), driving rapid expansion.",
            reasoning: "From 2017 Paper 3 Q2(a). Must identify specific entrepreneurial functions and link them directly to growth."
        },
        {
            difficulty: "Medium",
            marks: 4,
            question: "Using the data from Extract A and the information above, calculate the difference in percentage growth in air passenger numbers between 2015 and 2016. You are advised to show your working.",
            modelAnswer: "Percentage growth 2015 = 6.7% (from Extract A graph). Percentage growth 2016 calculated from passenger numbers: ((3.75bn - 3.5bn) / 3.5bn) * 100 = 7.14%. Difference = 7.14% - 6.7% = 0.44% (or 0.4%).",
            reasoning: "From 2017 Paper 1 Q1(a). Combines reading graph data with calculating percentage change from absolute values."
        },
        {
            difficulty: "Medium",
            marks: 4,
            question: "Explain how Morrisons may benefit from having a mission statement.",
            modelAnswer: "A mission statement communicates core human, ethical, and ecological values (Extract A), aligning employees behind a shared vision and guiding strategic decision-making.",
            reasoning: "From 2017 Paper 2 Q1(a). Links mission statement elements to employee motivation and corporate culture."
        },
        {
            difficulty: "Hard",
            marks: 10,
            question: "Assess the likely effects on a business, such as Morrisons, of a more competitive environment.",
            modelAnswer: "Increased competition from aggressive discounters like Aldi and Lidl (growing at over 17% in Extract C) forces established supermarkets to cut prices, squeezing profit margins and reducing market share unless they successfully differentiate.",
            reasoning: "From 2017 Paper 2 Q1(c). Evaluates price pressure, margin erosion, and strategic response options."
        },
        {
            difficulty: "Hard",
            marks: 12,
            question: "Assess whether the transformational leadership shown by David Potts is the main cause of Morrisons' improved performance.",
            modelAnswer: "David Potts introduced a clear turnaround vision, replaced directors, and cut prices via the 'I'm cheaper' campaign, directly lifting revenue and share price. However, external factors like improved consumer confidence and low interest rates also played a major role.",
            reasoning: "From 2017 Paper 2 Q1(d). Evaluates internal leadership changes versus external economic tailwinds."
        },
        {
            difficulty: "Hard",
            marks: 20,
            question: "Evaluate these two options (cutting prices further vs improving overall customer experience) and recommend which option might be preferred by Morrisons' shareholders.",
            modelAnswer: "Cutting prices matches discounters but severely damages profit margins in a price war. Improving customer experience (range, quality, service) builds long-term brand loyalty and premium pricing power, which is generally favored by shareholders seeking sustainable returns.",
            reasoning: "From 2017 Paper 2 Q1(e). Weighs short-term market share defense against long-term profitability and shareholder wealth."
        },
        {
            difficulty: "Hard",
            marks: 10,
            question: "Assess whether Innocent Drinks Ltd should have raised finance by selling a minority of its shares to a business, such as Coca-Cola.",
            modelAnswer: "Selling 18% to Coca-Cola provided £30m vital expansion capital and 120 years of commercial expertise. However, it risked compromising Innocent's ethical, independent brand image among consumers who viewed association with a sugary drinks giant as contradictory.",
            reasoning: "From 2017 Paper 2 Q2(c). Balances financial injection and operational synergy against brand dilution and ethical compromise."
        },
        {
            difficulty: "Hard",
            marks: 12,
            question: "Assess the likely effects for AG Barr of taking over Funkin, the cocktail mixer business.",
            modelAnswer: "Taking over Funkin allows AG Barr to diversify into an expanding cocktail mixer market and leverage its established distribution network to boost sales. However, integration risks and cultural clashes could dilute management focus from core brands like Irn Bru.",
            reasoning: "From 2017 Paper 2 Q2(d). Assesses inorganic growth, market expansion, synergy realization, and opportunity cost."
        },
        {
            difficulty: "Hard",
            marks: 20,
            question: "Evaluate these two aims (considering all stakeholders vs focusing purely on shareholders) and recommend which is most suitable for a business, such as Unilever.",
            modelAnswer: "A stakeholder approach (exemplified by the Unilever Sustainable Living Plan) builds long-term brand equity, environmental compliance, and ethical consumer loyalty. Conversely, a pure shareholder focus maximizes short-term profits and dividends but risks missing long-term sustainability trends.",
            reasoning: "From 2017 Paper 2 Q2(e). Evaluates corporate social responsibility (CSR) vs shareholder primacy through financial and strategic lenses."
        },
        {
            difficulty: "Hard",
            marks: 10,
            question: "Assess the ways in which specialisation might give a business, such as Pfizer, a competitive advantage when trading internationally.",
            modelAnswer: "Specializing in high-margin specialist drugs (like Botox and rare disease treatments) allows Pfizer to achieve economies of scale, superior product quality, and high barriers to entry globally, commanding premium pricing power across 70+ international markets.",
            reasoning: "From 2017 Paper 1 Q2(c). Links R&D specialization and global scale to international competitiveness."
        },
        {
            difficulty: "Hard",
            marks: 12,
            question: "Assess the likely impact on a business such as Pfizer, of a global merger with a business such as Allergan.",
            modelAnswer: "The $160bn merger creates the world's largest drug producer, expanding product portfolios and shifting headquarters to Ireland to lower corporation tax from 40% to 12.5%. However, massive integration complexities, potential job losses, and regulatory scrutiny present major execution risks.",
            reasoning: "From 2017 Paper 1 Q2(d). Evaluates tax inversion motives, economies of scale, and merger risks."
        },
        {
            difficulty: "Hard",
            marks: 20,
            question: "Evaluate the likely impacts on the Irish economy of Pfizer locating there and recommend if the Irish government should have supported this decision or not.",
            modelAnswer: "Pfizer's relocation and massive multinational presence boost Irish exports, productivity, and high-skilled employment in sectors like pharmaceuticals. However, it creates economic vulnerability to tax policy changes, potential skill shortages in labor markets, and inflated local costs.",
            reasoning: "From 2017 Paper 1 Q2(e). Comprehensive evaluation of Foreign Direct Investment (FDI) benefits versus economic dependency and labor market strains in Ireland."
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
    const diffText = current.difficulty ? `${current.difficulty} Level` : "";
    const marksText = current.marks ? ` [${current.marks} Marks]` : "";
    cardTopic.textContent = diffText ? `${activeTopic} • ${diffText}${marksText}` : `${activeTopic}${marksText}`;
    cardQuestion.textContent = current.question;
    userAnswer.value = "";
    feedbackSection.classList.add("hidden");
    submitBtn.classList.remove("hidden");
    progressBadge.textContent = `Question ${currentIdx + 1} of ${currentQuestions.length}`;
}

function checkAnswer() {
    const current = currentQuestions[currentIdx];
    modelAnswerText.textContent = current.modelAnswer;
    reasoningText.textContent = current.reasoning || "No examiner reasoning provided.";
    
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
