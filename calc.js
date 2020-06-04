function calc(ariSign) {
    var number1 = document.getElementById('number1')
    var number2 = document.getElementById('number2')
    var result = document.getElementById('result')
    var t = 0
    result.setAttribute("style", "background-color: #A4C483; ");
    switch (ariSign) {
        case '+': {
            t = parseInt(number1.value) + parseInt(number2.value)
            result.value = t
            break
        }
        case '-': {
            t = parseInt(number1.value) - parseInt(number2.value)
            result.value = t
            break
        }
        case '*': {
            t = parseInt(number1.value) * parseInt(number2.value)
            result.value = t
            break
        }
        case '/': {
            if (isFinite(parseInt(number1.value) / parseInt(number2.value))) {
                t = parseInt(number1.value) / parseInt(number2.value)
                result.value = t
                result.setAttribute("style", "background-color: #A4C483;");
            }
            else {
                result.value = "Divide by zero error";

                result.setAttribute("style", "background-color: #A54823;");
            }
            break
        }
        default: {
            result.value = "Not a correct operation"
            break
        }

    }
}

function Insert_calc(num) {
    var number = document.getElementById('num2')
    number.value = number.value + num
}

function clearAll() {
    document.getElementById('num2').value = ""
}

function copyNumber(ariSign) {
    var num = document.getElementById('num2').value
    document.getElementById('num1').value = num
    document.getElementById('tSign').value = ariSign
    document.getElementById('num2').value = ""
}

function eCalc() {
    var number1 = document.getElementById('num1').value
    var number2 = document.getElementById('num2').value
    var ariSign = document.getElementById('tSign').value
    var result = document.getElementById('num2')
    //document.getElementById('result')
    var t = 0
    result.setAttribute("style", "background-color: #A4C483; ");
    switch (ariSign) {
        case '+': {
            t = parseInt(number1) + parseInt(number2)
            result.value = t
            break
        }
        case '-': {
            t = parseInt(number1) - parseInt(number2)
            result.value = t
            break
        }
        case '*': {
            t = parseInt(number1) * parseInt(number2)
            result.value = t
            break
        }
        case '/': {
            if (isFinite(parseInt(number1) / parseInt(number2))) {
                t = parseInt(number1) / parseInt(number2)
                result.value = t
                result.setAttribute("style", "background-color: #A4C483;");
            }
            else {
                result.value = "Divide by zero error";

                result.setAttribute("style", "background-color: #A54823;");
            }
            break
        }
        default: {
            result.value = "Not a correct operation"
            break
        }

    }
}