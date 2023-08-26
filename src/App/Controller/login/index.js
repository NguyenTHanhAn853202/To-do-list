const Account = require('../../Model/Account')
const jwt = require('jsonwebtoken')
const localStorage = require('node-localstorage').LocalStorage
const local = new localStorage('./localStorage')

class Login{
    index(req, res) {
        res.render('login')
    }

    async refreshToken(req, res) {
        
    }

    async login(req, res) {
        const name = req.body?.name
        const password = req.body?.password
        const data = await Account.findOne({username: name, password: password})
        if(data){
            local.setItem('userName', name);
            return res.render('home',{login:true})
        }
        return res.render('login',{show:true})
    }
}

module.exports = new Login()