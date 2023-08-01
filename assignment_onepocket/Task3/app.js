const fs = require('fs');

// Function to count the number of words in a given text
function countWords(text) {
  const words = text.split(/\s+/).filter(word => word.trim() !== '');
  return words.length;
}

// Read the contents of the file asynchronously
const filePath = 'data.txt';
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    const wordCount = countWords(data);
    console.log(`Total word count: ${wordCount}`);
  }
});
