const result = document.getElementById("calculation") as HTMLElement;

const buttons = {
  one: document.getElementById("one") as HTMLButtonElement,
  two: document.getElementById("2") as HTMLButtonElement,
  three: document.getElementById("3") as HTMLButtonElement,
  four: document.getElementById("4") as HTMLButtonElement,
  five: document.getElementById("5") as HTMLButtonElement,
  six: document.getElementById("6") as HTMLButtonElement,
  seven: document.getElementById("7") as HTMLButtonElement,
  eight: document.getElementById("8") as HTMLButtonElement,
  nine: document.getElementById("9") as HTMLButtonElement,
  zero: document.getElementById("0") as HTMLButtonElement,
  plus: document.getElementById("plus") as HTMLButtonElement,
  minus: document.getElementById("minus") as HTMLButtonElement,
  multiply: document.getElementById("multiply") as HTMLButtonElement,
  divide: document.getElementById("divide") as HTMLButtonElement,
  equals: document.getElementById("equals") as HTMLButtonElement,
  clear: document.getElementById("clear") as HTMLButtonElement,
};

let expression = "";

function updateDisplay() {
  result.textContent = expression || "0";
}

function appendToExpression(value: string) {
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
  } catch {
    expression = "Error";
  }
  updateDisplay();
};

updateDisplay();
