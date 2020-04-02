const data = require('./generateData');
const db = require('./index.js');

db.create(data, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('Sample data inserted into database!');
    }
})