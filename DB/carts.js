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

 Date: 24/07/2023 15:32:15
*/


// ----------------------------
// Collection structure for carts
// ----------------------------
db.getCollection("carts").drop();
db.createCollection("carts");

// ----------------------------
// Documents of carts
// ----------------------------
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3422db7d452d14dcf03f"),
    id: NumberInt("2185"),
    userId: NumberInt("64348"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3422db7d452d14dcf040"),
            productId: NumberInt("3247"),
            quantity: NumberInt("1")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3422db7d452d14dcf042"),
    id: NumberInt("4648"),
    userId: NumberInt("15555"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3422db7d452d14dcf043"),
            productId: NumberInt("30398"),
            quantity: NumberInt("2")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3423db7d452d14dcf045"),
    id: NumberInt("44642"),
    userId: NumberInt("42657"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3423db7d452d14dcf046"),
            productId: NumberInt("20048"),
            quantity: NumberInt("3")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3423db7d452d14dcf048"),
    id: NumberInt("71384"),
    userId: NumberInt("79800"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3423db7d452d14dcf049"),
            productId: NumberInt("6755"),
            quantity: NumberInt("4")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3423db7d452d14dcf04b"),
    id: NumberInt("92804"),
    userId: NumberInt("16270"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3423db7d452d14dcf04c"),
            productId: NumberInt("97668"),
            quantity: NumberInt("5")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3423db7d452d14dcf04e"),
    id: NumberInt("89120"),
    userId: NumberInt("62972"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3423db7d452d14dcf04f"),
            productId: NumberInt("29013"),
            quantity: NumberInt("6")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3424db7d452d14dcf051"),
    id: NumberInt("39771"),
    userId: NumberInt("47781"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3424db7d452d14dcf052"),
            productId: NumberInt("37624"),
            quantity: NumberInt("7")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3424db7d452d14dcf054"),
    id: NumberInt("32714"),
    userId: NumberInt("92816"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3424db7d452d14dcf055"),
            productId: NumberInt("9622"),
            quantity: NumberInt("8")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3424db7d452d14dcf057"),
    id: NumberInt("72863"),
    userId: NumberInt("93630"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3424db7d452d14dcf058"),
            productId: NumberInt("75856"),
            quantity: NumberInt("9")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3425db7d452d14dcf05a"),
    id: NumberInt("6136"),
    userId: NumberInt("49551"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3425db7d452d14dcf05b"),
            productId: NumberInt("46992"),
            quantity: NumberInt("10")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3425db7d452d14dcf05d"),
    id: NumberInt("88605"),
    userId: NumberInt("34444"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3425db7d452d14dcf05e"),
            productId: NumberInt("19143"),
            quantity: NumberInt("11")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3425db7d452d14dcf060"),
    id: NumberInt("15713"),
    userId: NumberInt("57026"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3425db7d452d14dcf061"),
            productId: NumberInt("24567"),
            quantity: NumberInt("12")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3425db7d452d14dcf063"),
    id: NumberInt("44333"),
    userId: NumberInt("70557"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3425db7d452d14dcf064"),
            productId: NumberInt("74639"),
            quantity: NumberInt("13")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3426db7d452d14dcf066"),
    id: NumberInt("96920"),
    userId: NumberInt("53200"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3426db7d452d14dcf067"),
            productId: NumberInt("11506"),
            quantity: NumberInt("14")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3426db7d452d14dcf069"),
    id: NumberInt("68799"),
    userId: NumberInt("87721"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3426db7d452d14dcf06a"),
            productId: NumberInt("43808"),
            quantity: NumberInt("15")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3426db7d452d14dcf06c"),
    id: NumberInt("49456"),
    userId: NumberInt("12086"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3426db7d452d14dcf06d"),
            productId: NumberInt("54112"),
            quantity: NumberInt("16")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3427db7d452d14dcf06f"),
    id: NumberInt("99577"),
    userId: NumberInt("83232"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3427db7d452d14dcf070"),
            productId: NumberInt("87576"),
            quantity: NumberInt("17")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3427db7d452d14dcf072"),
    id: NumberInt("88258"),
    userId: NumberInt("33396"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3427db7d452d14dcf073"),
            productId: NumberInt("64270"),
            quantity: NumberInt("18")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3427db7d452d14dcf075"),
    id: NumberInt("30495"),
    userId: NumberInt("79171"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3427db7d452d14dcf076"),
            productId: NumberInt("13467"),
            quantity: NumberInt("19")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3427db7d452d14dcf078"),
    id: NumberInt("72267"),
    userId: NumberInt("36080"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3427db7d452d14dcf079"),
            productId: NumberInt("73567"),
            quantity: NumberInt("20")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3428db7d452d14dcf07b"),
    id: NumberInt("4324"),
    userId: NumberInt("37874"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3428db7d452d14dcf07c"),
            productId: NumberInt("69611"),
            quantity: NumberInt("21")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3428db7d452d14dcf07e"),
    id: NumberInt("50268"),
    userId: NumberInt("15399"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3428db7d452d14dcf07f"),
            productId: NumberInt("6258"),
            quantity: NumberInt("22")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3428db7d452d14dcf081"),
    id: NumberInt("47860"),
    userId: NumberInt("35221"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3428db7d452d14dcf082"),
            productId: NumberInt("25854"),
            quantity: NumberInt("23")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3429db7d452d14dcf084"),
    id: NumberInt("58355"),
    userId: NumberInt("72911"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3429db7d452d14dcf085"),
            productId: NumberInt("43263"),
            quantity: NumberInt("24")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3429db7d452d14dcf087"),
    id: NumberInt("49899"),
    userId: NumberInt("88425"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3429db7d452d14dcf088"),
            productId: NumberInt("31365"),
            quantity: NumberInt("25")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3429db7d452d14dcf08a"),
    id: NumberInt("39192"),
    userId: NumberInt("41885"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3429db7d452d14dcf08b"),
            productId: NumberInt("14994"),
            quantity: NumberInt("26")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3429db7d452d14dcf08d"),
    id: NumberInt("95749"),
    userId: NumberInt("21699"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3429db7d452d14dcf08e"),
            productId: NumberInt("55485"),
            quantity: NumberInt("27")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be342adb7d452d14dcf090"),
    id: NumberInt("21185"),
    userId: NumberInt("37990"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be342adb7d452d14dcf091"),
            productId: NumberInt("46125"),
            quantity: NumberInt("28")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be342adb7d452d14dcf093"),
    id: NumberInt("2044"),
    userId: NumberInt("93662"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be342adb7d452d14dcf094"),
            productId: NumberInt("40378"),
            quantity: NumberInt("29")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be342adb7d452d14dcf096"),
    id: NumberInt("93048"),
    userId: NumberInt("9254"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be342adb7d452d14dcf097"),
            productId: NumberInt("69303"),
            quantity: NumberInt("30")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be342adb7d452d14dcf099"),
    id: NumberInt("13122"),
    userId: NumberInt("22367"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be342adb7d452d14dcf09a"),
            productId: NumberInt("12489"),
            quantity: NumberInt("31")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be342bdb7d452d14dcf09c"),
    id: NumberInt("77785"),
    userId: NumberInt("94736"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be342bdb7d452d14dcf09d"),
            productId: NumberInt("94336"),
            quantity: NumberInt("32")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be342bdb7d452d14dcf09f"),
    id: NumberInt("87264"),
    userId: NumberInt("39249"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be342bdb7d452d14dcf0a0"),
            productId: NumberInt("84889"),
            quantity: NumberInt("33")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be342bdb7d452d14dcf0a2"),
    id: NumberInt("59483"),
    userId: NumberInt("41448"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be342bdb7d452d14dcf0a3"),
            productId: NumberInt("25400"),
            quantity: NumberInt("34")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be342cdb7d452d14dcf0a5"),
    id: NumberInt("94571"),
    userId: NumberInt("12262"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be342cdb7d452d14dcf0a6"),
            productId: NumberInt("67348"),
            quantity: NumberInt("35")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be342cdb7d452d14dcf0a8"),
    id: NumberInt("12530"),
    userId: NumberInt("75196"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be342cdb7d452d14dcf0a9"),
            productId: NumberInt("31717"),
            quantity: NumberInt("36")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be342cdb7d452d14dcf0ab"),
    id: NumberInt("28997"),
    userId: NumberInt("70257"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be342cdb7d452d14dcf0ac"),
            productId: NumberInt("37249"),
            quantity: NumberInt("37")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be342cdb7d452d14dcf0ae"),
    id: NumberInt("96012"),
    userId: NumberInt("55057"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be342cdb7d452d14dcf0af"),
            productId: NumberInt("76931"),
            quantity: NumberInt("38")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be342ddb7d452d14dcf0b1"),
    id: NumberInt("21061"),
    userId: NumberInt("10031"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be342ddb7d452d14dcf0b2"),
            productId: NumberInt("66727"),
            quantity: NumberInt("39")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be342ddb7d452d14dcf0b4"),
    id: NumberInt("37002"),
    userId: NumberInt("49356"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be342ddb7d452d14dcf0b5"),
            productId: NumberInt("69795"),
            quantity: NumberInt("40")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be342ddb7d452d14dcf0b7"),
    id: NumberInt("11434"),
    userId: NumberInt("31530"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be342ddb7d452d14dcf0b8"),
            productId: NumberInt("47468"),
            quantity: NumberInt("41")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be342edb7d452d14dcf0ba"),
    id: NumberInt("87166"),
    userId: NumberInt("80349"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be342edb7d452d14dcf0bb"),
            productId: NumberInt("505"),
            quantity: NumberInt("42")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be342edb7d452d14dcf0bd"),
    id: NumberInt("99444"),
    userId: NumberInt("6707"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be342edb7d452d14dcf0be"),
            productId: NumberInt("85601"),
            quantity: NumberInt("43")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be342edb7d452d14dcf0c0"),
    id: NumberInt("8054"),
    userId: NumberInt("49156"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be342edb7d452d14dcf0c1"),
            productId: NumberInt("8495"),
            quantity: NumberInt("44")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be342edb7d452d14dcf0c3"),
    id: NumberInt("27230"),
    userId: NumberInt("77654"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be342edb7d452d14dcf0c4"),
            productId: NumberInt("58438"),
            quantity: NumberInt("45")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be342fdb7d452d14dcf0c6"),
    id: NumberInt("20013"),
    userId: NumberInt("76061"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be342fdb7d452d14dcf0c7"),
            productId: NumberInt("96275"),
            quantity: NumberInt("46")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be342fdb7d452d14dcf0c9"),
    id: NumberInt("62090"),
    userId: NumberInt("59629"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be342fdb7d452d14dcf0ca"),
            productId: NumberInt("40959"),
            quantity: NumberInt("47")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be342fdb7d452d14dcf0cc"),
    id: NumberInt("89577"),
    userId: NumberInt("79760"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be342fdb7d452d14dcf0cd"),
            productId: NumberInt("16056"),
            quantity: NumberInt("48")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3430db7d452d14dcf0cf"),
    id: NumberInt("15262"),
    userId: NumberInt("80765"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3430db7d452d14dcf0d0"),
            productId: NumberInt("30026"),
            quantity: NumberInt("49")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3430db7d452d14dcf0d2"),
    id: NumberInt("93512"),
    userId: NumberInt("92570"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3430db7d452d14dcf0d3"),
            productId: NumberInt("40157"),
            quantity: NumberInt("50")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3430db7d452d14dcf0d5"),
    id: NumberInt("73222"),
    userId: NumberInt("18532"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3430db7d452d14dcf0d6"),
            productId: NumberInt("92007"),
            quantity: NumberInt("51")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3430db7d452d14dcf0d8"),
    id: NumberInt("47840"),
    userId: NumberInt("91473"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3430db7d452d14dcf0d9"),
            productId: NumberInt("85987"),
            quantity: NumberInt("52")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3431db7d452d14dcf0db"),
    id: NumberInt("25204"),
    userId: NumberInt("18531"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3431db7d452d14dcf0dc"),
            productId: NumberInt("30701"),
            quantity: NumberInt("53")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3431db7d452d14dcf0de"),
    id: NumberInt("30169"),
    userId: NumberInt("81524"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3431db7d452d14dcf0df"),
            productId: NumberInt("43408"),
            quantity: NumberInt("54")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3431db7d452d14dcf0e1"),
    id: NumberInt("54982"),
    userId: NumberInt("1661"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3431db7d452d14dcf0e2"),
            productId: NumberInt("55393"),
            quantity: NumberInt("55")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3432db7d452d14dcf0e4"),
    id: NumberInt("2839"),
    userId: NumberInt("86538"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3432db7d452d14dcf0e5"),
            productId: NumberInt("34139"),
            quantity: NumberInt("56")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3432db7d452d14dcf0e7"),
    id: NumberInt("37839"),
    userId: NumberInt("59579"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3432db7d452d14dcf0e8"),
            productId: NumberInt("23908"),
            quantity: NumberInt("57")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3432db7d452d14dcf0ea"),
    id: NumberInt("7885"),
    userId: NumberInt("43599"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3432db7d452d14dcf0eb"),
            productId: NumberInt("30284"),
            quantity: NumberInt("58")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3432db7d452d14dcf0ed"),
    id: NumberInt("85824"),
    userId: NumberInt("45066"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3432db7d452d14dcf0ee"),
            productId: NumberInt("48482"),
            quantity: NumberInt("59")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3433db7d452d14dcf0f0"),
    id: NumberInt("98546"),
    userId: NumberInt("7907"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3433db7d452d14dcf0f1"),
            productId: NumberInt("69649"),
            quantity: NumberInt("60")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3433db7d452d14dcf0f3"),
    id: NumberInt("96390"),
    userId: NumberInt("13558"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3433db7d452d14dcf0f4"),
            productId: NumberInt("90133"),
            quantity: NumberInt("61")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3433db7d452d14dcf0f6"),
    id: NumberInt("9007"),
    userId: NumberInt("38431"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3433db7d452d14dcf0f7"),
            productId: NumberInt("45773"),
            quantity: NumberInt("62")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3434db7d452d14dcf0f9"),
    id: NumberInt("42520"),
    userId: NumberInt("69209"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3434db7d452d14dcf0fa"),
            productId: NumberInt("41212"),
            quantity: NumberInt("63")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3434db7d452d14dcf0fc"),
    id: NumberInt("50562"),
    userId: NumberInt("95520"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3434db7d452d14dcf0fd"),
            productId: NumberInt("39123"),
            quantity: NumberInt("64")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3434db7d452d14dcf0ff"),
    id: NumberInt("84063"),
    userId: NumberInt("69873"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3434db7d452d14dcf100"),
            productId: NumberInt("10150"),
            quantity: NumberInt("65")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3434db7d452d14dcf102"),
    id: NumberInt("68645"),
    userId: NumberInt("77585"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3434db7d452d14dcf103"),
            productId: NumberInt("33727"),
            quantity: NumberInt("66")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3435db7d452d14dcf105"),
    id: NumberInt("29573"),
    userId: NumberInt("75192"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3435db7d452d14dcf106"),
            productId: NumberInt("10384"),
            quantity: NumberInt("67")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3435db7d452d14dcf108"),
    id: NumberInt("84554"),
    userId: NumberInt("61352"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3435db7d452d14dcf109"),
            productId: NumberInt("72606"),
            quantity: NumberInt("68")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3435db7d452d14dcf10b"),
    id: NumberInt("20884"),
    userId: NumberInt("62075"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3435db7d452d14dcf10c"),
            productId: NumberInt("90815"),
            quantity: NumberInt("69")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3436db7d452d14dcf10e"),
    id: NumberInt("10778"),
    userId: NumberInt("16329"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3436db7d452d14dcf10f"),
            productId: NumberInt("94380"),
            quantity: NumberInt("70")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3436db7d452d14dcf111"),
    id: NumberInt("29963"),
    userId: NumberInt("51629"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3436db7d452d14dcf112"),
            productId: NumberInt("86622"),
            quantity: NumberInt("71")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3436db7d452d14dcf114"),
    id: NumberInt("9877"),
    userId: NumberInt("15498"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3436db7d452d14dcf115"),
            productId: NumberInt("52259"),
            quantity: NumberInt("72")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3436db7d452d14dcf117"),
    id: NumberInt("4591"),
    userId: NumberInt("89803"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3436db7d452d14dcf118"),
            productId: NumberInt("75152"),
            quantity: NumberInt("73")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3437db7d452d14dcf11a"),
    id: NumberInt("52224"),
    userId: NumberInt("603"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3437db7d452d14dcf11b"),
            productId: NumberInt("30675"),
            quantity: NumberInt("74")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3437db7d452d14dcf11d"),
    id: NumberInt("78685"),
    userId: NumberInt("34534"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3437db7d452d14dcf11e"),
            productId: NumberInt("65370"),
            quantity: NumberInt("75")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3437db7d452d14dcf120"),
    id: NumberInt("61383"),
    userId: NumberInt("28841"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3437db7d452d14dcf121"),
            productId: NumberInt("69283"),
            quantity: NumberInt("76")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3438db7d452d14dcf123"),
    id: NumberInt("20086"),
    userId: NumberInt("5167"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3438db7d452d14dcf124"),
            productId: NumberInt("77401"),
            quantity: NumberInt("77")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3438db7d452d14dcf126"),
    id: NumberInt("36348"),
    userId: NumberInt("33425"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3438db7d452d14dcf127"),
            productId: NumberInt("87336"),
            quantity: NumberInt("78")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3438db7d452d14dcf129"),
    id: NumberInt("60069"),
    userId: NumberInt("19863"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3438db7d452d14dcf12a"),
            productId: NumberInt("3957"),
            quantity: NumberInt("79")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3438db7d452d14dcf12c"),
    id: NumberInt("23723"),
    userId: NumberInt("39944"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3438db7d452d14dcf12d"),
            productId: NumberInt("53785"),
            quantity: NumberInt("80")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3439db7d452d14dcf12f"),
    id: NumberInt("32908"),
    userId: NumberInt("41638"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3439db7d452d14dcf130"),
            productId: NumberInt("43592"),
            quantity: NumberInt("81")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3439db7d452d14dcf132"),
    id: NumberInt("8765"),
    userId: NumberInt("3425"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3439db7d452d14dcf133"),
            productId: NumberInt("66862"),
            quantity: NumberInt("82")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be3439db7d452d14dcf135"),
    id: NumberInt("18519"),
    userId: NumberInt("79730"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be3439db7d452d14dcf136"),
            productId: NumberInt("72976"),
            quantity: NumberInt("83")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be343adb7d452d14dcf138"),
    id: NumberInt("92155"),
    userId: NumberInt("18239"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be343adb7d452d14dcf139"),
            productId: NumberInt("1184"),
            quantity: NumberInt("84")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be343adb7d452d14dcf13b"),
    id: NumberInt("33649"),
    userId: NumberInt("90664"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be343adb7d452d14dcf13c"),
            productId: NumberInt("37634"),
            quantity: NumberInt("85")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be343adb7d452d14dcf13e"),
    id: NumberInt("89375"),
    userId: NumberInt("96073"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be343adb7d452d14dcf13f"),
            productId: NumberInt("71889"),
            quantity: NumberInt("86")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be343adb7d452d14dcf141"),
    id: NumberInt("20451"),
    userId: NumberInt("49812"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be343adb7d452d14dcf142"),
            productId: NumberInt("35192"),
            quantity: NumberInt("87")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be343bdb7d452d14dcf144"),
    id: NumberInt("75760"),
    userId: NumberInt("90258"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be343bdb7d452d14dcf145"),
            productId: NumberInt("65679"),
            quantity: NumberInt("88")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be343bdb7d452d14dcf147"),
    id: NumberInt("18859"),
    userId: NumberInt("65236"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be343bdb7d452d14dcf148"),
            productId: NumberInt("2325"),
            quantity: NumberInt("89")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be343bdb7d452d14dcf14a"),
    id: NumberInt("77230"),
    userId: NumberInt("66127"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be343bdb7d452d14dcf14b"),
            productId: NumberInt("79645"),
            quantity: NumberInt("90")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be343bdb7d452d14dcf14d"),
    id: NumberInt("41451"),
    userId: NumberInt("3842"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be343bdb7d452d14dcf14e"),
            productId: NumberInt("55399"),
            quantity: NumberInt("91")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be343cdb7d452d14dcf150"),
    id: NumberInt("51753"),
    userId: NumberInt("20686"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be343cdb7d452d14dcf151"),
            productId: NumberInt("68421"),
            quantity: NumberInt("92")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be343cdb7d452d14dcf153"),
    id: NumberInt("13607"),
    userId: NumberInt("31078"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be343cdb7d452d14dcf154"),
            productId: NumberInt("26751"),
            quantity: NumberInt("93")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be343cdb7d452d14dcf156"),
    id: NumberInt("29252"),
    userId: NumberInt("85256"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be343cdb7d452d14dcf157"),
            productId: NumberInt("40031"),
            quantity: NumberInt("94")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be343ddb7d452d14dcf159"),
    id: NumberInt("5414"),
    userId: NumberInt("66402"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be343ddb7d452d14dcf15a"),
            productId: NumberInt("30826"),
            quantity: NumberInt("95")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be343ddb7d452d14dcf15c"),
    id: NumberInt("60658"),
    userId: NumberInt("44496"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be343ddb7d452d14dcf15d"),
            productId: NumberInt("91983"),
            quantity: NumberInt("96")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be343ddb7d452d14dcf15f"),
    id: NumberInt("79778"),
    userId: NumberInt("37591"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be343ddb7d452d14dcf160"),
            productId: NumberInt("31154"),
            quantity: NumberInt("97")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be343ddb7d452d14dcf162"),
    id: NumberInt("74171"),
    userId: NumberInt("43830"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be343ddb7d452d14dcf163"),
            productId: NumberInt("51713"),
            quantity: NumberInt("98")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be343edb7d452d14dcf165"),
    id: NumberInt("9713"),
    userId: NumberInt("44510"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be343edb7d452d14dcf166"),
            productId: NumberInt("49084"),
            quantity: NumberInt("99")
        }
    ],
    __v: NumberInt("0")
} ]);
db.getCollection("carts").insert([ {
    _id: ObjectId("64be343edb7d452d14dcf168"),
    id: NumberInt("59492"),
    userId: NumberInt("485"),
    date: ISODate("2023-07-24T00:00:00.000Z"),
    products: [
        {
            _id: ObjectId("64be343edb7d452d14dcf169"),
            productId: NumberInt("25087"),
            quantity: NumberInt("100")
        }
    ],
    __v: NumberInt("0")
} ]);
