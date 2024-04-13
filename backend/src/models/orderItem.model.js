const mongoose =require("mongoose")

const { Schema } = mongoose;
const orderItemSchema = new  Schema({
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        require: true
    },
    size:{
        type: String,
    },
    quanity:{
        type:Number,
        require: true
    },
    price:{
        type:Number,
        require: true,
    },
    discount:{
        type:Number,
        require: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
        require: true
    },
    deliveryDate:{
        type: Date
    }

})
const OrderItem = mongoose.model("orderItem", orderItemSchema);
module.exports = OrderItem;