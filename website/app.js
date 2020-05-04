/* Global Variables */
const zipCode = "98502";
const apiKey = "&appid=d9d904f2868225960afa8e681c2aeb72";
const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
const units = "&units=imperial";
const weatherURL = baseURL+zipCode+units+apiKey;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
// Event listener to add function to existing HTML DOM element

/* Function called by event listener */

/* Function to GET Web API Data*/

getWeatherData();

async function getWeatherData() {
    const response = await fetch(weatherURL);
    const data = await response.json();
    console.log(data);
}

/* Function to POST data */


/* Function to GET Project Data */

