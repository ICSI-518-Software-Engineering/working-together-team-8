

// Division
function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Cannot divide by zero";
    }
}

// Examples

let resultDivision = divide(8, 2);
let resultDivisionByZero = divide(10, 0);

// Print results to the console

console.log("Result of division by zero:", resultDivisionByZero);
  
