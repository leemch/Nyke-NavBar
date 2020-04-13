


module.exports = {
    find: (db, keyword) => {
        return db.collection("shoes").find({ $or: [{ collection: { $regex: new RegExp(keyword, 'i') } }, { type: { $regex: new RegExp(keyword, 'i') } }] })
            .limit(50).toArray()

    },
    mongoFindById: (db, id) => {
        return db.collection("shoes").find({ nikeID: parseInt(id) }).toArray();
    },
    mongoFindByPrice: (db, price) => {
        return db.collection("shoes").find({ discountPrice: { $lt: parseInt(price) } }).limit(50).toArray();
    }
}

