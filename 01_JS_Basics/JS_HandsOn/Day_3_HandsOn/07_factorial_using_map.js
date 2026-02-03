// challenge: factorial of each number using map
const numbers = [1, 2, 3, 4, 5];

const factorials = numbers.map(num => { // Here map is used to transform each number to its factorial
    let fact = 1; 
    for (let i = 1; i <= num; i++) {
        fact *= i; 
    }
    return fact; // returning factorial of the number
});

console.log("Factorials:", factorials); // Output: Factorials: [1, 2, 6, 24, 120]