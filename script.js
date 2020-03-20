var calcArray = [];

const display = document.getElementById("calc-screen");
const inputButtonClass = document.getElementsByClassName("input")
const clearAll = document.getElementById("CE");
const operators = document.getElementsByClassName("operator");
const equals = document.getElementById("equals");
const decimal = document.getElementById("decimal");

clearAll.addEventListener("click", function () {
    display.value = "0";
});

Array.from(inputButtonClass).forEach(e => {
    e.addEventListener("click", function () {
        if (display.value == "0") {
            display.value = e.value;
        }
        else {
            if (e.value == ".") {
                if (decimalCheck(display.value)) {
                    return;
                }
                else {
                    display.value += e.value;
                }
            }
            else {
                display.value += e.value;
            }
        }
    });
});

Array.from(operators).forEach(e => {
    e.addEventListener("click", function () {
        calcArray[0] = display.value;
        calcArray[1] = e.value;

        display.value = "0";
    });
});

equals.addEventListener("click", function () {
    if(calcArray[0] == null) {
        return;
    }
    calcArray[2] = display.value;

    display.value = calculate(calcArray);
});

function decimalCheck(n) {
    if (n.includes(".") == true) {
        return true;
    }
    else return false;
}

function calculate(array) {

    switch (array[1]) {

        case "*":
            return multiply(array[0], array[2]);

        case "+":
            return add(array[0], array[2]);

        case "-":
            return subtract(array[0], array[2]);

        case "/":
            return divide(array[0], array[2]);

        default:
            return;
    }
}

function multiply(n1, n2) {

    return n1 * n2;
}

function add(n1, n2) {

    return +n1 + +n2;
}

function subtract(n1, n2) {

    return n1 - n2;
}

function divide(n1, n2) {

    return n1 / n2;
}
