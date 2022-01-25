const express = require('express')
const config = require('config')
const mainRoute = require('./routes/route')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(mainRoute)



const Port = config.get('PORT')
app.listen(Port, ()=>{
    console.log(`Live Server on Port: ${Port}`)
})