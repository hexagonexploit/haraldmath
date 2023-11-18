export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

export function multiply(a: number, b: number): number {
    return a * b;
}

export function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return a / b;
}

export function is_prime(num: number): boolean {
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

export function factorial(num: number): number {
    if (num < 0) {
        throw new Error("Factorial is not defined for negative numbers!");
    }

    let result = 1;

    for (let i = 2; i <= num; i++) {
        result *= i;
    }

    return result;
}

export function power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
}

export function squareRoot(num: number): number {
    if (num < 0) {
        throw new Error("Cannot calculate square root of a negative number!");
    }
    return Math.sqrt(num);
}

export function round(num: number): number {
    return Math.round(num);
}

export function absolute(num: number): number {
    return Math.abs(num);
}

export function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}