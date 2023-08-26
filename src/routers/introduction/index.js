const router = require('express').Router()
const Introduction = require('./../../App/Controller/Introduction')

router.get('/',Introduction.home)

module.exports = router