var regExOperators = new RegExp(/+|\-|*|\//);

var display = document.getElementsByClassName("calc-screen");

var calcArray = [];
var result = 0;

function calculate(array) {

    switch(array[1]) {
        case "x":
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
