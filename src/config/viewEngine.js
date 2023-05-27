// import express
import express from "express";

// arrow function: function mũi tên
// thêm biến app
let configviewEngine = (app) => {
    // cấu hình cho biến app
    // static báo cho server biết chỉ được lấy ảnh trong thư mục public, cho server biết client có thể truy cập vào những file nào
    app.use(express.static("./src/public"));
    // dùng view engine có tên là ejs, ejs dùng để gõ logic trong file html (if, else, loop)
    app.set("view engine", "ejs");
    // set đường link lấy view engine
    app.set("views", "./src/views")

}

// muốn các file js khác đều sử dụng được function configviewEngine thì ta phải export fuction này
module.exports = configviewEngine;
