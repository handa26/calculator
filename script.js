let num1 = parseInt("20.52");
let num2 = parseInt("6");
let operator = "X";

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

operate(num1, num2, operator);