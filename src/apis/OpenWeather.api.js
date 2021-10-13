import axios from 'axios';

const API_KEY = "e5b5fd213629b5d7a8f781438b81a9d9";
const baseUrl = 'http://api.openweathermap.org/data/2.5/';
axios.defaults.baseURL = 'http://api.openweathermap.org/data/2.5/';

function getWeather(location){
    return axios.get(
        `${baseUrl}weather?q=${location}&units=metric&cnt=5&appid=${API_KEY}`
    );
}

function getForecast(lat, lon){
    return axios.get(
        `${baseUrl}onecall?lat=${lat}&lon=${lon}&exclude={part}&units=metric&cnt=5&appid=${API_KEY}`
    );
}

export {
    getWeather,
    getForecast
}