// challenge: Create a function calculate that takes two numbers
// and a callback function. The callback should define the
// operation (add, subtract, multiply, divide).
function calculate(num1, num2, operation) {
    return operation(num1, num2);
}
// Define callback functions for each operation
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
    return a / b;
}
// Test the calculate function with different operations
console.log(calculate(10, 5, add));        // Output: 15
console.log(calculate(10, 5, subtract));   // Output: 5
console.log(calculate(10, 5, multiply));   // Output: 50
console.log(calculate(10, 5, divide));     // Output: 2 

//implement arrow functions for the operations and test again
console.log(calculate(20, 4, (a, b) => a + b)); // Output: 24
console.log(calculate(20, 4, (a, b) => a - b)); // Output: 16
console.log(calculate(20, 4, (a, b) => a * b)); // Output: 80
console.log(calculate(20, 4, (a, b) => a / b)); // Output: 5


