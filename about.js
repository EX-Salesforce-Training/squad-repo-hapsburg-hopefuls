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
    document.querySelector("#clear-entry").addEventListener("click", inputClearEntry)
    document.querySelector("#clear").addEventListener("click", inputClear)
}

function inputNumber(e) {
    e.preventDefault()
    input.value += e.target.innerHTML
}

function inputOperand(e) {
    e.preventDefault()
    const sanitizedInput = input.value.replace(/[^\d.]/g, '') 
    if (clrOnNextInput) {
        expression.innerHTML = ""
        clrOnNextInput = false
    }
    const operand = e.target.innerHTML
    if (sanitizedInput) {
        expression.innerHTML += `${sanitizedInput}  `
        let result = ""
        if(operand === '=') {
            result = eval(expression.innerHTML)
            clrOnNextInput = true
        }
        expression.innerHTML += `${operand} ${result}`
    }
    input.value = ""
}

function inputClear(e) {
    e.preventDefault()
    expression.innerHTML = ""
    input.value = ""
}

function inputClearEntry(e) {
    e.preventDefault()
    input.value = ""
}
