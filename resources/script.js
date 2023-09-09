let firstNum = "";
let secondNum = "";
let presentOperator = "";

let displayTop = document.querySelector("#displayTop");
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
  if (presentOperator !== "") {
    calculate();
  }
  firstNum = displayMain.textContent;
  presentOperator = operator;
  displayTop.textContent = `${firstNum} ${presentOperator}`;
  resetScreen();
};

//Reset Function
let resetScreen = () => {
  displayMain.textContent = "";
};

//Clear Button
clearBtn.addEventListener("click", () => clearDisplay());

let clearDisplay = () => {
  displayTop.textContent = "";
  displayMain.textContent = "0";
  presentOperator = "";
};

//Equals to Function
equalsBtn.addEventListener("click", () => calculate());

let calculate = () => {
  secondNum = displayMain.textContent;
  displayTop.textContent += ` ${secondNum} = `;

  displayMain.textContent = operate(presentOperator, firstNum, secondNum);

  presentOperator = "";

  /*
  numbersArr.forEach((num) => {
    num.addEventListener("click", () => {
      if (displayMain.textContent == "0" || displayMain.textContent !== "") {
        displayMain.textContent = "";
      }
      displayMain.textContent += num.textContent;
    });
  });*/
};

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

let operate = (operator, a, b) => {
  a = Number(a);
  b = Number(b);
  if (operator == "+") {
    return add(a, b);
  } else if (operator == "-") {
    return subtract(a, b);
  } else if (operator == "*") {
    return multiply(a, b);
  } else if (operator == "/") {
    return divide(a, b);
  } else {
    return Error("Error");
  }
};
