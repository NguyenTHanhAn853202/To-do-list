
class Introduction {

    home(req,res,next) {

        return res.render('introduction',{
            active:'introduction'
        })
    }
}

module.exports = new Introduction()