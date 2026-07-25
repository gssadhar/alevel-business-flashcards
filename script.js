document.addEventListener("DOMContentLoaded", () => {
    console.log("Edexcel Business Hub loaded successfully.");
    
    initNavigation();
    loadQuestionsDirectly();
    initMarkSchemeEvaluator();
});

function loadQuestionsDirectly() {
    const container = document.getElementById("topics-container") || document.getElementById("questions-container");
    
    if (!container) {
        console.error("Target container for questions not found in HTML.");
        return;
    }

    // Embed questions directly in script.js to guarantee 0 load time and prevent fetch errors
    const allQuestions = [
        {
            theme: "Theme 1: Marketing & People",
            year: "2017",
            question: "Evaluate the likely impact of a price increase on a business with high price elasticity of demand.",
            marks: 10
        },
        {
            theme: "Theme 2: Managing Business Activities",
            year: "2018",
            question: "Assess the usefulness of cash flow forecasts for a small retail startup.",
            marks: 12
        },
        {
            theme: "Theme 3: Business Decisions & Strategy",
            year: "2022",
            question: "Discuss the potential benefits and drawbacks of organic growth versus external growth through a merger.",
            marks: 20
        },
        {
            theme: "Theme 4: Global Business",
            year: "2024",
            question: "Evaluate the impact of trade protectionism (such as tariffs) on a multinational manufacturing firm.",
            marks: 25
        }
    ];

    // Render questions instantly without waiting for external fetches
    container.innerHTML = allQuestions.map((q, index) => `
        <div style="background: white; border: 1px solid #ddd; border-radius: 8px; padding: 20px; margin-bottom: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); text-align: left;">
            <span style="font-size: 0.8rem; background: #e0e7ff; color: #3730a3; padding: 3px 8px; border-radius: 4px; font-weight: bold;">${q.year} - ${q.theme}</span>
            <h3 style="font-size: 1.05rem; color: #333; margin: 10px 0;">Q${index + 1}: ${q.question}</h3>
            <p style="font-size: 0.9rem; color: #555; margin: 0;"><strong>Marks:</strong> ${q.marks}</p>
        </div>
    `).join('');
}
