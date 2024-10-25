let num1 = [];
let num2 = [];
let operator;
let displayNum = [];

const btnNums = document.querySelectorAll(".btn-num");
const btnOperators = document.querySelectorAll(".btn-operator");
const btnRun = document.querySelector(".btn-run");
const result = document.querySelector("#result");
const btnMultiply = document.querySelector(".btn-multiply");

btnNums.forEach((btnNum) => btnNum.addEventListener("click", () => {
  if (operator === undefined) {
    num1.push(btnNum.innerHTML);
    displayNum.push(btnNum.innerHTML);
  } else {
    num2.push(btnNum.innerHTML);
    displayNum.push(btnNum.innerHTML);
  }

  result.textContent = displayNum.join("");

  // In case one of operator clicked first
  if (operator !== undefined && num2 === undefined) {
    num1.push(0);
  }
}));

btnOperators.forEach((btnOperator) => btnOperator.addEventListener("click", () => {
  operator = btnOperator.innerHTML;
  result.textContent = "0";
  displayNum = [];
}));

const add = (x, y) => {
  return x + y;
};

const subtract = (x, y) => {
  return x - y;
};

const multiply = (x, y) => {
  return x * y;
};

const divide = (x, y) => {
  return x / y;
};

const operate = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "X":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      alert("Invalid values");
      break;
  }
};

const reset = () => {
  num1 = [];
  num2 = [];
  operator = undefined;
  result.textContent = "0";
  displayNum = [];
}

btnRun.addEventListener("click", () => {
  const convertNum1 = num1.join("");
  const convertNum2 = num2.join("");

  const sumResult = operate(parseInt(convertNum1), parseInt(convertNum2), operator);
  reset();

  result.innerHTML = sumResult;
});