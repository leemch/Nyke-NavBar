const fs = require('fs')
const path = require('path');
const dirPath = path.join(__dirname, './generatedData');

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

let availSizesObj = {
  '5': null,
  '5x5': null,
  '6': null,
  '6x5': null,
  '7': null,
  '7x5': null,
  '8': null,
  '8x5': null,
  '9': null,
  '9x5': null,
  '10': null,
  '10x5': null,
  '11': null,
  '11x5': null,
  '12': null,
  '12x5': null,
  '13': null,
  '13x5': null,
  '14': null,
  '15': null,
  '16': null,
  '17': null,
  '18': null
}



let generateRandomDiscountPrice = (min, max, price) => {
  // min = Math.ceil(min);
  // max = Math.floor(max);
  return Math.floor(price - (price * (Math.random() * (max - min)) + min)); //The maximum is exclusive and the minimum is inclusive
}

let generateRandomPriceBasedOnLengthOfName = (shoename, base) => {
  shoename = shoename.split(' ')
  return base + (shoename.length * 10) - 10

}



let generateRandomGender = (unisexOption) => {
  let sex = ['male', 'female', 'unisex']
  if (unisexOption) {
    return sex[Math.floor(Math.random() * sex.length)]
  } else {
    sex = ['male', 'male', 'female', 'female', 'male']
    return sex[Math.floor(Math.random() * sex.length)]
  }
}

//console.log(generateRandomGender(true))

// let generateRandomSizeAvail = (sex) => {
//   let randoSize = {}
//   if(sex == 'male'){
//     for(let size in availSizesObj){
//       if(size != '5' &&
//         size != '5x5' &&
//         size != '6' &&
//         size != '6x5' &&
//         size != '14' &&
//         size != '15' &&
//         size != '16' &&
//         size != '17' &&
//         size != '18'){
//         randoSize[size] = Math.random() >= 0.3
//       } else {
//         randoSize[size] = false
//       }
//     }
//   }
//   if(sex ==  'female'){
//     for(let size in availSizesObj){
//       if(size != '12' &&
//          size != '12x5' &&
//          size != '13' &&
//          size != '13x5' &&
//          size != '14' &&
//          size != '15' &&
//          size != '16' &&
//          size != '17' &&
//          size != '18'){
//         randoSize[size] = Math.random() >= 0.3
//       } else {
//         randoSize[size] = false
//       }
//     }
//   }
//   if(sex == 'unisex'){
//     for(let size in availSizesObj){
//       if(size != '14' && size != '15' && size != '16' && size != '17' && size != '18'){
//         randoSize[size] = Math.random() >= 0.3
//        } else {
//          randoSize[size] = false
//        }
//     }
//   }
//   //console.log(randoSize)
//   return randoSize
// }


// //return a random style ID
// const randomStyleIDGenerator = () => {
//   let letters = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2).toUpperCase();
//   let fourcode = Math.floor(Number.parseFloat(Math.random()).toPrecision(4)*10000);
//   let twocode = Math.floor(Number.parseFloat(Math.random()).toPrecision(2)*100);
//   let id = `${letters}${fourcode} - ${twocode}`
//   return id
// }
// //return a random Weigth
// const randomWeight = () => {
//   let weight = Number.parseFloat(Math.random() * (20 - 10) + 10).toPrecision(4);
//   return weight
// }
// //return random offset
// const randomOffset = () => {
//   let num1 = Math.floor(Math.random() * 10)
//   let num2 = Math.floor(Math.random() * ((num1*2)-num1) + num1)
//   let num3 = Math.floor(Math.random() * ((num2*2)-num2) + num2)
//   let string = `${num1}mm (${num2}mm forefoot, ${num3}mm heel)`
//   return string
// }
// //return random LAST property
// const randomLastID = () => {
//   let letters = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2).toUpperCase();
//   let twocode = Math.floor(Number.parseFloat(Math.random()).toPrecision(2)*100);
//   let id = `${letters}${twocode}`
//   return id
// }


//Return Shoe Type
const returnShoeType = (gender) => {
  if (gender == 'male') {
    return 'Men'
  }
  if (gender == 'female') {
    return 'Women'
  }
  if (gender == 'unisex') {
    return 'Unisex'
  }
}




//generate random color based on gender
const generateRandomShoeColor = (gender) => {
  if (gender == 'male') {
    return maleColors[Math.floor(Math.random() * maleColors.length)]
  }
  if (gender == 'female') {
    return femaleColors[Math.floor(Math.random() * femaleColors.length)]
  }
  if (gender == 'unisex') {
    if (Math.random >= 0.45) {
      return maleColors[Math.floor(Math.random() * femaleColors.length)]
    } else {
      return femaleColors[Math.floor(Math.random() * femaleColors.length)]
    }
  }
}

