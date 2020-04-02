const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nike', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to mongoose!');
});

var shoeSchema = mongoose.Schema({
    item: String,
    type: String,
    price: String,
    image: String,
    collections: [String],
    colors: [String],
    id: Number
});

var Shoe = mongoose.model('Shoes', shoeSchema);

module.exports = Shoe;