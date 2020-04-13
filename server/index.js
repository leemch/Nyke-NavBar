require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const router = express.Router();
//const MongoClient = require( 'mongodb').MongoClient
const pg = require('pg').Client
const { find, mongoFindById, mongoFindByPrice } = require('../database-final/dbhelpers.js')
const { pgFind, pgFindById, pgFindLessThanPrice } = require('../database-pg/pg_helpers.js')

const pg_connection = require('../database-pg/connection.js');
const pg_client = new pg(pg_connection)
pg_client.connect()

// const url = 'mongodb://localhost:27017';
// const dbName = 'nike';
// const mongo_client = new MongoClient(url);
// var mongo_db;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/', router);

const PORT = 3001;

// mongo_client.connect((err) => {
//     if (err) throw err;
//     console.log("MongoDb client connected")
//     mongo_db = mongo_client.db(dbName);

//     // Start the application after the database connection is ready
//     app.listen(PORT, (err) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log(`Server is listening on port ${PORT}`);
//         }
//     })
// });

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`Server is listening on port ${PORT}`);
    }
})


router.get(`/search/:keyword`, (req, res) => {
    //console.log('Searching!-->', req.params);
    //console.time('PostGresQueryTime')
    pgFind(pg_client, req.params.keyword)
        .then((result) => {
            //console.timeEnd('PostGresQueryTime')
            //console.log('Successful!');
            res.status(200).send(result.rows.map(row => row.data));
        })
        .catch((err) => {
            res.status(400).send(err);
        })
})


router.get(`/search_postgres_id/:id`, (req, res) => {
    // console.log('Searching postgres nikeID!-->', req.params.id);
    // console.time('PostGres search by NikeID time')
    pgFindById(pg_client, req.params.id)
        .then((result) => {
            // console.log('Successful!');
            // console.timeEnd('PostGres search by NikeID time')
            res.status(200).send(result.rows.map(row => row.data));
        })
        .catch((err) => {
            res.status(400).send(err);
        })
})

router.get(`/search_postgres_price/:price`, (req, res) => {
    //console.log('Searching postgres price!-->', req.params.price);
    //console.time('PostGres search by price time')
    pgFindLessThanPrice(pg_client, req.params.price)
        .then((result) => {
            //console.log('Successful!');
            //console.timeEnd('PostGres search by price time')
            res.status(200).send(result.rows.map(row => row.data));
        })
        .catch((err) => {
            res.status(400).send(err);
        })
})



// router.get(`/search/:keyword`, (req, res) => {
//     // console.log('Searching!-->', req.params);
//     // console.time('mongoQueryTime')
//     find(mongo_db, req.params.keyword)
//         .then((result) => {
//             //console.timeEnd('mongoQueryTime')
//             //console.log('Successful!');
//             res.status(200).send(result);
//         })
//         .catch((err) => {
//             res.status(400).send(err);
//         })
// })



// router.get(`/search_mongo_id/:id`, (req, res) => {
//     //console.log('Searching mongo nikeID!-->', req.params.id);
//     //console.time('mongo search by NikeID time')
//     mongoFindById(mongo_db, req.params.id)
//         .then((result) => {
//             //console.log('Successful!');
//             //console.timeEnd('mongo search by NikeID time')
//             res.status(200).send(result);
//         })
//         .catch((err) => {
//             res.status(400).send(err);
//         })
// })

// router.get(`/search_mongo_price/:price`, (req, res) => {
//     console.log('Searching mongo price!-->', req.params.price);
//     console.time('mongo search by price time')
//     mongoFindByPrice(mongo_db, req.params.price)
//         .then((result) => {
//             console.log('Successful!');
//             console.timeEnd('mongo search by price time')
//             res.status(200).send(result);
//         })
//         .catch((err) => {
//             res.status(400).send(err);
//         })
// })

// router.get(`/count/:keyword`, (req, res) => {
//     console.log('counting!');

//     count(req.params)
//         .then((result) => {
//             console.log('Successful!');
//             res.status(200).send(result);
//         })
//         .catch((err) => {
//             res.status(400).send(err);
//         })

// })





