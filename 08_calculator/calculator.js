const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;

};

const sum = function (array) {
  return array.reduce((current, total) => current + total, 0);

};

const multiply = function (array) {
  return array.reduce((total, current) => total * current, 1);

};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num == 0 || num == 1) return 1;
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
