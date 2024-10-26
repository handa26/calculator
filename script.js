let num1 = [0];
let num2 = [0];
let operator;
let displayNum = [];
let sumResult;
let keyEnter;

const btnNums = document.querySelectorAll(".btn-num");
const btnOperators = document.querySelectorAll(".btn-operator");
const btnRun = document.querySelector(".btn-run");
const result = document.querySelector("#result");
const btnMultiply = document.querySelector(".btn-multiply");
const btnReset = document.querySelector("#btn-reset");

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

document.addEventListener("keypress", (e) => {
  const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

  if (e.key === "Enter") {
    keyEnter = e.key;
  }

  // Check if the pressed key is in the allowed keys list
  if (allowedKeys.includes(e.key)) {
    console.log("Allowed key pressed: ", e.key);
    if (operator === undefined) {
      num1.push(e.key);
      displayNum.push(e.key);
    } else {
      num2.push(e.key);
      displayNum.push(e.key);
    }
  
    result.textContent = displayNum.join("");
  
    // In case one of operator clicked first
    if (operator !== undefined && num2 === undefined) {
      num1.push(0);
    }
  }
});

document.addEventListener("keypress", (e) => {
  const allowedKeys = ["+", "-", "x", "%", "/"];

  if (allowedKeys.includes(e.key)) {
    operator = e.key;
    result.textContent = "0";
    displayNum = [];
  }
});

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

function parseNumber(number) {
  if (number.includes('.')) {
    return parseFloat(number); // It's a float
  } else {
    return parseInt(number, 10); // It's an integer
  }
}

const handleCalculation = () => {
  let convertNum1 = num1.join("");
  let convertNum2 = num2.join("");

  if (num1.length === 0 && num2.length > 0 && operator !== undefined) {
    convertNum1 = sumResult;
  }

  sumResult = operate(parseFloat(convertNum1), parseFloat(convertNum2), operator);
  reset();

  result.innerHTML = sumResult;
};

btnRun.addEventListener("click", handleCalculation);

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleCalculation();
  }
});

btnReset.addEventListener("click", () => {
  reset();
});
