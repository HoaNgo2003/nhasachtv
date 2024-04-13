const cartItemService = require("../services/cartItems.services.js");
const updateCartItem = async(req, res)=>{
    const user= req.user;
    try {
        const updateCartItems = await cartItemService.updateCartItem(user._id, req.params.id, req.body);
        return res.status(200).send(updateCartItems);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}
const removeCartItem = async(req, res)=>{
    // console.log(req)
    const user= req.user;
    try {
        // console.log(req.user)
        await cartItemService.removeCartItem(user._id, req.params.id)
        return res.status(200).send({message:"Cart Item remove success"});
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}
module.exports = {
    updateCartItem,
    removeCartItem
}