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
                <p class="text-sm text-slate-500">Choose a section below to target your weaker areas with 30+ past-paper questions per topic.</p>
            </div>
            
            <div id="topics-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <!-- Populated by JavaScript -->
            </div>
        </div>

        <!-- QUIZ VIEW -->
        <div id="quiz-view" class="hidden">
            <div class="flex justify-between items-center mb-3">
                <span id="card-topic" class="text-xs font-bold text-indigo-600 uppercase tracking-wider">Topic</span>
                <span id="progress-badge" class="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full font-semibold">Question 1 of 30</span>
            </div>

            <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-slate-100">
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
                        <h3 class="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Model Answer:</h3>
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

    <!-- Comprehensive Question Database -->
    <script>
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
                    question: "Explain how a business might use extension strategies during the decline stage of the product life cycle.",
                    modelAnswer: "Extension strategies involve updating product features, finding new markets, changing packaging, or launching new promotional campaigns to revive sales before the product becomes obsolete.",
                    reasoning: "Examiners look for specific examples of extension strategies (e.g., rebranding, re-targeting international markets) and a clear link to extending the maturity phase."
                },
                {
                    difficulty: "Medium",
                    question: "Distinguish between market orientation and product orientation.",
                    modelAnswer: "Market orientation focuses heavily on conducting consumer market research to identify and meet customer needs. Product orientation focuses primarily on internal production capabilities and the quality of the product itself rather than consumer demand.",
                    reasoning: "Clear contrasting definitions. 1 mark for customer focus/research and 1 mark for internal engineering/product focus."
                },
                {
                    difficulty: "Easy",
                    question: "Define the term 'market segmentation'.",
                    modelAnswer: "Market segmentation is the process of dividing a broad target market into smaller, identifiable sub-groups of consumers with shared characteristics, needs, or behaviors.",
                    reasoning: "Straightforward knowledge recall (AO1). Must identify the division of a market and the common grouping factors."
                },
                {
                    difficulty: "Medium",
                    question: "Explain one benefit of primary market research over secondary market research.",
                    modelAnswer: "Primary research is collected first-hand directly from the target market, meaning it is completely up-to-date and tailored specifically to the exact questions or problems the business needs answered.",
                    reasoning: "Award marks for identifying exclusivity/customization and currency of data compared to pre-existing secondary sources."
                },
                {
                    difficulty: "Hard",
                    question: "Evaluate whether penetration pricing is more effective than skimming pricing when launching a completely new technological gadget.",
                    modelAnswer: "Penetration pricing sets a low initial price to capture mass market share quickly, which works well if demand is elastic and competition is high. Skimming sets a high price initially to recoup high R&D costs from early adopters, best used for unique, innovative products with inelastic demand.",
                    reasoning: "Requires a balanced evaluative judgment considering R&D recovery, elasticity, competitive rivalry, and brand positioning."
                },
                {
                    difficulty: "Easy",
                    question: "State two methods of demographic market segmentation.",
                    modelAnswer: "Age and gender (other valid answers include income, social class, ethnicity, or family size).",
                    reasoning: "Direct recall of segmentation variables."
                },
                {
                    difficulty: "Medium",
                    question: "Explain how Income Elasticity of Demand (YED) differs for inferior goods compared to normal goods.",
                    modelAnswer: "Normal goods have a positive YED, meaning demand rises as consumer incomes rise. Inferior goods have a negative YED, meaning demand falls as consumer incomes rise because consumers switch to better alternatives.",
                    reasoning: "Requires clear theoretical understanding of consumer income behavior and mathematical sign distinction."
                },
                {
                    difficulty: "Hard",
                    question: "Analyze the potential marketing risks of relying heavily on social media influencers for promotion.",
                    modelAnswer: "Relying on influencers exposes a brand to reputational damage if the influencer behaves unethically or faces a public scandal, instantly transferring negative public perception onto the endorsed brand.",
                    reasoning: "Chain of analysis: Influencer scandal -> public backlash -> association with brand -> loss of consumer trust and plummeting sales."
                },
                {
                    difficulty: "Easy",
                    question: "What is meant by a 'brand'?",
                    modelAnswer: "A brand is a name, term, sign, symbol, design, or combination of these intended to identify the goods or services of one seller and differentiate them from those of competitors.",
                    reasoning: "Standard definition question. Focus on differentiation and unique identity."
                },
                {
                    difficulty: "Medium",
                    question: "Explain why niche marketing can allow smaller businesses to charge higher profit margins.",
                    modelAnswer: "Niche marketing targets a specific, specialized segment with unique requirements. Because larger competitors often ignore these small segments, customers are willing to pay premium prices for specialized solutions.",
                    reasoning: "Chain of analysis: Specialized focus -> lack of direct mass-market competition -> perceived unique value -> higher pricing power."
                },
                {
                    difficulty: "Hard",
                    question: "Evaluate the usefulness of the Boston Matrix in managing a multi-product firm's portfolio.",
                    modelAnswer: "The Boston Matrix categorizes products into Cash Cows, Stars, Question Marks, and Dogs based on market share and market growth, helping management allocate cash flow efficiently. However, it is overly simplistic and ignores complex external market dynamics.",
                    reasoning: "Full evaluation balances strategic resource allocation benefits against the limitation of reducing complex portfolio analysis to a simple 2x2 grid."
                },
                {
                    difficulty: "Easy",
                    question: "State two elements of the marketing mix (the 4 Ps).",
                    modelAnswer: "Product and Price (Promotion and Place are also correct).",
                    reasoning: "Direct recall of McCarthy's 4 Ps."
                },
                {
                    difficulty: "Medium",
                    question: "Calculate the percentage change in sales volume if a firm's sales increase from 40,000 units to 46,000 units.",
                    modelAnswer: "15% increase. Calculation: ((46,000 - 40,000) / 40,000) * 100 = (6,000 / 40,000) * 100 = 15%.",
                    reasoning: "Quantitative skills assessment. Correct formula utilization (change / original * 100) and calculation steps."
                },
                {
                    difficulty: "Hard",
                    question: "Analyze the impact of an economic recession on the sales volume of inferior goods.",
                    modelAnswer: "During a recession, general consumer incomes fall, causing demand for inferior goods to actually increase as budget-conscious consumers substitute expensive branded goods for cheaper generic alternatives.",
                    reasoning: "Chain of analysis: Economic downturn -> disposable incomes drop -> substitution effect towards low-cost goods -> sales volume of inferior goods rises."
                },
                {
                    difficulty: "Easy",
                    question: "Define 'test marketing'.",
                    modelAnswer: "Test marketing involves launching a new product in a small, restricted geographical market before a full-scale national or global rollout to test consumer reaction.",
                    reasoning: "Basic marketing terminology recall."
                },
                {
                    difficulty: "Medium",
                    question: "Explain how public relations (PR) differs from advertising.",
                    modelAnswer: "Advertising involves paid placement of messages through mass media channels where the business maintains full creative control. PR focuses on building positive public relations and earned media coverage through press releases, sponsorships, and events without direct ad space payment.",
                    reasoning: "Contrasting control, payment model, and credibility mechanisms."
                },
                {
                    difficulty: "Hard",
                    question: "Discuss whether multinational corporations should adopt a global marketing strategy or a localized marketing strategy.",
                    modelAnswer: "A global strategy achieves significant economies of scale and uniform brand identity. However, a localized (multidomestic) strategy adapts the marketing mix to cultural, legal, and linguistic nuances, yielding higher customer relevance and conversion rates.",
                    reasoning: "Balanced evaluation weighing cost efficiencies of standardization against revenue benefits of cultural adaptation."
                },
                {
                    difficulty: "Easy",
                    question: "State what is meant by 'dynamic pricing'.",
                    modelAnswer: "Dynamic pricing is a pricing strategy where businesses flexibly adjust prices based on real-time market demand and supply fluctuations (e.g., airline tickets or ride-sharing apps).",
                    reasoning: "Clear conceptual definition."
                },
                {
                    difficulty: "Medium",
                    question: "Analyze why a business might conduct qualitative market research rather than quantitative research.",
                    modelAnswer: "Qualitative research explores consumer attitudes, motivations, and underlying opinions in-depth through focus groups or interviews, uncovering *why* consumers behave a certain way rather than just the numerical *what*.",
                    reasoning: "Chain of analysis: Focus on deep psychological insights -> better understanding of emotional drivers -> enhanced product design or branding decisions."
                },
                {
                    difficulty: "Hard",
                    question: "Evaluate the effectiveness of viral marketing campaigns for start-up businesses.",
                    modelAnswer: "Viral marketing can achieve massive brand awareness rapidly at very low financial cost due to organic user sharing. However, it is unpredictable, difficult to control, and may generate high visibility without converting into actual long-term sales revenue.",
                    reasoning: "Balanced assessment of low-cost exponential reach versus high uncertainty and risk of message distortion."
                },
                {
                    difficulty: "Easy",
                    question: "Identify two features of industrial (B2B) marketing compared to consumer (B2C) marketing.",
                    modelAnswer: "B2B involves fewer buyers, higher transaction values, and longer sales cycles (any two valid points).",
                    reasoning: "Knowledge recall comparing business-to-business and business-to-consumer characteristics."
                },
                {
                    difficulty: "Medium",
                    question: "Explain how customer relationship management (CRM) systems can improve marketing efficiency.",
                    modelAnswer: "CRM systems track customer purchase histories, preferences, and interactions centrally, enabling businesses to run highly targeted, personalized email and promotional campaigns that boost customer retention.",
                    reasoning: "Chain of analysis: Data centralization -> targeted segmentation -> tailored communications -> higher customer lifetime value (LTV)."
                },
                {
                    difficulty: "Hard",
                    question: "Analyze the strategic implications of high brand loyalty in an oligopolistic market.",
                    modelAnswer: "High brand loyalty creates strong barriers to entry and makes demand price inelastic for existing firms, allowing them to engage in non-price competition and maintain high profit margins without risking severe customer loss.",
                    reasoning: "Chain of analysis: Loyal customer base -> lower cross-price elasticity -> pricing power and insulated market share against rival price wars."
                },
                {
                    difficulty: "Easy",
                    question: "Define the term 'loss leader'.",
                    modelAnswer: "A loss leader is a pricing tactic where a product is priced below its cost of production to attract customers into a store or website in the hope they will purchase other profitable items.",
                    reasoning: "Standard business definition recall."
                },
                {
                    difficulty: "Medium",
                    question: "Explain why packaging can act as a crucial 'silent salesperson' in retail environments.",
                    modelAnswer: "In self-service retail environments, packaging design, color schemes, and labeling communicate product quality, brand values, and key features directly to shoppers at the point of purchase.",
                    reasoning: "Chain of analysis: Visual appeal on shelves -> captures consumer attention -> influences impulse buying decisions without direct sales staff intervention."
                },
                {
                    difficulty: "Hard",
                    question: "Evaluate the use of ethical marketing as a long-term competitive strategy.",
                    modelAnswer: "Ethical marketing builds deep consumer trust, enhances brand reputation, and attracts ethically conscious segments, leading to strong long-term loyalty. However, it can involve higher operational compliance costs and risks severe brand damage if ethical claims are perceived as greenwashing.",
                    reasoning: "Comprehensive evaluation balancing brand equity and loyalty gains against cost burdens and public scrutiny risks."
                },
                {
                    difficulty: "Easy",
                    question: "State two methods of direct marketing.",
                    modelAnswer: "Direct mail and telemarketing (or email marketing / text message marketing).",
                    reasoning: "Basic promotional channel recall."
                },
                {
                    difficulty: "Medium",
                    question: "Explain how product line extension differs from brand extension.",
                    modelAnswer: "Product line extension involves launching new items in the same product category under the same brand name (e.g., new flavors), whereas brand extension uses an established brand name to enter an entirely new product category.",
                    reasoning: "Clear conceptual distinction between expanding depth within a line versus stretching across new categories."
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
                    difficulty: "Easy",
                    question: "State the formula for calculating gross profit margin.",
                    modelAnswer: "Gross Profit Margin = (Gross Profit / Revenue) * 100",
                    reasoning: "Standard quantitative formula recall. Both components (gross profit and revenue) must be correct to secure the mark."
                },
                {
                    difficulty: "Hard",
                    question: "Analyze the impact of a high gearing ratio on a business during a period of rising interest rates.",
                    modelAnswer: "A high gearing ratio means the business relies heavily on long-term debt. When interest rates rise, loan repayments and interest expenses increase significantly, squeezing net profit and creating liquidity risks.",
                    reasoning: "Chain of analysis: High debt -> rate hikes increase finance costs -> profit before tax falls -> higher risk of default or inability to pay dividends."
                },
                {
                    difficulty: "Easy",
                    question: "Define the term 'working capital'.",
                    modelAnswer: "Working capital is the day-to-day finance needed to run a business, calculated as Current Assets minus Current Liabilities.",
                    reasoning: "Core accounting definition recall (AO1)."
                },
                {
                    difficulty: "Medium",
                    question: "Calculate the net profit if a business has revenues of $500,000, cost of sales of $200,000, and total expenses of $180,000.",
                    modelAnswer: "$120,000. Gross Profit = $500,000 - $200,000 = $300,000. Net Profit = $300,000 - $180,000 = $120,000.",
                    reasoning: "Standard quantitative calculation covering gross profit deduction followed by operating/total expense subtraction."
                },
                {
                    difficulty: "Hard",
                    question: "Analyze the limitations of using historical financial statements to forecast future business performance.",
                    modelAnswer: "Historical accounts reflect past results under past market conditions and do not account for sudden changes in external macro environments, technological disruption, or shifting competitor strategies.",
                    reasoning: "Chain of analysis: Past data assumes trend continuation -> market volatility or disruption occurs -> forecasts become inaccurate, leading to poor strategic planning."
                },
                {
                    difficulty: "Easy",
                    question: "State two sources of internal finance.",
                    modelAnswer: "Retained profit and the sale of fixed assets (or owner's capital / working capital reduction).",
                    reasoning: "Direct recall of internal capital sources."
                },
                {
                    difficulty: "Medium",
                    question: "Explain how trade credit works as a source of short-term finance.",
                    modelAnswer: "Trade credit allows a business to purchase supplies or raw materials from a supplier immediately and defer payment for an agreed period (e.g., 30 to 90 days), preserving short-term cash flow.",
                    reasoning: "Award marks for identifying delayed payment terms and the conservation of immediate liquidity."
                },
                {
                    difficulty: "Hard",
                    question: "Evaluate whether issuing shares (equity finance) is better than taking out a bank loan (debt finance) for a growing public limited company.",
                    modelAnswer: "Issuing shares does not require interest repayments and permanently strengthens the equity base, but dilutes ownership control and EPS. Debt finance preserves ownership control and interest is tax-deductible, but increases gearing and mandatory fixed repayment obligations.",
                    reasoning: "Comprehensive evaluation balancing control dilution and gearing risk against interest burdens and repayment safety."
                },
                {
                    difficulty: "Easy",
                    question: "Define 'break-even point'.",
                    modelAnswer: "The break-even point is the level of output where total revenues equal total costs, meaning the business makes neither a profit nor a loss.",
                    reasoning: "Standard financial terminology definition."
                },
                {
                    difficulty: "Medium",
                    question: "Calculate the break-even output if fixed costs are $40,000, selling price per unit is $20, and variable cost per unit is $12.",
                    modelAnswer: "5,000 units. Calculation: Fixed Costs / Contribution per unit -> $40,000 / ($20 - $12) = $40,000 / $8 = 5,000 units.",
                    reasoning: "Quantitative formula application covering contribution calculation and fixed cost division."
                },
                {
                    difficulty: "Hard",
                    question: "Analyze the strategic usefulness of variance analysis for budget management.",
                    modelAnswer: "Variance analysis compares actual financial outcomes against budgeted figures, allowing managers to identify favorable or adverse deviations quickly and take corrective operational action.",
                    reasoning: "Chain of analysis: Budget tracking -> variance detected (e.g., higher material costs) -> investigation into root cause -> management intervention to control expenditure."
                },
                {
                    difficulty: "Easy",
                    question: "State two external stakeholders who analyze a company's published accounts.",
                    modelAnswer: "Banks/creditors and shareholders/investors (or tax authorities, competitors, customers).",
                    reasoning: "Stakeholder identification recall."
                },
                {
                    difficulty: "Medium",
                    question: "Explain the difference between capital expenditure and revenue expenditure.",
                    modelAnswer: "Capital expenditure is spending on long-term fixed assets (e.g., machinery, buildings) that stay in the business for over a year. Revenue expenditure is spending on day-to-day operating expenses (e.g., wages, utility bills, raw materials).",
                    reasoning: "Clear contrasting definitions based on asset longevity and operational purpose."
                },
                {
                    difficulty: "Hard",
                    question: "Evaluate the limitations of break-even analysis as a decision-making tool for managers.",
                    modelAnswer: "Break-even assumes all output produced is sold at a constant price and that variable costs remain strictly linear. In reality, discounts, bulk purchasing, and shifting pricing models invalidate these static assumptions.",
                    reasoning: "Balanced evaluation weighing visual simplicity and quick scenario planning against unrealistic linearity and constant price assumptions."
                },
                {
                    difficulty: "Easy",
                    question: "What is meant by 'liquidity' in finance?",
                    modelAnswer: "Liquidity refers to how quickly and easily an asset can be converted into cash to meet immediate short-term financial obligations.",
                    reasoning: "Basic financial literacy definition."
                },
                {
                    difficulty: "Medium",
                    question: "Explain why a business with high fixed costs faces high operating leverage.",
                    modelAnswer: "High fixed costs mean that once the break-even point is surpassed, every additional unit sold generates a large contribution toward profit, but small drops in sales rapidly turn profits into severe losses.",
                    reasoning: "Chain of analysis: High overhead structure -> magnified profit swings relative to small revenue shifts -> heightened financial risk."
                },
                {
                    difficulty: "Hard",
                    question: "Analyze the impact of inflation on a business holding high levels of cash and receivables.",
                    modelAnswer: "Inflation erodes the real purchasing power of cash holdings and reduces the real value of receivables collected later, impairing the firm's real capital value.",
                    reasoning: "Chain of analysis: Inflation -> monetary value remains same while purchasing power drops -> loss of real value on liquid assets and customer debts."
                },
                {
                    difficulty: "Easy",
                    question: "State the formula for current ratio.",
                    modelAnswer: "Current Ratio = Current Assets / Current Liabilities",
                    reasoning: "Direct formula recall for liquidity measurement."
                },
                {
                    difficulty: "Medium",
                    question: "Explain one advantage of using crowdsourcing for start-up finance.",
                    modelAnswer: "Crowdsourcing allows entrepreneurs to raise small amounts of capital from a large number of people online, while simultaneously testing market demand and building early customer brand advocates.",
                    reasoning: "Award marks for identifying capital access combined with marketing or validation benefits."
                },
                {
                    difficulty: "Hard",
                    question: "Evaluate the appropriateness of venture capital funding for a high-risk, early-stage biotechnology start-up.",
                    modelAnswer: "Venture capital provides crucial funding and expert mentorship when traditional bank loans are unavailable due to high risk. However, it requires surrendering a significant equity stake and loss of complete managerial independence.",
                    reasoning: "Balanced evaluation weighing vital capital access and expertise against dilution of control and high return expectations."
                },
                {
                    difficulty: "Easy",
                    question: "Define 'dividends'.",
                    modelAnswer: "Dividends are a portion of a company's after-tax profits distributed proportionally to its shareholders as a return on their investment.",
                    reasoning: "Basic corporate finance definition."
                },
                {
                    difficulty: "Medium",
                    question: "Explain how discounting future cash flows accounts for the time value of money.",
                    modelAnswer: "Discounting applies a discount rate to future cash flows to reflect that money available today is worth more than the same amount in the future due to potential earning capacity and inflation.",
                    reasoning: "Explanation of financial theory regarding present versus future value."
                },
                {
                    difficulty: "Hard",
                    question: "Analyze why a business might intentionally maintain a low acid-test (quick) ratio.",
                    modelAnswer: "A low acid-test ratio (excluding inventory) indicates minimal liquid assets held idle, allowing management to reinvest capital into higher-yielding growth projects or reduce expensive short-term debt, though it increases liquidity vulnerability.",
                    reasoning: "Chain of analysis: Minimizing idle cash -> higher asset utilization and returns -> increased risk of immediate cash flow insolvency if a sudden crisis occurs."
                },
                {
                    difficulty: "Easy",
                    question: "State two limitations of cash flow forecasts.",
                    modelAnswer: "They are based on estimates/assumptions and can be rendered inaccurate by unexpected external economic shocks (any two valid points).",
                    reasoning: "Direct recall of forecasting limitations."
                },
                {
                    difficulty: "Medium",
                    question: "Explain how depreciation affects reported profit without impacting cash flow.",
                    modelAnswer: "Depreciation is a non-cash accounting expense that spreads the cost of a fixed asset over its useful life, reducing reported profit on the income statement without requiring any immediate cash outflow.",
                    reasoning: "Distinction between non-cash expenses and actual cash movements."
                },
                {
                    difficulty: "Hard",
                    question: "Discuss whether retained profit is always the best source of long-term finance for an established manufacturing firm.",
                    modelAnswer: "Retained profit avoids interest charges, debt covenants, and ownership dilution. However, it may be insufficient for massive capital projects and denies shareholders immediate dividend payouts.",
                    reasoning: "Balanced evaluation comparing financial independence and zero debt cost against scale limitations and shareholder opportunity cost."
                },
                {
                    difficulty: "Easy",
                    question: "Define 'insolvency'.",
                    modelAnswer: "Insolvency is a financial state in which a business or individual is unable to pay debts as they fall due or has liabilities exceeding total assets.",
                    reasoning: "Core legal/financial definition recall."
                },
                {
                    difficulty: "Medium",
                    question: "Explain how debtor management policies can improve cash flow.",
                    modelAnswer: "Enforcing stricter credit terms, credit checks, and prompt invoicing encourages customers to pay faster, reducing trade receivables and accelerating cash inflows.",
                    reasoning: "Chain of analysis: Stricter credit control -> shorter collection periods -> lower working capital tied up -> improved liquidity."
                }
            ],
            "Human Resources": [
                {
                    difficulty: "Medium",
                    question: "Explain how a tall organizational structure can hinder internal communication.",
                    modelAnswer: "A tall structure features many hierarchical layers of management. Messages passing from top management to frontline workers must travel through multiple intermediaries, causing delays, misunderstandings, and distortion of information.",
                    reasoning: "Examiners look for the link between multiple management layers, communication bottlenecks, and message distortion."
                },
                {
                    difficulty: "Hard",
                    question: "Evaluate Herzberg's Two-Factor Theory in motivating professional knowledge workers.",
                    modelAnswer: "Herzberg distinguishes between hygiene factors (salary, working conditions) that prevent dissatisfaction and motivators (achievement, recognition, responsibility) that drive true job satisfaction. For knowledge workers, intrinsic motivators are vital, though basic hygiene factors must still be competitive.",
                    reasoning: "Full evaluation requires applying hygiene vs. motivator concepts directly to a professional context, noting that addressing hygiene alone does not create motivation."
                },
                {
                    difficulty: "Easy",
                    question: "State two financial methods of employee motivation.",
                    modelAnswer: "Piece rate and commission (or bonus, profit sharing, fringe benefits).",
                    reasoning: "Direct recall of financial motivational incentives."
                },
                {
                    difficulty: "Hard",
                    question: "Analyze the impact of high labor turnover on a retail business's cost structure.",
                    modelAnswer: "High labor turnover requires constant recruitment, onboarding, and training of new staff, significantly increasing HR administrative expenses and reducing operational productivity during the training window.",
                    reasoning: "Chain of analysis: High staff churn -> frequent recruitment and lost output -> rising recruitment costs and lower gross/net margins."
                },
                {
                    difficulty: "Easy",
                    question: "Define the term 'labor productivity'.",
                    modelAnswer: "Labor productivity is a measure of the output produced per employee over a given period of time.",
                    reasoning: "Core operational efficiency definition (AO1)."
                },
                {
                    difficulty: "Medium",
                    question: "Calculate labor productivity if 40 workers produce 2,000 units in a week.",
                    modelAnswer: "50 units per worker. Calculation: Total Output / Number of Workers -> 2,000 / 40 = 50 units per worker.",
                    reasoning: "Straightforward quantitative calculation of workforce output efficiency."
                },
                {
                    difficulty: "Hard",
                    question: "Discuss whether Taylor's scientific management theory is suitable for modern knowledge-based industries.",
                    modelAnswer: "Taylor emphasizes strict division of labor, standardization, and financial piece-rate incentives. While effective for repetitive manufacturing tasks, it fails to motivate modern knowledge workers who value autonomy, creativity, and intellectual engagement.",
                    reasoning: "Evaluative contrast between autocratic/scientific efficiency models and modern participative working environments."
                },
                {
                    difficulty: "Easy",
                    question: "State two non-financial methods of motivation.",
                    modelAnswer: "Job enrichment and worker empowerment (or job rotation, teamwork, consultation).",
                    reasoning: "Recall of non-monetary motivational strategies."
                },
                {
                    difficulty: "Medium",
                    question: "Explain how flexible working arrangements can improve staff retention.",
                    modelAnswer: "Flexible working hours or remote options allow employees to better balance personal and professional commitments, increasing job satisfaction and reducing burnout, which lowers voluntary staff turnover.",
                    reasoning: "Chain of analysis: Work-life balance -> higher job satisfaction -> reduced intention to quit -> improved retention rates."
                },
                {
                    difficulty: "Hard",
                    question: "Analyze the strategic implications of delayering an organization.",
                    modelAnswer: "Delayering removes middle management layers to flatten the hierarchy. This reduces overhead salary costs and speeds up internal communication, but can increase workloads and stress for remaining managers and damage employee morale.",
                    reasoning: "Balanced analysis covering cost and communication benefits against span-of-control stress and job security fears."
                },
                {
                    difficulty: "Easy",
                    question: "Define 'recruitment'.",
                    modelAnswer: "Recruitment is the process of identifying the need for a new employee, defining the job role, attracting candidates, and selecting the most suitable applicant.",
                    reasoning: "Standard HR process definition."
                },
                {
                    difficulty: "Medium",
                    question: "Explain one advantage of internal recruitment over external recruitment.",
                    modelAnswer: "Internal recruitment is faster and cheaper because applicants are already familiar with the business culture, systems, and operations, reducing induction and training time.",
                    reasoning: "Award marks for cost/time savings and proven cultural alignment."
                },
                {
                    difficulty: "Hard",
                    question: "Evaluate the effectiveness of appraisal systems in managing workforce performance.",
                    modelAnswer: "Appraisals provide structured feedback, identify training needs, and align individual employee goals with corporate strategy. However, if poorly conducted, they can become subjective, demotivating box-ticking exercises.",
                    reasoning: "Comprehensive evaluation weighing developmental alignment and performance tracking against subjectivity and employee anxiety."
                },
                {
                    difficulty: "Easy",
                    question: "What is meant by 'redundancy'?",
                    modelAnswer: "Redundancy is a form of dismissal that occurs when a job role is no longer needed by a business, often due to restructuring, closure, or automation.",
                    reasoning: "Legal HR definition recall."
                },
                {
                    difficulty: "Medium",
                    question: "Explain why empowerment can lead to higher quality customer service in a hotel.",
                    modelAnswer: "Empowerment gives frontline staff the authority to resolve customer complaints immediately (e.g., offering a complimentary upgrade) without seeking managerial approval, creating a faster, more satisfying customer experience.",
                    reasoning: "Chain of analysis: Staff autonomy -> rapid problem resolution -> customer delight -> enhanced brand reputation."
                },
                {
                    difficulty: "Hard",
                    question: "Analyze the challenges a business faces when managing a major organizational change program.",
                    modelAnswer: "Managing change often triggers strong employee resistance, anxiety, and fear of the unknown, which can lead to drops in productivity, lower morale, and potential industrial action if communication is poor.",
                    reasoning: "Chain of analysis: Organizational restructuring -> employee uncertainty -> psychological resistance -> operational disruption."
                },
                {
                    difficulty: "Easy",
                    question: "State two types of training.",
                    modelAnswer: "On-the-job training and off-the-job training.",
                    reasoning: "Basic training category recall."
                },
                {
                    difficulty: "Medium",
                    question: "Explain the difference between a trade union and a staff association.",
                    modelAnswer: "A trade union is an independent organization representing workers to negotiate pay, working conditions, and legal rights with employers, often possessing strike power. A staff association is typically employer-funded and focuses more on internal consultation rather than formal industrial bargaining.",
                    reasoning: "Clear contrasting definitions regarding independence, bargaining power, and scope."
                },
                {
                    difficulty: "Hard",
                    question: "Evaluate the impact of introducing zero-hour contracts on a hospitality firm's workforce.",
                    modelAnswer: "Zero-hour contracts offer maximum workforce flexibility to match fluctuating customer demand and minimize fixed labor overheads. However, they create severe income insecurity for workers, leading to high turnover and low engagement.",
                    reasoning: "Balanced evaluation weighing operational flexibility and cost savings against employee insecurity and recruitment churn."
                },
                {
                    difficulty: "Easy",
                    question: "Define 'span of control'.",
                    modelAnswer: "Span of control is the number of subordinates who report directly to a single manager or supervisor.",
                    reasoning: "Core organizational structure terminology recall."
                },
                {
                    difficulty: "Medium",
                    question: "Explain why a wide span of control is associated with a flat organizational structure.",
                    modelAnswer: "A flat structure has fewer hierarchical layers, meaning individual managers must oversee a larger number of direct reports, resulting in a wide span of control.",
                    reasoning: "Logical relationship between hierarchy depth and managerial supervision breadth."
                },
                {
                    difficulty: "Hard",
                    question: "Analyze the potential human resource consequences of rapid business automation and robotics.",
                    modelAnswer: "Automation replaces manual and routine tasks, leading to mass redundancies and survivor syndrome among remaining staff, while increasing the demand for highly skilled technical retraining programs.",
                    reasoning: "Chain of analysis: Adoption of robotics -> displacement of manual roles -> anxiety and skills gap -> requirement for intensive workforce upskilling."
                },
                {
                    difficulty: "Easy",
                    question: "State two objectives of human resource management.",
                    modelAnswer: "Ensuring adequate workforce size/skills and maintaining high employee motivation/retention (any two valid points).",
                    reasoning: "General HR objective recall."
                },
                {
                    difficulty: "Medium",
                    question: "Explain how Maslow's Hierarchy of Needs suggests employees are motivated.",
                    modelAnswer: "Maslow argues human needs are arranged in a hierarchy from physiological needs up to self-actualization. Employees are motivated to satisfy lower-level survival and social needs before seeking higher-level psychological fulfillment at work.",
                    reasoning: "Explanation of motivational progression through hierarchical tiers."
                },
                {
                    difficulty: "Hard",
                    question: "Discuss whether financial incentives are always more effective than non-financial incentives in boosting labor productivity.",
                    modelAnswer: "Financial incentives (piece rate, bonuses) provide immediate, tangible rewards for output. However, non-financial incentives (recognition, empowerment, job enrichment) foster long-term engagement and intrinsic commitment, which money alone cannot sustain.",
                    reasoning: "Balanced evaluation comparing short-term transactional drive of cash against long-term psychological engagement."
                },
                {
                    difficulty: "Easy",
                    question: "Define 'induction training'.",
                    modelAnswer: "Induction training is the introductory training given to new employees to help them settle into their role, understand company policies, and meet colleagues.",
                    reasoning: "Basic HR process definition."
                },
                {
                    difficulty: "Medium",
                    question: "Explain why external recruitment can bring 'new blood' into an organization.",
                    modelAnswer: "External recruitment brings in candidates with fresh perspectives, external industry experience, and innovative practices from rival firms, preventing organizational stagnation.",
                    reasoning: "Chain of analysis: External hire -> novel ideas and industry insights -> innovation and challenge to status quo."
                },
                {
                    difficulty: "Hard",
                    question: "Analyze the strategic role of HR planning in supporting a corporate expansion strategy.",
                    modelAnswer: "HR planning ensures the business forecasts its future labor requirements accurately, aligning recruitment, skill development, and headcount with the geographic and operational growth targets of the corporate strategy.",
                    reasoning: "Chain of analysis: Corporate expansion plan -> skills gap analysis -> targeted talent acquisition -> seamless operational scaling."
                },
                {
                    difficulty: "Easy",
                    question: "State two causes of employee conflict in the workplace.",
                    modelAnswer: "Poor communication and perceived unfair pay disparities (or personality clashes, workload stress).",
                    reasoning: "Direct recall of workplace conflict drivers."
                },
                {
                    difficulty: "Medium",
                    question: "Explain how workforce audits help human resource managers.",
                    modelAnswer: "Workforce audits analyze the existing skills, ages, qualifications, and numbers of employees in an organization, allowing HR to identify upcoming skill shortages and plan succession strategies.",
                    reasoning: "Award marks for identifying inventory analysis of workforce capabilities and future-proofing."
                }
            ],
            "Operations": [
                {
                    difficulty: "Medium",
                    question: "Explain one advantage of using Just-In-Time (JIT) stock control for a manufacturing business.",
                    modelAnswer: "JIT minimizes inventory holding costs by ordering raw materials only when they are needed for production, freeing up valuable working capital and storage space.",
                    reasoning: "Examiners look for the identification of reduced holding costs and the specific release of tied-up working capital."
                },
                {
                    difficulty: "Hard",
                    question: "Evaluate the risks and benefits of adopting Total Quality Management (TQM) in a food processing factory.",
                    modelAnswer: "TQM instills a culture of zero defects where every worker takes responsibility for quality, reducing waste and enhancing brand reputation. However, it requires significant time, extensive employee training, and a complete cultural shift that can meet initial staff resistance.",
                    reasoning: "Full evaluation balancing long-term waste reduction and quality assurance against high training overheads and cultural implementation hurdles."
                },
                {
                    difficulty: "Easy",
                    question: "State the formula for calculating labor productivity.",
                    modelAnswer: "Labor Productivity = Total Output / Number of Employees",
                    reasoning: "Standard operational formula recall."
                },
                {
                    difficulty: "Hard",
                    question: "Analyze the impact of a major supply chain disruption on a lean manufacturing firm operating JIT.",
                    modelAnswer: "Because JIT firms maintain virtually zero buffer stock, any supply chain delay immediately halts production lines, leading to unfulfilled customer orders, lost revenue, and reputational damage.",
                    reasoning: "Chain of analysis: Supply shock -> zero buffer stock acts as vulnerability -> complete line stoppage -> severe financial and customer service loss."
                },
                {
                    difficulty: "Easy",
                    question: "Define 'capacity utilization'.",
                    modelAnswer: "Capacity utilization is the proportion of a business's maximum potential output that is actually being achieved over a given period.",
                    reasoning: "Core operations management definition (AO1)."
                },
                {
                    difficulty: "Medium",
                    question: "Calculate capacity utilization if a factory produces 8,000 units per week out of a maximum possible output of 10,000 units.",
                    modelAnswer: "80%. Calculation: (Actual Output / Maximum Output) * 100 -> (8,000 / 10,000) * 100 = 80%.",
                    reasoning: "Standard quantitative capacity formula application and calculation steps."
                },
                {
                    difficulty: "Hard",
                    question: "Evaluate whether batch production is more efficient than flow (mass) production for an automotive components manufacturer.",
                    modelAnswer: "Batch production allows flexibility to produce varied component types in groups using multi-skilled labor and general machinery. Flow production achieves much higher output rates and lower unit costs through continuous assembly lines, but lacks customization flexibility.",
                    reasoning: "Comprehensive evaluation balancing customization flexibility and lower capital setup of batch against scale economies and unit cost efficiency of flow."
                },
                {
                    difficulty: "Easy",
                    question: "State two methods of quality control.",
                    modelAnswer: "Quality inspection and quality assurance (or statistical process control, TQM, quality circles).",
                    reasoning: "Direct recall of quality management approaches."
                },
                {
                    difficulty: "Medium",
                    question: "Explain why high capacity utilization close to 100% can sometimes create operational problems.",
                    modelAnswer: "Operating at 100% capacity leaves no room for routine machinery maintenance or unexpected equipment breakdowns, leading to sudden production halts and employee burnout.",
                    reasoning: "Chain of analysis: Zero spare capacity -> lack of maintenance window -> machine failure risk and staff strain -> drop in long-term efficiency."
                },
                {
                    difficulty: "Hard",
                    question: "Analyze the strategic benefits of outsourcing non-core manufacturing operations to low-cost overseas suppliers.",
                    modelAnswer: "Outsourcing non-core activities reduces capital expenditure and labor costs, allowing the business to redirect management focus and financial resources toward core competencies like R&D and marketing.",
                    reasoning: "Chain of analysis: Offloading production -> lower operating cost base -> resource reallocation to core competencies -> enhanced competitive advantage."
                },
                {
                    difficulty: "Easy",
                    question: "Define 'lean production'.",
                    modelAnswer: "Lean production is an approach to management focused on cutting all forms of waste (muda) out of manufacturing and operational processes while improving quality and speed.",
                    reasoning: "Standard operations management definition."
                },
                {
                    difficulty: "Medium",
                    question: "Explain the difference between quality control and quality assurance.",
                    modelAnswer: "Quality control involves inspecting finished products for defects at the end of the production process. Quality assurance is a proactive process-oriented approach that builds quality standards into every stage of production to prevent defects from occurring.",
                    reasoning: "Clear contrasting definitions based on reactive end-inspection versus proactive process control."
                },
                {
                    difficulty: "Hard",
                    question: "Evaluate the feasibility and impact of implementing computer-aided manufacturing (CAM) in a traditional furniture workshop.",
                    modelAnswer: "CAM increases precision, reduces material wastage, and speeds up production rates. However, it requires heavy capital investment, specialized staff training, and can diminish the unique artisan appeal of handcrafted furniture.",
                    reasoning: "Balanced evaluation weighing precision, speed, and waste reduction against high capital outlay and loss of bespoke brand positioning."
                },
                {
                    difficulty: "Easy",
                    question: "State two causes of business waste in manufacturing.",
                    modelAnswer: "Overproduction and defective products (or waiting time, excess inventory, over-processing, transportation waste).",
                    reasoning: "Recall of Toyota's waste categories (muda)."
                },
                {
                    difficulty: "Medium",
                    question: "Explain how a buffer stock system protects a business against supply chain uncertainty.",
                    modelAnswer: "Buffer stock involves holding a reserve supply of raw materials above immediate production needs, acting as a safety cushion if deliveries are delayed or demand spikes unexpectedly.",
                    reasoning: "Chain of analysis: Unforeseen supply delay -> draw upon buffer stock -> production continuity maintained without disruption."
                },
                {
                    difficulty: "Hard",
                    question: "Analyze the strategic implications of operating at very low capacity utilization (e.g., 50%).",
                    modelAnswer: "Low capacity utilization means fixed overhead costs are spread across a small volume of output, leading to high unit fixed costs, compressed profit margins, and wasted capital assets.",
                    reasoning: "Chain of analysis: Excess capacity -> high fixed cost per unit -> uncompetitive pricing or heavy financial losses -> threat to business survival."
                },
                {
                    difficulty: "Easy",
                    question: "Define 'job production'.",
                    modelAnswer: "Job production is the creation of single, unique items tailored to exact customer specifications (e.g., bespoke tailoring or bridge building).",
                    reasoning: "Basic production method definition."
                },
                {
                    difficulty: "Medium",
                    question: "Explain why flow production requires high capital intensity.",
                    modelAnswer: "Flow production relies on continuous, automated assembly lines and specialized machinery to produce standardized goods at high volume, requiring massive initial financial investment in fixed assets.",
                    reasoning: "Chain of analysis: Continuous output requirement -> dedicated machinery automation -> high capital expenditure for setup."
                },
                {
                    difficulty: "Hard",
                    question: "Discuss whether service businesses can benefit from applying lean production techniques.",
                    modelAnswer: "Service businesses can eliminate administrative waste, reduce customer waiting times, and streamline workflows. However, because services involve human interaction and intangibility, standardizing processes to a strict manufacturing lean model can impair customer personalization.",
                    reasoning: "Comprehensive evaluation balancing efficiency and waste reduction against the human-centric and variable nature of service delivery."
                },
                {
                    difficulty: "Easy",
                    question: "State two factors influencing the choice of a production method.",
                    modelAnswer: "Size of market demand and amount of capital available (or nature of the product, availability of skilled labor).",
                    reasoning: "Recall of operational decision-making determinants."
                },
                {
                    difficulty: "Medium",
                    question: "Explain how Kaizen (continuous improvement) contributes to operational competitiveness.",
                    modelAnswer: "Kaizen encourages all employees to suggest small, incremental daily improvements to workflows, leading to cumulative reductions in waste, higher product quality, and lower unit costs over time.",
                    reasoning: "Chain of analysis: Employee involvement -> incremental process tweaks -> waste reduction and quality gains -> enhanced cost competitiveness."
                },
                {
                    difficulty: "Hard",
                    question: "Analyze the risks associated with global supply chain offshoring for clothing retailers.",
                    modelAnswer: "Offshoring production to distant countries exposes retailers to geopolitical risks, extended shipping lead times, currency exchange fluctuations, and ethical supply chain scandals regarding overseas factory labor conditions.",
                    reasoning: "Chain of analysis: Distant sourcing -> longer transit vulnerability and ethical risk -> potential supply disruption or severe reputational damage."
                }
            ],
            "Strategy": [
                {
                    difficulty: "Hard",
                    question: "Evaluate the usefulness of Ansoff's Matrix in helping a mature retail firm decide its future growth direction.",
                    modelAnswer: "Ansoff's Matrix maps strategic options across existing/new products and markets (Market Penetration, Product Development, Market Development, Diversification). It highlights risk levels, helping management balance safe internal expansion against high-risk diversification. However, it is a static model that ignores competitor reactions.",
                    reasoning: "Full evaluation requires explaining the four quadrants, balancing the strategic clarity and risk assessment of the tool against its failure to incorporate competitor responses or external market shocks."
                },
                {
                    difficulty: "Medium",
                    question: "Explain how Porter's Five Forces model can be used to assess the attractiveness of an industry.",
                    modelAnswer: "Porter's Five Forces analyzes industry attractiveness through competitive rivalry, threat of new entrants, bargaining power of buyers, bargaining power of suppliers, and threat of substitutes. High forces indicate low industry profitability.",
                    reasoning: "Award marks for identifying the specific forces and explaining how intense competitive pressures compress profit margins."
                },
                {
                    difficulty: "Hard",
                    question: "Analyze the strategic implications of a hostile takeover for the target company's workforce and corporate culture.",
                    modelAnswer: "A hostile takeover is resisted by the target board. If successful, it often results in rapid restructuring, redundancies to cut duplicate overheads, clashes of corporate culture, and severe anxiety among remaining staff.",
                    reasoning: "Chain of analysis: Hostile acquisition -> aggressive restructuring and cost synergies -> job losses and cultural friction -> plummeting employee morale."
                },
                {
                    difficulty: "Easy",
                    question: "State two elements of a SWOT analysis.",
                    modelAnswer: "Strengths and Weaknesses (Opportunities and Threats are the other two).",
                    reasoning: "Direct recall of strategic analysis frameworks."
                },
                {
                    difficulty: "Hard",
                    question: "Evaluate whether organic growth is superior to external growth (mergers and takeovers) for a medium-sized technology firm.",
                    modelAnswer: "Organic growth (internal expansion) is less risky, builds upon existing core competencies, and maintains cultural cohesion. External growth achieves rapid market entry, immediate scale economies, and absorption of competitors, but carries high financial integration risks and culture clashes.",
                    reasoning: "Comprehensive evaluation balancing controlled risk and cultural retention of organic growth against speed, scale, and synergy advantages of mergers."
                },
                {
                    difficulty: "Easy",
                    question: "Define 'core competencies'.",
                    modelAnswer: "Core competencies are the unique skills, knowledge, or resources that a business possesses and that give it a sustainable competitive advantage over rivals.",
                    reasoning: "Core strategic management definition (AO1)."
                },
                {
                    difficulty: "Medium",
                    question: "Explain the difference between strategic decisions and tactical decisions.",
                    modelAnswer: "Strategic decisions are long-term, high-risk plans set by senior management that shape the overall direction of the business. Tactical decisions are short-term, day-to-day actions taken by middle managers to implement the strategy.",
                    reasoning: "Clear contrasting definitions based on time horizon, risk level, and managerial level."
                },
                {
                    difficulty: "Hard",
                    question: "Analyze the impact of a PESTLE analysis on a firm's international expansion strategy.",
                    modelAnswer: "PESTLE evaluates Political, Economic, Social, Technological, Legal, and Environmental external factors. Conducting a PESTLE helps a firm identify legal barriers or cultural mismatches before entering a foreign market, preventing costly strategic failure.",
                    reasoning: "Chain of analysis: External macro audit -> identification of foreign regulatory hurdles or consumer preferences -> tailored market entry strategy -> reduced risk of failure."
                },
                {
                    difficulty: "Easy",
                    question: "State two stages of the decision-making tree.",
                    modelAnswer: "Decision nodes and chance nodes (or expected values / probability branches).",
                    reasoning: "Direct recall of quantitative decision tree components."
                },
                {
                    difficulty: "Medium",
                    question: "Calculate the expected value of a project with two outcomes: a 60% chance of making $500,000 profit and a 40% chance of making a $100,000 loss.",
                    modelAnswer: "$260,000. Calculation: (0.60 * $500,000) + (0.40 * -$100,000) = $300,000 - $40,000 = $260,000.",
                    reasoning: "Quantitative decision tree skill assessment covering probability multiplication and net sum calculation."
                },
                {
                    difficulty: "Hard",
                    question: "Evaluate the limitations of using quantitative investment appraisal techniques like decision trees in strategic planning.",
                    modelAnswer: "Decision trees provide a clear numerical comparison of expected values and probabilities. However, they rely heavily on subjective probability estimates and financial data that can easily be inaccurate, ignoring crucial qualitative factors like employee morale or brand reputation.",
                    reasoning: "Balanced evaluation weighing structured numerical risk analysis against subjective probability flaws and omission of qualitative variables."
                },
                {
                    difficulty: "Easy",
                    question: "Define 'corporate culture'.",
                    modelAnswer: "Corporate culture is the shared values, beliefs, attitudes, and norms that characterize how members of an organization behave and interact.",
                    reasoning: "Basic strategic/organizational behavior definition."
                },
                {
                    difficulty: "Medium",
                    question: "Explain why mission statements are important for strategic direction.",
                    modelAnswer: "A mission statement communicates the core purpose, values, and overarching objective of a business to internal and external stakeholders, aligning employee efforts toward a common goal.",
                    reasoning: "Award marks for identifying purpose communication, stakeholder alignment, and guidance for long-term planning."
                },
                {
                    difficulty: "Hard",
                    question: "Analyze the strategic implications of operating in a hyper-competitive market environment.",
                    modelAnswer: "In a hyper-competitive market, competitive advantages are rapidly eroded by aggressive rivals. Firms must constantly innovate, disrupt their own products, and engage in rapid-fire tactical moves to survive.",
                    reasoning: "Chain of analysis: Rapid imitation by rivals -> destruction of traditional competitive advantage -> requirement for continuous disruptive innovation -> high strategic pressure."
                },
                {
                    difficulty: "Easy",
                    question: "State two types of corporate culture according to Charles Handy's classification.",
                    modelAnswer: "Power culture and task culture (or role culture and person culture).",
                    reasoning: "Direct recall of Handy's cultural typology."
                },
                {
                    difficulty: "Medium",
                    question: "Explain how a task culture differs from a power culture.",
                    modelAnswer: "A task culture focuses on teamwork and assembling expert project teams to solve specific problems, granting autonomy to specialists. A power culture is dominated by a central figure or small group holding ultimate decision-making authority.",
                    reasoning: "Contrasting organizational structures and locus of control."
                },
                {
                    difficulty: "Hard",
                    question: "Evaluate the difficulties a firm faces when attempting to change its established corporate culture after a merger.",
                    modelAnswer: "Established cultural norms are deeply ingrained in employee habits and behaviors. Changing them meets fierce psychological resistance, requires sustained leadership communication, and takes years to embed successfully.",
                    reasoning: "Comprehensive evaluation balancing strategic necessity of post-merger integration against behavioral inertia and employee resistance."
                },
                {
                    difficulty: "Easy",
                    question: "What is meant by 'divestment'?",
                    modelAnswer: "Divestment is the sale or liquidation of a portion of a business, such as a subsidiary, product line, or business unit.",
                    reasoning: "Standard corporate finance/strategy definition."
                },
                {
                    difficulty: "Medium",
                    question: "Explain why a business might pursue a strategy of retrenchment.",
                    modelAnswer: "Retrenchment involves cutting costs, downsizing operations, or closing unprofitable branches to stabilize financial performance during an economic downturn or period of heavy losses.",
                    reasoning: "Chain of analysis: Financial distress -> cost-cutting and operational contraction -> survival and restoration of core profitability."
                },
                {
                    difficulty: "Hard",
                    question: "Analyze the strategic rationale behind vertical integration (backward integration).",
                    modelAnswer: "Backward integration involves acquiring or merging with a supplier in the supply chain, securing raw material supply security, cutting out middleman supplier markups, and protecting input quality.",
                    reasoning: "Chain of analysis: Acquisition of supplier -> guaranteed input access and elimination of supplier profit margins -> improved cost control and supply security."
                },
                {
                    difficulty: "Easy",
                    question: "State two advantages of international trade for a large corporation.",
                    modelAnswer: "Access to larger overseas markets and lower production costs abroad (any two valid points).",
                    reasoning: "Direct recall of globalization benefits."
                },
                {
                    difficulty: "Medium",
                    question: "Explain how a SWOT analysis bridges internal capabilities with external market conditions.",
                    modelAnswer: "SWOT pairs internal strengths and weaknesses with external opportunities and threats, allowing management to formulate strategies that leverage internal capabilities to exploit market gaps or defend against risks.",
                    reasoning: "Explanation of how internal auditing interacts with external scanning."
                },
                {
                    difficulty: "Hard",
                    question: "Evaluate the usefulness of critical path analysis (CPA) in managing complex strategic projects.",
                    modelAnswer: "CPA maps out interdependent project tasks, identifies the critical path, and calculates the minimum time required for completion while managing float times. However, it relies on estimated task durations that can prove inaccurate.",
                    reasoning: "Balanced evaluation weighing scheduling efficiency and resource allocation against estimation errors and rigidity."
                },
                {
                    difficulty: "Easy",
                    question: "Define 'critical path'.",
                    modelAnswer: "The critical path is the longest sequence of dependent tasks in a project network that determines the absolute minimum time needed to complete the entire project.",
                    reasoning: "Core project management definition."
                },
                {
                    difficulty: "Medium",
                    question: "Explain what is meant by 'float time' in critical path analysis.",
                    modelAnswer: "Float time is the amount of extra time a non-critical task can be delayed or extended without delaying the overall completion date of the project.",
                    reasoning: "Clear operational definition of scheduling flexibility."
                },
                {
                    difficulty: "Hard",
                    question: "Analyze the strategic risks of pursuing a diversification strategy into an unfamiliar industry.",
                    modelAnswer: "Diversification involves entering new markets with new products where management lacks operational expertise and brand recognition, significantly increasing the risk of strategic failure and capital loss.",
                    reasoning: "Chain of analysis: Entry into unfamiliar sector -> lack of core competencies -> operational mistakes and market rejection -> severe financial loss."
                },
                {
                    difficulty: "Easy",
                    question: "State two external influences on corporate strategy.",
                    modelAnswer: "Competitor actions and macroeconomic conditions like interest rates or inflation (any two valid points).",
                    reasoning: "Recall of external strategic constraints."
                },
                {
                    difficulty: "Medium",
                    question: "Explain why strategic planning is essential for a public limited company accountable to shareholders.",
                    modelAnswer: "Shareholders demand long-term value creation and return on investment. Strategic planning provides a clear roadmap for growth, resource allocation, and risk management, maintaining investor confidence and share price stability.",
                    reasoning: "Chain of analysis: Shareholder accountability -> requirement for long-term growth and profit roadmap -> sustained investor trust."
                },
                {
                    difficulty: "Hard",
                    question: "Discuss whether core competencies can ever become core rigidities for an established business.",
                    modelAnswer: "Core competencies are strengths that drive success. However, if markets change rapidly, over-reliance on these same capabilities can blind management to new industry shifts, turning strengths into obsolete core rigidities that hinder adaptation.",
                    reasoning: "Comprehensive evaluation exploring how historical competitive advantages can ossify into strategic vulnerabilities during market disruption."
                },
                {
                    difficulty: "Easy",
                    question: "Define 'strategic drift'.",
                    modelAnswer: "Strategic drift occurs when a business's strategy fails to keep pace with a changing external environment, leading to a widening gap between company performance and market requirements.",
                    reasoning: "Advanced strategic management definition."
                }
            ]
        };

        let currentTopic = '';
        let currentQuestionIndex = 0;
        let shuffledQuestions = [];

        function renderDashboard() {
            const grid = document.getElementById('topics-grid');
            grid.innerHTML = '';
            
            Object.keys(questionDatabase).forEach(topic => {
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
            document.getElementById('card-question').innerText = q.question;
            
            document.getElementById('user-answer').value = '';
            document.getElementById('feedback-section').classList.add('hidden');
            document.getElementById('submit-btn').classList.remove('hidden');
        }

        function checkAnswer() {
            const q = shuffledQuestions[currentQuestionIndex];
            document.getElementById('model-answer-text').innerText = q.modelAnswer;
            document.getElementById('reasoning-text').innerText = q.reasoning;
            
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

        // Initialize on load
        window.onload = renderDashboard;
    </script>
</body>
</html>
