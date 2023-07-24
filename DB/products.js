/*
 Navicat Premium Data Transfer

 Source Server         : project
 Source Server Type    : MongoDB
 Source Server Version : 60006
 Source Host           : mobile.zboqido.mongodb.net:27017
 Source Schema         : fackeapi

 Target Server Type    : MongoDB
 Target Server Version : 60006
 File Encoding         : 65001

 Date: 24/07/2023 15:32:34
*/


// ----------------------------
// Collection structure for products
// ----------------------------
db.getCollection("products").drop();
db.createCollection("products");

// ----------------------------
// Documents of products
// ----------------------------
db.getCollection("products").insert([ {
    _id: ObjectId("64be3406db7d452d14dcef76"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("18")
    },
    id: NumberInt("45779"),
    title: "Ergonomic Soft Chair",
    price: NumberInt("936"),
    description: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    image: "https://loremflickr.com/640/480",
    category: "Soft",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3406db7d452d14dcef78"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("94")
    },
    id: NumberInt("36437"),
    title: "Ergonomic Soft Hat",
    price: NumberInt("58"),
    description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    image: "https://loremflickr.com/640/480",
    category: "Bronze",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3406db7d452d14dcef7a"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("90")
    },
    id: NumberInt("80568"),
    title: "Luxurious Bronze Bike",
    price: NumberInt("448"),
    description: "The Football Is Good For Training And Recreational Purposes",
    image: "https://loremflickr.com/640/480",
    category: "Concrete",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3407db7d452d14dcef7c"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("45")
    },
    id: NumberInt("93708"),
    title: "Tasty Frozen Ball",
    price: NumberInt("410"),
    description: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    image: "https://loremflickr.com/640/480",
    category: "Frozen",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3407db7d452d14dcef7e"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("27")
    },
    id: NumberInt("14887"),
    title: "Practical Rubber Chair",
    price: NumberInt("467"),
    description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    image: "https://loremflickr.com/640/480",
    category: "Cotton",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3407db7d452d14dcef80"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("66")
    },
    id: NumberInt("31632"),
    title: "Awesome Rubber Ball",
    price: NumberInt("347"),
    description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    image: "https://loremflickr.com/640/480",
    category: "Granite",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3407db7d452d14dcef82"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("10")
    },
    id: NumberInt("36719"),
    title: "Bespoke Soft Tuna",
    price: NumberInt("289"),
    description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    image: "https://loremflickr.com/640/480",
    category: "Bronze",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3408db7d452d14dcef84"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("1")
    },
    id: NumberInt("81720"),
    title: "Awesome Wooden Shoes",
    price: NumberInt("767"),
    description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    image: "https://loremflickr.com/640/480",
    category: "Concrete",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3408db7d452d14dcef86"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("32")
    },
    id: NumberInt("72230"),
    title: "Oriental Metal Bacon",
    price: NumberInt("590"),
    description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    image: "https://loremflickr.com/640/480",
    category: "Concrete",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3408db7d452d14dcef88"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("90")
    },
    id: NumberInt("46617"),
    title: "Electronic Cotton Chair",
    price: NumberInt("149"),
    description: "The Football Is Good For Training And Recreational Purposes",
    image: "https://loremflickr.com/640/480",
    category: "Rubber",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3408db7d452d14dcef8a"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("15")
    },
    id: NumberInt("84853"),
    title: "Fantastic Fresh Gloves",
    price: NumberInt("950"),
    description: "The Football Is Good For Training And Recreational Purposes",
    image: "https://loremflickr.com/640/480",
    category: "Plastic",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3409db7d452d14dcef8c"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("89")
    },
    id: NumberInt("8901"),
    title: "Tasty Fresh Shirt",
    price: NumberInt("494"),
    description: "The Football Is Good For Training And Recreational Purposes",
    image: "https://loremflickr.com/640/480",
    category: "Steel",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3409db7d452d14dcef8e"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("79")
    },
    id: NumberInt("43435"),
    title: "Sleek Frozen Chicken",
    price: NumberInt("356"),
    description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    image: "https://loremflickr.com/640/480",
    category: "Soft",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3409db7d452d14dcef90"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("87")
    },
    id: NumberInt("66257"),
    title: "Ergonomic Bronze Bike",
    price: NumberInt("577"),
    description: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    image: "https://loremflickr.com/640/480",
    category: "Plastic",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be340adb7d452d14dcef92"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("64")
    },
    id: NumberInt("5466"),
    title: "Gorgeous Metal Cheese",
    price: NumberInt("486"),
    description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    image: "https://loremflickr.com/640/480",
    category: "Granite",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be340adb7d452d14dcef94"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("72")
    },
    id: NumberInt("15741"),
    title: "Electronic Plastic Sausages",
    price: NumberInt("942"),
    description: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    image: "https://loremflickr.com/640/480",
    category: "Wooden",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be340adb7d452d14dcef96"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("65")
    },
    id: NumberInt("4101"),
    title: "Bespoke Wooden Sausages",
    price: NumberInt("767"),
    description: "The Football Is Good For Training And Recreational Purposes",
    image: "https://loremflickr.com/640/480",
    category: "Plastic",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be340adb7d452d14dcef98"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("7")
    },
    id: NumberInt("97257"),
    title: "Sleek Bronze Chicken",
    price: NumberInt("771"),
    description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    image: "https://loremflickr.com/640/480",
    category: "Fresh",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be340bdb7d452d14dcef9a"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("51")
    },
    id: NumberInt("16179"),
    title: "Bespoke Steel Pants",
    price: NumberInt("49"),
    description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    image: "https://loremflickr.com/640/480",
    category: "Cotton",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be340bdb7d452d14dcef9c"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("37")
    },
    id: NumberInt("24155"),
    title: "Incredible Granite Sausages",
    price: NumberInt("10"),
    description: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    image: "https://loremflickr.com/640/480",
    category: "Steel",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be340bdb7d452d14dcef9e"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("54")
    },
    id: NumberInt("25535"),
    title: "Handmade Steel Chicken",
    price: NumberInt("590"),
    description: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    image: "https://loremflickr.com/640/480",
    category: "Granite",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be340cdb7d452d14dcefa0"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("84")
    },
    id: NumberInt("35617"),
    title: "Intelligent Metal Bike",
    price: NumberInt("973"),
    description: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    image: "https://loremflickr.com/640/480",
    category: "Plastic",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be340cdb7d452d14dcefa2"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("1")
    },
    id: NumberInt("45934"),
    title: "Handmade Wooden Bacon",
    price: NumberInt("717"),
    description: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    image: "https://loremflickr.com/640/480",
    category: "Fresh",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be340cdb7d452d14dcefa4"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("0")
    },
    id: NumberInt("29398"),
    title: "Handmade Wooden Towels",
    price: NumberInt("338"),
    description: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    image: "https://loremflickr.com/640/480",
    category: "Cotton",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be340cdb7d452d14dcefa6"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("42")
    },
    id: NumberInt("66540"),
    title: "Modern Soft Gloves",
    price: NumberInt("437"),
    description: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    image: "https://loremflickr.com/640/480",
    category: "Soft",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be340ddb7d452d14dcefa8"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("85")
    },
    id: NumberInt("14005"),
    title: "Rustic Plastic Pizza",
    price: NumberInt("859"),
    description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    image: "https://loremflickr.com/640/480",
    category: "Fresh",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be340ddb7d452d14dcefaa"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("25")
    },
    id: NumberInt("83214"),
    title: "Unbranded Wooden Chair",
    price: NumberInt("163"),
    description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    image: "https://loremflickr.com/640/480",
    category: "Rubber",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be340ddb7d452d14dcefac"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("26")
    },
    id: NumberInt("55402"),
    title: "Refined Metal Gloves",
    price: NumberInt("180"),
    description: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    image: "https://loremflickr.com/640/480",
    category: "Fresh",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be340edb7d452d14dcefae"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("21")
    },
    id: NumberInt("72364"),
    title: "Intelligent Plastic Towels",
    price: NumberInt("734"),
    description: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    image: "https://loremflickr.com/640/480",
    category: "Cotton",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be340edb7d452d14dcefb0"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("63")
    },
    id: NumberInt("77562"),
    title: "Elegant Frozen Gloves",
    price: NumberInt("727"),
    description: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    image: "https://loremflickr.com/640/480",
    category: "Rubber",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be340edb7d452d14dcefb2"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("68")
    },
    id: NumberInt("31585"),
    title: "Fantastic Steel Hat",
    price: NumberInt("399"),
    description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    image: "https://loremflickr.com/640/480",
    category: "Bronze",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be340edb7d452d14dcefb4"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("22")
    },
    id: NumberInt("83109"),
    title: "Incredible Fresh Hat",
    price: NumberInt("768"),
    description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    image: "https://loremflickr.com/640/480",
    category: "Fresh",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be340fdb7d452d14dcefb6"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("55")
    },
    id: NumberInt("26638"),
    title: "Ergonomic Metal Fish",
    price: NumberInt("117"),
    description: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    image: "https://loremflickr.com/640/480",
    category: "Bronze",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be340fdb7d452d14dcefb8"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("75")
    },
    id: NumberInt("37920"),
    title: "Recycled Rubber Computer",
    price: NumberInt("125"),
    description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    image: "https://loremflickr.com/640/480",
    category: "Granite",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be340fdb7d452d14dcefba"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("90")
    },
    id: NumberInt("81983"),
    title: "Ergonomic Wooden Shoes",
    price: NumberInt("10"),
    description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    image: "https://loremflickr.com/640/480",
    category: "Bronze",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be340fdb7d452d14dcefbc"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("33")
    },
    id: NumberInt("48482"),
    title: "Awesome Cotton Computer",
    price: NumberInt("410"),
    description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    image: "https://loremflickr.com/640/480",
    category: "Concrete",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3410db7d452d14dcefbe"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("73")
    },
    id: NumberInt("82648"),
    title: "Ergonomic Granite Tuna",
    price: NumberInt("964"),
    description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    image: "https://loremflickr.com/640/480",
    category: "Wooden",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3410db7d452d14dcefc0"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("49")
    },
    id: NumberInt("58989"),
    title: "Modern Fresh Gloves",
    price: NumberInt("194"),
    description: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    image: "https://loremflickr.com/640/480",
    category: "Bronze",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3410db7d452d14dcefc2"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("8")
    },
    id: NumberInt("55082"),
    title: "Unbranded Fresh Chair",
    price: NumberInt("260"),
    description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    image: "https://loremflickr.com/640/480",
    category: "Granite",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3411db7d452d14dcefc4"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("49")
    },
    id: NumberInt("36073"),
    title: "Licensed Fresh Chair",
    price: NumberInt("901"),
    description: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    image: "https://loremflickr.com/640/480",
    category: "Rubber",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3411db7d452d14dcefc6"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("82")
    },
    id: NumberInt("70706"),
    title: "Handmade Bronze Bacon",
    price: NumberInt("552"),
    description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    image: "https://loremflickr.com/640/480",
    category: "Frozen",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3411db7d452d14dcefc8"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("21")
    },
    id: NumberInt("1861"),
    title: "Unbranded Bronze Mouse",
    price: NumberInt("315"),
    description: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    image: "https://loremflickr.com/640/480",
    category: "Soft",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3411db7d452d14dcefca"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("34")
    },
    id: NumberInt("22939"),
    title: "Practical Rubber Car",
    price: NumberInt("742"),
    description: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    image: "https://loremflickr.com/640/480",
    category: "Cotton",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3412db7d452d14dcefcc"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("55")
    },
    id: NumberInt("59014"),
    title: "Unbranded Steel Chicken",
    price: NumberInt("211"),
    description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    image: "https://loremflickr.com/640/480",
    category: "Bronze",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3412db7d452d14dcefce"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("4")
    },
    id: NumberInt("21071"),
    title: "Ergonomic Plastic Pants",
    price: NumberInt("619"),
    description: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    image: "https://loremflickr.com/640/480",
    category: "Frozen",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3412db7d452d14dcefd0"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("95")
    },
    id: NumberInt("37621"),
    title: "Practical Steel Hat",
    price: NumberInt("286"),
    description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    image: "https://loremflickr.com/640/480",
    category: "Rubber",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3413db7d452d14dcefd2"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("61")
    },
    id: NumberInt("74644"),
    title: "Luxurious Wooden Mouse",
    price: NumberInt("718"),
    description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    image: "https://loremflickr.com/640/480",
    category: "Steel",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3413db7d452d14dcefd4"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("53")
    },
    id: NumberInt("34886"),
    title: "Licensed Bronze Tuna",
    price: NumberInt("970"),
    description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    image: "https://loremflickr.com/640/480",
    category: "Plastic",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3413db7d452d14dcefd6"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("75")
    },
    id: NumberInt("8724"),
    title: "Luxurious Cotton Tuna",
    price: NumberInt("363"),
    description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    image: "https://loremflickr.com/640/480",
    category: "Steel",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3413db7d452d14dcefd8"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("25")
    },
    id: NumberInt("12853"),
    title: "Luxurious Soft Bike",
    price: NumberInt("735"),
    description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    image: "https://loremflickr.com/640/480",
    category: "Steel",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3414db7d452d14dcefda"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("76")
    },
    id: NumberInt("45356"),
    title: "Small Plastic Towels",
    price: NumberInt("120"),
    description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    image: "https://loremflickr.com/640/480",
    category: "Bronze",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3414db7d452d14dcefdc"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("46")
    },
    id: NumberInt("52442"),
    title: "Gorgeous Soft Gloves",
    price: NumberInt("65"),
    description: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    image: "https://loremflickr.com/640/480",
    category: "Metal",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3414db7d452d14dcefde"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("62")
    },
    id: NumberInt("87497"),
    title: "Modern Concrete Shirt",
    price: NumberInt("344"),
    description: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    image: "https://loremflickr.com/640/480",
    category: "Wooden",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3415db7d452d14dcefe0"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("8")
    },
    id: NumberInt("54818"),
    title: "Rustic Wooden Tuna",
    price: NumberInt("688"),
    description: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    image: "https://loremflickr.com/640/480",
    category: "Wooden",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3415db7d452d14dcefe2"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("5")
    },
    id: NumberInt("46915"),
    title: "Bespoke Rubber Chair",
    price: NumberInt("480"),
    description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    image: "https://loremflickr.com/640/480",
    category: "Granite",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3415db7d452d14dcefe4"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("35")
    },
    id: NumberInt("76807"),
    title: "Sleek Plastic Chips",
    price: NumberInt("739"),
    description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    image: "https://loremflickr.com/640/480",
    category: "Steel",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3415db7d452d14dcefe6"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("16")
    },
    id: NumberInt("69679"),
    title: "Generic Concrete Car",
    price: NumberInt("162"),
    description: "The Football Is Good For Training And Recreational Purposes",
    image: "https://loremflickr.com/640/480",
    category: "Frozen",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3416db7d452d14dcefe8"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("62")
    },
    id: NumberInt("42034"),
    title: "Sleek Metal Chips",
    price: NumberInt("24"),
    description: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    image: "https://loremflickr.com/640/480",
    category: "Soft",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3416db7d452d14dcefea"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("28")
    },
    id: NumberInt("29391"),
    title: "Oriental Soft Computer",
    price: NumberInt("784"),
    description: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    image: "https://loremflickr.com/640/480",
    category: "Granite",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3416db7d452d14dcefec"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("21")
    },
    id: NumberInt("9125"),
    title: "Incredible Metal Salad",
    price: NumberInt("612"),
    description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    image: "https://loremflickr.com/640/480",
    category: "Bronze",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3416db7d452d14dcefee"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("50")
    },
    id: NumberInt("61934"),
    title: "Bespoke Granite Soap",
    price: NumberInt("103"),
    description: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    image: "https://loremflickr.com/640/480",
    category: "Soft",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3417db7d452d14dceff0"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("15")
    },
    id: NumberInt("77764"),
    title: "Modern Granite Gloves",
    price: NumberInt("36"),
    description: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    image: "https://loremflickr.com/640/480",
    category: "Steel",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3417db7d452d14dceff2"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("52")
    },
    id: NumberInt("79229"),
    title: "Small Steel Shoes",
    price: NumberInt("912"),
    description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    image: "https://loremflickr.com/640/480",
    category: "Steel",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3417db7d452d14dceff4"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("0")
    },
    id: NumberInt("21277"),
    title: "Bespoke Soft Computer",
    price: NumberInt("727"),
    description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    image: "https://loremflickr.com/640/480",
    category: "Wooden",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3418db7d452d14dceff6"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("44")
    },
    id: NumberInt("93191"),
    title: "Generic Steel Car",
    price: NumberInt("119"),
    description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    image: "https://loremflickr.com/640/480",
    category: "Plastic",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3418db7d452d14dceff8"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("72")
    },
    id: NumberInt("13659"),
    title: "Handcrafted Granite Cheese",
    price: NumberInt("594"),
    description: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    image: "https://loremflickr.com/640/480",
    category: "Plastic",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3418db7d452d14dceffa"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("49")
    },
    id: NumberInt("9173"),
    title: "Ergonomic Cotton Cheese",
    price: NumberInt("376"),
    description: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    image: "https://loremflickr.com/640/480",
    category: "Granite",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3418db7d452d14dceffc"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("27")
    },
    id: NumberInt("64925"),
    title: "Generic Bronze Pants",
    price: NumberInt("282"),
    description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    image: "https://loremflickr.com/640/480",
    category: "Frozen",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3419db7d452d14dceffe"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("35")
    },
    id: NumberInt("59553"),
    title: "Modern Plastic Mouse",
    price: NumberInt("665"),
    description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    image: "https://loremflickr.com/640/480",
    category: "Cotton",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3419db7d452d14dcf000"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("50")
    },
    id: NumberInt("33481"),
    title: "Small Concrete Chips",
    price: NumberInt("28"),
    description: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    image: "https://loremflickr.com/640/480",
    category: "Concrete",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3419db7d452d14dcf002"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("49")
    },
    id: NumberInt("73398"),
    title: "Oriental Granite Towels",
    price: NumberInt("515"),
    description: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    image: "https://loremflickr.com/640/480",
    category: "Frozen",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be341adb7d452d14dcf004"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("9")
    },
    id: NumberInt("48998"),
    title: "Fantastic Plastic Pants",
    price: NumberInt("656"),
    description: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    image: "https://loremflickr.com/640/480",
    category: "Cotton",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be341adb7d452d14dcf006"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("59")
    },
    id: NumberInt("70973"),
    title: "Refined Rubber Pants",
    price: NumberInt("292"),
    description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    image: "https://loremflickr.com/640/480",
    category: "Bronze",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be341adb7d452d14dcf008"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("93")
    },
    id: NumberInt("69336"),
    title: "Gorgeous Steel Pizza",
    price: NumberInt("620"),
    description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    image: "https://loremflickr.com/640/480",
    category: "Steel",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be341adb7d452d14dcf00a"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("99")
    },
    id: NumberInt("96115"),
    title: "Awesome Metal Salad",
    price: NumberInt("906"),
    description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    image: "https://loremflickr.com/640/480",
    category: "Frozen",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be341bdb7d452d14dcf00c"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("34")
    },
    id: NumberInt("558"),
    title: "Generic Cotton Chips",
    price: NumberInt("347"),
    description: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    image: "https://loremflickr.com/640/480",
    category: "Granite",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be341bdb7d452d14dcf00e"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("0")
    },
    id: NumberInt("15898"),
    title: "Handcrafted Bronze Bacon",
    price: NumberInt("701"),
    description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    image: "https://loremflickr.com/640/480",
    category: "Fresh",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be341bdb7d452d14dcf010"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("73")
    },
    id: NumberInt("24244"),
    title: "Bespoke Fresh Hat",
    price: NumberInt("146"),
    description: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    image: "https://loremflickr.com/640/480",
    category: "Plastic",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be341cdb7d452d14dcf012"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("66")
    },
    id: NumberInt("43845"),
    title: "Sleek Rubber Shirt",
    price: NumberInt("508"),
    description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    image: "https://loremflickr.com/640/480",
    category: "Steel",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be341cdb7d452d14dcf014"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("57")
    },
    id: NumberInt("71352"),
    title: "Unbranded Soft Bike",
    price: NumberInt("287"),
    description: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    image: "https://loremflickr.com/640/480",
    category: "Cotton",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be341cdb7d452d14dcf016"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("66")
    },
    id: NumberInt("18950"),
    title: "Rustic Bronze Pizza",
    price: NumberInt("370"),
    description: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    image: "https://loremflickr.com/640/480",
    category: "Bronze",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be341cdb7d452d14dcf018"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("53")
    },
    id: NumberInt("10324"),
    title: "Tasty Plastic Gloves",
    price: NumberInt("351"),
    description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    image: "https://loremflickr.com/640/480",
    category: "Rubber",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be341ddb7d452d14dcf01a"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("91")
    },
    id: NumberInt("60425"),
    title: "Intelligent Steel Car",
    price: NumberInt("279"),
    description: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    image: "https://loremflickr.com/640/480",
    category: "Frozen",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be341ddb7d452d14dcf01c"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("66")
    },
    id: NumberInt("24479"),
    title: "Handcrafted Fresh Pants",
    price: NumberInt("619"),
    description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    image: "https://loremflickr.com/640/480",
    category: "Bronze",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be341ddb7d452d14dcf01e"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("62")
    },
    id: NumberInt("85503"),
    title: "Elegant Soft Pizza",
    price: NumberInt("542"),
    description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    image: "https://loremflickr.com/640/480",
    category: "Wooden",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be341ddb7d452d14dcf020"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("37")
    },
    id: NumberInt("29615"),
    title: "Incredible Rubber Shirt",
    price: NumberInt("114"),
    description: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    image: "https://loremflickr.com/640/480",
    category: "Metal",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be341edb7d452d14dcf022"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("34")
    },
    id: NumberInt("72612"),
    title: "Tasty Bronze Chicken",
    price: NumberInt("608"),
    description: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    image: "https://loremflickr.com/640/480",
    category: "Soft",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be341edb7d452d14dcf024"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("88")
    },
    id: NumberInt("57310"),
    title: "Generic Plastic Fish",
    price: NumberInt("135"),
    description: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    image: "https://loremflickr.com/640/480",
    category: "Cotton",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be341edb7d452d14dcf026"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("89")
    },
    id: NumberInt("16618"),
    title: "Licensed Soft Pants",
    price: NumberInt("545"),
    description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    image: "https://loremflickr.com/640/480",
    category: "Concrete",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be341fdb7d452d14dcf028"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("89")
    },
    id: NumberInt("93733"),
    title: "Handmade Concrete Keyboard",
    price: NumberInt("458"),
    description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    image: "https://loremflickr.com/640/480",
    category: "Plastic",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be341fdb7d452d14dcf02a"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("93")
    },
    id: NumberInt("51891"),
    title: "Rustic Soft Hat",
    price: NumberInt("690"),
    description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    image: "https://loremflickr.com/640/480",
    category: "Metal",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be341fdb7d452d14dcf02c"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("53")
    },
    id: NumberInt("2995"),
    title: "Recycled Metal Hat",
    price: NumberInt("402"),
    description: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    image: "https://loremflickr.com/640/480",
    category: "Bronze",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be341fdb7d452d14dcf02e"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("45")
    },
    id: NumberInt("43445"),
    title: "Licensed Wooden Chicken",
    price: NumberInt("138"),
    description: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    image: "https://loremflickr.com/640/480",
    category: "Metal",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3420db7d452d14dcf030"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("76")
    },
    id: NumberInt("56113"),
    title: "Awesome Rubber Computer",
    price: NumberInt("726"),
    description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    image: "https://loremflickr.com/640/480",
    category: "Soft",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3420db7d452d14dcf032"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("55")
    },
    id: NumberInt("92219"),
    title: "Luxurious Bronze Mouse",
    price: NumberInt("86"),
    description: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    image: "https://loremflickr.com/640/480",
    category: "Soft",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3420db7d452d14dcf034"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("84")
    },
    id: NumberInt("80853"),
    title: "Electronic Metal Pizza",
    price: NumberInt("796"),
    description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    image: "https://loremflickr.com/640/480",
    category: "Cotton",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3421db7d452d14dcf036"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("37")
    },
    id: NumberInt("88586"),
    title: "Luxurious Fresh Mouse",
    price: NumberInt("645"),
    description: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    image: "https://loremflickr.com/640/480",
    category: "Bronze",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3421db7d452d14dcf038"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("56")
    },
    id: NumberInt("73414"),
    title: "Unbranded Frozen Bacon",
    price: NumberInt("738"),
    description: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    image: "https://loremflickr.com/640/480",
    category: "Plastic",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3421db7d452d14dcf03a"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("60")
    },
    id: NumberInt("79183"),
    title: "Bespoke Frozen Computer",
    price: NumberInt("115"),
    description: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    image: "https://loremflickr.com/640/480",
    category: "Soft",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("64be3421db7d452d14dcf03c"),
    rating: {
        rate: NumberInt("1"),
        count: NumberInt("97")
    },
    id: NumberInt("58998"),
    title: "Sleek Frozen Keyboard",
    price: NumberInt("329"),
    description: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    image: "https://loremflickr.com/640/480",
    category: "Granite",
    __v: NumberInt("0")
} ]);
