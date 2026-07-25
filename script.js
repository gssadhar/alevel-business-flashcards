// Complete A-Level Business Question Bank (Edexcel Aligned) - Full Extracts, Figures & Mark Scheme Standards
const questionsData = {
    "Theme 1": [
        {
            id: "1a",
            marks: 4,
            question: "Calculate the Income Elasticity of Demand (YED) when consumer average disposable income changes from £27,000 to £27,195 and quantity demanded changes from 140,000 to 144,000 units.",
            extract: "Extract A: Market research data for 'CrunchSnack' gourmet crisps following a regional promotional campaign and demographic shift in target test markets.",
            correctAnswer: "3.97 (Income elastic / Normal luxury good)",
            explanation: "Full Mark Scheme Breakdown & Calculation:\n• Formula: % Change in Quantity Demanded / % Change in Income\n• Step 1 (% Change in Q): (4,000 / 140,000) * 100 = 2.857%\n• Step 2 (% Change in Income): (195 / 27,000) * 100 = 0.7222%\n• Step 3 (YED): 2.857 / 0.7222 = 3.965 (rounds to 3.97).\n\n💡 Examiner Tips for Max Marks:\n1. Always state the formula clearly before substituting numbers to secure method marks even if a minor calculation slip occurs.\n2. State the full economic interpretation (+3.97 indicates a luxury normal good where demand rises significantly as income increases) to achieve full marks.",
            type: "calculation",
            min: 3.96,
            max: 3.98
        },
        {
            id: "1b",
            marks: 2,
            question: "Define the term 'market segmentation'.",
            extract: "Extract B: Marketing strategy document for a retail business planning to sub-divide its consumer base.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• The process of dividing a broad consumer or business market, normally consisting of existing and potential customers, into sub-groups of consumers based on shared characteristics.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Keep definitions precise and concise to secure the 2 AO1 marks instantly.",
            type: "extended"
        },
        {
            id: "1c",
            marks: 4,
            question: "Explain one benefit to a business of using market mapping.",
            extract: "Extract C: Strategic planning report evaluating competitors in the soft drinks industry.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Identification of gaps in the market (1 mark) where consumer needs are not currently being met (1 mark). This allows the business to position a new product precisely (1 mark) to avoid direct head-on competition with market leaders (1 mark).",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Use a clear 2+2 structure: state the benefit (2 marks) and fully explain the business consequence (2 marks).",
            type: "extended"
        },
        {
            id: "1d",
            marks: 12,
            question: "Assess the importance of market segmentation for a small retail start-up launching a new product line in a competitive market.",
            extract: "Extract D: Boutique Apparel Co operates in a crowded clothing market dominated by fast-fashion giants. Managing Director Sarah plans to target vegan consumers aged 18-25 who prioritize ethical sourcing and sustainable supply chains.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Knowledge (Level 1 - 2 marks): Clear identification of market segmentation (sub-dividing a market into distinct customer groups based on shared characteristics like psychographics or demographics).\n• Application (Level 2 - 2 marks): Contextual linkage to Boutique Apparel Co targeting vegan consumers aged 18-25 seeking ethical sourcing.\n• Analysis (Level 3 - 4 marks): Explaining that segmentation allows small start-ups to avoid direct price competition with giants like fast-fashion brands, building tailored marketing mixes (product, price, place, promotion) that maximize customer loyalty and brand differentiation.\n• Evaluation (Level 4 - 4 marks): Weighing up limitations such as small niche market size restricting total revenue growth, or high unit marketing costs relative to a narrow customer base, concluding that survival for a start-up depends on capturing a profitable niche where premium pricing can offset lower sales volume.",
            explanation: "💡 Examiner Tips for Max Marks (Level 4 Evaluation):\n1. Use the 'It depends on...' framework (e.g., depends on the accuracy of market research and the size of the target segment).\n2. Balance your argument: while segmentation prevents mass market destruction by larger competitors, it limits economies of scale.",
            type: "extended"
        },
        {
            id: "1e",
            marks: 4,
            question: "Calculate the market share (by value) of Business X if it sold 45,000 units at an average selling price of £150, given that total industry market revenue is £13.5 million.",
            extract: "Extract E: Industry performance report detailing total sector revenue relative to individual firm sales volumes for electronic home appliances.",
            correctAnswer: "50%",
            explanation: "Full Mark Scheme Breakdown & Calculation:\n• Formula: (Business Revenue / Total Market Revenue) * 100\n• Step 1: Calculate Business X Revenue = 45,000 units * £150 = £6,750,000.\n• Step 2: Divide by total market revenue = (£6,750,000 / £13,500,000) * 100 = 50%.\n\n💡 Examiner Tips for Max Marks:\n1. Show intermediate financial figures clearly (£6.75m vs £13.5m) to avoid mixing up values with sales volumes.\n2. Always include the percentage sign (%) in your final answer.",
            type: "calculation",
            min: 50,
            max: 50
        },
        {
            id: "1f",
            marks: 10,
            question: "Evaluate whether financial or non-financial motivators are more effective in reducing staff turnover in a service-sector business.",
            extract: "Extract F: TechFirm Ltd experienced high staff turnover (35% annually) in its customer service department and evaluated performance-related pay bonuses against job enrichment schemes.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Knowledge/Application: Financial motivators (bonuses, piece rate, commission) vs non-financial motivators (job enrichment, empowerment, consultation) applied to customer service environments.\n• Analysis: Financial rewards satisfy lower-level economic needs (Taylor, Herzberg hygiene factors), providing quick boosts. Non-financial motivators tackle root causes of burnout and monotony in customer service roles (Herzberg motivators, Maslow self-actualization).\n• Evaluation: Short-term cash fixes retention only temporarily if workplace stress, poor leadership, or toxic company culture persists; therefore, non-financial empowerment delivers superior long-term workforce stability.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Reference motivational theorists explicitly (Taylor, Maslow, Herzberg) to score higher AO1/AO3 marks.\n2. Contextualize your answer specifically to the service sector where employee attitude and emotional labor directly dictate customer retention.",
            type: "extended"
        },
        {
            id: "1g",
            marks: 2,
            question: "Define the term 'opportunity cost'.",
            extract: "Extract G: Business decision-making framework document regarding resource allocation.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• The benefit lost of the next best alternative when making a choice.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Make sure to mention 'next best alternative foregone' to get full credit.",
            type: "extended"
        },
        {
            id: "1h",
            marks: 4,
            question: "Explain one reason why a business might choose to operate as a private limited company (Ltd) rather than a sole trader.",
            extract: "Extract H: Expansion plan for a growing local plumbing contractor.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Limited liability protection (1 mark), meaning personal assets are protected if the business fails (1 mark). This encourages risk-taking and entrepreneurship (1 mark) when securing larger commercial contracts (1 mark).",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Clearly state the legal status difference (limited liability) as your starting point.",
            type: "extended"
        },
        {
            id: "1i",
            marks: 10,
            question: "Assess the usefulness of Price Elasticity of Demand (PED) for a business operating in a highly competitive mass market when deciding whether to alter its product pricing strategy.",
            extract: "Extract I: FastServe, a nationwide fast-food chain, is evaluating a 10% across-the-board price cut to capture market share from major rivals during an economic downturn.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Knowledge/Application: PED measures the responsiveness of quantity demanded to a change in price, crucial for FastServe operating in a price-sensitive fast-food sector.\n• Analysis: If demand is price elastic (PED > 1), a price cut increases total revenue because the percentage increase in sales volume outweighs the percentage drop in price. This starves competitors of footfall and builds market share.\n• Evaluation: PED values are historical estimates and can change rapidly due to sudden competitor price wars, shifting consumer trends, or macroeconomic shocks, meaning relying solely on PED data carries strategic risks.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Link the concept directly to total revenue outcomes (e.g., elastic demand means price cuts boost revenue).\n2. Consider limitations such as data obsolescence and competitor retaliation.",
            type: "extended"
        },
        {
            id: "1j",
            marks: 10,
            question: "Evaluate the potential impact of an economic recession on a business producing inferior goods.",
            extract: "Extract J: BudgetRetail plc reports surging sales volumes during a macroeconomic downturn as consumer average disposable incomes contract nationwide.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Knowledge/Application: Inferior goods have a negative income elasticity of demand (YED < 0), meaning demand rises as consumer incomes fall.\n• Analysis: During a recession, consumers trade down from luxury or normal goods to cheaper alternatives, driving sales volume and revenue upward for discount retailers.\n• Evaluation: While sales rise, profit margins might remain squeezed due to higher customer price sensitivity and potential supply chain inflation cost pressures.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Explicitly connect negative YED to recessionary consumer behavior ('trading down').\n2. Balance sales volume growth against potential margin compression.",
            type: "extended"
        }
    ],
    "Theme 2": [
        {
            id: "2a",
            marks: 10,
            question: "Evaluate the likely impact of a 15% price increase on a business operating in a market with high price elasticity of demand (PED).",
            extract: "Extract A: CoffeeCorner operates in a saturated high street market where consumers can easily switch to automated vending machines or rival artisan cafés located directly across the street.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Knowledge/Application: PED > 1 means demand is price elastic, illustrated by CoffeeCorner's direct exposure to readily available local substitutes.\n• Analysis: A price increase leads to a proportionately greater fall in quantity demanded, destroying total revenue because consumers immediately switch to cheaper alternatives, reducing gross profit.\n• Evaluation: The impact depends heavily on whether CoffeeCorner can build strong brand loyalty or differentiate its product offering to make demand inelastic over time.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Sketch or reference the revenue implications of elastic demand (raising price reduces total revenue).\n2. Ensure you weave the extract context (rival artisan cafés/vending machines) directly into your analysis.",
            type: "extended"
        },
        {
            id: "2b",
            marks: 2,
            question: "Define the term 'net cash flow'.",
            extract: "Extract B: Cash flow forecast statements for a manufacturing enterprise.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• The difference between total cash inflows and total cash outflows over a specific period of time.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Avoid confusing cash flow with profit; mention inflows minus outflows explicitly.",
            type: "extended"
        },
        {
            id: "2c",
            marks: 4,
            question: "Explain one way a business could improve its cash flow position in the short term.",
            extract: "Extract C: Financial audit report for a growing retail firm experiencing seasonal liquidity shortages.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Offering early settlement discounts to trade debtors (1 mark), which incentivizes customers to pay cash sooner (1 mark). This accelerates cash inflows (1 mark) and reduces working capital bottlenecks (1 mark).",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Link the action directly to liquidity improvements (e.g., speeding up inflows or delaying outflows).",
            type: "extended"
        },
        {
            id: "2d",
            marks: 10,
            question: "Calculate the Payback Period for Project A and evaluate whether the business should choose Project A or Project B based on investment appraisal data.",
            extract: "Extract D: Capital investment options for a logistics firm. Project A requires an initial outlay of £150,000 with net cash inflows of: Year 1: £40k, Year 2: £50k, Year 3: £60k, Year 4: £70k. Project B requires £120,000 outlay with steady annual cash inflows of £45,000.",
            correctAnswer: "Exemplar Mark Scheme Model Answer & Calculation:\n• Project A Cumulative: Yr 1 (£40k), Yr 2 (£90k), Yr 3 (£150k). Payback = Exactly 3.0 years.\n• Project B Payback: £120,000 / £45,000 = 2.67 years (2 years and 8 months).\n• Evaluation: Project B provides faster liquidity recovery, reducing cash flow risk. However, Project A yields higher overall profitability (£220k total inflows vs £180k), making long-term strategic choice dependent on company risk appetite.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Show month conversions clearly for partial years (e.g., 0.67 years * 12 months = 8 months).\n2. Combine quantitative findings with qualitative considerations (risk aversion vs overall return).",
            type: "extended"
        },
        {
            id: "2e",
            marks: 10,
            question: "Calculate the Acid Test Ratio (Quick Ratio) for Retail PLC and assess its short-term liquidity health.",
            extract: "Extract E: Financial summary for Retail PLC showing Current Assets of £2,400,000 (which includes Inventories of £1,400,000 and Trade Receivables of £1,000,000) and Current Liabilities of £1,600,000.",
            correctAnswer: "Exemplar Mark Scheme Model Answer & Calculation:\n• Formula: (Current Assets - Inventory) / Current Liabilities\n• Calculation: (£2,400,000 - £1,400,000) / £1,600,000 = £1,000,000 / £1,600,000 = 0.63:1 (or 0.625:1).\n• Assessment: Below the standard 1:1 benchmark, signaling liquidity vulnerability if immediate debts fall due, though typical for high-turnover retailers holding minimal cash.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Explain *why* inventory is subtracted (it cannot be turned into immediate cash to pay short-term creditors without selling first).\n2. Always evaluate the numerical ratio against standard business benchmarks (1:1).",
            type: "extended"
        },
        {
            id: "2f",
            marks: 8,
            question: "Calculate the net profit margin for BuildCorp and assess its profitability performance.",
            extract: "Extract F: Financial statements for BuildCorp show total revenue of £8,500,000, gross profit of £3,400,000, and total expenses (including operating costs and interest) of £2,550,000.",
            correctAnswer: "Exemplar Mark Scheme Model Answer & Calculation:\n• Formula: (Net Profit / Revenue) * 100\n• Step 1: Net Profit = Gross Profit (£3,400,000) - Total Expenses (£2,550,000) = £850,000.\n• Step 2: Margin Calculation = (£850,000 / £8,500,000) * 100 = 10%.\n• Assessment: A 10% net profit margin indicates solid cost control, though performance must be benchmarked against industry averages to gauge true competitiveness.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Clearly differentiate between gross profit and net profit before applying the formula.\n2. Provide context on what constitutes a healthy margin in the construction and engineering sector.",
            type: "calculation",
            min: 10,
            max: 10
        },
        {
            id: "2g",
            marks: 2,
            question: "Define the term 'break-even point'.",
            extract: "Extract G: Cost and revenue analysis document for a new product launch.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• The level of output at which total costs equal total revenue, meaning the business makes neither a profit nor a loss.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Ensure you specify that profit is zero at this exact output level.",
            type: "extended"
        },
        {
            id: "2h",
            marks: 4,
            question: "Explain one limitation of using average rate of return (ARR) as an investment appraisal method.",
            extract: "Extract H: Capital budgeting evaluation report comparing multiple expansion projects.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• ARR ignores the timing of cash flows (1 mark), treating money received in Year 1 the same as money received in Year 5 (1 mark). This fails to account for inflation and risk discounting over time (1 mark), which can lead to flawed investment decisions (1 mark).",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Contrast ARR with discounted cash flow methods (like Net Present Value) to show strong analytical depth.",
            type: "extended"
        },
        {
            id: "2i",
            marks: 10,
            question: "Evaluate the usefulness of budgeting for a rapidly growing retail business.",
            extract: "Extract I: Internal financial control memos tracking variance analysis for regional store branches.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Knowledge/Application: Budgets set financial targets and expenditure limits, helping retail managers control costs and monitor performance via variance analysis.\n• Analysis: Favorable and adverse variances highlight operational inefficiencies early, enabling corrective actions to protect profit margins.\n• Evaluation: In a volatile retail market, static budgets can quickly become obsolete, stifling flexibility and opportunistic response times unless rolling or flexible budgeting is applied.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Mention variance analysis (adverse vs favorable) to score high marks.\n2. Discuss the drawback of rigid static budgets in fast-changing environments.",
            type: "extended"
        },
        {
            id: "2j",
            marks: 10,
            question: "Evaluate the impact of adopting lean production techniques on business operational efficiency and quality.",
            extract: "Extract J: PrecisionMfg Ltd implements Just-In-Time (JIT) stock control and Kaizen continuous improvement programs across its assembly lines.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Knowledge/Application: Lean production aims to eliminate waste (muda) in all forms, including excess inventory, waiting time, and defects.\n• Analysis: JIT reduces holding costs and frees up working capital. Kaizen empowers workers to spot bottlenecks, improving product quality and operational flow.\n• Evaluation: Lean systems leave businesses highly vulnerable to supply chain shocks or supplier delivery failures, as zero buffer stock means production halts immediately if a single component is missing.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Define key lean components like JIT or Kaizen explicitly.\n2. Balance the cost savings of waste reduction against the high vulnerability to supply chain disruptions.",
            type: "extended"
        }
    ],
    "Theme 3": [
        {
            id: "3a",
            marks: 8,
            question: "Calculate the Expected Values (EV) and Net Gains for both strategic options and recommend which path the business should choose.",
            extract: "Extract A: Decision tree analysis for a retail expansion project. Option 1 (Online platform development, initial cost £50,000) has a 0.7 probability of high return (£150,000) and 0.3 probability of low return (£20,000). Option 2 (Physical flagship store, initial cost £80,000) has a 0.5 probability of high return (£220,000) and 0.5 probability of low return (£10,000).",
            correctAnswer: "Exemplar Mark Scheme Model Answer & Calculation:\n• EV Option 1 Gross: (0.7 * 150,000) + (0.3 * 20,000) = 105,000 + 6,000 = £111,000. Net Gain: £111,000 - £50,000 = £61,000.\n• EV Option 2 Gross: (0.5 * 220,000) + (0.5 * 10,000) = 110,000 + 5,000 = £115,000. Net Gain: £115,000 - £80,000 = £35,000.\n• Recommendation: Choose Option 1 due to higher net expected return (£61k vs £35k) and lower financial risk exposure.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Clearly calculate *Net Gain* by subtracting initial financial outlay from gross expected value.\n2. Conclude with a clear recommendation linking back to risk profiles and probabilities.",
            type: "extended"
        },
        {
            id: "3b",
            marks: 2,
            question: "Define the term 'core competencies'.",
            extract: "Extract B: Strategic corporate capability analysis document for a global technology firm.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Unique capabilities, skills, or resources that give a business a competitive advantage over its rivals.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Focus on unique skills/resources that create competitive differentiation.",
            type: "extended"
        },
        {
            id: "3c",
            marks: 4,
            question: "Explain one reason why a merger might result in synergies for the combining businesses.",
            extract: "Extract C: Corporate press release detailing an upcoming acquisition between two telecommunications companies.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Economies of scale (1 mark), such as purchasing economies through bulk buying raw materials (1 mark). This lowers average unit costs (1 mark) and increases overall profit margins for the merged entity (1 mark).",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Link synergy directly to reduced costs or combined revenue enhancement.",
            type: "extended"
        },
        {
            id: "3d",
            marks: 12,
            question: "Evaluate the potential risks and rewards of pursuing unrelated diversification as a growth strategy.",
            extract: "Extract D: A dominant food manufacturing corporation is considering diversifying into financial services via corporate acquisition of an insurance provider to boost shareholder value.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Knowledge/Application: Unrelated diversification (Ansoff's Matrix) involves taking new products into completely new markets, breaking away from the firm's core competencies.\n• Analysis: Rewards include spreading business risk across disparate industries and capturing high growth/margin opportunities. Risks include managerial diseconomies of scale and lack of industry expertise.\n• Evaluation: High failure rate unless backed by strong financial reserves, expert external leadership, and robust strategic management systems.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Explicitly reference Ansoff's Matrix and define diversification as the highest risk quadrant.\n2. Use rigorous business terminology like 'core competencies' and 'managerial diseconomies'.",
            type: "extended"
        },
        {
            id: "3e",
            marks: 12,
            question: "Assess the strategic implications of adopting a low-cost strategy versus a differentiation strategy using Porter’s Generic Strategies framework.",
            extract: "Extract E: AutoTech Ltd manufactures generic electronic components and is debating whether to undercut industry rivals on price or invest heavily in proprietary R&D to produce patented high-performance components.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Knowledge/Application: Porter's Generic Strategies identify cost leadership and differentiation as distinct competitive routes.\n• Analysis: Cost leadership requires rigorous cost control, economies of scale, and high volume to generate acceptable profit margins. Differentiation focuses on unique product features, superior quality, or strong branding, allowing premium pricing.\n• Evaluation: Success depends heavily on core competencies and market structure; being 'stuck in the middle' without a clear strategic focus leads to severe competitive disadvantage.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Reference Michael Porter directly and outline the dangers of being 'stuck in the middle'.\n2. Integrate real-world trade-offs between mass production efficiency and bespoke product development.",
            type: "extended"
        },
        {
            id: "3f",
            marks: 12,
            question: "Evaluate the usefulness of critical path analysis (CPA) for a large construction project.",
            extract: "Extract F: Network diagram and project scheduling data for building a new commercial transport hub.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Knowledge/Application: CPA identifies interdependent project activities, calculates earliest and latest start/finish times, and highlights float times and the critical path.\n• Analysis: Project managers can minimize idle time, reduce project duration, and allocate resources efficiently, lowering total project overhead costs.\n• Evaluation: Estimates for task durations and costs are often prone to human error or unexpected weather disruptions, rendering the network diagram inaccurate if not continuously updated.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Define key CPA terms like 'critical path' and 'float'.\n2. Discuss limitations such as reliance on estimated time durations.",
            type: "extended"
        },
        {
            id: "3g",
            marks: 2,
            question: "Define the term 'corporate culture'.",
            extract: "Extract G: Organizational behavior report evaluating workplace atmosphere and leadership style.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• The shared values, beliefs, and norms that influence the behavior of people within a business organization.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Highlight that culture dictates how employees interact and make decisions.",
            type: "extended"
        },
        {
            id: "3h",
            marks: 4,
            question: "Explain one challenge a business might face when attempting to change its corporate culture.",
            extract: "Extract H: Corporate turnaround plan involving a shift from a bureaucratic to an entrepreneurial culture.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Employee resistance to change (1 mark), as staff are comfortable with established routines and fear the unknown (1 mark). This can lead to low morale and reduced productivity (1 mark) during the transition period (1 mark).",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Focus on behavioral inertia and workforce pushback as the core challenge.",
            type: "extended"
        },
        {
            id: "3i",
            marks: 10,
            question: "Evaluate the impact of corporate turnaround strategies on the stakeholders of a struggling business.",
            extract: "Extract I: Restructuring proposal for a high street retailer facing severe financial distress, involving asset sell-offs and mass redundancies.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Knowledge/Application: Turnaround strategies aim to rescue a failing firm through cost-cutting, asset disposal, and leadership changes.\n• Analysis: Shareholders benefit if the business returns to profitability and share prices recover. Employees and local communities suffer negative impacts due to job losses and site closures.\n• Evaluation: Aggressive short-term cost-cutting can damage brand reputation and long-term operating capability, ultimately accelerating corporate failure rather than preventing it.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Balance shareholder financial recovery against negative impacts on employees and local communities (stakeholder conflict).\n2. Differentiate between tactical cost-cutting and long-term strategic rebuilding.",
            type: "extended"
        },
        {
            id: "3j",
            marks: 10,
            question: "Evaluate the factors that determine whether a hostile takeover attempt will succeed.",
            extract: "Extract J: Corporate battle report where a large conglomerate attempts to acquire a resistant mid-sized software developer.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Knowledge/Application: Hostile takeovers occur when the bidding firm attempts to buy enough shares to gain control against the target board's wishes.\n• Analysis: Success depends heavily on offering a high enough share price premium to convince institutional and retail shareholders to override management opposition.\n• Evaluation: Target boards can deploy defense tactics (e.g., poison pills, 'white knights') to fend off bids, making hostile takeovers expensive, complex, and uncertain.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Mention key takeover defense mechanisms like 'white knight' or 'poison pill'.\n2. Discuss the importance of shareholder premium acceptance.",
            type: "extended"
        }
    ],
    "Theme 4": [
        {
            id: "4a",
            marks: 8,
            question: "Assess the impact of a GBP depreciation from £1 = $1.30 to £1 = $1.15 on a UK manufacturer importing US raw materials and exporting finished goods.",
            extract: "Extract A: Macroeconomic exchange rate fluctuations affecting international procurement and global sales revenue for an engineering firm.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Knowledge/Application: SPICED principle (Strong Pound Imports Cheap, Exports Dear -> Weak Pound means Imports Dear, Exports Cheap).\n• Analysis: US raw material imports become more expensive, increasing cost of production and putting downward pressure on profit margins. Conversely, UK exports to the US become cheaper and more price-competitive, boosting international sales volume.\n• Assessment: Net impact depends on trade balance; if raw material import costs exceed export revenue gains, overall profitability will fall.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. State the SPICED mnemonic clearly at the start of your answer.\n2. Evaluate both sides of the coin (costs of imported inputs vs revenues of exported outputs) to secure full analytical credit.",
            type: "extended"
        },
        {
            id: "4b",
            marks: 2,
            question: "Define the term 'globalization'.",
            extract: "Extract B: International trade and economic integration overview report.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• The increasing integration and interdependence of national economies, cultures, and businesses worldwide.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Emphasize growing cross-border integration of markets and cultures.",
            type: "extended"
        },
        {
            id: "4c",
            marks: 4,
            question: "Explain one reason why a business might engage in protectionism lobbying.",
            extract: "Extract C: Manufacturing industry association briefing paper addressed to government trade ministers.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• To secure import tariffs or quotas against foreign competitors (1 mark), which artificially raises the price of imported goods (1 mark). This protects domestic firms from undercutting price competition (1 mark) and safeguards local jobs (1 mark).",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Clearly explain how protectionist tools (tariffs/quotas) insulate domestic producers.",
            type: "extended"
        },
        {
            id: "4d",
            marks: 12,
            question: "Evaluate whether maintaining strict corporate social responsibility (CSR) standards globally outweighs the cost advantages of low-cost manufacturing.",
            extract: "Extract D: A multinational clothing corporation facing intense public scrutiny over developing-nation supply chain labor conditions and environmental pollution.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Knowledge/Application: CSR involves ethical obligations to stakeholders beyond shareholders, especially regarding global supply chain labor standards and ecological impact.\n• Analysis: Maintaining high CSR protects brand equity and avoids damaging consumer boycotts or ESG investor divestment. Ignoring CSR maximizes short-term profit margins through cheap overseas labor.\n• Evaluation: In the modern digital age, brand reputation is highly vulnerable; long-term PR damage from ethical scandals far outweighs short-term operational cost savings.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Weigh short-term financial cost savings against long-term intangible asset value (brand reputation and customer loyalty).\n2. Conclude with a justified final judgment supported by contemporary business trends (ESG investing).",
            type: "extended"
        },
        {
            id: "4e",
            marks: 12,
            question: "Evaluate the challenges a multinational corporation (MNC) faces when expanding operations into emerging economies with differing cultural and political environments.",
            extract: "Extract E: Global Retail Corp plans to expand its hypermarket chain into developing nations characterized by complex bureaucratic red tape, state intervention, and distinct consumer cultural norms.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Knowledge/Application: Globalization and expansion into emerging markets require careful navigation of cultural barriers, legal frameworks, and political risks (e.g., expropriation, regulation).\n• Analysis: Cultural differences can cause product launch failures if local preferences are misunderstood. Political and legal instability can threaten assets and disrupt supply chains.\n• Evaluation: While emerging markets offer immense untapped growth potential and first-mover advantages, thorough market research and localization strategies are essential to mitigate catastrophic failure risks.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Categorize challenges into political, economic, and socio-cultural factors (PESTLE framework).\n2. Discuss the balance between global standardization and local adaptation (Ghemawat's CAGE distance framework can be referenced).",
            type: "extended"
        },
        {
            id: "4f",
            marks: 12,
            question: "Evaluate the impact of multinational corporations (MNCs) on host developing countries.",
            extract: "Extract D: Economic impact assessment report analyzing a tech giant establishing major data centers and assembly plants in Southeast Asia.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Knowledge/Application: MNC foreign direct investment (FDI) brings capital injections, job creation, technology transfer, and infrastructure improvements to host nations.\n• Analysis: Positive effects include higher employment levels, skills training, and boost to local GDP and tax revenues. Negative effects can include environmental degradation, exploitation of lax labor laws, and outcompeting local domestic firms.\n• Evaluation: Net benefits depend heavily on government regulation; strong host government policy ensures MNCs contribute positively rather than exploiting natural resources and cheap labor.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Balance economic advantages (FDI, jobs, infrastructure) against ethical/environmental drawbacks.\n2. Assess the regulatory role of host governments.",
            type: "extended"
        },
        {
            id: "4g",
            marks: 2,
            question: "Define the term 'multinational corporation (MNC)'.",
            extract: "Extract G: Global business taxonomy and enterprise structural definition document.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• A business organization that has its headquarters in one country, but operates production, distribution, and service facilities in multiple other countries.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Clearly state operations span across multiple national borders.",
            type: "extended"
        },
        {
            id: "4h",
            marks: 4,
            question: "Explain one reason why a business might choose outsourcing as a global strategy.",
            extract: "Extract H: Operational restructuring document for a software company shifting its customer support functions overseas.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Access to lower labor costs abroad (1 mark), which reduces operating expenses and production overheads (1 mark). This allows the firm to lower prices or increase profit margins (1 mark) while maintaining service output levels (1 mark).",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Focus on cost reduction and operational specialization advantages.",
            type: "extended"
        },
        {
            id: "4i",
            marks: 10,
            question: "Evaluate the appropriateness of a global localization (glocalization) strategy for food and beverage MNCs.",
            extract: "Extract I: Market entry strategy analysis for a fast-food giant adapting its core menu offerings to match regional religious and cultural dietary preferences in international markets.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Knowledge/Application: Glocalization combines global branding with local adaptation, tailoring products to meet local tastes, laws, and cultural requirements.\n• Analysis: Increases consumer appeal, market penetration, and brand acceptance by respecting local traditions and dietary customs.\n• Evaluation: Increases operational complexity and R&D costs, diluting economies of scale compared to a pure standardized global product approach.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Contrast global standardization against local customization (glocalization).\n2. Discuss the trade-off between higher consumer acceptance and increased production costs.",
            type: "extended"
        },
        {
            id: "4j",
            marks: 10,
            question: "Evaluate the impact of international trade blocs (such as the EU or USMCA) on business competitiveness.",
            extract: "Extract J: Strategic trade review evaluating the removal of internal tariffs and regulatory harmonization across member countries.",
            correctAnswer: "Exemplar Mark Scheme Model Answer:\n• Knowledge/Application: Trade blocs eliminate internal trade barriers like tariffs and quotas among member countries while establishing unified external policies.\n• Analysis: Expands the potential market size for businesses, driving economies of scale and seamless cross-border supply chain logistics.\n• Evaluation: Creates 'trade diversion' where efficient non-member suppliers face discriminatory tariffs, and increases regulatory compliance burdens for firms trading outside the bloc.",
            explanation: "💡 Examiner Tips for Max Marks:\n1. Differentiate between trade creation and trade diversion.\n2. Analyze both market expansion benefits and external trade barrier hurdles.",
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
                <p style="margin: 0; font-size: 0.95rem; color: #4338ca;">Compare your answer against the official mark scheme below and honestly evaluate your chains of reasoning (AO1, AO2, AO3, AO4):</p>
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