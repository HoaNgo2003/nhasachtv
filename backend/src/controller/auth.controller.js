const userService = require("../services/user.services.js")
const jwtProvider = require("../config/jwtProvider.js")
const bcrypt = require("bcrypt")
const cartService = require("../services/cart.services.js")
const register = async(req, res)=>{
    try {
        // console.log(req.body)
        const user = await userService.createUser(req.body);
        const jwt = jwtProvider.taoToken(user._id);
        await cartService.createCart(user);
        return res.status(200).send({jwt, message:"register sucess"})
    } catch (error) {
        return res.status(500).send({error: error.message})
        
    }
}
const login = async(req, res)=>{
    const {email, password} = req.body;
    try {
        const user = await userService.findUserByEmail(email);
        // console.log(user)
        // console.log(jwt)
        if(!user){
            return res.status(404).send({message:"User not found"}, email)
        }
        // console.log(password, user.password)
        const isPassword = await bcrypt.compare(password, user.password);
        if(!isPassword){
            return res.status(401).send({message:"Mat Khau sai"})
        }
        // console.log(user)
        const jwt = jwtProvider.taoToken(user._id);
        // console.log(jwt)
        return res.status(200).send({jwt, message:"login success"})

    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}
module.exports = {register, login}