const buttons = document.querySelector("#buttons");
const result = document.querySelector("#result");
let firstOperand;
let finished = false;
let finalOperator;

buttons.addEventListener('click', (evt) => {
    if (evt.target.id === "buttons") return;

    switch (evt.target.innerHTML) {
        case "+":
            setOperator("+")
            break;
        case "-":
            setOperator("-")
            break;
        case "/":
            setOperator("/")
            break;
        case "*":
            setOperator("*")
            break;
        case "=":
            calculate(result.innerHTML);
            break;
        case "clear":
            result.innerHTML = "0";
            firstOperand = null;
            operator = null;
            break;
        default:
            if (finished) {
                result.innerHTML = evt.target.innerHTML;
                finished = false;
            } else {
                if (result.innerHTML === "0") result.innerHTML = evt.target.innerHTML;
                else result.innerHTML += evt.target.innerHTML;
            }
            break;
    }
})

function setOperator(operator) {
    firstOperand = parseFloat(result.innerHTML);
    finalOperator = operator;
}

function calculate(secondOperand) {
    if (firstOperand === null) return;

    switch (finalOperator) {
        case "+":
            result.innerHTML = firstOperand + parseFloat(secondOperand);
            break;
        case "-":
            result.innerHTML = firstOperand - parseFloat(secondOperand);
            break;
        case "/":
            result.innerHTML = firstOperand / parseFloat(secondOperand);
            break;
        case "*":
            result.innerHTML = firstOperand * parseFloat(secondOperand);
            break;
    }
    firstOperand = null;
    finished = true;
}