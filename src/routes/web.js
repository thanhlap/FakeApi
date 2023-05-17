const express = require("express");


//routes
const productRoute = require("./product");
const homeRoute = require("./home");
const cartRoute = require("./cart");
const userRoute = require("./user");
const authRoute = require("./auth");



let router = express.Router();
let initWebRoutes = (app) => {
    // router.get("/", homeController.getHomePage);

    router.use("/", homeRoute);
    router.use("/products", productRoute);
    router.use("/carts", cartRoute);
    router.use("/users", userRoute);
    router.use("/auth", authRoute);


    return app.use("/", router);
};

module.exports = initWebRoutes;