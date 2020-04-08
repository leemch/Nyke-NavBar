const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'nike';

const client = new MongoClient(url);
// Use connect method to connect to the server
client.connect(function (err) {
    console.log("Connected correctly to server");

    const db = client.db(dbName);

    // findDocuments(db, function (docs) {
    //     console.log(docs);
    //     client.close();
    // });
    findDocuments(db).then(docs => console.log(docs))
});


const findDocuments = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('shoes');
    // Find some documents
    // collection.find({}).toArray(function (err, docs) {
    //     console.log("Found the following records");
    //     console.log(docs)
    //     callback(docs);
    // });

    return collection.find({}).toArray()
}