const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// POST endpoint
// POST endpoint
app.post("/bhfl", (req, res) => {
  // Get the data from the request body
    

  let numbers = ["1","2","3","4","5","6","7","8","9","10"];
  let alphabets = ["a","b","c","d","e","f","g","h","i","j"];


  // Print the data
  // Create the response object
  const response = {
    is_success: true,
    user_id: "Afraz tanvir",
    email: "at8757@srmist.edu.in",
    roll_number: "RA2011003010499",
    numbers,
    alphabets,
  };

  // Send the response
  res.send(response);
});

// GET endpoint
app.get('/bhfl', (req, res) => {
  const operation_code = generateOperationCode();

  res.json({ operation_code: operation_code });
});

// Function to generate operation code
function generateOperationCode() {
  const operationCode = 1;

  return operationCode;
}

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
