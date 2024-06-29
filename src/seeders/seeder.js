const { faker } = require('@faker-js/faker');
const User = require('../models/user')
const Product = require("../models/product");
const Cart = require('../models/cart')

const seedUsers = async () => {
    try {
        const Count = await User.countDocuments();
        if (Count >= 100) {
            return;
        }
        // await User.remove();
        for (let i = 0; i < 100; i++) {
            await User.create({
                id: faker.datatype.number(),
                email: faker.internet.email(),
                username: faker.internet.userName(),
                password: faker.internet.password(),
                name: {
                    firstname: faker.name.firstName(),
                    lastname: faker.name.lastName()
                },
                address: {
                    city: faker.address.cityName(),
                    street: faker.address.streetAddress(),
                    number: faker.address.buildingNumber(),
                    zipcode: faker.address.zipCode(),
                },
                phone: faker.phone.number(),
            })
        }

    } catch (error) {
        console.log(error)
    }
}

const seedProducts = async () => {
    try {
        const Count = await Product.countDocuments();
        if (Count >= 100) {
            return;
        }
        // await Product.remove();
        for (let i = 0; i < 100; i++) {
            await Product.create({
                id: faker.datatype.number(),
                title: faker.commerce.productName(),
                price: faker.commerce.price(),
                description: faker.commerce.productDescription(),
                image: faker.image.imageUrl(),
                category: faker.commerce.productMaterial(),
                rating: {
                    rate: 1,
                    count: faker.datatype.number(100)
                }
            });
        }

    } catch (error) {
        console.log(error)
    }
}

const seedCarts = async () => {
    try {
        const Count = await Cart.countDocuments();
        if (Count >= 100) {
            return;
        }
        // await Cart.remove();
        for (let i = 0; i < 100; i++) {
            await Cart.create({
                id: faker.datatype.number(),
                userId: faker.datatype.number(),
                date: '2023-07-24',//faker.datatype.datetime(),
                products: [
                    {
                        productId: faker.datatype.number(),
                        quantity: i + 1
                    },
                ]
            })
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    seedUsers,
    seedProducts,
    seedCarts
}
