const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


//console.log(__dirname)
//console.log(path.join(__dirname,'../public'))

const app = express()

//Define paths for express config
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')


//Setup handlebars engine and views locattion
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve 
app.use(express.static(publicDirectory))

//app.get('', (req, res) => {
//    res.send('Hello express!')
//})

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Pratap Kumar'
        })
})


app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Pratap Kumar'
    })
})


app.get('/help', (req, res) => {
    res.render('help', {title: 'Help Page',message:'What do you neeed? '})
})


app.get('/weather', (req, res) => {

    if (!req.query.location) {
        return res.send({Error : 'Location not provided'})
    }

    console.log(req.query.location)

    geocode(req.query.location, (error, { latitude, longitude, location } = {}) => {

        if (error) {
            return res.send({error})
        }

        forecast(latitude, longitude, (error,forecastData) => {
            if (error) {
                return res.send({error})
            }

            res.send({forecast:forecastData,location,address: req.query.address})
        })

    })

    //res.send({
    //    "Location": req.query.location ,
    //"Forecast" : 45 })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({ Error: 'Search string not provided'})
    }
    console.log(req.query)
    res.send({products : [] })

})


app.get('/help/*', (req , res) => {
    res.render('404', {
        title: '404',
        name:'Andrew Mead',
        errorMessage:'Help Article Not Found'
    })
})

app.get('*', (req, res) => {

    res.render('404', {
        title: '404',
        name:'Andrew Mead',
        errorMessage:'Page Not Found'
    })
})

app.listen(3000, () => {
console.log('Server is up on port 3000')
})


