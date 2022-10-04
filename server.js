//loding packages
const express =require('express')
const methodOverride =require('method-override')

//loding mongoConfig from config file
const mongoConfig = require('./config')
const bodyParser = require('body-parser')

//bring in our routes
// const captainsLogRoutes = require('./routes/captainsLogRoutes')
const fictionBooksRoutes = require('./routes/fictionBooksRoutes')

require('dotenv').config()

//create our app
const app = express()

//setup view engine
app.set('view engine','jsx')
app.engine('jsx',require('express-react-views').createEngine())
//middle ware
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static("public"))
app.use(methodOverride("_method"))
// app.use('/logs', captainsLogRoutes)
//define port
const port = process.env.PORT
// Listen to port
app.listen(port, () => console.log('Listening on port: ', port))

//connect  to DB
mongoConfig()