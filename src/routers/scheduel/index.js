const router = require('express').Router()
const Scheduel = require('../../App/Controller/scheduel')
const {logined} = require('../../utils/logined')

router.get('/',Scheduel.index)

router.post('/create-calendar',logined,Scheduel.create)

module.exports = router