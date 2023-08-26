const checkEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
const isEmail = (email) => checkEmail.test(email)

module.exports = isEmail