const Weather = require('./weather')
const WeatherApi = require('./weatherApi')

describe('Weather', () => {


    test('it returns weather data', async() => {
        const mockWeatherApi = {
            fetchWeatherData: (city) =>{
                return {id:1}

            }

        };

        const weather = new Weather(mockWeatherApi);
        await weather.fetch('London')
        expect(weather.getWeatherData()).toEqual({id:1})

    });


});
