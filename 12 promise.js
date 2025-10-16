// Step 1: Create a Promise
// A Promise represents a value that may be available now, in the future, or never.
let fetchData = new Promise((resolve, reject) => {
  // Simulating a network request using setTimeout
  console.log("Fetching data...");

  setTimeout(() => {
    let success = true; // Change to false to see the reject case

    if (success) {
      resolve("Data fetched successfully!"); // fulfilled
    } else {
      reject("Error: Failed to fetch data!"); // rejected
    }
  }, 2000); // runs after 2 seconds
});

// Step 2: Handle the Promise
// .then() runs when the promise is resolved successfully
// .catch() runs when the promise is rejected (error occurs)
// .finally() runs in both cases (cleanup or final action)

fetchData
  .then((result) => {
    console.log(result); // Output if resolved
  })
  .catch((error) => {
    console.log(error); // Output if rejected
  })
  .finally(() => {
    console.log("Promise completed (either resolved or rejected).");
  });

/*
Output (if success = true):
Fetching data...
Data fetched successfully!
Promise completed (either resolved or rejected).

Output (if success = false):
Fetching data...
Error: Failed to fetch data!
Promise completed (either resolved or rejected).
*/

// Promise.all(): Waits for all promises to resolve. 
// If one fails, the whole operation fails.

// Promise.race(): Resolves as soon as one promise settles (either resolves or rejects).

// Promise.allSettled(): Waits for all promises to settle (whether resolved or rejected) 
// and returns their status.

// Promise.any(): Resolves as soon as one promise resolves, but rejects if all promises fail.
