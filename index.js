"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  absolute: () => absolute,
  add: () => add,
  divide: () => divide,
  factorial: () => factorial,
  is_prime: () => is_prime,
  multiply: () => multiply,
  power: () => power,
  random: () => random,
  round: () => round,
  squareRoot: () => squareRoot,
  subtract: () => subtract
});
module.exports = __toCommonJS(src_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
