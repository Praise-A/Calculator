let firstNum = "";
let secondNum = "";

let displayMain = document.querySelector("#displayMain");

let clearBtn = document.getElementById("clear");
let deleteBtn = document.querySelector("#delete");

let equalsBtn = document.querySelector("#equalsSign");

let numbersArr = document.querySelectorAll(".calc-number");
let operatorsArr = document.querySelectorAll(".calc-operator");

//Display Numbers
numbersArr.forEach((num) => {
  num.addEventListener("click", () => displayNum(num.textContent));
});

let displayNum = (param) => {
  if (displayMain.textContent == "0") {
    displayMain.textContent = "";
  }
  displayMain.textContent += param;
};

//Display Operators
operatorsArr.forEach((operator) => {
  operator.addEventListener("click", () =>
    displayOperator(operator.textContent)
  );
});

let displayOperator = (operator) => {
  displayMain.textContent += operator;
};

//Clear Button
clearBtn.addEventListener("click", clearDisplay);

function clearDisplay() {
  displayMain.textContent = "0";
  console.log("Cleared!");
}

let add = (a, b) => {
  return a + b;
};

let subtract = (a, b) => {
  return a - b;
};

let multiply = (a, b) => {
  return a * b;
};

let divide = (a, b) => {
  return a / b;
};

//Equals to Function
equalsBtn.addEventListener("click", () => operate());

let operate = (operator, firstNum, secondNum) => {
  if (operator == "+") {
    add(firstNum, secondNum);
  } else if (operator == "-") {
    subtract(firstNum, secondNum);
  } else if (operator == "*") {
    multiply(firstNum, secondNum);
  } else if (operator == "/") {
    divide(firstNum, secondNum);
  } else {
    return null;
  }
};

// let display = () => {
//   displayValue = operate();
// };
