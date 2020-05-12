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
    getWeatherData(zipCode, apiKey, baseURL)
    .then(function(data) {
        userResponse = document.getElementById('feelings').value;
        console.log("who am i", data);
        // add data to POST request
        console.log(data.main.temp)
        console.log(newDate)
        console.log(userResponse)
        postData('/add', {temp:data.main.temp, date:newDate, userResponse:userResponse} );
    });
};

/* Function to POST data */
const postData = async ( url = '', data = {})=>{
    //console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData
    }catch(error) {
        //appropriately handle error
        console.log("error", error);
    }
}


/* Function to GET Project Data */

