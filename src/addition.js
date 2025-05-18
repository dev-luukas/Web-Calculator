"use strict";
const result = document.getElementById("calculation");
const buttons = {
    one: document.getElementById("one"),
    two: document.getElementById("2"),
    three: document.getElementById("3"),
    four: document.getElementById("4"),
    five: document.getElementById("5"),
    six: document.getElementById("6"),
    seven: document.getElementById("7"),
    eight: document.getElementById("8"),
    nine: document.getElementById("9"),
    zero: document.getElementById("0"),
    plus: document.getElementById("plus"),
    minus: document.getElementById("minus"),
    multiply: document.getElementById("multiply"),
    divide: document.getElementById("divide"),
    equals: document.getElementById("equals"),
    clear: document.getElementById("clear"),
};
let expression = "";
function updateDisplay() {
    result.textContent = expression || "0";
}
function appendToExpression(value) {
    expression += value;
    updateDisplay();
}
buttons.one.onclick = () => appendToExpression("1");
buttons.two.onclick = () => appendToExpression("2");
buttons.three.onclick = () => appendToExpression("3");
buttons.four.onclick = () => appendToExpression("4");
buttons.five.onclick = () => appendToExpression("5");
buttons.six.onclick = () => appendToExpression("6");
buttons.seven.onclick = () => appendToExpression("7");
buttons.eight.onclick = () => appendToExpression("8");
buttons.nine.onclick = () => appendToExpression("9");
buttons.zero.onclick = () => appendToExpression("0");
buttons.plus.onclick = () => appendToExpression("+");
buttons.minus.onclick = () => appendToExpression("-");
buttons.multiply.onclick = () => appendToExpression("*");
buttons.divide.onclick = () => appendToExpression("/");
buttons.clear.onclick = () => {
    expression = "";
    updateDisplay();
};
buttons.equals.onclick = () => {
    try {
        expression = eval(expression).toString();
    }
    catch (_a) {
        expression = "Error";
    }
    updateDisplay();
};
updateDisplay();
