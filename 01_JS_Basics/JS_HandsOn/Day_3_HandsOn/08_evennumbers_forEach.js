// using forEach to print even numbers
const numbers = [3, 6, 7, 10, 19, 20, 99];
console.log("Even Numbers:");
numbers.forEach(num => {
    if (num % 2 === 0) {
        console.log(num);
    }
});

const number = [1,2,3,4,5,6,7,8,9,10];
number.forEach(num => {
    if(num % 2 == 0){
        console.log("Even number:", num);
    }
});
   