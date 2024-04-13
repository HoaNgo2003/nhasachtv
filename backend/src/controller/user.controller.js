const User = require("../models/user.model")
const userService = require("../services/user.services.js")
const getUserProfile = async(req, res)=>{
    try {
        const jwt = req.headers.authorization?.split(" ")[1]
        // console.log(jwt)
        if(!jwt){
            return res.status(404).send({error:"token not found"})
        }
        const user = await userService.getUserInfoByToken(jwt)
        // console.log(user)
        return res.status(200).send(user);
    } 
    catch (error) {
        // console.log(error)
        return res.status(500).send({error:error.message})
    }
}
const getAllUser = async(req, res)=>{
    try {
        const users = await userService.getAllUser()
        
        return res.status(200).send(users)
    } catch (error) {
        return res.status(500).send({error:"user not found"})
    }
}
module.exports = {
    getAllUser,getUserProfile
}