const Calendar = require('../../Model/Calendar')
const addZero = require('../../../utils/addZero')

class Scheduel{
    index(req,res){
        res.render('scheduel',{active:'scheduel'})
    }

    async create(req,res){
        const {description,title,date,level} = req.body
        const newDate = new Date(date) || new Date()
        const dateFind = `${newDate.getFullYear()}-${addZero(newDate.getMonth()+1)}-${addZero(newDate.getDate())}`
        const newCalendar = new Calendar({name:title,description,date,level,dateFind})
        await newCalendar.save();
        return res.render('scheduel')
    }
}

module.exports = new Scheduel();