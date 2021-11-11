console.log('hello world')

let input
let expression

let clrOnNextInput = false

window.onload = () => {
    input = document.querySelector("#calc-input")
    expression = document.querySelector("#expression")
    const numbers = document.querySelectorAll(".number")
    for (number of numbers) {
        number.addEventListener("click", inputNumber)
    }
    const operands = document.querySelectorAll(".operand")
    for (operand of operands) {
        operand.addEventListener("click", inputOperand)
    }
    document.querySelector("#clear").addEventListener("click", inputClear)
}

function inputNumber(e) {
    e.preventDefault()
    input.value += e.target.innerHTML
}

function inputOperand(e) {
    e.preventDefault()
    if (clrOnNextInput) {
        console.log("clear")
        expression.innerHTML = ""
        clrOnNextInput = false
    }
    const operand = e.target.innerHTML
    if (input.value) {
        expression.innerHTML += `${input.value}  `
        input.value = ""
        if(operand === '=') {
            expression.innerHTML = eval(expression.innerHTML)
            clrOnNextInput = true
        } else {
            expression.innerHTML += `${operand} `
        }
    }
}

function inputClear(e) {
    e.preventDefault()
    expression.innerHTML = ""
    input.value = ""
}
