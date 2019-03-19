const request = require('request')


function forecast(latitude, longitude, callback) {

    const forecastURL = 'https://api.darksky.net/forecast/98ce8f2325e3373c21df7b9b228e5e06/' + latitude + ',' + longitude 
    request({ url: forecastURL, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service',undefined)
        }
        else if (response.body.error) {
            callback('Unable to find location',undefined)
        }
        else {
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
        }
    })
}
 

module.exports= forecast