//return random color arrangement
let maleColors = [
  ["White", "Black", "Atomic Violet", "Night Maroon"],
  ["Aura", "Mint Foam", "Speed Yellow", "Blackened Blue"],
  ["Pistachio Frost", "White", "Black"],
  ["White", "Washed Coral", "Hyper Blue", "Multi-Color"],
  ["Fossil", "Black", "Pistachio Frost", "White"],
  ["Black", "Cosmic Fuchsia", "Limelight", "Hyper Pink"],
  ["Laser Crimson", "Light Smoke Grey", "Photon Dust", "White"],
  ["Atmosphere Grey", "Thunder Grey", "Vast Grey"],
  ["Aura", "Light Armory Blue", "Mint Foam", "Blackened Blue"],
  ["Light Orewood Brown", "Black", "Villain Red", "Hyper Crimson"],
  ["Beechtree", "Cargo Khaki", "Bright Crimson", "Off Noir"],
  ["Oil Grey", "Black", "Wolf Grey", "Barely Grey"],
  ["Dune Red", "Mahogany", "Team Orange", "Burgundy Ash"],
  ["Black", "Light Thistle", "Pollen Rise", "Magic Flamingo"],
  ["Anthracite", "Barely Grey", "White", "Black"],
  ["Team Red", "White", "Gum Light Brown", "Team Red"],
  ["Black", "White", "University Blue", "Black"],
  ["Cosmic Clay", "Blue Hero", "Sail", "Black"],
  ["Black", "Racer Blue", "Atmosphere Grey", "Black"],
  ["Volt", "White", "Gum Light Brown", "Volt"],
  ["Sky Grey", "Vast Grey", "Obsidian Mist", "Particle Grey"],
  ["Phantom", "Light Bone", "Black"],
  ["Black", "Thunder Grey", "Light Carbon", "Bright Ceramic"],
  ["Black", "Red Orbit", "Light Photo Blue", "Metallic Gold"],
  ["Black", "Anthracite", "Pink Blast", "Black"],
  ["Dark Grey", "Pure Platinum", "Anthracite", "Bright Crimson"],
]

let femaleColors = [
  ["Black", "True Berry", "White", "Pink Blast"],
  ["Laser Crimson", "Platinum Tint", "Track Red", "White"],
  ["Black", "Thunder Grey", "White"],
  ["Echo Pink", "Metallic Red Bronze", "Oil Grey", "Metallic Red Bronze"],
  ["Phantom", "Barely Volt", "Spruce Aura", "Bio Beige"],
  ["White", "Summit White", "Laser Fuchsia", "Psychic Purple"],
  ["Pumice", "Vast Grey", "Celestial Gold", "Pink Quartz"],
  ["Ocean Cube", "Pure Platinum", "White", "Metallic Cool Grey"],
  ["Black", "Half Blue", "White", "Light Blue"],
  ["Plum Chalk", "Infinite Gold", "Silver Lilac", "Metallic Gold"],
  ["True Berry", "Vast Grey", "Pink Blast", "Black"],
  ["Stone Mauve", "Barely Rose", "Smokey Mauve", "Metallic Red Bronze"],
  ["White", "Black", "Iced Lilac", "Noble Red"],
  ["Black", "Photon Dust", "Valerian Blue", "Vivid Purple"],
  ["Light Redwood", "Pink Quartz", "White"],
  ["Cool Grey", "Wolf Grey", "White", "Metallic Platinum"],
  ["Wolf Grey", "Cool Grey", "Ocean Cube", "Metallic Cool Grey"],
  ["Black", "Valerian Blue", "Vivid Purple"],
  ["Ocean Cube", "Pure Platinum", "Metallic Cool Grey"],
  ["Half Blue", "White", "Black"],
  ["Pure Platinum", "Lava Glow", "Summit White"],
  ["Pure Platinum", "White", "Yellow Pulse", "Psychic Purple"],
  ["Half Blue", "White", "Black"],
]



let additionals = ['Trail', 'FlyKnit', 'Shield', 'Rise']

/* REACT SHOE ____________________________________________________ */
// [Epic[Phantom], Odyssey, Legend]React[A.I.R, ENG, Vision, Presto, HyperSet, Element 55, Sertu, Ianga, Terra Globe, HyperSet, Infinity Run, ][Shield[2, 3], FlyKnit[2, 3]][SE]
let reactVariants = ['A.I.R', 'ENG', 'Vision', 'Element 55', 'Element 87', 'Presto', 'HyperSet', 'Element 55', 'Sertu', 'Ianga', 'Terra Globe', 'HyperSet', 'Infinity Run', 'JoyRide CC', 'Type GTX']
let reactVersion = ['2', '3', '4']
let reactPrefixs = {
  'Epic': ['Phantom', ''],
  'Odyssey': [''],
  'Legend': [''],
}



const generateReactShoe = (givenName) => {
  let shoe = {}
  //__________________________________SHOE NAME
  let generateReactName = () => {
    let shoeName = `React`
    //get a suffix 20% of time
    if (Math.random() >= 0.8) {
      let reactPrefixsArray = Object.keys(reactPrefixs)
      let randomReactPrefix = reactPrefixsArray[Math.floor(Math.random() * reactPrefixsArray.length)]
      let randomReactSubPrefix = reactPrefixs[randomReactPrefix][Math.floor(Math.random() * reactPrefixs[randomReactPrefix].length)]
      shoeName = `${randomReactPrefix} ${randomReactSubPrefix} ${shoeName}`
    }
    //95 of the time there will be a variant added
    if (Math.random() >= 0.05) {
      let randomReactVariant = reactVariants[Math.floor(Math.random() * reactVariants.length)]
      shoeName = `${shoeName} ${randomReactVariant}`
    }

    //50% of the time there will be an random additional suffix added
    if (Math.random() >= 0.4) {
      let randomAdditive = additionals[Math.floor(Math.random() * additionals.length)]
      shoeName = `${shoeName} ${randomAdditive}`
    }

    //70% of the time there is something added
    if (Math.random() >= 0.3) {
      let versions = ['2', '3', '4']
      shoeName = `${shoeName} ${versions[Math.floor(Math.random() * versions.length)]}`
    }

    //10% of being special edition
    if (Math.random() >= 0.90) {
      shoeName = `${shoeName} (SE)`
    }
    //2% change of getting a Jordan
    if (Math.random() >= 0.98) {
      shoeName = 'Jordan React Havoc'
    }
    shoeName = `Nike ${shoeName}`
    //cleanwhite spaces
    shoeName = shoeName.replace(/\s{2,}/g, ' ');
    shoeName = shoeName.trim()
    return shoeName
  }
  if (givenName === null) {
    shoe.name = generateReactName()
  } else {
    shoe.name = givenName
  }
  //__________________________________SHOE NAME



  const price = generateRandomPriceBasedOnLengthOfName(shoe.name, 90)
  shoe.discountPrice = generateRandomDiscountPrice(0.05, 0.40, price)
  //passing generateRandomGender true allows for unisex option
  const gender = generateRandomGender(false)

  const productPictures = generateReactPhotos(shoe.name)
  //stacey!!!!
  shoe.type = `${returnShoeType(gender)} Shoe`
  shoe.collection = shoe.name.split(' ')
  generateRandomShoeColor(gender).forEach(color => shoe.collection.push(color))
  shoe.image = productPictures[0]

  //console.log(shoe)
  return shoe
}



