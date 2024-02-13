import './style.css'
import getWeather from './data';



const btn = document.querySelector('button'); 
const input = document.querySelector('input');
btn.addEventListener('click', () => {
    getWeather(input.value);
});
