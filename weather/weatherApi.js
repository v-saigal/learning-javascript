// file: index.js
const got = require('got');

class WeatherApi
{
    constructor(){

        this.apiKey = require('./apiKey'); // include our key

        this.weatherData = null;
    };

    async fetchWeatherData(city){
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${this.apiKey}`;

    const response = await got(apiUrl);
    this.weatherData = JSON.parse(response.body);

    return this.weatherData
    };
}


module.exports = WeatherApi;
