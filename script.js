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

// Operate Function
function operate(operation,num1,num2) {
    
    return operation(num1,num2);
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