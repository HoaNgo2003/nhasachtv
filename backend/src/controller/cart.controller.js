const cartService = require("../services/cart.services.js");

const findUserCart = async(req, res)=>{
    const user = await req.user;
    try {
        const cart = await cartService.findUserCart(user.id);
        return res.status(200).send(cart)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}
const addCartItem = async(req, res)=>{
    // console.log(req.user)
    const user = await req.user;
    try {
        const cartItem = await cartService.addCartItem(user._id, req.body);
        return res.status(200).send(cartItem)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

module.exports = {
    findUserCart,
    addCartItem
}