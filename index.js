const request = require('request')
const config = require('config')
const argv = require('yargs').argv

const apiKey = config.get('apiKey')
const city = req.body.city

let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

request(url,(err,res,body)=>{
    if(err){
        console.log(`error: ${err}`)
    }
    else{
        const weather = JSON.parse(body)
        const message = `It is ${weather.main.temp} degrees in ${weather.name}`
        console.log(message)
    }
})