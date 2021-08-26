const angleInputs = document.querySelectorAll('.angleInput');
const traingleCheckerButton = document.querySelector('#check-trinagle');
const resultBox = document.querySelector('#angle-result');

const isTriangle = () => {
    const sumOfAngles = anglesSum(Number(angleInputs[0].value), Number(angleInputs[1].value), Number(angleInputs[2].value))
    if (sumOfAngles === 180) {
        resultBox.innerHTML = `<p>Its a Triangle</p>`

    } else
        resultBox.innerHTML = `<p>Its not a Triangle</p>`

}
const anglesSum = (angle1, angle2, angle3) => {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles
}



traingleCheckerButton.addEventListener('click', isTriangle)