const request = require('request')
const config = require('config')

module.exports.Hello = async(req,res)=>{
    res.render(`index`,{weather: null, error: null})
}

module.exports.City = async(req,res)=>{
    let city = req.body.city
    const apiKey = config.get('apiKey')
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    try {
        request(url, (error, response, body)=>{
            if(error){
                res.render('index', {weather: null, error: 'Error, please try again'})
                console.log('index', {weather: null, error: 'Error, please try again'})
            }else{
                const weather = JSON.parse(body)
                if(weather.main == undefined){
                res.render('index', {weather: null, error: 'Error, please try again'})
                console.log('index', {weather: null, error: 'Error, please try again'})
                }else{
                    const weatherText = `it is ${weather.main.temp} degree in ${weather.name}!`
                    res.render('index', {weather: weatherText, error: null})
                    console.log('index', {weather: weatherText, error: null})
                }
            }
        })
    } catch (error) {
        console.log(`this error occoured ${error}`)
    }
}


