const router = require('express').Router();
const Register = require('../../App/Controller/register')

router.get('/',Register.index)

router.post('/create',Register.create)

module.exports = router