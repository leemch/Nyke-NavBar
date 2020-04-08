// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/nike', {useNewUrlParser: true});

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Connected to mongoose!');
// });

// var shoeSchema = mongoose.Schema({
//     item: String,
//     type: String,
//     price: String,
//     image: String,
//     collections: [String],
//     colors: [String],
//     id: Number
// });

// var Shoe = mongoose.model('Shoes', shoeSchema);

// module.exports = Shoe;

const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'nike';

// Create a new MongoClient
const client = new MongoClient(url);
let collection;

// Use connect method to connect to the Server
client.connect(function(err) {
  console.log("Connected successfully to server");

  
});

module.exports = client;

