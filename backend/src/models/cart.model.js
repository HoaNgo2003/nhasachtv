const mongoose =require("mongoose")

const { Schema } = mongoose;
const cartSchema = new  Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
        require: true
    },
    cartItem:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"cartItems",
        require: true
    }],
    total: {
        type: Number,
        require: true,
        default: 0
    },
    totalItem:{
        type: Number,
        require: true,
        default: 0
    },
    discount:{
        type: Number,
        require: true,
        default: 0
    }
})
const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;