/* ZOOM SHOEEEE_____________________________________________ */
// [Air] Zoom[X] [Freak, Vomero[14,15], WildHorse[4, 5], Terra Kiger[5, 6], Fly 3[Premium], Pegasus[35, 36][FlyEase, Turbo[2, 3], Vaporfly[4%, NEXT%]]] [Trail, FlyKnit, Shield, Rise][SE]
let zoomVariants = {
  '': ['1', '2', ''],
  'Freak': [''],
  'Vomero': ['', 14, 15],
  'WildHorse': ['', 4, 5],
  'Terra Kiger': ['', 5, 6],
  'Fly 3': ['', 'Premium'],
  'Pegasus': [35, 36, ''],
}

let pegasusVariants = {
  'FlyEase': [''],
  'Turbo': [2, 3, ''],
  'Vaporfly': ['', '4%', 'NEXT%']
}

let generateZoomShoe = (givenName) => {
  let shoe = {}


  //shoeName ______________________________________
  let generateZoomShoeName = () => {
    let shoeName = `Zoom`
    Math.random() >= 0.4 ? shoeName = `Air ${shoeName}` : '';
    Math.random() >= 0.9 ? shoeName = `${shoeName}X` : '';

    //Choose A Zoom Varient 80% of time
    let variants = Object.keys(zoomVariants)
    let randomVariant = variants[Math.floor(Math.random() * variants.length)];
    //Choose a varient Version
    let randomVarientVersion = `${zoomVariants[randomVariant][Math.floor(Math.random() * zoomVariants[randomVariant].length)]}`
    shoeName = `${shoeName} ${randomVariant} ${randomVarientVersion}`;

    //If varient is pegasus add
    if (randomVariant == 'Pegasus') {
      let pegasusVariantArray = Object.keys(pegasusVariants)
      let randomPegasusVariant = pegasusVariantArray[Math.floor(Math.random() * pegasusVariantArray.length)]
      shoeName = `${shoeName} ${randomPegasusVariant}`
      let randomPegasusVariantVersion = pegasusVariants[randomPegasusVariant][Math.floor(Math.random() * pegasusVariants[randomPegasusVariant].length)]
      shoeName = `${shoeName} ${randomPegasusVariantVersion}`
    }

    //add ending suffixs 70% of tim
    if (Math.random() >= 0.3) {
      shoeName = `${shoeName} ${additionals[Math.floor(Math.random() * additionals.length)]}`
    }

    shoeName = `Nike ${shoeName}`

    //clean whitespaces
    shoeName = shoeName.replace(/\s{2,}/g, ' ');
    shoeName = shoeName.trim()
    return shoeName
  }
  if (givenName === null) {
    shoe.name = generateZoomShoeName()
  } else {
    shoe.name = givenName
  }
  //shoeName ______________________________________


  const price = generateRandomPriceBasedOnLengthOfName(shoe.name, 90)
  shoe.discountPrice = generateRandomDiscountPrice(0.05, 0.30, price)
  //passing generateRandomGender true allows for unisex option
  const gender = generateRandomGender(false)
  //stacey!!!!
  shoe.type = `${returnShoeType(gender)} Running Shoe`
  shoe.collection = shoe.name.split(' ')
  generateRandomShoeColor(gender).forEach(color => shoe.collection.push(color))
  shoe.image = generateReactPhotos(shoe.name)[0]

  //console.log(shoe)
  return shoe
}


/* FREE RUN SHOE */
let generateRandomFreeRunShoe = (givenName) => {
  let shoe = {}
  //shoeName ______________________________________
  const generateFreeRunName = () => {
    let nums = ['3.0', '5.0'];
    let shoeName = `Free RN`;

    if (Math.random() >= 0.8) {
      shoeName = `${shoeName} Motion`
    }
    if (Math.random() >= 0.8) {
      shoeName = `${shoeName} FlyKnit`
    }
    if (Math.random() >= 0.4) {
      shoeName = `${shoeName} ${nums[Math.floor(Math.random() * nums.length)]}`
    }
    if (Math.random() >= 0.6) {
      shoeName = `${shoeName} NRG`
    }
    if (Math.random() >= 0.8) {
      shoeName = `${shoeName} 2018`
    }

    shoeName = `Nike ${shoeName}`
    //clean whitespaces
    shoeName = shoeName.replace(/\s{2,}/g, ' ');
    shoeName = shoeName.trim()
    return shoeName
  }
  if (givenName === null) {
    shoe.name = generateFreeRunName()
  } else {
    shoe.name = givenName
  }
  //shoeName ______________________________________

  const price = generateRandomPriceBasedOnLengthOfName(shoe.name, 90)
  shoe.discountPrice = generateRandomDiscountPrice(0.05, 0.30, price)
  //passing generateRandomGender true allows for unisex option
  const gender = generateRandomGender(false)

  //stacey!!!!
  shoe.type = `${returnShoeType(gender)} Running Shoe`
  shoe.collection = shoe.name.split(' ')
  generateRandomShoeColor(gender).forEach(color => shoe.collection.push(color))
  shoe.image = generateReactPhotos(shoe.name)[0]

  return shoe
  // console.log(shoe)
}




