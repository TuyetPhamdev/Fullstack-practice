//a service, gọi đến homeController
import express, { Router } from "express";
import homeController, { getHomePage } from "../controllers/homeController";

let router = express.Router();

let initWebRouters = (app) => {
    //rest api
    // localhost: 8080/
    router.get('/', homeController.getHomePage);
    // localhost:8080/about
    router.get('/about', homeController.getAboutpage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);
    // app sử dụng tất cả các file router mà chúng ta khai báo
    return app.use("/", router);

}

module.exports = initWebRouters;