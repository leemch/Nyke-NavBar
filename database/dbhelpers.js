const db = require('./index.js');

module.exports = {
    find: ({ keyword }) => {
       return db.find().or([{ collections: { $regex: new RegExp(keyword, 'i') } }, { type: { $regex: new RegExp(keyword, 'i') }}])
    }
}