/*
*/
let generateFreeRnPhotos = (shoename) => {
  if (shoename.includes('Motion')) {
    return sampleFreeRNMotion
  }
  if (shoename.includes('FlyKnit')) {
    return sampleFreeRNflyknit
  }
  if (shoename.includes('NRG')) {
    return sampleFreeRNNRG
  }
  if (shoename.includes('5.0')) {
    return sampleFreeRN50
  }
  if (shoename.includes('3.0')) {
    return sampleFreeRN30
  }
  if (shoename.includes('2018')) {
    return sampleFreeRN2018
  }
  return sampleFreeRunPhotos
}


let sampleFreeRN30 = [
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/znfif7ia3eu2oosdlrbv/free-rn-flyknit-3-womens-running-shoe-TSXbz2.jpg",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/zlt5i9rqr6cjiam8n76h/free-rn-flyknit-3-womens-running-shoe-TSXbz2.jpg",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/oeddmivmlxkucqqpbo9h/free-rn-flyknit-3-womens-running-shoe-TSXbz2.jpg",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/zyxtxgzg3k4xjbnkxejs/free-rn-flyknit-3-womens-running-shoe-TSXbz2.jpg",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/hfzo8ma3kqnyg8iguqdd/free-rn-flyknit-3-womens-running-shoe-TSXbz2.jpg",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/gyycliiiwuorvsjpvth4/free-rn-flyknit-3-womens-running-shoe-TSXbz2.jpg"
]




let sampleFreeRN50 = [
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/bfp1kgjrsic4ikovn3ac/custom-nike-free-rn-5.jpg",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/us91clopczmceutlv817/custom-nike-free-rn-5.jpg",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/jyuxglqstqqnmaqjhbhk/custom-nike-free-rn-5.jpg",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/qpn3jaedpnixz7caxrns/custom-nike-free-rn-5.jpg",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ikphqpnquzrcfggbeut6/custom-nike-free-rn-5.jpg",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/fr4wgw97a6nud221ki2q/custom-nike-free-rn-5.jpg",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/k8bokr1btm6yoofuwmyr/custom-nike-free-rn-5.jpg"
]



let sampleFreeRNNRG = [
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/pllreyrjt8klklnvmde7/free-rn-flyknit-3-nrg-mens-running-shoe-RBSCsl.jpg",
  "https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,so_0.89/zey6vuqpj4zxw76kuxye/free-rn-flyknit-3-nrg-mens-running-shoe-RBSCsl.jpg",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ttvpr7emwalmb6uaghn2/free-rn-flyknit-3-nrg-mens-running-shoe-RBSCsl.jpg",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/sfylmnvk7xdplpz6wcmu/free-rn-flyknit-3-nrg-mens-running-shoe-RBSCsl.jpg",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/acywmtdwxncro3fr0pl6/free-rn-flyknit-3-nrg-mens-running-shoe-RBSCsl.jpg",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/r9mz0al9fpftyz1s2ngq/free-rn-flyknit-3-nrg-mens-running-shoe-RBSCsl.jpg"
]


let sampleFreeRNMotion = [
  "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ylhx3vwhcimfdx02cj1r/free-rn-motion-flyknit-2018-mens-running-shoe-L0LA7L.jpg",
  "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/qer4zbnagxftafyqmtjj/free-rn-motion-flyknit-2018-mens-running-shoe-L0LA7L.jpg",
  "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/nazn3ok5tcdeimx5zhsj/free-rn-motion-flyknit-2018-mens-running-shoe-L0LA7L.jpg",
  "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ymmgwxh50kurwisf4svx/free-rn-motion-flyknit-2018-mens-running-shoe-L0LA7L.jpg",
  "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/mdoxa2j7dylhdztcotgz/free-rn-motion-flyknit-2018-mens-running-shoe-L0LA7L.jpg",
  "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/xkuwa410nhwjuaerkw7y/free-rn-motion-flyknit-2018-mens-running-shoe-L0LA7L.jpg"
]


let sampleFreeRNflyknit = [
  "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/cewfz9irjyd6k6ey3i8f/free-rn-flyknit-2018-womens-running-shoe-2Xz32l.jpg",
  "https://static.nike.com/a/videos/q_90,vc_vp9/nvrljfhxq2qcifdqkpxp/video.webm",
  "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/u59voktzpq3n2ohdeqpb/free-rn-flyknit-2018-womens-running-shoe-2Xz32l.jpg",
  "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/zqnrxypt5y054pzushte/free-rn-flyknit-2018-womens-running-shoe-2Xz32l.jpg",
  "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/nu6faafdwhbuv5cbngdf/free-rn-flyknit-2018-womens-running-shoe-2Xz32l.jpg",
  "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/vygoaauuhzeqefpf6h1o/free-rn-flyknit-2018-womens-running-shoe-2Xz32l.jpg"
]


let sampleFreeRN2018 = [
  "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/sswsnaybhivqhzl8dfgw/free-rn-2018-womens-running-shoe-zE8Je3.jpg",
  "https://static.nike.com/a/videos/q_90,vc_vp9/zeeotsjoyjztmvtesuxi/video.webm",
  "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ydfqyibyos24uiqtsy7j/free-rn-2018-womens-running-shoe-zE8Je3.jpg",
  "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/mtt54aal8vmxnxb5i7gr/free-rn-2018-womens-running-shoe-zE8Je3.jpg",
  "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/p9ljpztwgw1qhwjjuwg3/free-rn-2018-womens-running-shoe-zE8Je3.jpg",
  "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/emryac2t11donc1q8p35/free-rn-2018-womens-running-shoe-zE8Je3.jpg"
]




