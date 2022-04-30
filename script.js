// Basic Math Operators

function add(num1, num2) {
	return num1 + num2;
};

function subtract(num1, num2) {
	return num1 - num2;
};

function total(...digits) {
  numbers = digits[0];
  let total = numbers.reduce((result, number) => {
    return result + number;
  }, 0);
  return total;
	
};

function multiply(...digits) {
  numbers = digits[0];
  let product = numbers.reduce((result, number) => {
    return result * number;
  }, 1);
  return product;
};

function power(num1 , num2) {
	return num1 ** num2;
};

function factorial(num) {
  
  if (num == 0) {
    return 1;
  }

  const arr = [];
	for (let i = 1 ; i <= num ; i++) {
    arr.push(i);
  }

  let total = arr.reduce((result, number) => {
    return result * number;
  }, 1);
  return total;
};


// Operate Function

function operate(operation,num1,num2) {
    
    return operation(num1,num2);
};