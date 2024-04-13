const jwtProvider = require("../config/jwtProvider.js");
const userService = require("../services/user.services.js")
const authenticate = async(req, res, next)=>{
    try {
        const token = req.headers.authorization?.split(" ")[1];
        // console.log(req.headers.authorization)
        if(!token){
            return res.status(404).send({error:"token not found..."})
        }
        const userId= jwtProvider.getUserIdTuToken(token);
         
        const user= await userService.findUserById(userId);
        req.user = user;
        // console.log(req.user);
       
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
    next()
}
module.exports = authenticate;