const {getData} = require('./generateData.js');
//const db = require('./index.js');
var collections = ['Men Shoe', 'Women Shoe', 'Running', 'Run', 'Air', 'Free', 'Zoom', 'React', 'Flyknit', 'Vomero', 'RN', 'Jordan', 'Free RN', 'Odyssey', 'Air Zoom', 'React A.I.R', 'React Terra', 'Zoom Vomero', 'React Ianga', 'Jordan React', 'Air Zoom Fly', 'Odyssey React', 'React Element', 'Air Zoom Fly 3', 'Zoom Vomero 14', 'Free RN Motion', 'React HyperSet', 'Air Zoom Freak', 'Air Zoom Vomero', 'React Element 55', 'Air Zoom Pegasus', 'React Terra Globe', 'Air Zoom Vomero 14', 'React HyperSet Rise', 'Odyssey React JoyRide', 'Odyssey React JoyRide CC', 'Air Zoom Pegasus FlyEase', 'Light Redwood', 'Pink Quartz', 'White', 'Dark Grey', 'Pure Platinum', 'Anthracite', 'Bright Crimson', 'Black', 'Pink Blast', 'Dune Red', 'Mahogany', 'Team Orange', 'Burgundy Ash', 'Stone Mauve', 'Barely Rose', 'Smokey Mauve', 'Metallic Red Bronze', 'Volt', 'Gum Light Brown', 'Aura', 'Light Armory Blue', 'Mint Foam', 'Blackened Blue', 'Cosmic Clay', 'Blue Hero', 'Sail', 'Barely Grey', 'Fossil', 'Pistachio Frost', 'Iced Lilac', 'Noble Red', 'Atomic Violet', 'Night Maroon', 'Oil Grey', 'Wolf Grey', 'Cool Grey', 'Metallic Platinum', 'Valerian Blue', 'Vivid Purple', 'Plum Chalk', 'Infinite Gold', 'Silver Lilac', 'Metallic Gold', 'True Berry', 'Vast Grey', 'Phantom', 'Barely Volt', 'Spruce Aura', 'Bio Beige', 'Light Orewood Brown', 'Villain Red', 'Hyper Crimson', 'Pumice', 'Celestial Gold', 'Echo Pink', 'Photon Dust', 'Light Thistle', 'Pollen Rise', 'Magic Flamingo', 'University Blue', 'Half Blue', 'Beechtree', 'Cargo Khaki', 'Off Noir', 'Summit White', 'Laser Fuchsia', 'Psychic Purple', 'Thunder Grey', 'Light Carbon', 'Bright Ceramic', 'Yellow Pulse', 'Ocean Cube', 'Metallic Cool Grey', 'Speed Yellow', 'Team Red', 'Cosmic Fuchsia', 'Limelight', 'Hyper Pink', 'Racer Blue', 'Atmosphere Grey', 'Sky Grey', 'Obsidian Mist', 'Particle Grey', 'Lava Glow', 'Light Bone', 'Laser Crimson', 'Platinum Tint', 'Track Red', 'Light Blue'];

const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'nike';

// Create a new MongoClient
const client = new MongoClient(url);
let collection;

// Use connect method to connect to the Server
client.connect(function (err) {
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    collection = db.collection('shoes');

    console.time('insertTimer');
    seedData(collection).then(() => {
        console.timeEnd('insertTimer')
        client.close();
    });
});



async function seedData(db) {
    const limit = 10000000;
    const threshold = 10000;

    let cache = [];
    for (let x = 0; x < limit; x += threshold) {
        cache = getData(threshold);
        await db.insertMany(cache).then(() => {
            console.log(`${x + threshold} documents inserted so far.`);
            cache = [];
        })
            .catch(err => console.log(err))
    }
}



// async function seedData(db) {
//     const limit = 10000;
//     const threshold = 100;

//     let cache = [];
//     let len = data.length;
//     for (let x = 1; x <= limit; x++) {

//         const shoe = {
//             item: data[Math.floor(Math.random() * len)].item,
//             price: data[Math.floor(Math.random() * len)].price,
//             colors: data[Math.floor(Math.random() * len)].colors,
//             collections: data[Math.floor(Math.random() * len)].collections,
//             image: data[Math.floor(Math.random() * len)].image,
//             type: Math.floor(Math.random() * 2) === 1 ? 'Women Shoe' : 'Men Shoe',
//             id: x
//         }

//         cache.push(shoe);

//         if (x % threshold === 0) {
//             await db.insertMany(cache).then(() => {
//                 console.log(`${x} documents inserted so far.`);
//                 cache = [];
//             })
//                 .catch(err => console.log(err))
//         }
//     }
// }


