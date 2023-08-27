const logined = (req,res,next) => {
    const cookie = req.cookies
    const login = cookie.login

    if(login) {
        next()
    }
    else{
        return res.render('login')
    }

}

const unLogined = (req, res, next)=>{
    const cookie = req.cookies
    const login = cookie.login
    if(login) {
        res.render('home')
    }
    else next()
}

module.exports = {logined,unLogined}