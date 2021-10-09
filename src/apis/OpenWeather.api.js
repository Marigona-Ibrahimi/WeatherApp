import axios from 'axios';

const API_KEY = "e5b5fd213629b5d7a8f781438b81a9d9";

function getWeather(location){
    return axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`
    );
}

export {
    getWeather
}