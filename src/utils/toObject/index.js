
const toObject = {
    one(object){
        return object?object.toObject():object
    },
    many(objects){
        return objects.map((item)=>item.toObject());
    }
}

module.exports = toObject