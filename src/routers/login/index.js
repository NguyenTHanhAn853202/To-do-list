const router = require('express').Router()
const Login = require('../../App/Controller/login')
const {unLogined,logined} = require('../../utils/logined')

router.post('/',unLogined,Login.login)
router.post('/logout',logined,Login.logout)
router.get('/',unLogined,Login.index)

module.exports = router