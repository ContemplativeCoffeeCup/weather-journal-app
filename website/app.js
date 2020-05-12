/* Global Variables */
const apiKey = "&appid=d9d904f2868225960afa8e681c2aeb72";
const baseURL = `http://api.openweathermap.org/data/2.5/weather?zip=`;
const units = "&units=imperial";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

/* Function to GET Web API Data */

const getWeatherData = async(zipCode, apiKey, baseURL) => {
    let weatherURL = baseURL+zipCode+units+apiKey;
    // const response = await fech(zipCode);
    const response = await fetch(weatherURL);
    try {
        const data = await response.json();
        console.log('data', data);
        return data;
    }catch(error) {
        console.log("error", error);
    }
};

// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener("click", generateJournal);

/* Function called by event listener */
async function generateJournal(event) {
    let zipCode = document.getElementById('zip').value;
    getWeatherData(zipCode, apiKey, baseURL);
};

/* Function to POST data */


/* Function to GET Project Data */

