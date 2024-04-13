const mongoose =require("mongoose")

const { Schema } = mongoose;
const cartItemSchema = new  Schema({
    cart:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "cart",
        require: true,
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"products",
        require: true,
    },
    quanity:{
        type:Number,
        require: true,
        default: 1
    },
    price:{
        type:Number,
        require: true,
    },
    discount:{
        type:Number,
        require: true,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        require: true,
    }
})
const CartItem = mongoose.model("cartItems", cartItemSchema);
module.exports = CartItem