function process(weatherData) {
    const location = weatherData.location.name;
    const temp = weatherData.current.temp_f;
    console.log(temp);
    console.log(location);
}

async function getWeather(locationName) {
    try{  
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=3c5147c0a3824807b98181555240602&q=${locationName}`,{mode:'cors'})
        const weatherData = await response.json();
        console.log(weatherData);
        process(weatherData);
    } catch(error) {
        alert('Please enter a valid location');
    }
  
}

export default getWeather
