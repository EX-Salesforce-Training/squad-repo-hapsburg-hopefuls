const buttons = document.querySelector("#buttons");
const result = document.querySelector("#result");
let firstOperand;
let finished = false;
let isOperating = false;
let maxSize = 18;
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
            reset();
            break;
        default:
            handleNumbers(evt);
            break;
    }
})

function setOperator(operator) {
    firstOperand = parseFloat(result.innerHTML);
    isOperating = true;
    finalOperator = operator;
}

function calculate(secondOperand) {
    if (firstOperand === null) return;

    switch (finalOperator) {
        case "+":
            result.innerHTML = firstOperand + parseFloat(secondOperand);
            if (parseFloat(result.innerHTML) > 100000000000) result.style.fontSize = "1.5rem";
            break;
        case "-":
            result.innerHTML = firstOperand - parseFloat(secondOperand);
            if (parseFloat(result.innerHTML) > 100000000000) result.style.fontSize = "1.5rem";
            break;
        case "/":
            if (parseFloat(secondOperand) === 0) result.innerHTML = "hey stop it";
            else result.innerHTML = firstOperand / parseFloat(secondOperand);
            if (parseFloat(result.innerHTML) > 100000000000) result.style.fontSize = "1.5rem";
            break;
        case "*":
            result.innerHTML = firstOperand * parseFloat(secondOperand);
            if (parseFloat(result.innerHTML) > 100000000000) result.style.fontSize = "1.5rem";
            break;
    }

    firstOperand = null;
    finished = true;
}

function handleNumbers(evt) {
    if (finished) {
        result.innerHTML = evt.target.innerHTML;
        finished = false;
    } else {
        if (result.innerHTML.length >= maxSize && !isOperating) return;

        if (result.innerHTML === "0" || isOperating) {
            result.innerHTML = evt.target.innerHTML;
            isOperating = false;
        } else result.innerHTML += evt.target.innerHTML;
    }

}

function reset() {
    result.innerHTML = "0";
    firstOperand = null;
    finalOperator = null;
    operator = null;
    result.style.fontSize = "2rem";
}