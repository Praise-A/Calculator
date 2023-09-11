let firstNum = "";
let secondNum = "";
let presentOperator = "";

let displayTop = document.querySelector("#displayTop");
let displayMain = document.querySelector("#displayMain");

let clearBtn = document.querySelector("#clear");
let deleteBtn = document.querySelector("#delete");
let signChange = document.querySelector("#signChange");

let equalsBtn = document.querySelector("#equalsSign");

let numbersArr = document.querySelectorAll(".calc-number");
let operatorsArr = document.querySelectorAll(".calc-operator");
let decimalPoint = document.querySelector("#point");

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

decimalPoint.addEventListener("click", () => addDecimalPoint());

let addDecimalPoint = () => {
  displayMain.textContent += ".";
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

//Delete Button
deleteBtn.addEventListener("click", () => deleteLastNum());

let deleteLastNum = () => {
  displayMain.textContent = displayMain.textContent.slice(0, -1);
};

//+/-
signChange.addEventListener("click", () => changeSign());

let changeSign = () => {
  let num = displayMain.textContent;
  displayMain.textContent = num * -1;
};

//Equals to Function
equalsBtn.addEventListener("click", () => calculate());

let calculate = () => {
  secondNum = displayMain.textContent;
  displayTop.textContent += ` ${secondNum} = `;

  displayMain.textContent = roundAnswer(
    operate(presentOperator, firstNum, secondNum)
  );

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

let roundAnswer = (ans) => {
  return Math.round(ans * 100000000) / 100000000;
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
  } else if (operator == "×") {
    return multiply(a, b);
  } else if (operator == "÷") {
    return divide(a, b);
  } else {
    return Error;
  }
};
