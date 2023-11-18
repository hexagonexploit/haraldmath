// src/functions.ts
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}
function is_prime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function factorial(num) {
  if (num < 0) {
    throw new Error("Factorial is not defined for negative numbers!");
  }
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}
function power(base, exponent) {
  return Math.pow(base, exponent);
}
function squareRoot(num) {
  if (num < 0) {
    throw new Error("Cannot calculate square root of a negative number!");
  }
  return Math.sqrt(num);
}
function round(num) {
  return Math.round(num);
}
function absolute(num) {
  return Math.abs(num);
}
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export {
  absolute,
  add,
  divide,
  factorial,
  is_prime,
  multiply,
  power,
  random,
  round,
  squareRoot,
  subtract
};
