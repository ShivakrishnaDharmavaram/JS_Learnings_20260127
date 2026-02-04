// promises in Javascript

const myPromise = new Promise((resolve, reject) => {
  const success = true; // Change this to false to test rejection

  if (success) 
    {
    resolve("Test passed!");
  } else {
    reject("Test failed.");
  }
});

myPromise
  .then((result) => console.log("Resolved:", result))  // if resolved
  .catch((error) => console.log("Rejected:", error));   // if rejected
    