// map() - transforms each element in an array and returns a new array
// filter() - filters elements based on a condition and returns a new array
// reduce() - reduces the array to a single value based on a reducer function

const numbers = [1, 2, 3, 4, 5, 9];

const squares = numbers.map(num => num * num); // [1, 4, 9, 16, 25, 81]
console.log("Squares:", squares);

// Using filter to get marks greater than or equal to 60
const marks = [45, 67, 89, 34, 90, 56];
const passedMarks = marks.filter(mark => mark >= 60);
console.log("Passed Marks:", passedMarks); // [67, 89, 90]


const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum of Numbers:", sum);
