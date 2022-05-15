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

  // console.log(previousNumber);
  // console.log(currentNumber);
  // console.log(operator);
}

function evaluateOperator(text) {
  operator = text;
  previousDisplayNumber.textContent = previousNumber + operator;
  currentDisplayNumber.textContent = '0';
  currentNumber = "";
}

function displayResult() {
  previousNumber = previousNumber.toString();

  if (previousNumber.length <= 11) {
    currentDisplayNumber.textContent = previousNumber;
  } else {
    currentDisplayNumber.textContent = previousNumber.slice(0,11) + "...";
  }
  previousDisplayNumber.textContent = "";
  operator = "";
  currentNumber = "";

  // console.log('values after displaying');
  // console.log(previousNumber);
  // console.log(currentNumber); 
  
}

// Operate Function
function operate() {
  previousNumber = parseInt(previousNumber);
  currentNumber = parseInt(currentNumber);

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
  // console.log('After the operation')
  // console.log(previousNumber);
  // console.log(currentNumber); 

  previousNumber = roundNumber(previousNumber);
  previousNumber = previousNumber.toString();
  displayResult();
};

function processOperator(op) {
  // console.log(previousNumber);
  // console.log(currentNumber);
  if (previousNumber === "") {
    previousNumber = currentNumber;
    evaluateOperator(op);
  }else if (currentNumber === "") {
    evaluateOperator(op);
  }else {
    operate();
    operator = op;
    currentDisplayNumber.textContent = 0;
    previousDisplayNumber.textContent = previousNumber + op;
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