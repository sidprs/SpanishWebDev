document.addEventListener("DOMContentLoaded", function() {
    const showAnswerBtn = document.getElementById("showAnswerBtn");
    const nextCardBtn = document.getElementById("nextCardBtn");
    const question = document.querySelector(".question");
    const answer = document.querySelector(".answer");
    const cardFront = document.querySelector(".card-front");
    const cardBack = document.querySelector(".card-back");

    const flashcards = [
        { question: "What is 'hello' in Spanish?", answer: "Hola" },
        { question: "What is 'goodbye' in Spanish?", answer: "Adiós" },
        { question: "What is 'thank you' in Spanish?", answer: "Gracias" },
        { question: "What is 'please' in Spanish?", answer: "Por favor" }
    ];

    let currentCardIndex = 0;

    function showQuestion() {
        question.textContent = flashcards[currentCardIndex].question;
        answer.textContent = flashcards[currentCardIndex].answer;
        cardFront.style.display = "block";
        cardBack.style.display = "none";
    }

    showQuestion();

    showAnswerBtn.addEventListener("click", function() {
        cardFront.style.display = "none";
        cardBack.style.display = "block";
    });

    nextCardBtn.addEventListener("click", function() {
        currentCardIndex = (currentCardIndex + 1) % flashcards.length;
        showQuestion();
    });
});

