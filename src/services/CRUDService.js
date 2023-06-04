// import bcrypt from 'bcrypt.js';
//const salt = bcrypt.genSaltSync(10);
import db from "../models/index";

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                //password: hashPasswordFromBcrypt,
                password: data.password,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId
            })
            resolve('success to create a new member');
        } catch (e) {
            reject(e);

        }
    })
}

// let hashUserPassword = (password) => {
//     return new Promise(async(resolve, reject) => {
//         try {
//             let hashPassword = await bcrypt.hashSync("B4c0/\/", salt);
//             resolve(hashPassword);
//         } catch (e) {
//             reject(e);
//         }
//     })
// }

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = db.User.findAll({
                raw: true,
            });
            resolve(users);
        } catch (e) {
            reject(e);
        }
    })
}

let getUserInfoById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId },
                raw: true,
            })
            if (user) {
                resolve(user);
            } else {
                resolve([]);
            }
        } catch (e) {
            reject(e);
        }
    })
}

let updateUserData = (update) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: update.id }
            })
            if (user) {
                user.firstName = update.firstName;
                user.lastName = update.lastName;
                user.address = update.address;
                await user.save();
                let allUsers = await db.User.findAll();
                resolve(allUsers);
            } else {
                resolve();
            }
        } catch (e) {
            reject(e);
        }
    })
}

let deleteUserById = (id) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {id: id}
            })
            if(user){
                await user.destroy();
            }
            resolve();
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
    updateUserData: updateUserData,
    deleteUserById: deleteUserById,
}