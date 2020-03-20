var calcArray = [];
var result = 0;

const display = document.getElementById("calc-screen");
const inputButtonClass = document.getElementsByClassName("input")
const clearAll = document.getElementById("CE");
const operators = document.getElementsByClassName("operator");
const equals = document.getElementById("equals");

clearAll.addEventListener("click", function() {
    display.value = "0";
});

Array.from(inputButtonClass).forEach(e => {
    e.addEventListener("click", function() {
        if(display.value == "0") {
            display.value = e.value;
        }
        else{
            display.value += e.value;
        }
    });
});

Array.from(operators).forEach(e => {
    e.addEventListener("click", function() {
        calcArray[0] = display.value;
        calcArray[1] = e.value;

        display.value = "0";
    });
});

equals.addEventListener("click", function() {
    calcArray[2] = display.value;

    display.value = calculate(calcArray);
});

function calculate(array) {

    switch(array[1]) {

        case "*":
            return multiply(array[0], array[2]);

        case  "+":
            return add(array[0], array[2]);

        case  "-":
            return subtract(array[0], array[2]);

        case  "/":
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

    return n1 / n2 ;
}
