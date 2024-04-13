const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jwtProvider = require("../config/jwtProvider.js")
const createUser = async (userData) => {
    try {
        let { firstName, lastName, email, password } = userData;
        const isUserExist = await User.findOne({ email });
        if (isUserExist) {
            throw new Error("Email da ton tai");

        }
        password = await bcrypt.hash(password, 8);
        const user = await User.create({ firstName, lastName, email, password });
        // console.log("create user", user);
        return user
    } catch (error) {
        throw new Error(error.message);
    }
}
const findUserById = async (userId) => {
    try {
        const user = await User.findById(userId).populate("address");
        
        if (!user) {
            throw new Error("user not found");
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}
const findUserByEmail = async (userEmail) => {
    try {

        const user = await User.findOne({email:userEmail}).populate("address");
        //  console.log(user)
        if (!user) {
            throw new Error(" not found");
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}
const getUserInfoByToken = async (token) => {
    try {
        const userId = jwtProvider.getUserIdTuToken(token);
        // console.log(userId)
        const user = await findUserById(userId)
        
        // console.log9
        if (!user) {
            throw new Error(" not found");
        } 
        // console.log(userId)
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}
const getAllUser = async () => {
    try {
        const users = User.find()
        
        if (!users) {
            throw new Error("user not found")
        }
        return users
    } catch (error) {
        throw new Error(error.message);
    }
}
module.exports = { getAllUser, getUserInfoByToken, createUser, findUserById, findUserByEmail }