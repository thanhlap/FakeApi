const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const { seedUsers, seedProducts, seedCarts } = require("../seeders/seeder");

module.exports = async () => {
    try {
        await mongoose
            .connect(process.env.DATABASE_URL, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            })
            .then(() => {
                console.log("Ket noi thanh cong");

            })
            .catch((error) => console.log(`${error} did not connect`));

        // //seeder db
        await seedUsers();
        await seedProducts();
        await seedCarts();
    } catch (error) {
        console.log('Error ============')
        console.log(error);
        process.exit(1);
    }

};