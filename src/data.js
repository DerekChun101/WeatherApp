import { updateDisplay } from "./dom";

function process(weatherData) {
    const location = weatherData.location.name;
    const temp_f = weatherData.current.temp_f;
    const temp_c =  weatherData.current.temp_c;
    const condition = weatherData.current.condition.text;
    updateDisplay(location,temp_f,temp_c,condition);
}

async function getWeather(locationName) {
    try{  
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=3c5147c0a3824807b98181555240602&q=${locationName}`,{mode:'cors'})
        const weatherData = await response.json();
        process(weatherData);
    } catch(error) {
        alert('Please enter a valid location or zipcode');
    }
  
}

export {getWeather}
