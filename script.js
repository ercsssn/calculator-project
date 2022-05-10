//Global Variables
let previousNumber = "";
let currentNumber = "";
let operator = "";

const currentDisplayNumber = document.querySelector('.currentNumber');
const previousDisplayNumber = document.querySelector('.previousNumber');

// Basic Math Operators
function add(num1, num2) {
  
	return num1 + num2;
};

// Operate Function
function operate(operation,num1,num2) {
    
    return operation(num1,num2);
};

//Display Input
function displayInput() {
  let screen = document.querySelector('.screen');
  screen.textContent = display;
}

//Add Event Listener to buttons
const buttons = document.querySelectorAll('.buttons .nm-btn');
buttons.forEach(button => button.addEventListener('click', function () {
  
  display += button.textContent;
  
  displayInput();
}));