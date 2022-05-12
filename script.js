//Global Variables
let previousNumber = "";
let currentNumber = "";
let operator = "";

const currentDisplayNumber = document.querySelector('.currentNumber');
const previousDisplayNumber = document.querySelector('.previousNumber');

//Clear function
function clearAll() {
  currentNumber = '';
  previousNumber = '';
  operator = '';

  currentDisplayNumber.textContent = '0';
  previousDisplayNumber.textContent = '';
}

const clear = document.querySelectorAll('.clear');
clear.forEach((btn) => {
  btn.addEventListener('click', clearAll);
 });

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

//Add Event Listener to number buttons
const numberButtons = document.querySelectorAll('.num');
numberButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    processNum(e.target.textContent);
  });
});

function evaluateOperator(op) {
  operator = op;
  previousDisplayNumber.textContent = previousNumber + " " + operator;
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
  } else if (operator === "*") {
    previousNumber *= currentNumber;
  } else if (operator === "/") {
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

// //Display Input
// function displayInput() {
//   let screen = document.querySelector('.screen');
//   screen.textContent = display;
// }

// //Add Event Listener to buttons
// const buttons = document.querySelectorAll('.buttons .nm-btn');
// buttons.forEach(button => button.addEventListener('click', function () {
  
//   display += button.textContent;
  
//   displayInput();
// }));