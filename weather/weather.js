const WeatherApi = require('./weatherApi');

class Weather{
    constructor(api){
        this.weatherApi = api;
    }

    async fetch(city){
        this.weatherData = await this.weatherApi.fetchWeatherData(city);
        console.log(this.weatherData)
    }

    getWeatherData(){
        return this.weatherData;
    }
}

module.exports = Weather;
