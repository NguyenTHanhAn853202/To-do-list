const Calendar = require('../../Model/Calendar')
const toObject = require('../../../utils/toObject')

class Calender{
    async index(req,res,next){
        const date = req.query['input-date'] || ''
        const userName = req.cookies?.userName
        const dataFind = await Calendar.find({dateFind:date,finished:{$ne:true},userName:userName })
        const find = toObject.many(dataFind)
        const data = await Calendar.find({date:{$gte:new Date()},userName:userName,finished:{$ne:true}}).sort({date:1})
        const calendar = toObject.many(data)
        const checkFind = find.length >0?true:false
        const check = calendar.length>0?true:false
        return res.render('calendar',{calendar:calendar,find:find,others:{dateFind:date,checkFind,check},active:'calendar'})
    }

    async confirm(req, res, next) {
        const id = req.params.id
        await Calendar.updateOne({_id:id}, {finished:true})
        return res.redirect('back')   
    }

    async delete(req, res, next) {
        const id = req.params.id
        await Calendar.deleteOne({_id:id})
        return res.redirect('back')
    }

}

module.exports = new Calender()