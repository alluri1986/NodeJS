const request = require('request')


const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYWxsdXJpMTk4NiIsImEiOiJjanQ0c3dmMGcwMXQ5NDRwbzRhZXc2MDFoIn0.Rta5ePnN1UJn5zMoaGQI_w'

    request({ url: url, json: true }, (error, response) => {

        if (error) {
            callback('Unable to connect to location services', undefined)
        }
        else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        }
        else {

            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }

    })
}

module.exports = geocode
