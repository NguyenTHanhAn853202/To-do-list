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

// connect db
db.connect();


// Router
route(app)


// registerHelper HandleBar
hbs.handlebars.registerHelper("ifDate", function(conditional,value1,value2) {
  if (conditional) {
      return conditional
  }
  else{
    const newDate = new Date()
    return `${newDate.getFullYear()}-${addZero(newDate.getMonth()+1)}-${addZero(newDate.getDate())}`
  }
});

hbs.handlebars.registerHelper("ifClass", function(conditional,value1,value2) {
  if (conditional) {
      return value1
  }
  else{
      return value2
  }
});

const addZero = (number)=>{
  const sNumber = number+''
  return sNumber.length ===1?`0${number}`:number
}

hbs.handlebars.registerHelper("date",function(date) {
  const time = new Date(date)
  const day = time.getDay()===0?'Chủ nhật':`T${time.getDay()+1}`
  return `${time.getHours()}:${addZero(time.getMinutes())} - ${day}_${addZero(time.getDate())}/${addZero(time.getMonth()+1)}/${time.getFullYear()}`
})

hbs.handlebars.registerHelper('log',function (log) {
    console.log(log)
})

hbs.handlebars.registerHelper('ifActive',function (value1,value2,active) {
    if(value1 === value2){
      return active
    }
    return ''
})

app.listen(3030)