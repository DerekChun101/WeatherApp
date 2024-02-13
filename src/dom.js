const locationName = document.querySelector('.location');
const temperatureDisplay = document.querySelector('.temperature')
const conditionDisplay = document.querySelector('.condition')

function updateDisplay(location, temperature, condition) {
    locationName.innerHTML = `Location: ${location}`;
    temperatureDisplay.innerHTML = `Temperature: ${temperature}F`;
    conditionDisplay.innerHTML = `Condition: ${condition}`;
}

export default updateDisplay