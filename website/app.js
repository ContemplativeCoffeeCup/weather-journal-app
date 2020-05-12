// Global Variables
const apiKey = "&appid=d9d904f2868225960afa8e681c2aeb72";
const baseURL = `http://api.openweathermap.org/data/2.5/weather?zip=`;
const units = "&units=imperial";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Function to GET Web API Data
const getWeatherData = async(zipCode, apiKey, baseURL) => {
    let weatherURL = baseURL+zipCode+units+apiKey;
    const response = await fetch(weatherURL);
    try {
        const data = await response.json();
        return data;
    }catch(error) {
        //appropriately handle error
        console.log("error", error);
    }
};

// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener("click", generateJournal);

// Function called by event listener
async function generateJournal(event) {
    let zipCode = document.getElementById('zip').value;
    // API call
    getWeatherData(zipCode, apiKey, baseURL)
    .then(function(data) {
        userResponse = document.getElementById('feelings').value;
        // add data to POST request
        postData('/add', {temp:data.main.temp, date:newDate, userResponse:userResponse} )
        // update UI
        updateUI()
    })
};


// Function to POST data
const postData = async ( url = '', data = {})=>{
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


// Function to GET Project Data
const updateUI = async() => {
    const request = await fetch('/all');

    try{
        //retrieve app data
        const allData = await request.json();
        console.log(allData);
        // update DOM elements with app data
        document.getElementById('date').innerHTML = allData[0].date;
        document.getElementById('temp').innerHTML = allData[0].temperature;
        document.getElementById('content').innerHTML = allData[0].userResponse;
    }catch(error){
        //appropriately handle error
        console.log("error", error);
    }
}