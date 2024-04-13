const CartItem = require("../models/cartItem.model.js");
const userService = require("../services/user.services.js");
async function updateCartItem(userId, cartItemId, cartItemData){
    try {
        const item = await findCartItemById(cartItemId);
        if(!item){
            throw new Error("cart item not found");
        }
        // console.log(item)
        const user = await userService.findUserById(userId);
        // console.log(user)
        if(!user){
            throw new  Error("user not found");
        }
        
        // console.log(cartItemData.quanity)
        if(user._id.toString() === userId.toString()){
            item.quanity = cartItemData.quanity;
            item.price = item.quanity*item.product.price;
            item.discount = item.quanity*item.product.discount;
            // console.log(item);
            const updateCartItem = await item.save();
            // console.log(updateCartItem);
            return updateCartItem;
        }else{
            throw new Error("You can't update this cartItem")
        }
    } catch (error) {
        throw new Error(error.message);
    }
}
async function removeCartItem(userId, cartItemId){
    const cartItem = await findCartItemById(cartItemId);
    const user = await userService.findUserById(userId);
    if(user._id.toString()===cartItem.userId.toString()){
      return await CartItem.findByIdAndDelete(cartItemId) 
    }
     
        throw new Error("Khong the xoa gio hang");
    
    
}
async function findCartItemById(cartItemId){
    const cartItem = await CartItem.findById(cartItemId).populate("product");
    if(cartItem){
        return cartItem;
    }else{
        throw new Error("cartitem not found");
    }
}
module.exports = {
    findCartItemById, removeCartItem, updateCartItem
}