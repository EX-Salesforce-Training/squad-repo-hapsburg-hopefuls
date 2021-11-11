
function add() {
    var one = parseFloat(document.getElementById('num1').value);
    var two = parseFloat(document.getElementById('num2').value);
    document.getElementById('sum').innerHTML = one + two;
    }

function subtract() {
        var one = parseFloat(document.getElementById('num1').value);
        var two = parseFloat(document.getElementById('num2').value);
        document.getElementById('sum').innerHTML = one - two;
    }

function multiply() {
        var one = parseFloat(document.getElementById('num1').value);
        var two = parseFloat(document.getElementById('num2').value);
        document.getElementById('sum').innerHTML = one * two;
    }

function divide() {
        var one = parseFloat(document.getElementById('num1').value);
        var two = parseFloat(document.getElementById('num2').value);
        document.getElementById('sum').innerHTML = one / two;
    }