const Introduction = require('./introduction')
const calendar = require('./calendar')
const Scheduel = require('./scheduel')
const Register = require('./register')
const Login = require('./login')

const route = (app) =>{
    app.use('/introduction',Introduction)
    app.use('/calendar',calendar)
    app.use('/scheduel',Scheduel)
    app.use('/register',Register)
    app.use('/login',Login)
    app.use('/',(req, res) =>{
        res.render('home')
    })
}

module.exports = {route}