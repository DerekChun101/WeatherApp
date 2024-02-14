import { tempDisplay } from "./index";

const locationName = document.querySelector('.location');
const temperatureDisplay = document.querySelector('.temperature');
const conditionDisplay = document.querySelector('.condition');
const changeDisplay = document.querySelector('.changeDisplay');



function updateDisplay(location, temp_f,temp_c, condition) {
    locationName.innerHTML = `Location: ${location}`;
    conditionDisplay.innerHTML = `Condition: ${condition}`;

    if(tempDisplay === 'f') {
        temperatureDisplay.innerHTML = `Temperature: ${temp_f} F`;
        changeDisplay.innerHTML = 'Display &#176F';
    } else {
        temperatureDisplay.innerHTML = `Temperature: ${temp_c} C`;
        changeDisplay.innerHTML = 'Display &#176C';
    }
}



export {updateDisplay}