const addZero = (number) =>{
    const sNumber = number+''
    const leng = sNumber.length
    return leng>1?sNumber:`0${sNumber}`
}

module.exports = addZero