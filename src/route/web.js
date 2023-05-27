//a service, gọi đến homeController
import express from "express";
import homeController, { getHomePage } from "../controllers/homeController";

let router = express.Router();

let initWebRouters = (app) => {
    //rest api
    // localhost: 8080/
    router.get('/', homeController.getHomePage);
    // localhost:8080/about
    router.get('/about', homeController.getAboutpage);
    // app sử dụng tất cả các file router mà chúng ta khai báo
    return app.use("/", router);

}

module.exports = initWebRouters;