import './style.css'
import {getWeather} from './data';
let tempDisplay = 'f';

const searchBtn = document.querySelector('.search'); 
const input = document.querySelector('input');
const change = document.querySelector('.changeDisplay');

searchBtn.addEventListener('click', () => {
    getWeather(input.value);
});

change.addEventListener('click', () => {
    if(tempDisplay === 'f') {
        tempDisplay = 'c';
    } else tempDisplay ='f';

    getWeather(input.value);
});

export {tempDisplay}



