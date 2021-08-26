const sidesInp = document.querySelectorAll(".inpt");
const calcBtn = document.querySelector("#check");
const outputElement = document.querySelector(".output");

const AreaofTriangle = (a, b) => {
    return (1 / 2) * (a * b);


}
const calculateHypotenus = () => {

    const area = AreaofTriangle(Number(sidesInp[0].value), Number(sidesInp[1].value));

    outputElement.innerText = "The area of Triangle is " + area;

}


calcBtn.addEventListener('click', calculateHypotenus);