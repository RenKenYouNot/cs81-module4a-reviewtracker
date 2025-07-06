// Weekly reading log
// This array stores the weekly reading log data.
// Each element in the array is an object and represents a single reading entry.
// The data includes the 'day', 'book' title, and 'minutes' read for that entry.
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

/**
 * Purpose: Adds a new reading entry to the global reading log.
 * Inputs: Takes three parameters: 'day' (string), 'book' (string), and 'minutes' (number).
 * Output: Modifies the 'readingLog' array by adding a new object to it; does not return a value.
 */
function addReadBook(day, book, minutes) {
  // Creates a new object to represent the reading entry using the provided inputs.
  const newEntry = { day, book, minutes };
  // Pushes the newly created entry object into the 'readingLog' array.
  // This directly modifies the global data structure.
  readingLog.push(newEntry);
}
/**
 * Purpose: Calculates the total minutes spent reading across all entries in a given log.
 * Inputs: Takes one parameter: 'log' (an array of reading entry objects).
 * Output: Returns a single number representing the sum of all 'minutes' in the log.
 */
function totalReadingMinutes(log) {
  // Initializes a variable to keep track of the running total of minutes.
  let total = 0;
  // This loop iterates over each 'entry' object within the 'log' array.
  // It's crucial for accessing each individual reading record.
  for (let entry of log) {
    // Adds the 'minutes' value from the current 'entry' object to the 'total'.
    // This line aggregates the numerical data from the log.
    total += entry.minutes;
  }
  // Returns the final calculated total minutes after iterating through all entries.
  return total;
}

/**
 * Purpose: Determines and returns the book that has been read for the most entries in a given log.
 * Inputs: Takes one parameter: 'log' (an array of reading entry objects).
 * Output: Returns a string representing the title of the most frequently read book.
 */
function mostReadBook(log) {
  // Initializes an empty object to store counts for each book title.
  // This object will hold string keys (book titles) and number values (counts).
  const bookCounts = {};
  // This loop iterates through each reading entry to count how many times each book
  for (let entry of log) {
    // Checks if the current book title has not been encountered before.
    if (!bookCounts[entry.book]) {
      // If new, initializes its count to 1.
      bookCounts[entry.book] = 1;
    } else {
      // If already encountered, increments its count.
      bookCounts[entry.book]++;
    }
  }

  // Initializes variables to keep track of the book with the highest count found so
  let maxBook = null;
  let maxCount = 0;
  // This loop iterates through the 'bookCounts' object (which stores book titles as keys).
  // It's important for finding the book with the maximum read count.
  for (let book in bookCounts) {
    // Compares the current book's count with the highest count found so far.
    if (bookCounts[book] > maxCount) {
      // If the current book's count is higher, it becomes the new 'maxBook' and 'ma
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }
  // Returns the title of the book that was read most frequently.
  return maxBook;
}

/**
 * Purpose: Prints a formatted summary of minutes read for each entry in the log to the console.
 * Inputs: Takes one parameter: 'log' (an array of reading entry objects).
 * Output: Prints output directly to the console; does not return a value.
 */
function printDailySummary(log) {
  // This loop iterates over each 'entry' object in the provided 'log' array.
  // It's used to access the 'day', 'minutes', and 'book' for each entry.
  for (let entry of log) {
    // Uses template literals to format and print a human-readable summary for each entry.
    // This line demonstrates how data from each object is accessed and displayed.
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// --- Suggested Improvement ---
// Improvement: It would be better to keep the 'readingLog' array tucked away inside a class or a module.
// Why it's helpful: Right now, 'readingLog' is a global variable and any part of the code could accidentally
// change it. Putting it inside a class (or a module) would protect it and make the code easier to manage. This 
// would mean functions would either explicitly receive the log as an argument or become methods of that class.

// Example usage
addReadBook("Saturday", "Dune", 50); // Adds a new entry for Saturday, demonstrating function call and data modification.
printDailySummary(readingLog); // Prints the summary, now including the new Saturday entry.
console.log("Total minutes read:", totalReadingMinutes(readingLog)); // Calculates and prints the total minutes.
console.log("Most read book:", mostReadBook(readingLog)); // Determines and prints the most read book.
