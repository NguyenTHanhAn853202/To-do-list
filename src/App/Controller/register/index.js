const Account = require('../../Model/Account')

class Register{

    index(req,res) {
        return res.render('register')
    }
    async create(req, res) {
        const userName = req.body?.username||''
        const password = req.body?.password||''
        const account = new Account({userName:userName, password:password})
        await account.save()
        return res.render('register')
    }
}

module.exports = new Register()