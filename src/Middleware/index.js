const middleware = (req, res, next) => {
    const logined =  req.cookies.login
    console.log(logined)
    res.locals.logined = logined;
    next();
  }

module.exports = middleware