/*
[sampleZoomVomero, sampleZoomFreak, sampleZoomWildhorse, sampleZoomTerraKiger, sampleZoomFly3, sampleZoomPegasusFly, sampleZoomPegasusTurbo, sampleZoomPegasusVaporfly, sampleZoomDefault]
*/

let generateZoomPhotos = (shoename) => {
  if (shoename.includes('Vomero')) {
    return sampleZoomVomero
  }
  if (shoename.includes('Freak')) {
    return sampleZoomFreak
  }
  if (shoename.includes('WildHorse')) {
    return sampleZoomWildhorse
  }
  if (shoename.includes('Terra Kiger')) {
    return sampleZoomTerraKiger
  }
  if (shoename.includes('Fly 3')) {
    return sampleZoomFly3
  }
  if (shoename.includes('Pegasus') && shoename.includes('FlyEase')) {
    return sampleZoomPegasusFly
  }
  if (shoename.includes('Pegasus') && shoename.includes('Turbo')) {
    return sampleZoomPegasusTurbo
  }
  if (shoename.includes('Pegasus') && shoename.includes('Vaporfly')) {
    return sampleZoomPegasusVaporfly
  }
  return sampleZoomDefault
}


let sampleZoomPegasusVaporfly =
  [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/26f390c7-6e1d-417b-b465-1286c63f9e11/custom-nike-zoom-pegasus-turbo-shield-by-you.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/e797b4e9-6a2f-46d6-9077-0ca5883ac568/custom-nike-zoom-pegasus-turbo-shield-by-you.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/03a94c43-d574-424c-a5d4-70e58b6ad00b/custom-nike-zoom-pegasus-turbo-shield-by-you.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/15371222-c9f9-4112-a459-4d391ae89e96/custom-nike-zoom-pegasus-turbo-shield-by-you.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/03a94c43-d574-424c-a5d4-70e58b6ad00b/custom-nike-zoom-pegasus-turbo-shield-by-you.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/15371222-c9f9-4112-a459-4d391ae89e96/custom-nike-zoom-pegasus-turbo-shield-by-you.jpg"
  ]


let sampleZoomPegasusTurbo =
  [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/47d60f47-23fd-4504-908b-ee102920307b/zoom-pegasus-turbo-2-mens-running-shoe-GcDSX3.jpg",
    "https://static.nike.com/a/videos/q_90,vc_vp9/6f63111e-0ded-4599-a5a6-ad37a642d590/video.webm",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/77bd3139-8a05-454a-972f-3e230d3b5396/zoom-pegasus-turbo-2-mens-running-shoe-GcDSX3.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/60e080d1-a769-44f9-a143-af0d9c800528/zoom-pegasus-turbo-2-mens-running-shoe-GcDSX3.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/4e1a1768-2ab4-486c-8330-417fe6a90e75/zoom-pegasus-turbo-2-mens-running-shoe-GcDSX3.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/c3ef696f-4196-4018-8425-bdf50973d4aa/zoom-pegasus-turbo-2-mens-running-shoe-GcDSX3.jpg",
  ]



let sampleZoomPegasusFly = [
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/39530e3c-2330-48b9-a7a6-72eb0e8c35ae/air-zoom-pegasus-36-flyease-mens-running-shoe-1Fb6sV.jpg",
  "https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,so_0/ak2vb9rpasj0dtdm9dec/air-zoom-pegasus-36-flyease-mens-running-shoe-1Fb6sV.jpg",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/4b92a45c-d383-4304-9978-0e526c716949/air-zoom-pegasus-36-flyease-mens-running-shoe-1Fb6sV.jpg",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/3362e4d5-d686-46c2-81aa-7c2b5f4b409e/air-zoom-pegasus-36-flyease-mens-running-shoe-1Fb6sV.jpg",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/45278de1-946e-4d94-acd3-f31b59e4c3d4/air-zoom-pegasus-36-flyease-mens-running-shoe-1Fb6sV.jpg",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/82a06c4f-80d7-4852-84f4-46c6f2bd1451/air-zoom-pegasus-36-flyease-mens-running-shoe-1Fb6sV.jpg"
]


let sampleZoomFly3 =
  [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/rga8wrta1yx8x4biuwlw/zoom-fly-3-premium-mens-running-shoe-xsmTcQ.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/bsfxz54ghtroyxftkuig/zoom-fly-3-premium-mens-running-shoe-xsmTcQ.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/iw0wdqu1fnxhvvrtjvdq/zoom-fly-3-premium-mens-running-shoe-xsmTcQ.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/zzuztrw41dvttlyj1uwe/zoom-fly-3-premium-mens-running-shoe-xsmTcQ.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/n87q6r9dth8k161pqjyl/zoom-fly-3-premium-mens-running-shoe-xsmTcQ.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/vk2ggdzpldifspphnrnv/zoom-fly-3-premium-mens-running-shoe-xsmTcQ.jpg"
  ]


let sampleZoomTerraKiger =
  [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-2dad30b7-2f76-4bd8-8ab0-0730932fff7b/air-zoom-terra-kiger-6-mens-trail-running-shoe-kNcChX.jpg",
    "https://static.nike.com/a/videos/q_90,vc_vp9/6aaae8dc-573f-416d-a53f-c01753c989ba/video.webm",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-7a370b1c-afc3-4ca2-b31d-3acec7dd45e1/air-zoom-terra-kiger-6-mens-trail-running-shoe-kNcChX.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-cd423773-4d94-436a-9346-0561255d4854/air-zoom-terra-kiger-6-mens-trail-running-shoe-kNcChX.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-fc09cf89-46df-47a5-8d74-a70b6136016f/air-zoom-terra-kiger-6-mens-trail-running-shoe-kNcChX.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d3869d0c-34e4-4cf7-b0aa-9502ee9bad66/air-zoom-terra-kiger-6-mens-trail-running-shoe-kNcChX.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-f8349714-4f15-40f1-847e-b3340156eeaf/air-zoom-terra-kiger-6-mens-trail-running-shoe-kNcChX.jpg"
  ]


