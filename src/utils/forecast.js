const request = require('request')

const forecast = (lat, log, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b52315934a55c914a21eb29cdaaf3e95&query=' + lat + ',' + log
    request({ url, json: true }, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service', undefined)
        }else if (body.error){
            callback('Unable to find location', undefined)
        }else {
            callback(undefined, body.current.weather_descriptions[0] + '. Temperatura de ' + body.current.temperature + ' grade, se simte ca ' + body.current.feelslike)
        }
    })
}

module.exports = forecast

// const url = 'http://api.weatherstack.com/current?access_key=b52315934a55c914a21eb29cdaaf3e95&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) => {
//     if(error){
//         console.log('Unable to connect to weather service!')
//     } else if(response.body.error){
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + '. Vremea ' + response.body.current.temperature + ' se simte ca ' + response.body.current.feelslike)
//     }

//     })