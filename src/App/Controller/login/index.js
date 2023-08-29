const Account = require('../../Model/Account')
const jwt = require('jsonwebtoken')
const localStorage = require('node-localstorage').LocalStorage
const local = new localStorage('./localStorage')

class Login{
    index(req, res) {
        res.render('login',{active:'login'})
    }

    async refreshToken(req, res) {
        
    }

    async login(req, res) {
        const name = req.body?.name
        const password = req.body?.password
        const data = await Account.findOne({username: name, password: password})
        if(data){
            res.cookie('login',true)
            res.cookie('userName',data?.userName,{httpOnly:true})
            res.redirect('/home')
        }
        return res.render('login',{show:true})
    }

    async logout(req, res){
        res.cookie('login','',{maxAge:0})
        res.cookie('userName','',{maxAge:0})
        res.redirect('/login')
    }
}

module.exports = new Login()