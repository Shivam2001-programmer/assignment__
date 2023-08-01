// Import required modules
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on port 3000
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
