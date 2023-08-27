const router = require('express').Router();
const Register = require('../../App/Controller/register')
const {unLogined} = require('../../utils/logined')

router.get('/',unLogined,Register.index)

router.post('/create',unLogined,Register.create)

module.exports = router