//Create a createTimer() function that returns a function which logs how many times it has been called.

function createTimer() { 
    let count = 0;
    return function() {
        count++;
        console.log(`Called ${count} times`);
    }
} 

const timer = createTimer(); 
timer(); // Called 1 times 
timer(); // Called 2 times 

// With IIFE
const counter = ( () => {
    let count = 0;
    return () => {
        count++;
        console.log("Timer is Called " + count + " times");
    }
} )();

counter(); // Timer is Called 1 times
counter(); // Timer is Called 2 times
counter(); // Timer is Called 3 times
