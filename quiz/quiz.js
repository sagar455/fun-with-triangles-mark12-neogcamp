const quizForm = document.querySelector(".form");
const submitAnswerBtn = document.querySelector("#submit-btn");
const outputElement = document.querySelector(".output")

const correctAnswers = ["3", "180", "isoceles", "130"];

const calculateScore = () => {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm)
        // console.log(formResults)
    for (const userAnswer of formResults.values()) {
        if (userAnswer === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }


    outputElement.innerText = `Your Score is ${score}`
}
console.log("formResults")

submitAnswerBtn.addEventListener('click', calculateScore)