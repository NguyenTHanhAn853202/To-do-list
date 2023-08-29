const middleware = (req, res, next) => {
    const logined =  req.cookies.login
    res.locals.logined = logined;
    next();
  }

module.exports = middleware