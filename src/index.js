const express = require('express')
const morgan = require('morgan')
const {engine} = require('express-handlebars')
const path = require('path')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const db = require('./configs/db')
const {route} = require('./routers')
const handlebars = require('express-handlebars')
const handlebarsHelper = require('./handlebarsHelper')
const middleware = require('./Middleware')


var hbs = handlebars.create({});


const app = express()

// morgan
app.use(morgan('combined'))

// handlebars
app.engine('.hbs',engine({extname: '.hbs'}))
app.set('view engine','.hbs')
app.set('views',path.join(__dirname, './App/views'))

// Body parser
app.use(bodyParser.urlencoded({
  extended:true
}))
app.use(bodyParser.json())

app.use(cookieParser())

// method-override
app.use(methodOverride('_method'))

// cors
app.use(cors({credentials: true,origin:true}))

app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

app.use(express.static(path.join(__dirname, 'public')))

app.use(middleware);

// connect db
db.connect();


// Router
route(app)


// registerHelper HandleBar

handlebarsHelper(hbs.handlebars)


app.listen(3030)