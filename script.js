//Clear function
function clearAll() {
  currentNumber = '';
  previousNumber = '';
  operator = '';

  currentDisplayNumber.textContent = '0';
  previousDisplayNumber.textContent = '';
}

 function roundNumber(num) {
   return Math.round(num * 100000) / 100000;
 }

function processNum(num) {

  if (previousNumber !== "" && currentNumber !== "" && operator === "") {
    previousNumber = "";
    currentDisplayNumber.textContent = currentNumber;
  }

  if (currentNumber.length <= 11) {
    currentNumber += num;
    currentDisplayNumber.textContent = currentNumber;
  }
}

function evaluateOperator(op) {
  operator = op;
  previousDisplayNumber.textContent = previousNumber + operator;
  currentDisplayNumber.textContent = '0';
  currentNumber = "";
}

function displayResult() {
  if (previousNumber.length <= 11) {
    currentDisplayNumber.textContent = previousNumber;
  } else {
    currentDisplayNumber.textContent = previousNumber.slice(0,11) + "...";
  }
  previousDisplayNumber.textContent = "";
  operator = "";
  currentNumber = "";
}

// Operate Function
function operate() {
  previousNumber = Number(previousNumber);
  currentNumber = Number(currentNumber);

  if (operator === "+") {
    previousNumber += currentNumber;
  } else if (operator === "-") {
    previousNumber -= currentNumber;
  } else if (operator === "X") {
    previousNumber *= currentNumber;
  } else if (operator === "÷") {
    if (currentNumber <= 0) {
      previousNumber = "undefined";
      displayResult();
      return;
    }
    previousNumber /= currentNumber;
  }
  
  previousNumber = roundNumber(previousNumber);
  previousNumber = previousNumber.toString();
  displayResult();
};

function processOperator(operator) {
  if (previousNumber === "") {
    previousNumber = currentNumber;
    evaluateOperator(operator);
  }else if (currentNumber === "") {
    evaluateOperator(operator);
  }else {
    operate();
    previousDisplayNumber.textContent = previousNumber + operator;
    currentDisplayNumber.textContent = 0;
  }
}

//Global Variables
let previousNumber = "";
let currentNumber = "";
let operator = "";

const currentDisplayNumber = document.querySelector('.currentNumber');
const previousDisplayNumber = document.querySelector('.previousNumber');

//Add Event Listener to equals button
const equals = document.querySelector('.equals');
equals.addEventListener("click", () => {
  if (currentNumber != "" && previousNumber != "") {
    operate();
  }
});

//Add Event Listener to number buttons
const numberButtons = document.querySelectorAll('.num');
numberButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    processNum(e.target.textContent);
  });
});

//Add Event Listener to operator buttons
const operatorButtons = document.querySelectorAll('.ops');
operatorButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    processOperator(e.target.textContent);
  });
});

//Add event listener to buttons with clear class
const clear = document.querySelectorAll('.clear');
clear.forEach((btn) => {
  btn.addEventListener('click', clearAll);
 });