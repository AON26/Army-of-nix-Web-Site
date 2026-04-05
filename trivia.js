const questions = [
    {
        q: "¿Qué significa el término OSINT?",
        options: ["Open Source Intelligence", "Operating System Internal", "Optical Sensor Interface"],
        correct: 0
    },
    {
        q: "Tipo de ataque que consiste en suplantar una identidad por email:",
        options: ["DDoS", "Phishing", "SQL Injection"],
        correct: 1
    },
    {
        q: "¿Qué puerto utiliza por defecto el protocolo SSH?",
        options: ["80", "443", "22"],
        correct: 2
    },
    {
        q: "En hacking ético, ¿qué es un 'Payload'?",
        options: ["El reporte final", "Código que se ejecuta tras una vulnerabilidad", "Un tipo de firewall"],
        correct: 1
    },
    {
        q: "Un ataque Dos y un ataque DDos son iguales",
        options:["Nombre" , "Numero de fuente de ataque" , "Pregunta trampa son lo mismo"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const qData = questions[currentQuestion];
    document.getElementById("question").textContent = qData.q;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    qData.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.className = "trivia-btn";
        btn.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(index) {
    if (index === questions[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const container = document.getElementById("trivia-container");
    let rank = "";
    if (score === 5) rank = "ELITE HACKER";
    else if (score >= 2) rank = "SCRIPT KIDDIE";
    else rank = "NEWBIE";

    container.innerHTML = `
        <div class="result-box">
            <h3>ANÁLISIS FINALIZADO</h3>
            <p>Aciertos: ${score} / ${questions.length}</p>
            <h2 class="rank-text">${rank}</h2>
            <button onclick="location.reload()" class="btn-neon">REINTENTAR</button>
        </div>
    `;
}

// Iniciar trivia
window.addEventListener('load', loadQuestion);