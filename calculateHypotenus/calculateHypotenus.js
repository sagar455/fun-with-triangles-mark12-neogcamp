const sidesInp = document.querySelectorAll(".side-input");
const calcBtn = document.querySelector(".check");
const outputElement = document.querySelector(".output");

const CalcSumofSqurs = (a, b) => {
    return a * a + b * b;


}
const calculateHypotenus = () => {

    const sumOfSqr = CalcSumofSqurs(Number(sidesInp[0].value), Number(sidesInp[1].value));
    const hypotenus = Math.sqrt(sumOfSqr)
    outputElement.innerText = "The length of Hypotenus is " + hypotenus;

}


calcBtn.addEventListener('click', calculateHypotenus);