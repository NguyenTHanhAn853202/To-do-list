const router = require('express').Router()
const Calendar = require('../../App/Controller/calendar')
const {logined} = require('../../utils/logined')

router.delete('/:id',logined,Calendar.delete)
router.put('/:id',logined,Calendar.confirm)
router.get('/',logined,Calendar.index)

module.exports = router