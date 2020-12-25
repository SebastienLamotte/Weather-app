const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lang=en&units=metric&appid=b246934521af834ba5fb062fcff8076c&lat=' + latitude + '&lon=' + longitude;
    
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined);
        } else if (!body.weather) {
            callback('Unable to find location', undefined);
        } else {
            const {weather, main, sys} = body
            const sunrise = new Date((sys.sunrise)*1000);
            const sunset = new Date((sys.sunset)*1000)
            callback(undefined, weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1) + "! It's currently "+ main.temp + " degrees out. There is " + main.humidity + " % of humidity. Sunrise : " + sunrise.getHours() + "h" + sunrise.getMinutes() + "m. And sunset: " + sunset.getHours() + "h" + sunset.getMinutes() + "m.");
        }
    })
}

module.exports = forecast;