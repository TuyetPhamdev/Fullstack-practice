import express from "express";
import bodyParser from "body-parser"; // /user?id=7
import viewEngine from "./config/viewEngine";
import initWebRouters from "./route/web";
import connectDB from "./config/connectDB";
require('dotenv').config();

let app = express();

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
viewEngine(app);
initWebRouters(app);
connectDB();

let port = process.env.PORT || 6969;
// port == undefined => port = 6969

app.listen(port, () => {
    // nếu app chạy thành công thì in ra màn hình câu callback
    console.log("Backend Nodejs is running on the port: " + port)
})