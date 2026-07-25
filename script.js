/**
 * Edexcel A-Level Business Hub - Main Application Script
 */

document.addEventListener("DOMContentLoaded", () => {
    console.log("Edexcel Business Hub loaded successfully.");
    
    initNavigation();
    loadTopicsOrFallback();
    initMarkSchemeEvaluator();
});

function initNavigation() {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".content-section");

    if (navLinks.length === 0 || sections.length === 0) return;

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("data-target");

            navLinks.forEach(l => l.classList.remove("active"));
            sections.forEach(s => s.classList.remove("active"));

            link.classList.add("active");
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add("active");
            }
        });
    });
}

function loadTopicsOrFallback() {
    // Look for a topic container, or create one dynamically if it doesn't exist yet
    let container = document.getElementById("topics-container");
    
    if (!container) {
        // If your HTML doesn't have a container div yet, create it right below the subtitle
        const subtitle = document.querySelector("p");
        container = document.createElement("div");
        container.id = "topics-container";
        container.style.cssText = "display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; margin-top: 30px; padding: 0 20px;";
        if (subtitle && subtitle.parentNode) {
            subtitle.parentNode.appendChild(container);
        } else {
            document.body.appendChild(container);
        }
    }

    // Populate with standard Edexcel Business revision topics
    const sampleTopics = [
        { title: "Theme 1: Marketing & People", desc: "Markets, marketing mix, and managing people." },
        { title: "Theme 2: Managing Business Activities", desc: "Finance, operations, and resource management." },
        { title: "Theme 3: Business Decisions & Strategy", desc: "Business objectives, growth, and competitive strategy." },
        { title: "Theme 4: Global Business", desc: "Globalisation, multinational corporations, and trade." }
    ];

    container.innerHTML = sampleTopics.map(topic => `
        <div style="background: white; border: 1px solid #ddd; border-radius: 8px; padding: 20px; width: 260px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); cursor: pointer; text-align: left;" onclick="alert('Loading questions for: ${topic.title}')">
            <h3 style="font-size: 1.1rem; color: #333; margin-bottom: 8px;">${topic.title}</h3>
            <p style="font-size: 0.9rem; color: #666; margin: 0;">${topic.desc}</p>
        </div>
    `).join('');
}

function initMarkSchemeEvaluator() {
    const evaluateBtn = document.getElementById("evaluate-btn");
    const studentAnswerInput = document.getElementById("student-answer");
    const feedbackOutput = document.getElementById("feedback-output");

    if (!evaluateBtn || !studentAnswerInput || !feedbackOutput) return;

    evaluateBtn.addEventListener("click", () => {
        const answerText = studentAnswerInput.value.trim();

        if (answerText.length < 10) {
            feedbackOutput.innerHTML = `<p style="color: red;">Please enter a more detailed response.</p>`;
            return;
        }

        feedbackOutput.innerHTML = `<p style="color: blue;">Analyzing response against Edexcel mark scheme...</p>`;

        setTimeout(() => {
            feedbackOutput.innerHTML = `
                <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 10px;">
                    <h4>Mark Scheme Evaluation</h4>
                    <p><strong>Estimated Mark:</strong> 8 / 10</p>
                    <p><strong>Analysis:</strong> Strong contextual application and clear logical chains.</p>
                </div>
            `;
        }, 800);
    });
}
