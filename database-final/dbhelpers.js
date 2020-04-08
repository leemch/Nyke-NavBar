


module.exports = {
    find: (db, keyword) => {
        //console.log(db)
        //return db.collection("shoes").or([{ collection: { $regex: new RegExp(keyword, 'i') } }, { type: { $regex: new RegExp(keyword, 'i') }}]).limit(20).toArray()
        return db.collection("shoes").find({ $or: [{ collection: { $regex: new RegExp(keyword, 'i') } }, { type: { $regex: new RegExp(keyword, 'i') } }, { name: { $regex: new RegExp(keyword, 'i') } }] }).limit(50).toArray()
        //return db.collection("shoes").find({ collection: keyword }).limit(20).toArray()
    },
    findById: (db, id) => {
        return db.collection("shoes").find({nikeID: id}).toArray();
    }
}

