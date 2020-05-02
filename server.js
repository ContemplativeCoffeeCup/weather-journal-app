// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
var express = require('express');
// Start up an instance of app
var app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors'); 
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

const port = 8000; 
// Spin up the server
const server = app.listen(port, listening); 
// Callback to debug
function listening() { 
    console.log("server is listening"); 
    console.log(`running on localhost: ${port}`); 
}; 

// Initialize all route with a callback function
function sendData (req, res) { 
  res.send(projectData); 
}; 

// Callback function to complete GET '/all'
app.get('/all', sendData); 

// Post Route


// app.post('/flavor', addFlavor);  

