const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lang=en&units=metric&appid=b246934521af834ba5fb062fcff8076c&lat=' + latitude + '&lon=' + longitude;
    
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined);
        } else if (!body.weather) {
            callback('Unable to find location', undefined);
        } else {
            const {weather, main} = body;
            callback(undefined, weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1) + "! It's currently "+ main.temp + " degrees out. This hight today is "+main.temp_max + " with a low of "+ main.temp_min +". There is " + main.humidity + " % of humidity.");
        }
    })
}

module.exports = forecast;