let sampleZoomWildhorse =
  [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-ad95894c-4dee-40ea-9812-556a1dc9782c/wildhorse-6-mens-trail-running-shoe-r5NzHQ.jpg",
    "https://static.nike.com/a/videos/q_90,vc_vp9/04fb8cb1-9d74-4e76-9f54-b9dc4c1ae886/video.webm",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-8763db1d-1d0c-414d-84fd-5d73d84f2395/wildhorse-6-mens-trail-running-shoe-r5NzHQ.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-2f0ed6f4-9ef3-41a8-974c-0069e5ab261b/wildhorse-6-mens-trail-running-shoe-r5NzHQ.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-fbe1288b-f9e1-493e-b055-9b91edd770ae/wildhorse-6-mens-trail-running-shoe-r5NzHQ.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-9bce6ea4-9128-4776-917c-8d1ca6d35fdc/wildhorse-6-mens-trail-running-shoe-r5NzHQ.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-94561130-6339-4255-8655-6389278cbb4c/wildhorse-6-mens-trail-running-shoe-r5NzHQ.jpg"
  ]


let sampleZoomFreak =
  [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/reicequq4wevqtgtxpi6/zoom-freak-1-basketball-shoe-tmk8Hw.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/rxofv4dzu4jekcjdl42c/zoom-freak-1-basketball-shoe-tmk8Hw.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/m7jdoco7gidqzcbxsqiz/zoom-freak-1-basketball-shoe-tmk8Hw.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/fnteuh0tzxwqxw2nwd72/zoom-freak-1-basketball-shoe-tmk8Hw.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/by5c8jvgsuic3p8kmgdz/zoom-freak-1-basketball-shoe-tmk8Hw.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/isdasnfbj6x8sz4wbo3c/zoom-freak-1-basketball-shoe-tmk8Hw.jpg"
  ]


let sampleZoomVomero =
  [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-66e2e324-bd18-4a75-b252-b8cf5c039006/air-zoom-vomero-14-womens-running-shoe-hK53Km.jpg",
    "https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,so_6.56/ggotayue2oltd4oikhy7/air-zoom-vomero-14-womens-running-shoe-hK53Km.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-553bbc2a-a549-4178-b782-9ef66d7f7767/air-zoom-vomero-14-womens-running-shoe-hK53Km.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-6a83a8dd-e53b-4158-adde-0fc788beceaa/air-zoom-vomero-14-womens-running-shoe-hK53Km.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-07fb2d9b-2b68-43fd-ad62-ecfb354b2cef/air-zoom-vomero-14-womens-running-shoe-hK53Km.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-5c2e27ab-2b34-4005-823e-bcb8b9dbed05/air-zoom-vomero-14-womens-running-shoe-hK53Km.jpg"
  ]

let sampleZoomDefault = ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/aki5mq92ws4mdgfuijl5/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/pm2uiho39jtwm7ghdipa/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/jx4muj1n92xdld6zdd7n/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/uxxu2pg3xqu50jvpiaih/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/mjihumk0i0yjvrxlmppq/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/to2h7zyw02fuhloqef0p/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg"]



/*
[ sampleReactJoyRide, sampleReactHyperSet, sampleReactDefault, sampleReactTerraGobe,
sampleReactSertu, sampleReactIanga, sampleReactIanga, sampleReactPresto, sampleReactElement55, sampleReactAir,
sampleReactInfinity, sampleReactVision
]
 */

let generateReactPhotos = (shoename) => {
  //fix this option
  if (shoename.includes('JoyRide')) {
    return sampleReactJoyRide
  }
  if (shoename.includes('HyperSet')) {
    return sampleReactHyperSet
  }
  if (shoename.includes('Terra Gobe')) {
    return sampleReactTerraGobe
  }
  if (shoename.includes('Sertu')) {
    return sampleReactSertu
  }
  if (shoename.includes('Ianga')) {
    return sampleReactIanga
  }
  if (shoename.includes('Presto')) {
    return sampleReactPresto
  }
  if (shoename.includes('Element')) {
    return sampleReactElement55
  }
  if (shoename.includes('A.I.R')) {
    return sampleReactAir
  }
  if (shoename.includes('Infinity')) {
    return sampleReactInfinity
  }
  if (shoename.includes('Vision')) {
    return sampleReactVision
  }
  return sampleReactDefault
}


let sampleReactJoyRide =
  [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ed0ycapngvnnbpu4pj6h/joyride-cc-mens-shoe-7pfVQF.jpg",
    "https://static.nike.com/a/videos/q_90,vc_vp9/jaddeunqpytblhhiko6d/video.webm",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/l7opr3zt2qmh1jvsaieh/joyride-cc-mens-shoe-7pfVQF.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/nxi5w4mra4ph6pz6gizl/joyride-cc-mens-shoe-7pfVQF.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/erkic0sxs8zlxnv2doxk/joyride-cc-mens-shoe-7pfVQF.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/qyiyytmyus0jzooncdbm/joyride-cc-mens-shoe-7pfVQF.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/snbtlpnlvkkbqoctliwq/joyride-cc-mens-shoe-7pfVQF.jpg"
  ]

