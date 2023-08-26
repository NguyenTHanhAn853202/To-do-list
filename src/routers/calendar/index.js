const router = require('express').Router()
const Calendar = require('../../App/Controller/calendar')

router.delete('/:id',Calendar.delete)
router.put('/:id',Calendar.confirm)
router.get('/',Calendar.index)

module.exports = router