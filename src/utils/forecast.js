const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lang=fr&units=metric&appid=b246934521af834ba5fb062fcff8076c&lat=' + latitude + '&lon=' + longitude;
    
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined);
        } else if (!body.weather) {
            callback('Unable to find location', undefined);
        } else {
            const {weather, main} = body
            callback(undefined, weather[0].main + " it is. It's currently "+ main.temp + " degrees out. There is " + main.humidity + " % of humidity.");
        }
    })
}

module.exports = forecast;