let sampleReactHyperSet =
  [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/12178bf0-1f2a-4033-8c41-1672081669f2/react-hyperset-womens-volleyball-shoe-Hp4LWJ.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/9a7dd3ec-a1f5-4f5b-a8ef-74ae5a914205/react-hyperset-womens-volleyball-shoe-Hp4LWJ.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/50062973-2055-473c-8430-79d7d4ea4ef3/react-hyperset-womens-volleyball-shoe-Hp4LWJ.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/c8b6684b-54b2-4a6d-8f31-0427f30c1af9/react-hyperset-womens-volleyball-shoe-Hp4LWJ.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/66571430-3f07-4c26-b990-689c17414cd6/react-hyperset-womens-volleyball-shoe-Hp4LWJ.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/7d9c21ca-6300-4abb-b402-f28f05fa90c1/react-hyperset-womens-volleyball-shoe-Hp4LWJ.jpg"
  ]



let sampleReactDefault =
  [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/shatsnczqnppw5bno7o3/epic-react-flyknit-2-mens-running-shoe-2S0Cn1.jpg",
    "https://static.nike.com/a/videos/q_90,vc_vp9/uyh8xrfn2uoxdygyvnnm/video.webm",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/lcuduz3y1cdkgavysl7c/epic-react-flyknit-2-mens-running-shoe-2S0Cn1.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/otdo6i77sypiypxdggj5/epic-react-flyknit-2-mens-running-shoe-2S0Cn1.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/hpgmp8b4b8rroeyjxvnm/epic-react-flyknit-2-mens-running-shoe-2S0Cn1.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/os3hlyrljkmitszmvana/epic-react-flyknit-2-mens-running-shoe-2S0Cn1.jpg"
  ]


let sampleReactTerraGobe =
  [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/06b27eaf-d603-4915-a6a0-2963ca65d1d5/acg-react-terra-gobe-mens-shoe-75FvFZ.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/f715ef68-82da-4f8c-ba50-2507c59b1db4/acg-react-terra-gobe-mens-shoe-75FvFZ.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/fbf2f0bc-4840-4d3e-934e-4bd98b5f2db8/acg-react-terra-gobe-mens-shoe-75FvFZ.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/63ce83e5-42bc-43cf-bb39-9da1bfdde27a/acg-react-terra-gobe-mens-shoe-75FvFZ.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/21334f36-d6ab-4cdb-88ce-530c3118ae63/acg-react-terra-gobe-mens-shoe-75FvFZ.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/9e4d5210-eabd-4711-8434-021d3638bf69/acg-react-terra-gobe-mens-shoe-75FvFZ.jpg",

  ]

let sampleReactSertu =
  [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/jdehvjmrpjpdkts4m0ay/react-sertu-mens-shoe-ZTbZ9T.jpg",
    "https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,so_3.22/7bccd5b7-7c44-43cb-a245-943bdb4751dd/react-sertu-mens-shoe-ZTbZ9T.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/6dfc2ea4-e603-4b52-bae4-3c199c275e39/react-sertu-mens-shoe-ZTbZ9T.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ebbd8e59-4f92-458d-b11d-1e2b063d8be1/react-sertu-mens-shoe-ZTbZ9T.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/58a8f365-4024-4d60-9e87-b6262b875fc6/react-sertu-mens-shoe-ZTbZ9T.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ccff0fcf-c272-45bc-a534-ed2db4de724c/react-sertu-mens-shoe-ZTbZ9T.jpg"
  ]

let sampleReactIanga =
  [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/flq2fuvrxzuzem0fayqd/react-ianga-mens-shoe-GBwZHW.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/dgwmywjcaefcdszxoear/react-ianga-mens-shoe-GBwZHW.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/fom7cx5cphllurwgmi1o/react-ianga-mens-shoe-GBwZHW.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ncyzaoqyo1i4zwsnblg7/react-ianga-mens-shoe-GBwZHW.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/glw7kv5ptnpbwuylcier/react-ianga-mens-shoe-GBwZHW.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/swbcth1c4aqx1plz4ctx/react-ianga-mens-shoe-GBwZHW.jpg"
  ]


let sampleReactPresto =
  [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/soarls9sdukb7q4za5zv/react-presto-big-kids-shoe-cSDkzN.jpg",
    "https://static.nike.com/a/videos/q_90,vc_vp9/r3uzebf7rycstjik6ajm/video.webm",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/vexapuoyqlhlpngtr5ii/react-presto-big-kids-shoe-cSDkzN.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/tksksrhwjcaiqbbw8lp9/react-presto-big-kids-shoe-cSDkzN.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ye1csp2zh07veqsnynci/react-presto-big-kids-shoe-cSDkzN.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/cw4ivdsbgurljqixysyj/react-presto-big-kids-shoe-cSDkzN.jpg"
  ]


let sampleReactElement55 =
  [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/b6b37945-49c4-4f82-95e8-561147a8a6ac/react-element-55-se-womens-shoe-L5WpdL.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/4d77c77b-cf5e-4b35-9306-b01b46e18fd2/react-element-55-se-womens-shoe-L5WpdL.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/047d2188-bae3-44d5-9828-9a5551ed8c0b/react-element-55-se-womens-shoe-L5WpdL.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/fb629388-48c4-44b6-95b2-1a9c6374721c/react-element-55-se-womens-shoe-L5WpdL.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/b1c90e58-f397-420c-8da7-56cd95513888/react-element-55-se-womens-shoe-L5WpdL.jpg",
  ]

let sampleReactAir =
  [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/8a2d0ef2-53ea-4a8c-873d-acd6d7c23f25/air-max-270-react-eng-mens-shoe-CPRm5W.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/d2b9e5df-0233-4793-bbea-c02636ab9ba9/air-max-270-react-eng-mens-shoe-CPRm5W.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/c032a439-b0f8-4cbf-b94e-4741e90f7d97/air-max-270-react-eng-mens-shoe-CPRm5W.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/9d5be484-4193-4a5e-82d5-5251d0b46652/air-max-270-react-eng-mens-shoe-CPRm5W.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/53d8a50f-12d9-4ad6-ba52-c68b940dae92/air-max-270-react-eng-mens-shoe-CPRm5W.jpg"
  ]

