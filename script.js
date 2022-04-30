// Basic Math Operators

const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(...digits) {
  numbers = digits[0];
  let total = numbers.reduce((result, number) => {
    return result + number;
  }, 0);
  return total;
	
};

const multiply = function(...digits) {
  numbers = digits[0];
  let product = numbers.reduce((result, number) => {
    return result * number;
  }, 1);
  return product;
};

const power = function(num1 , num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  
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
