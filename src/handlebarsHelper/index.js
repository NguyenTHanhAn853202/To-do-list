
const addZero = (number)=>{
    const sNumber = number+''
    return sNumber.length ===1?`0${number}`:number
  }

const handlebarsHelper = (hbs)=>{
    hbs.registerHelper("date",function(date) {
        const time = new Date(date)
        const day = time.getDay()===0?'Chủ nhật':`T${time.getDay()+1}`
        return `${time.getHours()}:${addZero(time.getMinutes())} - ${day}_${addZero(time.getDate())}/${addZero(time.getMonth()+1)}/${time.getFullYear()}`
      })
    
    hbs.registerHelper("ifDate", function(conditional,value1,value2) {
        if (conditional) {
            return conditional
        }
        else{
          const newDate = new Date()
          return `${newDate.getFullYear()}-${addZero(newDate.getMonth()+1)}-${addZero(newDate.getDate())}`
        }
      });
      
    hbs.registerHelper("ifClass", function(conditional,value1,value2) {
        if (conditional) {
            return value1
        }
        else{
            return value2
        }
      });

    hbs.registerHelper('log',function (log) {
          console.log(log)
      })
      
    hbs.registerHelper('ifActive',function (value1,value2,active) {
          if(value1 === value2){
            return active
          }
          return ''
      })
    
      
      
}

module.exports = handlebarsHelper