let sampleReactInfinity =
  [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ca567d75-99bc-4f7a-a640-6212757b3002/react-infinity-run-flyknit-womens-running-shoe-w8ck2H.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/8a07c155-bf22-4050-a93d-782026f97ab4/react-infinity-run-flyknit-womens-running-shoe-w8ck2H.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/fa2e5211-31d6-41bd-bea7-16c9cdf93648/react-infinity-run-flyknit-womens-running-shoe-w8ck2H.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ea136cd3-3a86-44ed-a6aa-ac65b2f546f8/react-infinity-run-flyknit-womens-running-shoe-w8ck2H.jpg"
  ]




let sampleReactVision =
  [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-f26b166c-c8b1-4cd9-9b70-c370577c767f/react-vision-mens-shoe-k3L6kP.jpg",
    "https://static.nike.com/a/videos/q_90,vc_vp9/03116846-4038-476a-b626-7c874ddbc16c/video.webm",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-900572f9-6871-43b6-a15a-009b5e95194b/react-vision-mens-shoe-k3L6kP.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-70447f19-f620-4213-a69a-f514b6ca398a/react-vision-mens-shoe-k3L6kP.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-977ef06b-7aae-4e67-8cd1-7787de0592f4/react-vision-mens-shoe-k3L6kP.jpg"
  ]


let sampleFreeRunPhotos =
  [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/g1wtf4sgnowagkjnnea1/free-rn-flyknit-3-womens-running-shoe-TSXbz2.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/klqn4koctbwnsgucaj20/free-rn-flyknit-3-womens-running-shoe-TSXbz2.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/zz6tefujywus2vix4rqc/free-rn-flyknit-3-womens-running-shoe-TSXbz2.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/jci47g7zbdrcf1fsgrqv/free-rn-flyknit-3-womens-running-shoe-TSXbz2.jpg",
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/hmn7ctsvb0anvegooddr/free-rn-flyknit-3-womens-running-shoe-TSXbz2.jpg"
  ]



//generateRandomFreeRunName()
//generateZoomShoeName()
//generateReactShoe()


let generateZoomShoeSet = () => {
  let shoe = generateZoomShoe(null)
  let shoeSet = []
  let setLength = 1 //getRandomInt(4, 6)

  for (let i = 0; i < setLength; i++) {
    let newShoe = generateZoomShoe(shoe.name)
    shoeSet.push(newShoe)
  }
  //shoeSet.push(shoe)

  //console.log(shoeSet)
  return shoeSet
}

let generateReactShoeSet = () => {
  let shoe = generateReactShoe(null)
  let shoeSet = []

  let setLength = 1 //getRandomInt(4, 6)
  for (let i = 0; i < setLength; i++) {
    let newShoe = generateReactShoe(shoe.name)
    shoeSet.push(newShoe)
  }
  //shoeSet.push(shoe)

  //console.log(shoeSet)
  return shoeSet
}

let generateFreeRNShoeSet = () => {
  let shoe = generateRandomFreeRunShoe(null)
  let shoeSet = []

  let setLength = 1 //getRandomInt(4, 6)

  for (let i = 0; i < setLength; i++) {
    let newShoe = generateRandomFreeRunShoe(shoe.name)
    shoeSet.push(newShoe)
  }
  //shoeSet.push(shoe)

  // console.log(shoeSet)
  return shoeSet
}


let generateRandomDataSet = (dataSetSize) => {
  let dataSet = []

  let shoeSetGenerators = [generateFreeRNShoeSet, generateReactShoeSet, generateZoomShoeSet]

  for (let i = 0; i < dataSetSize; i++) {
    //invoke a random generator function
    let randomShoeSet = shoeSetGenerators[Math.floor(Math.random() * shoeSetGenerators.length)]()
    randomShoeSet.forEach(shoe => dataSet.push(shoe))
  }

  return dataSet
}

const writeData = (amount, threshold) => {
  return new Promise((resolve, reject) => {
    console.time('writeTimer');
    let counter = 100
    const file = fs.createWriteStream(`./database-pg/dataFile/rawUnparsedDataTest.json`);

    for (let i = 0; i < amount; i += threshold) {
      let data = generateRandomDataSet(threshold)
      data.forEach(shoe => {
        shoe.nikeID = counter
        counter++
      })
      let toAdd = data.reduce((acc, shoe) => acc + JSON.stringify(shoe) + '\n', '')

      console.log("writing " + (i + threshold));
      file.write(toAdd);
    }

    file.end();
    console.log("finished writing file")
    console.timeEnd('writeTimer');
    resolve("success!");
  });
  reject("Something went wrong");
}

const writeDataTwo = (amount, threshold) => {
  return new Promise((resolve, reject) => {
    console.time('writeTimer');
    let counter = 100
    const file = fs.createWriteStream(`./database-pg/dataFile/rawUnparsedData.json`);

    for (let i = 0; i < amount; i += threshold) {
      let data = generateRandomDataSet(threshold)
      data.forEach(shoe => {
        shoe.nikeID = counter
        counter++
      })
      let toAdd = data.reduce((acc, shoe) => acc + JSON.stringify(shoe) + '\n', '')

      console.log("writing " + (i + threshold));
      file.write(toAdd);
    }

    file.end();
    console.log("finished writing file")
    console.timeEnd('writeTimer');
    resolve("success!");
  });
  reject("Something went wrong");
}

const getData = (amount) => {
  let data = generateRandomDataSet(amount)
  let counter = 100
  data.forEach(shoe => {
    shoe.nikeID = counter
    counter++
  })
  return data;
}

module.exports = {
  getData,
  writeData,
  writeDataTwo
};

//writeData()