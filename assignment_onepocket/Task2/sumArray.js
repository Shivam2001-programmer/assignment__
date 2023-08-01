// Function to calculate the sum of an array of integers
function calculateSum(arr) {
    // Check if the input is a valid array of integers
    if (!Array.isArray(arr)) {
      throw new Error('Input is not an array.');
    }
  
    let sum = 0;
    for (const num of arr) {
      // Check if the element is an integer
      if (typeof num !== 'number' || !Number.isInteger(num)) {
        throw new Error('Array contains non-integer elements.');
      }
  
      sum += num;
    }
  
    return sum;
  }
  
  // Export the function to be used in other modules
  module.exports = calculateSum;
  