import './style.css'

// fetch('https://api.weatherapi.com/v1/current.json?key=3c5147c0a3824807b98181555240602&q=nyc',{mode:'cors'})
//     .then((response) => response.json())
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

async function getWeather() {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=3c5147c0a3824807b98181555240602&q=nyc',{mode:'cors'})
    const weaTherData = await response.json();
    console.log(weaTherData);
}

getWeather();