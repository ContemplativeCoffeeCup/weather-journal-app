// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
var express = require('express');

// Start up an instance of app
var app = express();

// configure express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors'); 
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
const port = 8000; 
const server = app.listen(port, listening); 

// Callback to debug
function listening() { 
    console.log("server is listening"); 
    console.log(`running on localhost: ${port}`); 
}; 

///// GET ROUTE /////

// Initialize all route with a callback function
function sendData (req, res) { 
  res.send(projectData); 
  console.log(projectData);
}; 

// Callback function to complete GET '/all'
app.get('/all', sendData); 

///// POST ROUTE /////

// An empty array to hold data
const data = [];

// post() with URL path and callback function
app.post( '/add', addData )

// callback function, receiving temp, date, and response
function addData (req, res) {
    projectData["temperature"] = req.body.temp;
    projectData["date"] = req.body.date;
    projectData["userResponse"] = req.body.userResponse;
  res.send(projectData)
}

