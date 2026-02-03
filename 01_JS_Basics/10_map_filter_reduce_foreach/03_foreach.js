// .forEach() is used to iterate over each element in an array 
// and perform an action, but unlike map(), it does not return a new array. 

const numbers = [1, 2, 3, 4, 5];

// Using forEach to print each number
numbers.forEach(num => {
    console.log(num);
});

// print square of each number
numbers.forEach(num => {
    console.log(num * num);
});

// challenge: forEach to calculate the sum of numbers
let sum = 0;
numbers.forEach(num => {
    sum += num;
})
console.log("Sum of Numbers:", sum);
