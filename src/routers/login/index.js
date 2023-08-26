const router = require('express').Router()
const Login = require('../../App/Controller/login')

router.post('/',Login.login)
router.get('/',Login.index)

module.exports = router