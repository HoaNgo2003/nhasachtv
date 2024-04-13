const jwt = require("jsonwebtoken")
const SECRET_KEY = "GJDgjsdgasgwgdgwdbdjfeufw"
const taoToken = (userId)=>{
    // console.log(userId)
    const token = jwt.sign({userId}, SECRET_KEY,{expiresIn:"48h"})
    return token;
}
const getUserIdTuToken = (token)=>{
    // console.log(token)
    const decodeToken = jwt.verify(token, SECRET_KEY);
    // console.log(decodeToken)
    // console.log(decodeToken['userId'])
    return decodeToken.userId
}
module.exports = {taoToken, getUserIdTuToken}