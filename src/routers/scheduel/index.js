const router = require('express').Router()
const Scheduel = require('../../App/Controller/scheduel')

router.get('/',Scheduel.index)

router.post('/create-calendar',Scheduel.create)

module.exports = router